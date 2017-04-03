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
      field: 'from_user',
      allowNull: false,
    },
    toUser: {
      type: Sequelize.INTEGER,
      field: 'to_user',
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
        fields: ['from_user']
      }, {
        unique: false,
        fields: ['to_user', 'state']
      },
    ],
  }
};

