/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';
    
    var self = this;

    /* get */
    this.get = {
        index : function () {
            var _ = require('underscore'),
                when = require('when'),
                model = require('../lib/model.js'),
                user;

            when.all([
                model.load('user').get(self.req.signedCookies.user),
                model.load('channel').getFormatList()
            ]).then(function (result) {
                var channels = result[1];
                user = result[0];
                self.res.render('forum/index.hbs', {
                    user: user,
                    channels: channels
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    user: user,
                    message: (typeof err === 'string') ? err : 'Server error, try again'
                });
            });
        }
    };
};