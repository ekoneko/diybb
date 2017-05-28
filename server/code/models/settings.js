const Sequelize = require('sequelize');

module.exports = {
  name: 'settings',
  attributes: {
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  options: {}
};
