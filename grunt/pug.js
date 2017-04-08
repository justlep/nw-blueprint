module.exports = function (grunt, options) {
    'use strict';

    let pkg = grunt.file.readJSON('package.json'),
        files = [{
            expand: true,
            src: ['./src/*.pug'],
            ext: '.html'
        }];

    return {
        options: {
            pretty: true
        },
        forRun: {
            files,
            options:  {
                data: {pkg, isLiveReloadAllowed: true}
            },

        },
        forBuild: {
            files,
            options:  {
                data: {pkg, isLiveReloadAllowed: false}
            }
        }
    };
};