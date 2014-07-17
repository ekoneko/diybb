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
                    channel_id: id,
                    state: 'enable'
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
                    total = result[3],
                    channelspassword;
                user = result[0];

                if (channel.password) {
                    try {
                        channelspassword = JSON.parse(self.req.cookies.channelspassword);
                        if (!channelspassword[channel.id] || channelspassword[channel.id] !== channel.password) {
                            throw 'need verfify';
                        }
                    } catch (e) {
                        return self.res.render('forum/channel-verfify.hbs', {
                            user: user,
                            channel: channel
                        });
                    }
                }

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

    this.post = {
        verfify: function () {
            var channelId = this.req.body.channelId >>> 0,
                password = this.req.body.password;
            if (!channelId || !password) {
                return self.res.send({
                    state: false
                });
            }
            model.load('channel').get(channelId).then(function (channel) {
                var channelspassword, result = false;
                if (channel.password === password) {
                    channelspassword = self.req.cookies.channelspassword || '{}';
                    channelspassword = JSON.parse(channelspassword);
                    channelspassword[channelId.toString()] = password;
                    self.res.cookie('channelspassword', JSON.stringify(channelspassword), {
                        expires: new Date(Date.now() + 86400)
                    });
                    result = true;
                }
                return self.res.send({
                    state: result
                });
            }).otherwise(function (err) {
                console.error(err);
                return self.res.send({
                    state: false
                });
            });
        }
    };
};