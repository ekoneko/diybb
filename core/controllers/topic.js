/*jslint node: true */
module.exports = function () {
    'use strict';

    this.get = {
        index : function () {
            var self = this,
                id = this.req.params.id,
                commonConfig = require('../../configs/common.json'),
                post = require('../../scaffold/post.json');
            if (typeof post.created === 'number') {
                post.created = require('../lib/function.js').smartDate(post.created);
            }
            require('../lib/model.js').load('channel').get(post.channel_id).then(function (channel) {
                self.res.render('forum/topic.hbs', {
                    siteurl: commonConfig.siteurl,
                    sitename: commonConfig.sitename,
                    channel: channel,
                    post: post
                });
            }).otherwise(function (err) {
                console.error(err);
                self.next();
            });
        },
        add : function () {
            this.res.render('forum/topic-add.hbs');
        },
        edit : function () {
            //
        }
    };

    this.post = {
        add : function () {
            var self = this,
                when = require('when'),
                model = require('../lib/model.js'),
                topicId;
            model.load('user').get(self.req.signedCookies.user || 1).then(function (user) {
                var deferred = when.defer();
                if (!user) {
                    return deferred.reject('user not found or no permission');
                }
                model.load('topic').add({
                    channel_id : self.req.body.channel_id,
                    title : self.req.body.title,
                    user_id : user.id,
                    user_name : user.name
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
                    deferred.resolve();
                }).otherwise(function (err) {
                    deferred.reject(err);
                });
                return deferred.promise;
            }).then(function () {
                self.res.send({
                    state : true,
                    id : topicId
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send({
                    state : false,
                    error : err
                });
            });

        },
        edit : function () {
            
        }
    };
};