/*jslint node: true */
module.exports = function () {
    'use strict';

    this.table = 'channel';
    var when = require('when'),
        redis = require('../lib/redis.js');

    this.getAll = function () {
        var self = this,
            deferred = when.defer();
        redis.get('channel', function (err, data) {
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
                redis.set('channel', JSON.stringify(data));
                deferred.resolve(data);
            });
        });
        return deferred.promise;
    };

    this.get = function (id) {
        var deferred = when.defer();
        if (!id) {
            process.nextTick(function () {
                deferred.resolve(null);
            });
        }
        this.getAll().then(function (channels) {
            var i;
            for (i in channels) {
                if (channels[i].id === id) {
                    return deferred.resolve(channels[i]);
                }
            }
            return deferred.resolve(null);
        }).otherwise(function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    this.getFormatList = function () {
        var _ = require('underscore'),
            deferred = when.defer();
        when.all([
            require('../lib/model').load('category').getAll(),
            this.getAll()
        ]).then(function (param) {
            var categorys = param[0],
                channels = param[1],
                categorysIndex = {};
            _.each(categorys, function (item, i) {
                categorysIndex[item.id] = i;
                item.channels = [];
            });
            _.each(channels, function (item) {
                categorys[categorysIndex[item.category_id]].channels.push(item);
            });
            deferred.resolve(categorys);
        }).otherwise(function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };
};