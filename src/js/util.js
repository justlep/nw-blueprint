/*jshint -W030 */

/**
 * Simple utility module mostly for assertions.
 */

let util,
    _ = require('./lib/underscore-min');

/**
 * Throws an error;
 * To be called from within one of the static assert* methods.
 * @param assertionArgs (Arguments) the original arguments from the assert*-call
 * @param [optionalMessageOffset] (Number) optional offset of the actual error message
 *                                         within the assertionArgs (default: 1)
 */
function throwError (assertionArgs, optionalMessageOffset) {
    var messageOffset = optionalMessageOffset || 1,
        messageAndArgumentsArray = Array.prototype.slice.call(assertionArgs, messageOffset),
        emptySafeMessageAndArgsArray = (messageAndArgumentsArray.length) ?
            messageAndArgumentsArray : ['Assertion failed'],
        errorMessage = util.formatString.apply(null, emptySafeMessageAndArgsArray);

    console.error(errorMessage);
    throw errorMessage;
}

util = {
    NOP: function(){},
    assert: function(expr) {
        expr || throwError(arguments);
    },
    assertDefined: function(expr) {
        (typeof expr !== 'undefined') || throwError(arguments);
    },
    assertBoolean: function(expr) {
        (typeof expr === 'boolean') || throwError(arguments);
    },
    assertBooleanOrUndefined: function(expr) {
        (typeof expr === 'boolean' || typeof expr === 'undefined') || throwError(arguments);
    },
    assertString: function(expr) {
        (typeof expr === 'string') || throwError(arguments);
    },
    assertNonEmptyString: function(expr) {
        (typeof (!!expr && expr) === 'string') || throwError(arguments);
    },
    assertStringOrEmpty: function(expr) {
        (!expr || typeof expr === 'string') || throwError(arguments);
    },
    assertNumber: function(expr) {
        (typeof expr === 'number') || throwError(arguments);
    },
    assertNumberInRange: function(expr, min, max) {
        (typeof expr === 'number' && expr >= min && expr <= max) || throwError(arguments, 3);
    },
    assertNumberInRangeOrEmpty: function(expr, min, max) {
        (!expr || (typeof expr === 'number' && expr >= min && expr <= max)) || throwError(arguments, 3);
    },
    assertFunction: function(expr) {
        (typeof expr === 'function') || throwError(arguments);
    },
    assertFunctionOrEmpty: function(expr) {
        (!expr || (typeof expr === 'function')) || throwError(arguments);
    },
    assertObject: function(expr) {
        (expr && typeof expr === 'object') || throwError(arguments);
    },
    assertObjectOrEmpty: function(expr) {
        (!expr || (typeof expr === 'object')) || throwError(arguments);
    },
    assertArray: function(expr) {
        (expr && expr instanceof Array) || throwError(arguments);
    },
    assertArrayOrEmpty: function(expr) {
        (!expr || expr instanceof Array) || throwError(arguments);
    },
    assertElement: function(expr) {
        (expr && _.isElement(expr)) || throwError(arguments);
    },
    assertObjectHasProperties: function(obj, propertyNames) {
        this.assertObject(obj, arguments[2] || 'Given obj parameter is not an object');
        (propertyNames||[]).forEach(function(propName) {
            if (typeof obj[propName] === 'undefined') {
                console.warn(arguments[2] || 'Given object is invalid');
                throwError([obj, 'Missing property: "{}"']);
            }
        });
    },
    /**
     * Returns a given String with placeholders replaced.
     * Contained placeholders '{}' will be replaced with additional parameters in the respective order.
     * @param s (mixed) what to print
     * @params (mixed*) (optional) any number of values replacing the placeholders in s
     */
    formatString: function(s) {
        var out = '' + s;
        for (var i = 1, len = arguments.length; i < len; ++i) {
            out = out.replace('{}', arguments[i]);
        }
        return out;
    }
};


module.exports = util;