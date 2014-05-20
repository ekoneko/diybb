(function () {
    'use strict';

    $(function () {
        $('form').bind('submit', function (event) {
            var passwordInput = $(this).find('[type="password"]');
            passwordInput.val(md5(passwordInput.val()));
        });
    });
}());