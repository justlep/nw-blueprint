
let {ko, util} = require('./common'),
    TestViewModel = require('./TestViewModel');

module.exports = {
    run: function() {
        ko.applyBindings(TestViewModel.getInstance());
    }
};
