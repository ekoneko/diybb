'use strict';
require('dotenv').config();
const DB = require('../code/services/db');
DB.createInstance({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT
});
DB.getInstance().sequelize.sync();
