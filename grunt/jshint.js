module.exports = function (grunt, options) {
    'use strict';
    return {
        options: {
            jshintrc: './.jshintrc'
        },
        all: [
            'Gruntfile.js',
            'grunt/*.js',
            'grunt-tasks/*.js',
            'src/js/**/*.js',
            '!src/js/lib/**'
        ]
    };
};