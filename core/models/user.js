/*jslint node: true */
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
};