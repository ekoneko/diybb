/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';
    
    var self = this;

    /* get */
    this.get = {
        index : function () {
            var _ = require('underscore'),
                when = require('when'),
                commonConfig = require('../../configs/common.json'),
                channelModel = require('../lib/model.js').load('channel');

            channelModel.getFormatList().then(function (channels) {
                self.res.render('forum/index.hbs', {
                    siteurl: commonConfig.siteurl,
                    sitename: commonConfig.sitename,
                    channels: channels
                });
            }).otherwise(function (err) {
                console.error(err);
                self.next();
            });
        }
    };
};