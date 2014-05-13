/*jslint node: true */
module.exports = function() {
    'use strict';

    this.table = 'topic';
     var when = require('when');

    this.get = function (id) {
        var deferred = when.defer();
        if (!id) {
            process.nextTick(function () {
                return deferred.resolve(null);
            });
        }
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
            require('../lib/model.js').load('post').select({
                topic_id: id,
                first: 1
            }, {
                limit: 1
            }, function (err, post) {
                if (err || !post || !post[0]) {
                    data.content = '';
                } else {
                    data.content = post[0].content;
                }
                deferred.resolve(data);
            });
        });
        return deferred.promise;
    };

    this.list = function (where, options) {
        var deferred = when.defer(),
            _ = require('underscore'),
            fn = require('../lib/function.js');
        this.select(where, options, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            _.each(data, function (item) {
                item.created = fn.smartDate(+new Date(item.created));
                item.lastpost_time = fn.smartDate(+new Date(item.lastpost_time));
            });
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.add = function (data) {
        var deferred = when.defer();
        this.insert(data, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(data);
        });
        return deferred.promise;
    };
};