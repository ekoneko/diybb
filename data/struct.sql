/*
 Date: 07/09/2014 13:54:19 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `bcolor` char(7) NOT NULL DEFAULT '#86a8e6',
  `sort` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sort` (`sort`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
delimiter ;;
CREATE TRIGGER `channel_category_del` AFTER DELETE ON `category` FOR EACH ROW UPDATE `channel` SET `category_id` = 0 WHERE `category_id` = OLD.id;
 ;;
delimiter ;

-- ----------------------------
--  Table structure for `channel`
-- ----------------------------
DROP TABLE IF EXISTS `channel`;
CREATE TABLE `channel` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `category_id` int(10) unsigned NOT NULL DEFAULT '0',
  `count` int(10) unsigned NOT NULL DEFAULT '0',
  `bcolor` char(7) NOT NULL DEFAULT '#86a8e6',
  `sort` int(10) unsigned NOT NULL,
  `lastpost` varchar(500) NOT NULL DEFAULT '{}',
  `lastpost_user` varchar(110) NOT NULL DEFAULT '{}',
  `lastpost_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`),
  KEY `cate` (`category_id`),
  KEY `sort` (`sort`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
delimiter ;;
CREATE TRIGGER `delete` AFTER DELETE ON `channel` FOR EACH ROW DELETE FROM `channel-admin` WHERE `channel_admin`.channel_id = OLD.id;
 ;;
delimiter ;

-- ----------------------------
--  Table structure for `channel_admin`
-- ----------------------------
DROP TABLE IF EXISTS `channel_admin`;
CREATE TABLE `channel_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `channel_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
delimiter ;;
CREATE TRIGGER `set admin` AFTER INSERT ON `channel_admin` FOR EACH ROW UPDATE `user` SET
  `admin` = 1
WHERE id = NEW.user_id LIMIT 1;
 ;;
delimiter ;
delimiter ;;
CREATE TRIGGER `unset admin` AFTER DELETE ON `channel_admin` FOR EACH ROW UPDATE `user` SET
  `admin` = (SELECT 1 FROM  `channel_admin` WHERE `channel-admin`.`user_id` = OLD.user_id LIMIT 1)
WHERE id = OLD.user_id LIMIT 1;
 ;;
delimiter ;

-- ----------------------------
--  Table structure for `message`
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL DEFAULT 'none title',
  `content` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `from_user` int(10) unsigned NOT NULL,
  `to_user` int(10) unsigned NOT NULL,
  `state` enum('new','read') NOT NULL DEFAULT 'new',
  PRIMARY KEY (`id`),
  KEY `to_user` (`created`,`to_user`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `post`
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `topic_id` int(11) unsigned NOT NULL,
  `first` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `user_id` int(10) unsigned NOT NULL,
  `user_name` varchar(80) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` text,
  PRIMARY KEY (`id`),
  KEY `topicid` (`topic_id`),
  KEY `user` (`user_id`),
  KEY `first` (`topic_id`,`first`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
delimiter ;;
CREATE TRIGGER `topic_count_inc` AFTER INSERT ON `post` FOR EACH ROW UPDATE `topic` SET
  `count` = `count` + 1,
  `lastpost_user` = CONCAT('{"id": ', NEW.user_id , ', "name":"', NEW.user_name, '"}'),
  `lastpost_time` = NEW.created
WHERE id = NEW.topic_id AND NEW.`first` = 0 LIMIT 1;
 ;;
delimiter ;
delimiter ;;
CREATE TRIGGER `topic_count_sub` AFTER DELETE ON `post` FOR EACH ROW UPDATE `topic` SET `count` = `count` - 1 WHERE id = OLD.topic_id LIMIT 1;
 ;;
delimiter ;

-- ----------------------------
--  Table structure for `topic`
-- ----------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `user_name` varchar(80) NOT NULL,
  `channel_id` int(10) unsigned NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastpost_user` varchar(110) NOT NULL DEFAULT '',
  `lastpost_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` enum('enable','disable') NOT NULL DEFAULT 'enable',
  `count` int(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userid` (`user_id`),
  KEY `channelid` (`channel_id`),
  KEY `lastpost` (`lastpost_time`),
  KEY `created` (`created`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
delimiter ;;
CREATE TRIGGER `topic_add` AFTER INSERT ON `topic` FOR EACH ROW UPDATE `channel` SET
  `count` = `count` + 1,
  `lastpost` = CONCAT('{"id": ', NEW.id , ', "title":"', NEW.title, '"}'),
  `lastpost_user` = CONCAT('{"id": ', NEW.user_id , ', "name":"', NEW.user_name, '"}'),
  `lastpost_time` = NEW.created
WHERE id = NEW.channel_id LIMIT 1;
 ;;
delimiter ;
delimiter ;;
CREATE TRIGGER `topic_delete` AFTER DELETE ON `topic` FOR EACH ROW BEGIN
  DELETE FROM `post` WHERE `topic_id` = OLD.id;
  UPDATE `channel` SET `count` = `count` - 1 WHERE id = OLD.channel_id LIMIT 1;
END;
 ;;
delimiter ;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` char(32) NOT NULL,
  `salt` char(6) NOT NULL DEFAULT '',
  `admin` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
delimiter ;;
CREATE TRIGGER `add` AFTER INSERT ON `user` FOR EACH ROW insert into `user_score` (`user_id`) VALUES (NEW.id);
 ;;
delimiter ;

-- ----------------------------
--  Table structure for `user_score`
-- ----------------------------
DROP TABLE IF EXISTS `user_score`;
CREATE TABLE `user_score` (
  `user_id` int(10) unsigned NOT NULL,
  `score0` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

