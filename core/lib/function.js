/*jslint node: true */

(function () {
    'use strict';
    
    /**
     * format date smartly
     * @param  {Number} timestamp
     * @return {String}
     */
    this.smartDate = function (timestamp) {
        var now, date, deltaTime, modify, dateString,
            i18n = require('i18n');
        if (!timestamp) {
            return '';
        }
        timestamp = Number(timestamp);
        now = new Date();
        date = new Date(timestamp);
        deltaTime = date.getTime() - now.getTime();
        modify = deltaTime > 0 ? 'later' : 'ago';
        modify = i18n.__(modify);
        deltaTime = Math.abs(deltaTime) / 1000;
        if (deltaTime < 60) {
            return i18n.__('a moment %s', modify);
        }
        if (deltaTime < 3600) {
            return i18n.__('%d minutes %s', parseInt(deltaTime / 60, 10), modify);
        }
        if (deltaTime < 86400) {
            return i18n.__('%d hours %s', parseInt(deltaTime / 3600, 10), modify);
        }
        dateString = (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
        return date.getFullYear() + '-' + dateString;
    };
    this.countCharacters = function (str) {
        var totalCount = 0;
        str = str || '';
        for (var i=0; i<str.length; i++)
        {
            var c = str.charCodeAt(i);
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
                 totalCount++;
            } else {
                 totalCount+=2;
            }
         }
        return totalCount;
    }
}.call(this));