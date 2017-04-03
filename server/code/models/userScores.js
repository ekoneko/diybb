const Sequelize = require('sequelize');

module.exports = {
  name: 'userScores',
  attributes: {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      field: 'user_id',
    },
    score0: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'score_0',
    },
  },
  options: {}
};

