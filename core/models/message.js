/*jslint node: true */
module.exports = function () {
    'use strict';

    this.table = 'message';

    this.list = function (where, options) {
        var deferred = require('when').defer();

        this.select(where, options, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(data);
        });
        return deferred.promise;
    }
};