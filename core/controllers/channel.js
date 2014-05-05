/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';
    
    /* get */
    this.get = {
        index : function () {
            var id = this.req.params.id,
                _ = require('underscore'),
                fn = require('../lib/function.js'),
                commonConfig = require('../../configs/common.json'),
                channelConfig = {
                    size: 10,
                    total: 24
                },
                topics = require('../../scaffold/topic.json');
            
            _.each(topics, function (item) {
                if (typeof item.created === 'number') {
                    item.created = fn.smartDate(item.created);
                    item.lastpost_time = fn.smartDate(item.lastpost_time);
                }
            });
            
            this.res.render('forum/channel.hbs', {
                siteurl: commonConfig.siteurl,
                sitename: commonConfig.sitename,
                current: require('../../scaffold/channel.json')[id],
                topics: topics,
                config: channelConfig
            });
        }
    };
};