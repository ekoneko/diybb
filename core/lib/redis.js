/**
 * redis
 */
/*jslint node: true */
/*jslint nomen: true */
(function () {
    'use strict';
    var redis = require('redis'),
        __client,
        __prefix;

    this.init = function (config, callback) {
        __client = redis.createClient(config.port, config.host, config.options);
        __prefix = config.prefix;
        process.nextTick(function () {
            callback();
        });
    };

    this.getInstance = function () {
        return __client;
    };

    this.getPrefix = function () {
        return __prefix;
    };

    this.set = function (key, value, expires, callback) {
        var ret;
        ret = __client.set(__prefix + key, value, callback);
        if (ret && expires) {
            __client.expire(__prefix + key, expires);
        }
        return ret;
    };

    this.get = function (key, callback) {
        return __client.get(__prefix + key, callback);
    };

    this.remove = function (key) {
        return __client.del(__prefix + key);
    }
}.call(this));
