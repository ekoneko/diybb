/*jslint node: true */
/*jslint nomen: true */
module.exports = function (callback) {
    'use strict';
    
    var path = require('path'),
        hbs = require('express-hbs'),
        express = require('express'),
        when = require('when'),
        _ = require('underscore'),
        app = express(),
        controller = require('./lib/controller.js'),
        initConfig = function () {
            var deferred = when.defer();
            app.config = {
                db: require('../configs/db.json'),
                redis: require('../configs/redis.json'),
                common: require('../configs/common.json'),
                router: require('../configs/router.json')
            };
            process.nextTick(deferred.resolve);
            return deferred.promise;
        },

        initDb = function () {
            var db = require('./lib/db.js'),
                deferred = when.defer();
            db.init(app.config.db, function (err) {
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
            redis.init(app.config.redis, function () {
                deferred.resolve();
            });
            return deferred.promise;
        },

        initExpress = function () {
            var deferred = when.defer();
            app.set('env', process.env.NODE_ENV);
            app.use(express.favicon());
            app.use(express.logger());
            app.use(express.bodyParser());
            app.use(express.cookieParser('secret'));
            app.use(express.methodOverride());
            app.use(require('connect-assets')({
                src: ["../public/javascripts"]
            }));
            app.use(app.router);
            process.nextTick(deferred.resolve);
            return deferred.promise;
        },

        initTemplate = function () {
            var deferred = when.defer();
            app.engine('hbs', hbs.express3({
                partialsDir: __dirname + '/views',
                contentHelperName: 'content'
            }));
            app.set('view engine', 'hbs');
            app.set('views', __dirname + '/views');
            app.use(express["static"]('./public'));

            hbs.registerHelper('braces', function (string) {
                return '{{' + string + '}}';
            });

            hbs.registerHelper('for', function (from, to, incr, block) {
                var accum = '', i;
                for (i = from; i < to; i += incr) {
                    accum += block.fn(i);
                }
                return accum;
            });
            process.nextTick(deferred.resolve);
            return deferred.promise;
        },

        initRouter = function () {
            var setRoute, deferred;
            setRoute = function (method, key, value) {
                app[method](key, function (req, res, next) {
                    var params = value.split('/'),
                        c = controller.load(params[0], req, res, next);
                    if (!c) {
                        return next();
                    }
                    if (params[1] !== '*') {
                        return c.execAction(params[1]);
                    }
                    c.execAction(req.params.action || 'index');
                });
            };
            deferred = when.defer();
            _.each(['get', 'post'], function (method) {
                _.map(app.config.router[method], function (value, key) {
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
        .then(initTemplate)
        .then(initExpress)
        .then(initRouter)
        .then(function () {
            callback(app);
        })
        .otherwise(function (err) {
            console.log('Error: ' + err);
        });
};