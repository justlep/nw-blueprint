module.exports = function (/*grunt, options*/) {
    'use strict';
    return {
        options: {
            expand: true
        },
        srcToPrepareBuild: {
            files: [
                {
                    cwd: 'src/css',
                    src: ['**', '!**/.svn', '!**/.git'],
                    dest: 'build/preparedBuild/css/',
                    expand: true
                },
                {
                    cwd: 'src',
                    src: ['index.html', 'package.json', 'node_modules/**', 'images/**', 'js/**'],
                    dest: 'build/preparedBuild/',
                    expand: true
                }
            ]
        }
    };
};