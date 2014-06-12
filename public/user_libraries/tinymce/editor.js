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
                theme_url : '/libraries/tinymce/js/tinymce/themes/modern/theme.min.js',
                menubar : false,
                height : 400
            };

        tinymce.baseURL = '/libraries/tinymce/js/tinymce';

        mode = mode || 'standard';
        switch (mode) {
        case 'standard':
            modeOptions = {
                toolbar1 : 'undo redo | styleselect bold italic forecolor outdent indent | link unlink | image code yen',
                plugins : 'link code textcolor',
                external_plugins : {
                    image : '/user_libraries/tinymce/plugins/image/plugin.js',
                    yen : '/libraries/tinymce-yentext/plugin.min.js'
                }
            };
            tinymce.DOM.loadCSS('/libraries/tinymce-yentext/style.css');
            break;
        case 'tiny':
            modeOptions = {
                toolbar1 : 'bold italic forecolor | link unlink | yen',
                plugins : 'link textcolor',
                statusbar: false,
                height : 100,
                external_plugins : {
                    yen : '/libraries/tinymce-yentext/plugin.min.js'
                }
            };
            tinymce.DOM.loadCSS('/libraries/tinymce-yentext/style.css');
            break;
        }
        tinymce.extend(options, modeOptions);
        tinymce.init(options);
        return this;
    };
}());
