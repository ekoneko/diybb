/*global jQuery:true */
(function ($) {
    'use strict';

    $.fn.pagination = function (options) {
        var $this = $(this),
            pageArray = [],
            totalSize,
            i, li, l, t, href;

        options = options || {};
        options.current = options.current || ($this.attr('data-current') >>> 0) || 1,
        options.total = options.total || ($this.attr('data-total') >>> 0);
        options.size = options.size || ($this.attr('data-size') >>> 0) || 10;
        options.url = options.url || $this.attr('data-url');
        options.trigger = typeof options.trigger === 'function' ? options.trigger : new Function();
        options.length = 7;

        totalSize = Math.ceil(options.total / options.size);

        if (totalSize <= 1) {
            return;
        }

        pageArray.push({
            index: 1,
            text: '<i class="icon-double-angle-left"></i>'
        });
        for (i = Math.max(1, options.current - (options.length - 3) / 2), t = options.length - 2;
                t > 0 && i <= totalSize;
                t--, i++) {
            pageArray.push({
                index: i,
                text: i
            });
        }
        pageArray.push({
            index: totalSize,
            text: '<i class="icon-double-angle-right"></i>'
        });

        for (li, i = 0, l = pageArray.length; i < l; i++) {
            li = $('<li class="page"></li>');
            if (pageArray[i].index === options.current) {
                li.html(pageArray[i].text);
            } else {
                if (options.url) {
                    href = options.url + pageArray[i].index;
                } else {
                    href = 'javascript:;';
                }
                $('<a></a>').html(pageArray[i].text).attr('href', href).appendTo(li);
            }
            li.bind('click', {
                index: pageArray[i].index
            }, function (event) {
                options.trigger(event.data.index)
            });
            $this.append(li);
        }
    };
}(jQuery));