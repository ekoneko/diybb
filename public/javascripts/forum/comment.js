/*global jQuery:true */
(function ($) {
    'use strict';

    var ready, panelTemplate, itemTemplate, comment,
        SIZE = 5;

    /**
     * @param {Object} options {
     *     element
     *     topic
     * }
     */
    comment = function (options) {
        var element, pagination;

        element = $(panelTemplate).appendTo(options.element.empty());
        element.find('[name="topic_id"]').val(options.topic);
        element.find('.comment-editor').attr(
            'id',
            'editor'+ Math.round(Math.random()*10000)
        ).editor('tiny');
        pagination = element.find('.pagination');
        pagination.pagination({
            trigger: function (page) {
                options.element.trigger('load', page);
            }
        });

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
                    alert(res.error);
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
                page: page,
                size: SIZE
            }).success(function (res) {
                var list = panel.find('.comment-list');
                list.children('.item').remove();
                if (!res.state) {
                    alert(res.error);
                    return;
                }
                pagination.trigger('update', {
                    current: page,
                    total: res.total || 0,
                    size: SIZE
                });
                for (var element, item, i = res.data.length; i > 0; i--) {
                    item = res.data[i - 1];
                    element = $.tmpl(itemTemplate, item);
                    element
                        .prependTo(list)
                        .find('.content').html(item.content);
                    if (item.user_id === userId) {
                        element.find('.edit').show();
                    }
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
        $.ajax('/user_libraries/pagination/pagination.js'),
        $.ajax('/libraries/tinymce/tinymce.jquery.min.js'),
        $.ajax('/user_libraries/tinymce/editor.js')
    ).done(function () {
        if (arguments[0][1] === 'success' && arguments[1][1] === 'success') {
            panelTemplate = arguments[0][0];
            itemTemplate = arguments[1][0];
            ready();
        }
    });
}(jQuery));