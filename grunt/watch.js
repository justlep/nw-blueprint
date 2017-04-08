module.exports = function (grunt, options) {
    'use strict';
    return {
        less: {
            files: ['src/less/styles.less', 'src/less/imports/**/*.less'],
            tasks: ['less:styles']
        },
        pug: {
            files: ['src/**/*.pug'],
            tasks: ['pug:forRun']
        },
        livereloadCss: {
            files: ['src/css/**/*.css'],
            tasks: [],
            options: {
                livereload: {
                    host: 'localhost',
                    port: '<%= pkg.config.liveReloadPort %>'
                }
            }
        }
    };
};