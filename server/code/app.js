'use strict';
require('dotenv').config();
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const Koa = require('koa');
const path = require('path');
const app = module.exports = new Koa();
const DB = require('./services/db');

// init db on start
DB.createInstance({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT
});

const router = require('./router');

// Logger
app.use(logger());

app.use(router());
app.use(router.allowedMethods());

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`listening on port ${port}`);
}

