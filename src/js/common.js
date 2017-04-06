/**
 * A helper module for easy import of commonly used librares via destructuring assignments.
 * Example:
 *
 *   let {_, ko, $} = require('./common');
 *
 */
require('./lib/jquery.min');

module.exports = {
    $: global.jQuery,
    ko: require('./lib/knockout'),
    util: require('./util'),
    jQueryScrollTo: require('./lib/jquery.scrollTo.min-patched'),
    moment: require('./lib/moment.min'),
    _: require('./lib/underscore-min'),
    gui: window.require('nw.gui')
};