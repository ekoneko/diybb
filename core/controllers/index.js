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
                fn = require('../lib/function.js'),
                categorysIndex = {},
                item,
                deferreds = [];

            deferreds.push(require('../lib/model.js').load('category').getAll());
            deferreds.push(require('../lib/model.js').load('channel').getAll());

            when.all(deferreds).then(function (param) {
                var categorys = param[0],
                    channels = param[1];
                _.each(categorys, function (item, i) {
                    categorysIndex[item.id] = i;
                    item.channels = [];
                });
                _.each(channels, function (item) {
                    item.lasttime = fn.smartDate(item.lasttime);
                    categorys[categorysIndex[item.category_id]].channels.push(item);
                });
                self.res.render('forum/index.hbs', {
                    siteurl: commonConfig.siteurl,
                    sitename: commonConfig.sitename,
                    categorys: categorys
                });
            }).otherwise(function (err) {
                console.log(err);
                self.next();
            });
        }
    };
};