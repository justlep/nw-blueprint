module.exports = function (grunt, options) {

    let appName = grunt.file.readJSON('src/package.json').name;

    return {
        options: {},
        oldPreparedBuild: ['build/preparedBuild'],
        oldBuild: ['build/' + appName],
        oldZips: ['build/*.zip']
    };
};