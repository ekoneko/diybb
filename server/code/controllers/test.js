'use strict';

module.exports.test = async ctx => {
  ctx.body = 'test';
  // or ctx.body = await somethingAsync();
}

module.exports.auth = async ctx => {
  ctx.body = ctx.state.user;
}
