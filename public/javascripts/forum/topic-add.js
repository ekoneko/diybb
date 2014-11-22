(function () {
    'use strict';

    $(function () {
        var editor = $('#editor'),
            submitting = false,
            form = $('#topic-add');

        editor.editor();

        form.bind('submit', function (event) {
            event.preventDefault();
            var content = tinymce.activeEditor.getContent();
            if (!content) {
                alert('content is empty');
                return false;
            }
            editor.val(content);
            $.post(form.attr('action'), $(this).serialize()).success(function (res) {
                if (res.state) {
                    location.href = '/topic/' + res.id;
                } else {
                    alert(res.error);
                }
            });
        });
    });
}());