const Sequelize = require('sequelize');

module.exports = {
  name: 'users',
  attributes: {
    name: {
      type: Sequelize.STRING(80),
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: '',
      unique: true,
    },
    password: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING(6),
      allowNull: false,
      defaultValue: '',
    },
    admin: {
      type: Sequelize.STRING(6),
      allowNull: true,
      defaultValue: 0,
    },
  },
  options: {}
};

