/*jslint node: true */
module.exports = function () {
    'use strict';

    this.get = {
        account : function () {
            var model = require('../lib/model.js'),
                id = this.req.params.id >>> 0,
                self = this;
            if (!id) {
                return self.next();
            }
            model.load('user').get(id).then(function (data) {
                if (data) {
                    self.res.send(data);
                } else {
                    self.res.send('user not exists');
                }
            }).otherwise(function (err) {
                self.next();
            });
        },
        register : function () {

        },
        login : function () {
            this.res.send('login');
        }
    };

    this.post = {
        login : function () {
            //
        },
        register : function () {
            //
        },
        edit : function () {
            //
        }
    };
};