(function () {
    'use strict';

    $(function () {
        $('#main').find('.item').hover(function () {
            var item = $(this);
            if ($.trim(item.find('.lastpost-title').html()).length === 0) {
                return;
            }
            item.remove('leave').addClass('enter');
        }, function () {
            var item = $(this);
            item.addClass('leave')
            setTimeout(function () {
                item.removeClass('leave');
                item.removeClass('enter');
            }, 280);
        })
    });
}());