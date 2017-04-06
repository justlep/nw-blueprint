module.exports = function (grunt, options) {
    'use strict';

    return {
        options: {
            pretty: true,
            data: {
                pkg: grunt.file.readJSON('package.json')
            }
        },
        html: {
            files: [{
                expand: true,
                src: ['./src/*.pug'],
                ext: '.html'
            }]
        }
    };
};