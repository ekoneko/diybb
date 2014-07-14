/*jslint node: true */
/*jslint nomen: true */
module.exports = function() {
    'use strict';
    
    this.table = 'user_score';

    var when = require('when');

    this.add = function (userId, increase) {
        var deferred = when.defer();
        this.setField({
            user_id: userId,
        }, 'score0', increase, '+', {
            limit: 1
        }, function (err) {
            if (err) {
                return deferred.reject(err);
            }
            deferred.resolve();
        });
        return deferred.promise;
    };

    this.get = function (id) {
        var deferred = when.defer();
        this.select({
            user_id : id
        }, {
            limit: 1
        }, function (err, data) {
            if (err) {
                return deferred.reject(err);
            }
            data = data[0];
            deferred.resolve(data);
        });
        return deferred.promise;
    }
};