module.exports = function (/*grunt, options*/) {
    'use strict';
    return {
        options: {
        },
        oldPreparedBuild: ["build/preparedBuild"],
        oldBuild: ["build/Synchronizer"],
        oldZips: ["build/*.zip"]
    };
};