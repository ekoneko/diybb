'use strict';
const Router = require('koa-router');
const router = new Router();

module.exports = function () {
  const test = require('./controllers/test');
  router.get('/test', test.test)

  const user = require('./controllers/user');
  router.post('/user', user.create)
  router.post('/login', user.login)

  const post = require('./controllers/post')
  router.get('/posts', post.list)
  router.get('/post/:id', post.getDetail)
  router.post('/post', post.create)
  router.del('/post/:id', post.remove)
  router.put('/post/:id', post.edit)
  router.patch('/post/:id', post.patch)

  const comment = require('./controllers/comment')
  router.post('/post/:postId/comment', comment.create)
  router.put('/post/:postId/comment/:commentId', comment.edit)
  router.del('/post/:postId/comment/:commentId', comment.remove)
  router.get('/post/:postId/comments', comment.list)

  const channel = require('./controllers/channel')
  router.get('/channel/recommend', channel.recommend)
  router.get('/channels', channel.list)

  return router.routes()
};

module.exports.allowedMethods = function() {
  return router.allowedMethods();
};

