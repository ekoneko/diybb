/*jslint node: true */
module.exports = function () {
    'use strict';

    var self = this,
        model = require('../lib/model.js'),
        size = 10;

    this.get = {
        index: function () {
            var when = require('when'),
                id = self.req.params.id >>> 0,
                userId = self.req.signedCookies.user >>> 0,
                where, options,
                user, data;
            if (!id) {
                return self.next();
            }
            if (!userId) {
                self.res.render('forum/error.hbs', {
                    message: 'Account expired, log in and try again'
                });
            }
            where = {
                id: id
            };
            options = {
                limit: 1
            };
            when.all([
                model.load('user').get(userId),
                model.load('message').list(where, options),
                model.load('message').modify(where, {state: "read"}, options)
            ]).then(function (result) {
                user = result[0];
                data = result[1];
                if (!data || !data.length || data[0].to_user !== userId) {
                    throw('Message not exist or no permission');
                }
                data = data[0];
                self.res.render('forum/message-content.hbs', {
                    user: user,
                    message: data
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    user: user,
                    message: typeof err === 'string' ? err : 'Message not exis or no permission'
                });
            });
        },
        "new": function () {
            model.load('user').get(self.req.signedCookies.user).then(function (user) {
                var where, options;
                if (!user) {
                    throw('Account expired, log in and try again');
                }
                where = {
                    to_user: user.id,
                    state: 'new'
                };
                options = {
                    columns: ['id', 'title'],
                    limit: 5,
                    orderby: ['created', 'DESC']
                };
                return require('when').all([
                    model.load('message').list(where, options),
                    model.load('message').count(where)
                ]);
            }).then(function (result) {
                var data = result[0],
                    total = result[1];
                if (!data || data.length === 0) {
                    self.res.send({
                        state: true,
                        total: 0,
                        data: []
                    });
                }
                self.res.send({
                    state: true,
                    total: total,
                    data: data
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state: false,
                    total: 0,
                    data: []
                });
            });
        },
        all: function () {
            var user;
            model.load('user').get(self.req.signedCookies.user).then(function (_user) {
                if (!_user) {
                    throw('Account expired, log in and try again');
                }
                user = _user;
                return model.load('message').count({
                    to_user: user.id
                });
            }).then(function (total) {
                self.res.render('forum/message-list.hbs', {
                    user: user,
                    size: size,
                    total: total
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    user: user,
                    message: typeof err === 'string' ? err : 'Server error, try again'
                });
            });
        },
        list: function () {
            var page = self.req.query.page >>> 0,
                data;
            page = page || 1;
            model.load('user').get(self.req.signedCookies.user).then(function (user) {
                if (!user) {
                    throw('Account expired, log in and try again');
                }
                return model.load('message').list({
                    to_user: user.id
                }, {
                    columns: ['id', 'title', 'from_user', 'created'],
                    limit: size,
                    offset: size * (page - 1),
                    orderby: ['created', 'DESC']
                });
            }).then(function (_data) {
                data = _data;

            }).then(function () {
                self.res.send({
                    'state': true,
                    'data': data
                });
            }).otherwise(function (err) {
                self.res.send({
                    'state': false,
                    'data': []
                });
            });
        },
        add: function () {
            var user;
            model.load('user').get(self.req.signedCookies.user).then(function (_user) {
                if (!_user) {
                    throw('Account expired, log in and try again');
                }
                user = _user;
                self.res.render('forum/message-post.hbs', {
                    user: user
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    user: user,
                    message: typeof err === 'string' ? err : 'Server error, try again'
                });
            });
        }
    };

    this.post = {
        read: function () {
            var userId = self.req.signedCookies.user;
            if (!userId) {
                return self.res.send({
                    state: false,
                    error: self.res.__('Account expired, log in and try again')
                });
            }
            model.load('message').update({
                to_user: userId
            }, {
                state: 'read'
            }, {}, function (err) {
                console.error(err);
                self.res.send({
                    state: !err
                });
            });
        },
        write: function () {
            var userId = self.req.signedCookies.user,
                toUser = self.req.body.to_user,
                title = self.req.body.title,
                content = self.req.body.content;
            if (!userId) {
                return self.res.send({
                    state: false,
                    error: self.res.__('Account expired, log in and try again')
                });
            }
            if (!toUser || !title || !content) {
                return self.res.send({
                    state: false,
                    error: self.res.__('Message is not intact')
                });
            }
            model.load('user').get(toUser).then(function (user) {
                if (!user) {
                    throw('Goal not exist');
                }
                toUser = user.id;
                model.load('message').add({
                    title: title,
                    content: content,
                    from_user: userId,
                    to_user: toUser
                });
                self.res.send({
                    state: true
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state: false,
                    error: (typeof err === 'string') ? err : self.res.__('Unknown error')
                });
            });
        },
        rm: function () {
            var id = self.req.body.id >>> 0;
            if (!id) {
                self.res.send({
                    state: false,
                    error: self.res.__('Message not exis or no permission')
                });
            }
            if (!self.req.signedCookies.user) {
                self.res.send({
                    state: false,
                    error: self.res.__('Account expired, log in and try again')
                });
            }
            model.load('message').remove({
                id: id,
                to_user: self.req.signedCookies.user
            }, {
                limit: 1
            }).then(function () {
                self.res.send({
                    state: true
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state: false,
                    error: (typeof err === 'string') ? err : self.res.__('Unknown error')
                });
            });
        }
    };
};