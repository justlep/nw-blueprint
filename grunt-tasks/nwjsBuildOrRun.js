/**
 * Defines 2 tasks for building or running the app via nwjs.
 * Usage:
 *   $ grunt nwjsBuild
 *   $ grunt nwjsRun
 */
module.exports = function (grunt) {

    function determinePlatformForRun() {
        let osArch = /32/.test(process.arch) ? 32 : 64,
            platform = process.platform,
            nwPlatform = (/win\d+/.test(platform)) ? 'win' :
                         (/darwin/).test(platform) ? 'osx' :
                         (/linux/).test(platform) ? 'linux' : null;


        if (!nwPlatform) {
            throw new Error('Could not determine platform for NWBuilder: ', osArch, platform);
        }

        console.log(`Determined platform for NwBuilder: ${nwPlatform + osArch}`);

        return [nwPlatform + osArch];
    }

    function getNwjsInstance(doRun) {
        let doBuild = !doRun,
            path = require('path'),
            pkg = grunt.file.readJSON(path.resolve(__dirname, '../package.json')),
            BUILD_TARGET_DIR = path.resolve(__dirname, '../build'),
            BUILD_SOURCES = BUILD_TARGET_DIR + '/preparedBuild/**',
            RUN_SOURCES = path.resolve(__dirname, '../src/**'),
            CACHE_DIR = path.resolve(__dirname, '../cache'),
            NwBuilder = require('nw-builder'),
            nw = new NwBuilder({
                files: doBuild ? BUILD_SOURCES : RUN_SOURCES,
                cacheDir: CACHE_DIR,
                buildDir: BUILD_TARGET_DIR,
                platforms: doBuild ? pkg.config.nwjsBuildPlatforms : determinePlatformForRun(),
                version: pkg.config.nwjsBuildVersion,
                zip: doBuild && pkg.config.nwjsZipSources !== false,
                flavor: doRun ? 'sdk' : 'normal',
                toolbar: doRun,
                appVersion: null // autodetect version within manifest (src/package.json)
            });

        nw.on('log',  grunt.log.writeln);

        return nw;
    }

    grunt.registerTask('nwjsBuild', 'Builds the app with NWJS', function() {
        let nw = getNwjsInstance(false),
            done = this.async();

        nw.build().then(function () {
            grunt.log.ok('nwjsBuild successfully done');
        }).catch(function (error) {
            grunt.fail.warn(error);
        }).then(function() {
            done();
        });
    });

    grunt.registerTask('nwjsRun', 'Runs the app with NWJS', function() {
        let nw = getNwjsInstance(true),
            done = this.async();

        nw.run().then(function() {
            grunt.log.ok('nwjsRun exitted normally');
        }).catch(function (error) {
            grunt.fail.warn(error);
        }).then(function() {
            done();
        });
    });

};