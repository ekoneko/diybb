/*jslint node: true */
module.exports = function() {
    'use strict';

    this.table = 'post';
    var when = require('when'),
        filter;


    filter = function (data) {
        var _ = require('underscore'),
            fn = require('../lib/function.js');

        _.each(data, function (item) {
            if (item && item.created) {
                item.created = fn.smartDate(+new Date(item.created));
            }
        });
    };

    this.list = function (where, options) {
        var deferred = when.defer();
        this.select(where, options, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            filter(data);
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