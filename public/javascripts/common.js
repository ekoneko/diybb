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
    var Message = function () {
        var message = $('#message'),
            messageDialog = $('#message-dialog'),
            messageList = messageDialog.find('ul'),
            messageTemplate = $('#message-template').html();
        $.getJSON('/message/new', function (data) {
            message.html(data.total);
            if (data.total) {
                message.addClass('has-new');
                $.each(data.data, function (k, item) {
                    $.tmpl(messageTemplate, item).appendTo(messageList);
                });
            }
            if (data.total > 0) {
                message.one('read', function () {
                    $.post('/message/read', function () {
                        message.removeClass('has-new');
                        message.html(0);
                    });
                }).bind('click', function () {
                    messageDialog.trigger('open');
                    message.trigger('read');
                });
                messageDialog.bind('open', function () {
                    if (messageDialog.is(':visible')) {
                        return;
                    }
                    messageDialog.show();
                    setTimeout(function () {
                        $(window).bind('click.message', function (event) {
                            if (event.target.id !== 'message-dialog' &&
                                    $(event.target).parents('#message-dialog').length === 0) {
                                messageDialog.hide();
                                $(window).unbind('.message');
                            }
                        });
                    }, 1);
                });
            } else {
                message.href = '/message';
            }
        });
    };
    new Message();
}());