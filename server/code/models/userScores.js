const Sequelize = require('sequelize');

module.exports = {
  name: 'userScores',
  attributes: {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    score0: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  options: {}
};

