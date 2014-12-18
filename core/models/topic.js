/*jslint node: true */
module.exports = function() {
    'use strict';

    this.table = 'topic';
     var when = require('when'),
        filter;

     filter = function (data) {
        var _ = require('underscore'),
            fn = require('../lib/function.js');

        _.each(data, function (item) {
            if (item.created) {
                item.created = fn.smartDate(+new Date(item.created));
            }
            if (item.lastpost_time) {
                item.lastpost_time = fn.smartDate(+new Date(item.lastpost_time));
            }
            if (item.lastpost_user) {
                item.lastpost_user = JSON.parse(item.lastpost_user);
            } else {
                item.lastpost_user = {
                    id: item.user_id,
                    name: item.user_name
                };
            }
        });
    };

    this.get = function (id) {
        var deferred = when.defer(),
            data;
        if (!id) {
            process.nextTick(function () {
                return deferred.resolve(null);
            });
        }
        this.select({
            id: id
        }, {
            limit: 1
        }, function (err, _data) {
            if (err) {
                return deferred.reject(err);
            }
            data = _data;
            filter(data);
            if (!(data = data[0])) {
                return deferred.resolve(null);
            }
            require('../lib/model.js').load('post').list({
                topic_id: id,
                first: 1
            }, {
                limit: 1
            }).then(function (post) {
                if (post && post[0]) {
                    data.postId = post[0].id;
                    data.content = post[0].content;
                } else {
                    data.content = require('i18n').__('Content forbidden');
                }
                deferred.resolve(data);
            }).otherwise(function (err) {
                deferred.reject(err);
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
            filter(data);
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.count = function (where) {
        var deferred = when.defer();
        this.select(where, {
            columns: ['count(*)'],
            limit: 1
        }, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(data[0]['count(*)']);
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

    this.edit = function (where, data, options) {
        var deferred = when.defer();
        this.update(where, data, options, function (err) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve();
        });
        return deferred.promise;
    };

    this.remove = function (where, options) {
        var deferred = when.defer();
        this['delete'](where, options || {}, function (err) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve();
        });
        return deferred.promise;
    }
};