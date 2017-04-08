module.exports = function (grunt, options) {
    'use strict';

    grunt.registerTask('default', [
        'less',
        'jshint',
        'pug:forRun'
    ]);

    grunt.registerTask('watchLessAndPug', [
        'less',
        'pug:forRun',
        'concurrent:watchLessAndPug'
    ]);

    grunt.registerTask('runDebug', [
        'default',
        'nwjsRun'
    ]);

    grunt.registerTask('buildApp', [
        'clean',
        'less',
        'jshint',
        'pug:forBuild',
        'copy:srcToPrepareBuild',
        'nwjsBuild',
        'clean:oldPreparedBuild'
    ]);

    grunt.registerTask('zipBuild', [
        'clean:oldZips',
        'compress:zipWin64'
    ]);
};