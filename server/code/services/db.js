'use strict';

const Sequelize = require('sequelize');
const requireDir = require('require-dir');
const ErrorCode = require('../constants/errorcode');
const models = requireDir('../models');

class DB {
  /**
   * create a global db instance
   * @param options
   */
  static createInstance(options) {
    this.instance = new this(options);
    Object.keys(models).forEach(key => {
      if (!models.hasOwnProperty(key)) {
        return;
      }
      this.instance.define(models[key].name, models[key].attributes, models[key].options);
    });
  }

  /**
   * get db instance
   * @return {DB}
   */
  static getInstance() {
    return this.instance;
  }
  constructor(options) {
    this.sequelize = new Sequelize(options.database, options.username, options.password, {
      host: options.host,
      dialect: options.dialect,
    });
  }

  /**
   * get error message to display to user
   * @param err
   * @return {Object}  {err_no, err_message}
   */
  static getErrorMessage(err) {
    if (err instanceof Sequelize.ValidationError) {
      return {
        err_no: ErrorCode.DATABASE_VALIDATION_ERROR,
        err_message: err.message
      }
    } else if (err instanceof Sequelize.UniqueConstraintError) {
      return {
        err_no: ErrorCode.DATABASE_UNIQUE_ERROR,
        err_message: err.message
      }
    } else if (err instanceof Sequelize.TimeoutError) {
      return {
        err_no: ErrorCode.DATABASE_TIMEOUT_ERROR,
        err_message: 'timeout'
      }
    } else if (err instanceof Sequelize.Error) {
      return {
        err_no: ErrorCode.DATABASE_SERVER_ERROR,
        err_message: 'system error'
      }
    } else {
      throw err
    }
  }

  /**
   * define a model
   * @param name
   * @param attributes
   * @param options
   * @return sequelize model
   */
  define(name, attributes, options = {}) {
    return this.sequelize.define(name, attributes, options);
  }

  /**
   * get a model
   * @param name
   * @return sequelize model
   */
  model(name) {
    return this.sequelize.model(name);
  }

  /**
   * create a transaction
   * @param func
   * @return {Promise}
   */
  transaction(func) {
    return this.sequelize.transaction(t => func(t))
  }
}

module.exports = DB;
