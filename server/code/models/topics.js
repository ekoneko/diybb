const Sequelize = require('sequelize');

module.exports = {
  name: 'topics',
  attributes: {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    channelId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userName: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    lastCommentUser: {
      type: Sequelize.STRING(80),
      allowNull: true,
      defaultValue: '',
    },
    lastCommentTime: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
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
      defaultValue: false,
    },
    title: {
      type: Sequelize.STRING(80),
      allowNull: false,
      defaultValue: '',
    },
  },
  options: {
    indexes: [
      {
        unique: false,
        fields: ['userId', 'lastCommentTime']
      }, {
        unique: false,
        fields: ['channelId', 'lastCommentTime'],
      }, {
        unique: false,
        fields: ['lastCommentTime'],
      }
    ]
  }
};

