/*jslint node: true */
module.exports = function () {
    'use strict';

    var self = this,
        model = require('../lib/model.js');

    this.get = {
        index : function () {
            var id = this.req.params.id >>> 0,
                when = require('when'),
                user,
                post;

            when.all([
                model.load('user').get(self.req.signedCookies.user),
                model.load('topic').get(id)
            ]).then(function (result) {
                user = result[0];
                post = result[1];
                if (!post) {
                    throw('Content not exist or no permission');
                }
                return model.load('channel').get(post.channel_id);
            }).then(function (channel) {
                if (!channel) {
                    throw('Channel not exist or no permission');
                }
                self.res.render('forum/topic.hbs', {
                    channel: channel,
                    post: post,
                    user: user
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    user: user,
                    message: (typeof err === 'string') ? err : 'Server error, try again'
                });
            });
        },
        add : function () {
            var channelId = self.req.params.channel >>> 0,
                user;

            model.load('user').get(self.req.signedCookies.user).then(function (_user) {
                if (!_user) {
                    return self.res.redirect('/user/login');
                }
                user = _user;
                return model.load('channel').get(channelId);
            }).then(function (channel) {
                if (!channel) {
                    throw('Channel not exist or no permission');
                }
                self.res.render('forum/topic-add.hbs', {
                    user: user,
                    channel: channel
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    user: user,
                    message: (typeof err === 'string') ? err : 'Server error, try again'
                });
            });
        },
        edit : function () {
            model.load('user').get(self.req.signedCookies.user).then(function (user) {
                return self.res.render('forum/error.hbs', {
                    user: user,
                    message: 'Come soon'
                });
            });
        }
    };

    this.post = {
        add : function () {
            var topicId,
                user;

            if (!self.req.body.channel_id || !self.req.body.title || !self.req.body.content) {
                self.res.send({
                    state: false,
                    error: 'Message is not intact'
                });
            }
            model.load('user').get(self.req.signedCookies.user).then(function (_user) {
                if (!_user) {
                    return self.res.redirect('/user/login');
                }
                user = _user;
                return model.load('topic').add({
                    channel_id : self.req.body.channel_id,
                    title : self.req.body.title,
                    user_id : user.id,
                    user_name : user.name
                });
            }).then(function (topic) {
                topicId = topic.insertId;
                return model.load('post').add({
                    topic_id : topicId,
                    first : 1,
                    user_id : user.id,
                    user_name : user.name,
                    content : self.req.body.content
                });
            }).then(function () {
                self.res.send({
                    state : true,
                    id: topicId
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state : false,
                    error : err
                });
            });

        }
    };
};