const Sequelize = require('sequelize');

module.exports = {
  name: 'topics',
  attributes: {
    topicId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      field: 'topic_id',
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    channelId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'channel_id',
    },
    userName: {
      type: Sequelize.STRING(80),
      allowNull: false,
      field: 'user_name',
    },
    lastPostUser: {
      type: Sequelize.STRING(80),
      allowNull: false,
      field: 'last_post_user',
    },
    lastPostTime: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      field: 'last_post_time',
    },
    state: {
      type: Sequelize.ENUM('enable', 'disable'),
      defaultValue: 'enable',
    },
    count: {
      type: Sequelize.INTEGER(5),
      allowNull: false,
      defaultValue: 0,
    },
    isTop: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  options: {
    indexes: [
      {
        unique: false,
        fields: ['user_id', 'last_post_time']
      }, {
        unique: false,
        fields: ['channel_id', 'last_post_time'],
      }, {
        unique: false,
        fields: ['last_post_time'],
      }
    ]
  }
};

