/**
 * model
 */
/*jslint node: true */
/*jslint nomen: true */
(function () {
    'use strict';
    var fs = require('fs'),
        path = require('path'),
        mysql = require('mysql'),
        _ = require('underscore'),
        __models = [],
        __db = require('./db.js').getInstance(),
        ModelPrototype = function () {
            this.__super = this;
            /**
             * 表名
             * @type {String}
             */
            this.table = '';
            /**
             * 字段
             * @type {Array}
             */
            this.fields = [];
            /**
             * select
             *
             * @param {plain} where
             * @param {plain} options
             *  {
             *      columns
             *      limit
             *      offset
             *      orderby
             *  }
             * @param callback(err, data)
             */
            this.select = function (where, options, callback) {
                var sql, data, limit, offset;
                where = where || {};
                options = options || {};
                this._checkField(where);
                if (options.columns) {
                    options.columns.map(function (field) {
                        return mysql.format('??', field);
                    });
                    sql = 'SELECT ' + options.columns.join(',') ;
                } else {
                    sql = 'SELECT *';
                }
                sql += ' FROM ?? WHERE ' + this._where(where);
                data = [this.getTable()];

                if (options.orderby) {
                    sql += ' ORDER BY ?? ' + options.orderby[1];
                    data.push(options.orderby[0]);
                }
                limit = options.limit || 500;
                limit = Math.min(limit, 500);
                offset = options.offset || 0;
                sql += ' LIMIT ?, ?';
                data.push(offset, limit);
                __db.query(sql, data, callback);
            };
            /**
             * insert
             *
             * @param {plain} data
             * @param {function} callback(err, ret)
             */
            this.insert = function (data, callback) {
                this._checkField(data);
                __db.query('INSERT INTO ?? SET ?', [this.getTable(), data], callback);

            };
            /**
             * update
             *
             * @param {plain} where
             * @param {plain} data
             * @param {plain} options
             *  {
             *      limit
             *      orderby
             *  }
             * @param {function} callback(err)
             */
            this.update = function (where, data, options, callback) {
                var sql, limit;
                where = where || {};
                options = options || {};
                this._checkField(data);
                this._checkField(where);
                sql = 'UPDATE ?? SET ? WHERE ' + this._where(where);
                data = [this.getTable(), data];
                if (options.orderby) {
                    sql += ' ORDER BY ?? ' + options.orderby[1];
                    data.push(options.orderby[0]);
                }
                limit = options.limit || 500;
                limit = Math.min(limit, 500);
                sql += ' LIMIT ?';
                data.push(limit);
                __db.query(sql, data, callback);

            };
            /**
             * delete
             *
             * @param {plain} where
             * @param {plain} options
             *  {
             *      limit
             *      orderby
             *  }
             * @param {function} callback(err)
             */
            this['delete'] = function (where, options, callback) {
                var sql, data, limit;
                where = where || {};
                options = options || {};
                this._checkField(where);
                sql = 'DELETE FROM ?? WHERE ' + this._where(where);
                data = [this.getTable()];
                if (options.orderby) {
                    sql += ' ORDER BY ?? ' + options.orderby[1];
                    data.push(options.orderby[0]);
                }
                limit = options.limit || 500;
                limit = Math.min(limit, 500);
                sql += ' LIMIT ?';
                data.push(limit);
                __db.query(sql, data, callback);
            };
            /**
             * raw query
             * @param  {string} sql
             * @param  {array} data
             * @param  {function} callback
             */
            this.query = function (sql, data, callback) {
                __db.query(sql, data, callback);
            };
            /**
             * get full table name
             * @return prefix + table name
             */
            this.getTable = function () {
                return __db.config.prefix + this.table;
            };
            /**
             * valid field
             */
            this._checkField = function (data) {
                var f, k;
                for (f, k = Object.keys(data); k.length; true) {
                    f = k.pop();
                    if (typeof this.fields[f] === 'undefined') {
                        delete data[f];
                    }
                }
            };
            /**
             * generate where string
             * @param  {plain} where
             * @return {string}
             */
            this._where = function (where) {
                var whereString = '1';
                _.each(where, function (item, key) {
                    // TODO: 依据修饰符判断 and / or
                    var connector = ' AND ';
                    if (typeof item === 'object') {
                        whereString += mysql.format(connector + '?? IN (?)', [key, item]);
                    } else if (typeof item === 'string') {
                        whereString += mysql.format(connector + '?? = ?', [key, item]);
                    }
                });
                return whereString;
            };
        };

    this.load = function (name) {
        var filePath, Model;
        if (!__models[name]) {
            filePath = path.join(__dirname, '..', 'models', name + '.js');
            Model = require(filePath);
            Model.prototype = new ModelPrototype();
            __models[name] = new Model();
            __models[name].fields = require('./db.js').getStruct(__models[name].table);
        }
        return __models[name];
    };
}.call(this));