const Sequelize = require('sequelize');

module.exports = {
  name: 'posts',
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
    userName: {
      type: Sequelize.STRING(80),
      allowNull: false,
      field: 'user_name',
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
        fields: ['user_id']
      }
    ]
  }
};

