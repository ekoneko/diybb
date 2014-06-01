(function () {
    'use strict';

    $(function () {
        var fileUpload = $('#file-upload'),
            file = $('#file'),
            upload = $('#upload'),
            fileText = $('#file-text'),
            fileForm = $('#file-form');

        fileUpload.uploader({
            script: '/user/avatar',
            fileDataName: 'avatar',
            fileExt: '*.png;*.jpg;*.jpeg;',
            sizeLimit: 1024000,
            complete:function(response) {
                var src;
                response = JSON.parse(response);
                if (!response.state) {
                    return alert(response.error);
                }
                src = $('#avatar').attr('src');
                src = src.split('?')[0];
                $('#avatar').attr('src', src + '?' + +(new Date()));
            }
        });

        $('#tab').find('a').bind('click', function () {
            var taget = $(this).attr('for');
            if (taget === 'avatar-panel') {
                $('#avatar-panel').show();
                $('#setting-panel').hide();
            } else if (taget === 'setting-panel') {
                $('#setting-panel').show();
                $('#avatar-panel').hide();
            }
        });

        $('#setting-form').bind('submit', function (event) {
            var form = $('#setting-form');
            event.preventDefault();
            if (this.password.value.length > 0 && this.password.value !== this.repassword.value) {
                $('#password-warning').show();
                return false;
            }
            $('#password-warning').hide();
            $.post('/user/setting', {
                password: md5(this.password.value)
            }).success(function (result) {
                if (!result.state) {
                    alert(result.error);
                } else {
                    form[0].reset();
                    alert('success');
                }
            });
        })
    });
}());