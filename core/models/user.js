/*jslint node: true */
/*jslint nomen: true */
module.exports = function() {
    'use strict';
    
    this.table = 'user';

    var when = require('when'),
        redis = require('../lib/redis.js');

    this.get = function (id) {
        var self = this,
            deferred = when.defer();
        if (!id) {
            deferred.resolve(null);
        } else {
            redis.get('user:' + id, function (err, data) {
                if (!err && data) {
                    return deferred.resolve(JSON.parse(data));
                }
                self.select({
                    id : id
                }, {
                    limit: 1
                }, function (err, data) {
                    if (err) {
                        return deferred.reject(err);
                    }
                    data = data[0];
                    redis.set('user:' + id, JSON.stringify(data), 60);
                    deferred.resolve(data);
                });
            });
        }
        return deferred.promise;
    };

    this.getIn = function (ids) {
        var self = this,
            _ = require('underscore'),
            deferreds = [],
            deferred = when.defer();
        ids = _.uniq(ids);
        _.each(ids, function (id) {
            deferreds.push(self.get(id));
        });
        when.all(deferreds).then(function (result) {
            var data = {};
            _.each(ids, function (id, i) {
                data[id] = result[i];
            });
            deferred.resolve(data);
        }).otherwise(function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    this.list = function (where, options) {
        var self = this,
            deferred = when.defer();
        this.select(where, options, function (err, data) {
            if (err) {
                deferred.reject(err);
            }
            return deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.login = function (username, password) {
        var self = this,
            deferred = when.defer(),
            where = {};

        if (username.indexOf('@') !== -1) {
            where.email = username;
        } else {
            where.name = username;
        }
        self.list(where, {
            limit: 1
        }).then(function (data) {
            if (!data || data.length === 0) {
                return deferred.resolve();
            }
            if (require('MD5')(password + data[0].salt) === data[0].password) {
                return deferred.resolve(data[0]);
            } else {
                return deferred.resolve();
            }
        }).otherwise(function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    this.add = function (data) {
        var self = this,
            deferred = when.defer();
        data.salt = Math.random().toString(36).substr(2,6);
        data.password = require('MD5')(data.password + data.salt);
        self.insert(data, function (err, result) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(result);
        });
        return deferred.promise;
    };

    this.edit = function (where, data, options) {
        var self = this,
            deferred = when.defer();
        if (data.password) {
            data.salt = Math.random().toString(36).substr(2,6);
            data.password = require('MD5')(data.password + data.salt);
        }
        self.update(where, data, options, function (err) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve();
        });
        return deferred.promise;
    }
};