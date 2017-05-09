const crypto = require('crypto');
const parse = require('co-body');
const DB = require('../services/db');
const userModel = DB.getInstance().model('users');
const ErrorCode = require('../constants/errorcode');
const {verifyRequiredFields, getParamUnmatchedError} = require('../services/utils');
const Session = require('../services/session');

const requiredFields = ['name', 'email', 'password'];
const writableFields = ['name', 'email', 'password', 'salt'];

const sessionManager = new Session({
  schema: process.env.SESSION_SCHEMA,
  expireSecond: process.env.SESSION_EXPIRE_SECOND
});

module.exports.create = async ctx => {
  const data = await parse(ctx);
  if (!verifyRequiredFields(data, requiredFields)) {
    ctx.body = getParamUnmatchedError();
    return
  }
  data.salt = generateSalt();
  data.password = encryptPassword(data.password, data.salt);

  try {
    await userModel.create(data, {
      fields: writableFields,
    })
    ctx.status = 201;
    ctx.body = {}
  } catch (err) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(err)
  }
}

module.exports.login = async ctx => {
  const data = await parse(ctx);
  if (!verifyRequiredFields(data, ['name', 'password'])) {
    ctx.body = getParamUnmatchedError();
    return
  }
  const searchParam = isEmail(data.name) ? {email: data.name} : {name: data.name};

  try {
    const row = await userModel.findOne(searchParam)
    if (!row) {
      ctx.body = {
        err_no: ErrorCode.USER_NOT_EXISTS_ERROR,
        err_message: 'user not exists'
      }
      return
    }
    const password = encryptPassword(data.password, row.get('salt'));
    if (row.get('password') !== password) {
      ctx.body = {
        err_no: ErrorCode.PASSWORD_ERROR,
        err_message: 'password not match'
      }
      return
    }
    const result = {
      id: row.get('id'),
      name: row.get('name'),
      email: row.get('email'),
      role: row.get('admin'),
    }
    const sessionId = await sessionManager.set(result);
    ctx.cookies.set('SESSIONID', sessionId, {
      maxAge: +process.env.SESSION_EXPIRE_SECOND * 1000
    });
    ctx.body = result;
  } catch (err) {
    ctx.status = 500;
    ctx.body = DB.getErrorMessage(err)
  }
}

module.exports.logout = async ctx => {
  //
}

module.exports.getDetail = async ctx => {
  //
}

function md5(string) {
  return crypto.createHash('md5').update(string).digest('hex');
}

function generateSalt() {
  return Math.random().toString(36).slice(-6);
}

function encryptPassword(rawPassword, salt) {
  return md5(rawPassword + salt);
}

function isEmail(name) {
  return !!name.indexOf('@');
}
