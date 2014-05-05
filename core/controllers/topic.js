/*jslint node: true */
module.exports = function () {
    'use strict';

    this.get = {
        index : function () {
            var self = this,
                id = this.req.params.id,
                commonConfig = require('../../configs/common.json'),
                post = require('../../scaffold/post.json');
            this.res.send('tet');
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
                model = require('../lib/model.js');
            model.load('topic').add({
                id : '',
                channel_id : '',
                titile : '',
                content : ''
            });
        },
        edit : function () {
            
        }
    };
};