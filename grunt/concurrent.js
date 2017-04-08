module.exports = function (grunt, cfg) {
    'use strict';

    return {
        options: {
            logConcurrentOutput: true
        },
        watchLessAndPug: [
            'watch:less',
            'watch:pug',
            'watch:livereloadCss'
        ]
    };
};