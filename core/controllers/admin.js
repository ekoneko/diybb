/*jslint node: true */
module.exports = function () {
    'use strict';

    var self = this,
        model = require('../lib/model.js'),
        when = require('when'),
        _ = require('underscore'),
        verify;

    this.get = {};

    this.post = {
        topic_top: function () {
            var userId = +self.req.signedCookies.user,
                topicId = +self.req.body.id,
                set = +self.req.body.set ? 1 : 0,
                adminChannels;
            if (!userId || !topicId) {
                return self.res.send({
                    state: false,
                    error: self.res.__('no permission')
                });
            }
            model.load('channel_admin').getByUser(userId).then(function (data) {
                adminChannels = data;
                return model.load('topic').get(topicId);
            }).then(function (topicData) {
                if (!topicData || adminChannels.indexOf(topicData.channel_id) === - 1) {
                    throw 'Topic not exis or no permission';
                }
                return model.load('topic').edit(
                    {id: topicId},
                    {top: set},
                    {limit: 1}
                );
            }).then(function () {
                return self.res.send({state: true});
            }).otherwise(function (err) {
                console.error(err);
                self.res.send('forum/error.hbs', {
                    state: false,
                    error: typeof err === 'string' ? err : 'Server error, try again'
                });
            });

        },
        topic_delete: function () {
            var userId = +self.req.signedCookies.user,
                topicIds = self.req.body.ids.split(',').map(Number),
                adminChannels,
                waitRemove = [];
            
            _.each(topicIds, function (id) {
                if (id && waitRemove.indexOf(id) === -1) {
                    waitRemove.push(id);
                }
            });
            if (!userId || !waitRemove.length) {
                return self.res.send({
                    state: false,
                    error: self.res.__('no permission')
                });
            }
            model.load('channel_admin').getByUser(userId).then(function (data) {
                adminChannels = data;
                return model.load('topic').list({
                    id: waitRemove
                })
            }).then(function (datas) {
                _.each(datas, function (item) {
                    if (adminChannels.indexOf(item.channel_id) === -1) {
                        waitRemove.splice(waitRemove.indexOf(item.channel_id), 1);
                    }
                });
                return model.load('topic').remove({
                    id: waitRemove
                });
            }).then(function () {
                return self.res.send({state: true});
            }).otherwise(function (err) {
                console.error(err);
                self.res.send('forum/error.hbs', {
                    state: false,
                    error: typeof err === 'string' ? err : 'Server error, try again'
                });
            });
        }
    };
};