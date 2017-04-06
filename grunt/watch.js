module.exports = function (grunt, options) {
    'use strict';
    return {
        less: {
            files: ['src/less/styles.less', 'src/less/imports/**/*.less'],
            tasks: ['less:styles']
        },
        pug: {
            files: ['src/**/*.pug'],
            tasks: ['pug:html']
        }
    };
};