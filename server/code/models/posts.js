const Sequelize = require('sequelize');

module.exports = {
  name: 'posts',
  attributes: {
    topicId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    content: {
      type: Sequelize.TEXT('medium'),
      allowNull: false,
    },
  },
  options: {}
};

