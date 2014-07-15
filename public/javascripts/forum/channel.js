(function () {
    'use strict';

    $(function () {
        $('#pagination').pagination();

        $('#channel-password').on('submit', function () {
            var data = {};
            data.channelId = this.channelId.value;
            data.password = this.password.value;
            if (!data.password) {
                return false;
            }
            $.post('/channel/verfify', data).success(function (res) {
                if (res.state) {
                    location.href = location.href.split('?')[0] + '?_=' + Math.random().toString(32);
                } else {
                    $('#channel-password').find('[name="password"]').val('');
                }
            });
            return false;
        });
    });
}());