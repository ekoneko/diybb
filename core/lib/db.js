/**
 * db
 */
/*jslint node: true */
/*jslint nomen: true */
(function () {
    'use strict';
    var mysql = require('mysql'),
        when = require('when'),
        _ = require('underscore'),
        __db,
        __config,
        __struct;

    /**
     * init database
     * @param  {Object}   config
     * @param  {Function} callback
     */
    this.init = function (config, callback) {
        __config = config;
        if (__db) {
            return callback();
        }
        __db = mysql.createConnection(__config);
        __db.connect(function (err) {
            if (!err) {
                __db.config.prefix = __config.prefix;
            }
            callback(err);
        });
    };

    /**
     * get instance
     * @return db connection
     */
    this.getInstance = function () {
        return __db;
    };

    /**
     * get database struct
     * @param {string} table name
     * @return  struct
     */
    this.getStruct = function (name) {
        return __struct[__config.prefix + name] || false;
    };

    /**
     * analyze tables
     * @param  {Function} callback
     */
    this.analyzeTables = function (callback) {
        var deferred = when.defer(), deferreds = [];

        __struct = {};
        __db.query('show tables', function (err, tables) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(tables);
        });
        deferred.promise.then(function (tables) {
            _.each(tables, function (table) {
                var d = when.defer();
                table = _.values(table)[0];
                __struct[table] = {};
                __db.query('show columns from ' + table, function (err, fields) {
                    if (err) {
                        return d.reject(err);
                    }
                    _.each(fields, function (item) {
                        __struct[table][item.Field] = item;
                    });
                    d.resolve();
                });
                deferreds.push(d.promise);
            });
            when.all(deferreds).then(function () {
                callback();
            }).otherwise(callback);
        }).otherwise(callback);
    };

}.call(this));