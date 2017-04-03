'use strict';
const Router = require('koa-router');
const router = new Router();

module.exports = function () {
  const test = require('./controllers/test');
  router.get('/test', test.test);

  // more controllers...

  return router.routes()
};

module.exports.allowedMethods = function() {
  return router.allowedMethods();
};

