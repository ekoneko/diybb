/*jslint node: true */
module.exports = function () {
    'use strict';

    this.table = 'channel_admin';
    var when = require('when'),
        _ = require('underscore'),
        self = this;

    self.getByUser = function (userId) {
        var deferred = when.defer();
        self.select({
            user_id: userId
        }, {}, function (err, data) {
            var result = [];
            if (err) {
                return deferred.reject(err);
            }
            _.each(data, function (item) {
                result.push(+item.channel_id);
            });
            deferred.resolve(result);
        });
        return deferred.promise;
    };
};