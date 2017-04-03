const Sequelize = require('sequelize');

module.exports = {
  name: 'channels',
  attributes: {
    name: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true,
    },
    count: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0,
    },
    bcolor: {
      type: Sequelize.STRING(7),
      allowNull: false,
      defaultValue: '#86a8e6',
    },
    sort: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
    },
    lastpostTime: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'lastpost_time',
    },
    state: {
      type: Sequelize.ENUM('enable', 'disable'),
      allowNull: false,
      defaultValue: 'enable',
    }
  },
  options: {}
};

