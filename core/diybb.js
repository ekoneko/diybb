/*jslint node: true */
/*jslint nomen: true */
/*jslint regexp: true */
module.exports = function (callback) {
    'use strict';
    
    var path = require('path'),
        express = require('express'),
        when = require('when'),
        fs = require('fs'),
        i18n = require('i18n'),
        _ = require('underscore'),
        app = express(),
        controller = require('./lib/controller.js'),
        initConfig = function () {
            var deferred = when.defer(),
                i18nConfig = require('../configs/i18n.json');
            i18nConfig.directory = path.join(__dirname, '..', i18nConfig.directory);
            i18n.configure(i18nConfig);
            fs.readFile(path.join(__dirname, '../configs/bower.json'), function(err, data) {
                if (err) {
                    return deferred.reject(err);
                }
                data = "window.diybb =" + data;
                fs.writeFile(path.join(__dirname, '..', 'public/javascripts/config.js'), data, function (err) {
                    if (err) {
                        return deferred.reject(err);
                    }
                    deferred.resolve();
                });
            });
            return deferred.promise;
        },

        initDb = function () {
            var db = require('./lib/db.js'),
                deferred = when.defer();
            db.init(require('../configs/db.json'), function (err) {
                if (err) {
                    return deferred.reject(err);
                }
                deferred.resolve();
            });
            return deferred.promise;
        },

        initTable = function () {
            var db = require('./lib/db.js'),
                deferred = when.defer();
            db.analyzeTables(function (err) {
                if (err) {
                    return deferred.reject(err);
                }
                deferred.resolve();
            });
            return deferred.promise;
        },

        initRedis = function () {
            var redis = require('./lib/redis'),
                deferred = when.defer();
            redis.init(require('../configs/redis.json'), function () {
                redis.getInstance().keys(redis.getPrefix()+'*', function (err, keys) {
                    _.each(keys, function (key) {
                        redis.remove(key.replace(redis.getPrefix(), ''));
                    });
                });
                deferred.resolve();
            });
            return deferred.promise;
        },

        initExpress = function () {
            var deferred = when.defer();
            app.set('env', process.env.NODE_ENV);
            app.use(express.favicon('../public/images/favicon.ico'));
            app.use(express.logger('dev'));
            app.use(express.bodyParser());
            app.use(express.cookieParser(require('../configs/common.json').secret));
            app.use(express.methodOverride());
            app.use(express.limit('2mb'));
            app.use(require('connect-assets')({
                src: ["../public/javascripts"]
            }));
            app.use(app.router);
            app.use(i18n.init);
            app.use(express["static"]('./public'));
            process.nextTick(deferred.resolve);
            return deferred.promise;
        },

        initTemplate = function () {
            var template = require('./lib/template.js'),
                deferred = when.defer();
            
            template.init(app, i18n);
            process.nextTick(deferred.resolve);
            return deferred.promise;
        },

        initRouter = function () {
            var setRoute, deferred,
                router = require('../configs/router.json');
            setRoute = function (method, key, value) {
                app[method](key, function (req, res, next) {
                    var params = value.split('/'),
                        c = controller.load(params[0], req, res, next);
                    if (!c) {
                        return next();
                    }
                    if (params[1] !== '*') {
                        return c.execAction(params[1], method);
                    }
                    c.execAction(req.params[0] || 'index', method);
                });
            };
            deferred = when.defer();
            _.each(['get', 'post'], function (method) {
                _.map(router[method], function (value, key) {
                    setRoute(method, key, value);
                });
            });
            app.all('/', function (req, res) {
                res.send(404);
            });
            process.nextTick(deferred.resolve);
            return deferred.promise;
        };

    initConfig()
        .then(initDb)
        .then(initTable)
        .then(initRedis)
        .then(initExpress)
        .then(initRouter)
        .then(initTemplate)
        .then(function () {
            callback(app);
        })
        .otherwise(function (err) {
            console.error(err);
        });
};