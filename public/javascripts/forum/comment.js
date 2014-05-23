/*global jQuery:true */
(function ($) {
    'use strict';

    var ready, panelTemplate, itemTemplate, comment;

    /**
     * @param {Object} options {
     *     element
     *     topic
     * }
     */
    comment = function (options) {
        var element;

        element = $(panelTemplate).appendTo(options.element.empty());
        element.find('[name="topic_id"]').val(options.topic);
        element.find('.comment-editor').attr(
            'id',
            'editor'+ Math.round(Math.random()*10000)
        ).editor('tiny');
        element.find('.pagination').pagination();

        element.find('form').bind('submit', {
            element: element.eq(0)
        },function (event) {
            event.preventDefault();
            var form = $(this),
                textarea = form.find('.comment-editor'),
                content = tinyMCE.get(textarea.attr('id')).getContent();

            tinyMCE.get(textarea.attr('id')).setContent('');
            form.trigger('reset');

            if (!content) {
                return alert('Content can not empty');
            }
            textarea.val(content);
            $.post('/comment/post', form.serialize()).success(function (res) {
                if (!res.state) {
                    return;
                }
                $.tmpl(itemTemplate, {
                    user_id: res.user.id,
                    user_name: res.user.name,
                    created: $fn.smartDate(+new Date()),
                }).prependTo(event.data.element)
                    .find('.content').html(content);
            });
        });
        
        options.element.bind('load', {
            topic: options.topic
        }, function (event, page) {
            var panel = $(this);
            $.get('/comment/data', {
                topic: event.data.topic,
                page: page
            }).success(function (res) {
                var list = panel.find('.comment-list');
                list.children('.item').remove();
                if (!res.state) {
                    return;
                }
                for (var item, i = res.data.length; i > 0; i--) {
                    item = res.data[i - 1];
                    $.tmpl(itemTemplate, res.data[i - 1])
                        .prependTo(list)
                        .find('.content').html(item.content);
                }
            });
        });

        options.element.trigger('load', 1);
    };

    ready = function () {
        $('.comment-panel').each(function (i, item) {
            var $item = $(item),
                id = $item.attr('data-topic') >>> 0;
            if (!id) {
                return true;
            }
            comment({
                element: $item,
                topic: id
            });
        }); 
    };

    $.when(
        $.ajax('/comment'),
        $.ajax('/comment/item'),
        $.getScript('/user_libraries/pagination/pagination.js'),
        $.getScript('/user_libraries/tinymce/editor.js'),
        $.getScript('/libraries/tinymce/js/tinymce/tinymce.jquery.min.js')
    ).done(function () {
        if (arguments[0][1] === 'success' && arguments[1][1] === 'success') {
            tinyMCE.baseURL = '/libraries/tinymce/js/tinymce';
            panelTemplate = arguments[0][0];
            itemTemplate = arguments[1][0];
            ready();
        }
    });
}(jQuery));