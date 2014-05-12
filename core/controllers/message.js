/*jslint node: true */
module.exports = function () {
    'use strict';

    var model = require('../lib/model.js');

    this.get = {
        index : function () {
            // for message content
        },
        "new" : function () {
            var self = this;
            model.load('user').get(self.req.signedCookies.user).then(function (user) {
                if (!user) {
                    return self.res.redirect('/user/login');
                }
                return model.load('message').list({
                    to_user: user.id,
                    state: 'new'
                }, {
                    limit: 5,
                    orderby: ['created', 'DESC']
                });
            }).then(function (data) {
                self.res.send(data);
            }).otherwise(function (err) {
                console.error(err);
                self.next();
            });
        }
    };

    this.post = {
        write : function () {
            this.res.send('write message');
        }
    };
};