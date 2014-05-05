/*global tinymce:true */
/*global jQuery:true */

(function () {
    'use strict';

    jQuery.fn.editor = function (mode) {
        var modeOptions,
            options = {
                selector : '#' + this.attr('id'),
                language_url : '/user_libraries/tinymce/i18n/zh-CN.js',
                skin_url : '/user_libraries/tinymce/skin',
                menubar : false
            };
        mode = mode || 'standard';
        switch (mode) {
        case 'standard':
            modeOptions = {
                toolbar1 : 'undo redo | styleselect bold italic forecolor outdent indent | link unlink | image code',
                plugins : 'link code textcolor',
                external_plugins : {
                    image : '/user_libraries/tinymce/plugins/image/plugin.js'
                }
            };
            break;
        }
        tinymce.extend(options, modeOptions);
        tinymce.init(options);
        return this;
    };
}());