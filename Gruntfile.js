module.exports = function (grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        init: true,
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });

    grunt.loadTasks('grunt-tasks');

};
