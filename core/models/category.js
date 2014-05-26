/*jslint node: true */
module.exports = function () {
    'use strict';
    
    this.table = 'category';
    var when = require('when'),
        redis = require('../lib/redis.js');
    
    this.getAll = function () {
        var self = this,
            deferred = when.defer();
        redis.get('category', function (err, data) {
            if (!err && data) {
                data = JSON.parse(data);
                return deferred.resolve(data);
            }
            self.select({}, {
                "orderby" : ['sort', 'ASC']
            }, function (err, data) {
                if (err) {
                    return deferred.reject(err);
                }
                redis.set('category', JSON.stringify(data), 120);
                deferred.resolve(data);
            });
        });
        return deferred.promise;
    };
};