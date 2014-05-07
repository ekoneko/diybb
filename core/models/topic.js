/*jslint node: true */
module.exports = function() {
    'use strict';

    this.table = 'topic';
     var when = require('when');

    this.add = function(data) {
        var deferred = when.defer();
        this.insert(data, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve(data);
        });
        return deferred.promise;
    };
};