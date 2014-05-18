/*jslint node: true */
module.exports = function () {
    'use strict';

    this.table = 'message';

    var filter;

    filter = function (data, callback) {
        var _ = require('underscore'),
            fn = require('../lib/function.js'),
            users = [];

        if (typeof data !== 'object' || _.size(data) === 0) {
            return callback([]);
        }
        _.each(data, function (item) {
            if (item.created) {
                item.created = fn.smartDate(+new Date(item.created));
            }
            if (item.from_user) {
                users.push(item.from_user);
            }
        });
        if (users.length) {
            require('../lib/model.js').load('user').getIn(users).then(function (users) {
                _.each(data, function (item) {
                    var user = users[item.from_user];
                    if (user && user.id) {
                        item.from_user = {
                            id: user.id,
                            name: user.name
                        };
                    }
                });
                callback(data);
            }).otherwise(function () {
                callback(data);
            });
        } else {
            callback(data);
        }
    };

    this.modify = function(where, data, options) {
        var deferred = require('when').defer();
        if (data.content) {
            data.content = require('node-xss').clean(data.content);
        }
        this.update(where, data, options, function (err) {
            if (err) {
                deferred.reject(err);
            }
            deferred.resolve(); 
        });
        return deferred.promise;
    };

    this.list = function (where, options) {
        var deferred = require('when').defer();

        this.select(where, options, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            filter(data, function (data) {
                deferred.resolve(data);
            });
        });
        return deferred.promise;
    };

    this.count = function (where) {
        var deferred = require('when').defer();

        this.select(where, {
            columns: ['count(*)']
        }, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(data[0]['count(*)']);
        });
        return deferred.promise;
    };

    this.add = function (data) {
        var deferred = require('when').defer(),
            xss = require('node-xss').clean;
        this.content = xss(this.content || '');
        this.insert(data, function (err, ret) {
            if (err) {
                deferred.reject(err);
            }
            deferred.resolve();
        });
        return deferred.promise;
    };

    this.remove = function (where, options) {
        var deferred = require('when').defer();;
        this['delete'](where, options, function (err) {
            if (err) {
                deferred.reject(err);
            }
            deferred.resolve();
        });
        return deferred.promise;
    };
};