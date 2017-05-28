'use strict';

const crypto = require('crypto');
const client = require('redis').createClient();

const defaultOptions = {
  schema: '',
  expireSecond: 86400
};

/**
 * generate a session id
 * @return {string}
 */
function generateSid() {
  return crypto.createHash('md5')
      .update(new Date().getTime()+'_*$')
      .digest('hex') +
    crypto.randomBytes(8)
      .toString('base64')
      .replace(/\+/g, '0')
      .replace(/\//g, '0');
}

class SessionManager {
  constructor(options) {
    this.options = Object.assign({}, defaultOptions, options);
  }
  /**
   * set a new session
   * @param data
   * @return Promise
   */
  set(data) {
    const sid = generateSid();
    const key = this.options.schema + sid;
    const dataString = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      client.set(key, dataString, err => {
        err ? reject(err) : resolve(sid);
      });
      client.expire(key, this.options.expireSecond);
    });
  }

  /**
   * get a session by sid
   * @param sid
   */
  get(sid) {
    const key = this.options.schema + sid;
    return new Promise((resolve, reject) => {
      client.get(key, (err, data) => {
        err ? reject(err) : resolve(JSON.parse(data));
      });
    });
  }

  /**
   * remove a session by sid
   * @param sid
   */
  rm(sid) {
    const key = this.options.schema + sid;
    return new Promise((resolve, reject) => {
      client.del(key, (err, data) => {
        err ? reject(err) : resolve(JSON.parse(data));
      });
    });
  }
}

module.exports = SessionManager;
