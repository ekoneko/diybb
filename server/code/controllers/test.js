'use strict';

module.exports.test = async ctx => {
  ctx.body = 'test';
  // or ctx.body = await somethingAsync();
}
