//= require libraries/jquery/jquery.min
//= require libraries/jquery-tmpl/jquery.tmpl.min
/*global $*/

(function () {
    'use strict';
    /**
     * helper function
     */
    window.$fn = {
        /**
         * format date smartly
         * @param  {Number} timestamp
         * @return {String}
         */
        smartDate: function (timestamp) {
            var now, date, deltaTime, modify, dateString;
            timestamp = Number(timestamp);
            now = new Date();
            date = new Date(timestamp);
            deltaTime = date.getTime() - now.getTime();
            modify = deltaTime > 0 ? 'later' : 'ago';
            deltaTime = Math.abs(deltaTime) / 1000;
            if (deltaTime < 60) {
                return 'a moment ' + modify;
            }
            if (deltaTime < 3600) {
                return parseInt(deltaTime / 60, 10) + ' minutes ' + modify;
            }
            if (deltaTime < 86400) {
                return parseInt(deltaTime / 3600, 10) + ' hours ' + modify;
            }
            dateString = (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
            if (date.getFullYear() === now.getFullYear()) {
                return dateString;
            }
            return date.getFullYear() + '-' + dateString;
        }
    };

    /**
     * message
     */
    $.getJson('/message/list', function (data) {
        
    });
}());