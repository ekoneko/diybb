/*jslint node: true */
module.exports = function () {
    'use strict';

    /* get */
    this.index = function () {
        var id = this.req.params.id,
            commonConfig = require('../../configs/common.json'),
            post = require('../../scaffold/post.json');
        if (typeof post.created === 'number') {
            post.created = require('../lib/function.js').smartDate(post.created);
        }
        this.res.render('forum/topic.hbs', {
            siteurl: commonConfig.siteurl,
            sitename: commonConfig.sitename,
            post: post
        });
    };

    this.add = function () {

    };

    this.edit = function () {
        
    };

    /* post */
    this.add = function () {

    };

    this.edit = function () {
        
    };
};