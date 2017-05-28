const Sequelize = require('sequelize');

module.exports = {
  name: 'channels',
  attributes: {
    name: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
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
    lastCommentTime: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    state: {
      type: Sequelize.ENUM('enable', 'disable'),
      allowNull: false,
      defaultValue: 'enable',
    }
  },
  options: {}
};

