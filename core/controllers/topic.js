/*jslint node: true */
module.exports = function () {
    'use strict';

    var self = this,
        model = require('../lib/model.js');

    this.get = {
        index : function () {
            var id = this.req.params.id >>> 0,
                commonConfig = require('../../configs/common.json'),
                post;

            model.load('topic').get(id).then(function (_post) {
                post = _post;
                if (!post) {
                    return self.res.render('forum/error.hbs', {
                        message: 'Content not exist or no permission'
                    });
                }
                return model.load('channel').get(post.channel_id);
            }).then(function (channel) {
                if (!channel) {
                    return self.res.render('forum/error.hbs', {
                        message: 'Channel not exist or no permission'
                    });
                }
                self.res.render('forum/topic.hbs', {
                    siteurl: commonConfig.siteurl,
                    sitename: commonConfig.sitename,
                    channel: channel,
                    post: post
                });
            }).otherwise(function (err) {
                console.error(err);
                return self.res.render('forum/error.hbs', {
                    message: err
                });
            });
        },
        add : function () {
            var commonConfig = require('../../configs/common.json'),
                channelId = self.req.params.channel >>> 0;

            model.load('user').get(self.req.signedCookies.user).then(function (_user) {
                if (!_user) {
                    return self.res.redirect('/user/login');
                }
                return model.load('channel').get(channelId);
            }).then(function (channel) {
                if (!channel) {
                    return self.res.render('forum/error.hbs', {
                        message: 'Channel not exist or no permission'
                    });
                }
                self.res.render('forum/topic-add.hbs', {
                    siteurl: commonConfig.siteurl,
                    sitename: commonConfig.sitename,
                    channel: channel
                });
            }).otherwise(function (err) {
                console.error(err);
                return self.res.render('forum/error.hbs', {
                    message: err
                });
            });
        },
        edit : function () {
            return self.res.render('forum/error.hbs', {
                message: 'Come soon'
            });
        }
    };

    this.post = {
        add : function () {
            var topicId,
                user;

            if (!self.req.body.channel_id || !self.req.body.title || !self.req.body.content) {
                self.res.send({
                    state: false,
                    error: 'Message is not intact'
                });
            }
            model.load('user').get(self.req.signedCookies.user).then(function (_user) {
                if (!_user) {
                    return self.res.redirect('/user/login');
                }
                user = _user;
                return model.load('topic').add({
                    channel_id : self.req.body.channel_id,
                    title : self.req.body.title,
                    user_id : user.id,
                    user_name : user.name
                });
            }).then(function (topic) {
                topicId = topic.insertId;
                return model.load('post').add({
                    topic_id : topicId,
                    first : 1,
                    user_id : user.id,
                    user_name : user.name,
                    content : self.req.body.content
                });
            }).then(function () {
                self.res.send({
                    state : true,
                    id: topicId
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state : false,
                    error : err
                });
            });

        }
    };
};