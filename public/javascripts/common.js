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
        },
        countCharacters: function (str) {
            var totalCount = 0;
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
    };

    /**
     * message
     */
    var Message = function () {
        var message = $('#message'),
            messageDialog = $('#message-dialog'),
            messageList = messageDialog.find('ul'),
            messageTemplate = $('#message-template').html();
        if (!message.length) {
            return;
        }
        $.getJSON('/message/new', function (data) {
            message.html(data.total || 0);
            if (data.total) {
                message.addClass('has-new');
                messageDialog.find('.count > span').html(data.total);
                message.attr('href', 'javascript:;');
                $.each(data.data, function (k, item) {
                    $.tmpl(messageTemplate, item).appendTo(messageList);
                });
            } else {
                message.attr('href', '/message/all');
            }
            if (data.total > 0) {
                message.bind('click', function () {
                    messageDialog.trigger('open');
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

    /**
     * account
     */
    var Account = function () {
        var account = $('#account'),
            accountDialog = $('#account-dialog');
        account.bind('click', function () {
            accountDialog.show();
            setTimeout(function () {
                $(window).bind('click.account', function (event) {
                    if (event.target.id !== 'account-dialog' &&
                            $(event.target).parents('#account-dialog').length === 0) {
                        accountDialog.hide();
                        $(window).unbind('.account');
                    }
                });
            }, 1);
        });
    };
    new Account();

    $('.main').css('min-height', $('html').height() - 160 + 'px');
}());