(function () {
    'use strict';

    $(function () {
        var messageList = $('#message-list'),
            messageListTemplate = $('#message-list-template').html(),
            reply = $('#reply'),
            pagination = $('#pagination'),
            page;

        messageList.one('success', function () {
            // TODO: show post success modal
        });

        if (location.hash === '#success') {
            messageList.trigger('success');
        }

        if (messageList.length) {
            page = /#page=(\d+)/.exec(location.hash);
            if (page && page[1]) {
                page = page[1] >>> 0 || 1;
            } else {
                page = 1;
            }
            messageList.bind('pagination', function (event) {
                $.get('/message/list', {
                    page: page
                }, function (data) {
                    var item;
                    if (typeof data === 'object') {
                        messageList.children('.item').remove();
                        for (var i = data.data.length; i > 0; i--) {
                            item = $.tmpl(messageListTemplate, data.data[i - 1]);
                            messageList.prepend(item);
                            item.find('.delete').bind('click', function () {
                                $.post('/message/delete', {
                                    id: $(this).parents('.item').attr('data-id')
                                }).success(function () {
                                    messageList.trigger('pagination');
                                });
                            });
                        }
                    }
                });
            });
            messageList.trigger('pagination');
        }

        if (pagination.length) {
            pagination.pagination({
                trigger: function (_page) {
                    page = _page;
                    messageList.trigger('pagination');
                }
            });
        }

        if (reply.length > 0) {
            reply.editor('tiny');
        }

        $('#message-post').bind('submit', function (event) {
            event.preventDefault();
            var content = tinymce.activeEditor.getContent();
            if (!content) {
                return;
            }
            reply.val(content);
            $.post('/message/write', $(this).serialize()).success(function (data) {
                if (data.state) {
                    location.href = '/message/all#success'
                    messageList.trigger('success');
                } else {
                    if (typeof data.error === 'string') {
                        alert(data.error);
                    }
                }
            });
        });
        $('#title').trigger('focus');
    });
}());

// message list

// message post