'use strict';
const Router = require('koa-router');
const router = new Router();

const auth = require('./services/auth')
const AuthLevel = require('./constants/authLevel')

module.exports = function () {
  const test = require('./controllers/test')
  router.get('/test', test.test)
  router.get('/test/auth', auth(AuthLevel.USER), test.auth)

  const user = require('./controllers/user')
  router.post('/user', user.create)
  router.post('/login', user.login)
  router.post('/logout', user.logout)
  router.get('/user', user.account)
  router.put('/password', auth(AuthLevel.USER), user.updatePassword)

  const post = require('./controllers/post')
  router.get('/posts', post.list)
  router.get('/post/:id', post.getDetail)
  router.post('/post', auth(AuthLevel.USER), post.create)
  router.del('/post/:id', auth(AuthLevel.USER), post.remove)
  router.put('/post/:id', auth(AuthLevel.USER), post.edit)
  router.patch('/post/:id', auth(AuthLevel.USER), post.patch)

  const comment = require('./controllers/comment')
  router.post('/post/:postId/comment', auth(AuthLevel.USER), comment.create)
  router.put('/post/:postId/comment/:commentId', auth(AuthLevel.USER), comment.edit)
  router.del('/post/:postId/comment/:commentId', auth(AuthLevel.USER), comment.remove)
  router.get('/post/:postId/comments', comment.list)

  const channel = require('./controllers/channel')
  router.get('/channel/recommend', channel.recommend)
  router.get('/channels', channel.list)
  router.get('/channel/:id', channel.detail)

  const system = require('./controllers/system')
  router.get('/system', system.get)

  return router.routes()
};

module.exports.allowedMethods = function() {
  return router.allowedMethods()
};

