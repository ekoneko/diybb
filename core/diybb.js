/*jslint node: true */
/*jslint nomen: true */
/*jslint regexp: true */
module.exports = function (callback) {
    'use strict';
    
    var path = require('path'),
        fs = require('fs'),
        md5 = require('MD5'),
        hbs = require('express-hbs'),
        express = require('express'),
        when = require('when'),
        i18n = require('i18n'),
        _ = require('underscore'),
        app = express(),
        controller = require('./lib/controller.js'),
        initConfig = function () {
            var deferred = when.defer(),
                i18nConfig = require('../configs/i18n.json');
            i18nConfig.directory = path.join(__dirname, '..', i18nConfig.directory);
            i18n.configure(i18nConfig);

            process.nextTick(deferred.resolve);
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
                deferred.resolve();
            });
            return deferred.promise;
        },

        initExpress = function () {
            var deferred = when.defer();
            app.set('env', process.env.NODE_ENV);
            app.use(express.favicon());
            app.use(express.logger('dev'));
            app.use(express.bodyParser());
            app.use(express.cookieParser('secret'));
            app.use(express.methodOverride());
            app.use(require('connect-assets')({
                src: ["../public/javascripts"]
            }));
            app.use(app.router);
            app.use(i18n.init);
            process.nextTick(deferred.resolve);
            return deferred.promise;
        },

        initTemplate = function () {
            var deferred = when.defer();
            require('child_process').exec('rm -Rf ./public/javascripts/cache/*');
            app.engine('hbs', hbs.express3({
                partialsDir: __dirname + '/views',
                contentHelperName: 'content',
                i18n: i18n
            }));
            app.set('view engine', 'hbs');
            app.set('views', __dirname + '/views');
            app.use(express["static"]('./public'));

            // hbs helper
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

            hbs.registerAsyncHelper('script', function (block, callback) {
                var version,
                    src,
                    tags = block.fn(),
                    cacheName,
                    data = '';
                if ('product' !== process.env.NODE_ENV) {
                    return tags;
                }
                tags = tags.replace(/<!--(.*?)-->/g, '');
                cacheName = '/javascripts/cache/' + md5(tags) + '.js';
                fs.exists(path.join(__dirname, '..', 'public', cacheName), function (exists) {
                    version = require('../configs/common.json').version;
                    if (!exists) {
                        _.each(tags.match(/<script[^>]*\ssrc="[^"]+"/g), function (tag) {
                            src = tag.match(/\ssrc="(.+)"/)[1];
                            data += fs.readFileSync(path.join(__dirname, '../public', src));
                            data += ';';
                        });
                        fs.writeFile(path.join(__dirname, '../public', cacheName), data, function () {
                            callback('<script src="' + cacheName + '?' + version + '"></script>');
                        });
                    } else {
                        callback('<script src="' + cacheName + '?' + version + '"></script>');
                    }
                });
            });
            
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
                        return c.execAction(params[1]);
                    }
                    c.execAction(req.params.action || 'index');
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
            console.log('Error: ' + err);
        });
};