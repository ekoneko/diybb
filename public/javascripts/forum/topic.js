(function () {
    'use strict';

    $(function () {
        $('.comment-panel').each(function (i, item) {
            var $item = $(item),
                id = $item.attr('data-topic') >>> 0;
        });
        if (TopicUserId === userId) {
            $('#topic-id > .edit').show();
        }
    });
}());