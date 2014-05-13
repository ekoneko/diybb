/*jslint node: true */
/*jslint nomen: true */
module.exports = function () {
    'use strict';

    var self = this,
        model = require('../lib/model.js');
    
    /* get */
    this.get = {
        index : function () {
            var id = this.req.params.id >>> 0,
                page = (this.req.params.page >>> 0) || 1,
                size = 10,
                commonConfig = require('../../configs/common.json'),
                channel;
            
            model.load('channel').get(id).then(function (_channel) {
                channel = _channel;
                return model.load('topic').list({
                    channel_id: id
                }, {
                    limit: size,
                    offset: size * (page - 1),
                    orderby: ['created', 'DESC']
                });
            }).then(function(topics) {
                self.res.render('forum/channel.hbs', {
                    siteurl: commonConfig.siteurl,
                    sitename: commonConfig.sitename,
                    topics: topics,
                    channel: channel,
                    size: size
                });
            }).otherwise(function (err) {
                console.error(err);
                self.res.send('forum/error', {
                    message: err
                });
            });
        }
    };
};