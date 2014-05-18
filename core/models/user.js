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
                    redis.set('user:' + id, JSON.stringify(data));
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
    }
};