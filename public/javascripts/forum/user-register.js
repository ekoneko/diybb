(function () {
    'use strict';

    $(function () {
        $('form').bind('submit', function (event) {
            var form = $(this),
                data = {},
                nameLength;

            data.email = $('#email').val();
            data.name = $('#username').val();
            data.password = $('#password').val();

            if (data.password !== $('#repassword').val()) {
                event.preventDefault();
                $('#password-warning').show();
                $('#password').add($('#repassword')).one('change', function () {
                    $('#password-warning').hide();
                });
                return;
            }
            nameLength = $fn.countCharacters(data.name)
            if (nameLength < 3 || nameLength > 15) {
                event.preventDefault();
                $('#namelength-warning').show();
                $('#username').one('change', function () {
                    $('#namelength-warning').hide();
                });
                return;
            }
            data.password = md5(data.password);
            $('#password').val(data.password);
        });

        $('#email').bind('change', function () {
            var val = $(this).val(),
                warning = $('#email-warning');

            warning.hide();
            if (val.length === 0) {
                return;
            }
            $.get('/user/exists', {
                name: val
            }).success(function (result) {
                if (result.state === true) {
                    warning.show();
                }
            });
        });
        $('#username').bind('change', function () {
            var val = $(this).val(),
                warning = $('#username-warning');

            warning.hide();
            if (val.length === 0) {
                return;
            }
            $.get('/user/exists', {
                name: val
            }).success(function (result) {
                if (result.state === true) {
                    warning.show();
                }
            });
        });
    });
}());