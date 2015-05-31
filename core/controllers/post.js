/*jslint node: true */
module.exports = function () {
    'use strict';
    
    var self = this,
        when = require('when'),
        model = require('../lib/model.js');

    this.get = {
        template: function () {
            self.res.render('forum/comment.hbs');
        },
        templateItem: function () {
            self.res.render('forum/comment-item.hbs');
        },
        data: function () {
            var topicId = self.req.query.topic >>> 0,
                page = self.req.query.page >>> 0,
                size, where;

            if (!topicId) {
                return self.res.send({
                    state: false,
                    error: self.res.__('Topic not exis or no permission')
                });
            }
            page = page || 1;
            size = 5;

            where = {
                topic_id: topicId,
                first: 0
            };
            when.all([
                model.load('post').list(where, {
                    limit: size,
                    offset: (page - 1) * size,
                    orderby: ['created', 'DESC']
                }),
                model.load('post').count(where)
            ]).then(function (result) {
                self.res.send({
                    state: true,
                    data: result[0],
                    total: result[1]
                });
            }).otherwise(function (err) {
                self.res.send({
                    state: false,
                    error: err
                });
            });
        },
        edit: function () {
            var postId = self.req.params.id >>> 0,
                user, post;
            when.all([
                model.load('user').get(self.req.signedCookies.user),
                model.load('post').list({id:postId})
            ]).then(function (result) {
                post = result[1];
                user = result[0]
                if (!user) {
                    return self.res.redirect('/user/login?redirect=/post/edit/' + postId);
                }
                if (!post || !post.length) {
                    throw('Post not exis or no permission')
                }
                post = post[0];
                if (post.user_id !== user.id) {
                    throw('Can not edit other\'s post');
                }
                return model.load('topic').get(post.topic_id);
            }).then(function (topic) {
                return self.res.render('forum/post-edit.hbs', {
                    topic: topic,
                    user: user,
                    post: post
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.render('forum/error.hbs', {
                    user: user,
                    message: (typeof err === 'string') ? err: 'Server error, try again'
                });
            });
        }
    };

    this.post = {
        post: function () {
            var topic = self.req.body.topic_id >>> 0,
                content = self.req.body.content,
                user;
            if (!topic) {
                return self.res.send({
                    state: false,
                    error: 'Topic not exis or no permission'
                });
            }
            model.load('user').get(self.req.signedCookies.user).then(function (_user) {
                if (!_user) {
                    return self.res.send({
                        state: false,
                        error: self.res.__('Account expired, log in and try again')
                    });
                }
                user = _user;
                return model.load('post').add({
                    topic_id: topic,
                    user_id: user.id,
                    user_name : user.name,
                    content : content
                });
            }).then(function (post) {
                model.load('user_score').add(user.id, 1);
                self.res.send({
                    state: true,
                    user: {
                        id: user.id,
                        name: user.name
                    },
                    post: {
                        id: post.id
                    }
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state: false,
                    error: err
                });
            });
        },
        edit: function () {
            var topicId = self.req.body.topic_id,
                postId = self.req.body.post_id,
                title = self.req.body.title,
                content = self.req.body.content,
                post, user;
            when.all([
                model.load('user').get(self.req.signedCookies.user),
                model.load('post').list({id:postId})
            ]).then(function (result) {
                post = result[1];
                user = result[0]
                if (!user) {
                    return self.res.redirect('/user/login?redirect=/post/edit/' + postId);
                }
                if (!post || !post.length) {
                    throw('Post not exis or no permission')
                }
                post = post[0];
                if (post.user_id !== user.id) {
                    throw('Can not edit other\'s post');
                }
                if (post.first && title) {
                    model.load('topic').edit({id: topicId}, {title: title}, {limit: 1});
                }
                return model.load('post').edit({id: postId}, {content: content}, {limit: 1});
            }).then(function () {
                self.res.send({
                    state: true,
                    id: self.req.body.topic_id
                })
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state: false,
                    error: err
                });
            });
        }
    }
};