const Sequelize = require('sequelize');

module.exports = {
  name: 'comments',
  attributes: {
    topicId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userName: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT('medium'),
      allowNull: false,
    },
  },
  options: {
    indexes: [
      {
        unique: false,
        fields: ['topicId']
      }, {
        unique: false,
        fields: ['userId']
      }
    ]
  }
};

