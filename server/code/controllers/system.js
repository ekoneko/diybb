const parse = require('co-body');
const queryParse = require('query-string').parse;
const DB = require('../services/db');
const settingsModel = DB.getInstance().model('settings');

const ErrorCode = require('../constants/errorcode');

module.exports.get = async ctx => {
  const {names} = queryParse(ctx.request.querystring, {arrayFormat: 'bracket'});
  try {
    const values = await settingsModel.findAll({
      where: {name: names},
    })
    if (!values) {
      ctx.status = 404
      ctx.body = {
        err_no: ErrorCode.NOT_FOUND,
        err_message: 'post not found'
      }
      return
    }
    const result = {}
    values.forEach(value => {
      result[value.name] = value.value || ''
    })
    ctx.body = result
  } catch (e) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(e)
  }
}


