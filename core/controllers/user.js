/*jslint node: true */
module.exports = function () {
    'use strict';

    var self = this;

    this.get = {
        account: function () {
            var model = require('../lib/model.js'),
                id = this.req.params.id >>> 0;
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
        register: function () {

        },
        login: function () {
            this.res.send('login');
        },
        avatar: function () {
            var userId = self.req.params.id >>> 0,
                path = require('path'),
                imageUrl,
                defaultUrl = path.join(__dirname, '../../public/images/avatar.png');

            if (!userId) {
                return self.res.sendfile(defaultUrl);
            }
            imageUrl = path.join(__dirname, '../../public/images/avatar', userId.toString());
            self.res.sendfile(imageUrl, function (err) {
                self.res.sendfile(defaultUrl);
            });
        }
    };

    this.post = {
        login: function () {
            //
        },
        register: function () {
            //
        },
        edit: function () {
            //
        }
    };
};