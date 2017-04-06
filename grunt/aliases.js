module.exports = function (grunt, options) {
    'use strict';

    grunt.registerTask('default', [
        'less',
        'jshint',
        'pug'
    ]);

    grunt.registerTask('watchLessAndPug', [
        'less',
        'pug',
        'concurrent:watchLessAndPug'
    ]);

    grunt.registerTask('runDebug', [
        'default',
        'nwjsRun'
    ]);

    grunt.registerTask('buildApp', [
        'clean',
        'default',
        'copy:srcToPrepareBuild',
        'nwjsBuild'
        //, 'clean:oldPreparedBuild'
    ]);

    grunt.registerTask('zipBuild', [
        'clean:oldZips',
        'compress:zipWin64'
    ]);
};