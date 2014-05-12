/*jslint node: true */
module.exports = function() {
    'use strict';

    this.table = 'post';
    var when = require('when');

    this.get = function (id) {
        var deferred = when.defer();
        this.select({
            id: id
        }, {
            limit: 1
        }, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            if (!(data = data[0])) {
                return deferred.resolve(null);
            }
            if (data && typeof data.created === 'number') {
                data.created = require('../lib/function.js').smartDate(data.created);
            }
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.add = function (data) {
        var xss = require('node-xss').clean,
            deferred = when.defer();
        data.content = xss(data.content || '');
        this.insert(data, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(data);
        });
        return deferred.promise;
    };
};