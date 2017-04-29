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

  ctx.body = await userModel.create(data, {
    fields: writableFields,
  }).then(() => {
    ctx.status = 201;
    return {}
  }).catch(err => {
    ctx.status = 500;
    return DB.getErrorMessage(err)
  });
}

module.exports.login = async ctx => {
  const data = await parse(ctx);
  if (!verifyRequiredFields(data, ['name', 'password'])) {
    ctx.body = getParamUnmatchedError();
    return
  }
  const searchParam = isEmail(data.name) ? {email: data.name} : {name: data.name};
  ctx.body = await userModel.findOne(searchParam)
    .then(row => {
      if (!row) {
        return {
          err_no: ErrorCode.USER_NOT_EXISTS_ERROR,
          err_message: 'user not exists'
        }
      }
      const password = encryptPassword(data.password, row.get('salt'));
      if (row.get('password') !== password) {
        return {
          err_no: ErrorCode.PASSWORD_ERROR,
          err_message: 'password not match'
        }
      }
      return sessionManager.set({
        id: row.get('id'),
        name: row.get('name'),
        email: row.get('email'),
        role: row.get('role'),
      });
    })
    .then(res => {
      if (typeof res === 'object') {
        return res;
      }
      ctx.cookies.set('SESSIONID', res, {
        maxAge: +process.env.SESSION_EXPIRE_SECOND * 1000
      });
      return {state: true};
    })
    .catch(err => {
      console.log(err)
      ctx.status = 500;
      return DB.getErrorMessage(err)
    })
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
