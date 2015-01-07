module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            default: {
                files: {
                    'public/user_libraries/tinymce/tinymce.pkg.js' : [
                        'public/libraries/tinymce/tinymce.jquery.min.js',
                        'public/libraries/tinymce/plugins/link/plugin.min.js',
                        'public/libraries/tinymce/plugins/code/plugin.min.js',
                        'public/libraries/tinymce/plugins/textcolor/plugin.min.js',
                        'public/libraries/tinymce-yentext/plugin.min.js',
                        'public/user_libraries/tinymce/plugins/image/plugin.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
}