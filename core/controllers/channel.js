/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';

    var self = this,
        model = require('../lib/model.js');
    
    this.get = {
        index : function () {
            var when = require('when'),
                id = this.req.params.id >>> 0,
                page = (this.req.params.page >>> 0) || 1,
                size = 10,
                user,
                where = {
                    channel_id: id
                }, options = {
                    limit: size,
                    offset: size * (page - 1),
                    orderby: ['created', 'DESC']
                };
            
            when.all([
                model.load('user').get(self.req.signedCookies.user),
                model.load('channel').get(id),
                model.load('topic').list(where, options),
                model.load('topic').count(where)
            ]).then(function (result) {
                var channel = result[1],
                    topics = result[2],
                    total = result[3];
                user = result[0];

                self.res.render('forum/channel.hbs', {
                    user: user,
                    topics: topics,
                    channel: channel,
                    page: page,
                    total: total,
                    size: size
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