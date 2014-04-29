/**
 * controller
 */
/*jslint node: true */
/*jslint nomen: true */

(function () {
    'use strict';
    var fs = require('fs'),
        path = require('path'),
        controllers = [],
        Prototype = function (req, res, next) {
            this.__super = this;
            this.req = req;
            this.res = res;
            this.next = next;
            /**
             * execAction
             * @param {String} action
             */
            this.execAction = function (action) {
                if (!action || typeof this[action] !== 'function') {
                    action = 'index';
                }
                if (this[action]) {
                    this[action].call(this);
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