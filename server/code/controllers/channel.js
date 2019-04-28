const queryParse = require('query-string').parse;
const DB = require('../services/db');
const channelsModel = DB.getInstance().model('channels');
const ErrorCode = require('../constants/errorcode');

const SimpleAttr = ['id', 'name'];
const DetailAttr = ['id', 'name', 'description'];

module.exports.detail = async ctx => {
  const id = ctx.params.id
  try {
    ctx.body = await channelsModel.findOne({
      where: {id: id, state: 'enable'},
      attributes: DetailAttr,
    })
  } catch (e) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.recommend = async ctx => {
  let {limit} = queryParse(ctx.request.querystring);
  limit = +limit || 5
  limit = Math.min(50, limit)
  try {
    const list = await channelsModel.findAll({
      where: {state: 'enable'},
      order: [['lastCommentTime', 'desc']],
      attributes: SimpleAttr,
      limit,
    })
    ctx.set('X-limit', limit)
    ctx.body = list
  } catch (e) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}

module.exports.list = async ctx => {
  let {offset, limit} = queryParse(ctx.request.querystring);
  offset = +offset || 0
  limit = +limit || 10
  limit = Math.min(50, limit)

  try {
    const {count, rows} = await channelsModel.findAndCountAll({
      where: {state: 'enable'},
      order: [['sort', 'desc'], ['id', 'desc']],
      attributes: SimpleAttr,
      offset,
      limit,
    })
    ctx.set('X-total', count);
    ctx.set('X-offset', offset);
    ctx.set('X-limit', limit);
    ctx.body = rows
  } catch (e) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}
