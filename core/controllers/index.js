/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';
    
    /* get */
    this.index = function () {
        var _ = require('underscore'),
            commonConfig = require('../../configs/common.json'),
            categorys = require('../../scaffold/category.json'),
            channels = require('../../scaffold/channel.json'),
            fn = require('../lib/function.js'),
            categorysIndex = {},
            item;
        _.each(categorys, function (item, i) {
            categorysIndex[item.id] = i;
            item.channels = [];
        });
        _.each(channels, function (item) {
            item.lasttime = fn.smartDate(item.lasttime);
            categorys[categorysIndex[item.category_id]].channels.push(item);
        });
        this.res.render('forum/index.hbs', {
            siteurl: commonConfig.siteurl,
            sitename: commonConfig.sitename,
            categorys: categorys
        });
    };
};