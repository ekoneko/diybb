/*jslint node: true */
/*jslint nomen: true */

/**
 * controller
 */

(function () {
    'use strict';
    var fs = require('fs'),
        path = require('path'),
        _ = require('underscore'),
        commonConfig = require(path.join(__dirname, '../../configs/common.json')),
        controllers = [],
        Prototype = function (req, res, next) {
            var aliasRender,
                i18n = require('i18n');

            this.__super = this;
            this.req = req;
            this.res = res;
            this.next = next;

            aliasRender = this.res.render;
            this.res.__ = i18n.__;
            this.res.render = function (url, params) {
                params = params || {};
                _.extend(params, {
                    site: {
                        url: commonConfig.siteurl,
                        name: commonConfig.sitename
                    }
                });
                return aliasRender.call(this, url, params);
            };

            /**
             * execAction
             * @param {String} action
             */
            this.execAction = function (action, method) {
                if (!action || typeof this[method][action] !== 'function') {
                    action = 'index';
                }
                if (this[method][action]) {
                    this[method][action].call(this);
                } else {
                    next();
                }
            };
        };
    this.load = function (name, req, res, next) {
        var filePath, controller;
        if (!controllers[name]) {
            filePath = path.join(__dirname, '..', 'controllers', name + '.js');
            if (!fs.existsSync(filePath)) {
                return false;
            }
            controller = require(filePath);
            controllers[name] = controller;
        }
        controllers[name].prototype = new Prototype(req, res, next);
        return new controllers[name]();
    };
}.call(this));