const Sequelize = require('sequelize');

module.exports = {
  name: 'messages',
  attributes: {
    title: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    fromUser: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    toUser: {
      type: Sequelize.INTEGER,
    },
    state: {
      type: Sequelize.ENUM('new','read'),
      allowNull: false,
      defaultValue: 'new',
    }
  },
  options: {
    indexes: [
      {
        unique: false,
        fields: ['fromUser']
      }, {
        unique: false,
        fields: ['toUser', 'state']
      },
    ],
  }
};

