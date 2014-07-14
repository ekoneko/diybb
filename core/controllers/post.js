/*jslint node: true */
module.exports = function () {
    'use strict';
    
    var self = this;

    this.get = {
        template: function () {
            self.res.render('forum/comment.hbs');
        },
        templateItem: function () {
            self.res.render('forum/comment-item.hbs');
        },
        data: function () {
            var model = require('../lib/model.js'),
                when = require('when'),
                topicId = self.req.query.topic >>> 0,
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
        }
    };

    this.post = {
        post: function () {
            var model = require('../lib/model.js'),
                topic = self.req.body.topic_id >>> 0,
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
                        error: 'Account expired, log in and try again'
                    });
                }
                user = _user;
                return model.load('post').add({
                    topic_id: topic,
                    user_id: user.id,
                    user_name : user.name,
                    content : content
                });
            }).then(function () {
                model.load('user_score').add(user.id, 1);
                self.res.send({
                    state: true,
                    user: {
                        id: user.id,
                        name: user.name
                    }
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state: false,
                    error: err
                });
            })
        }
    }
};