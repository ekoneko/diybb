(function () {
    'use strict';

    $(function () {
        var editor = $('#editor'),
            submitting = false;
        editor.editor();

        $('#topic-add').bind('submit', function (event) {
            event.preventDefault();
            var content = tinymce.activeEditor.getContent();
            if (!content) {
                alert('content is empty');
                return false;
            }
            editor.val(content);
            $.post('/topic/add', $(this).serialize()).success(function (res) {
                if (res.state) {
                    location.href = '/topic/' + res.id;
                } else {
                    alert(res.error);
                }
            });
        });
    });
}());