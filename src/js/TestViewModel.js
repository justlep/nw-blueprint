
let instance,
    {ko, util} = require('./common'),
    fs = require('fs'),
    path = require('path');


class TestViewModel {

    static getInstance() {
        instance = instance || new TestViewModel();
        return instance;
    }

    constructor() {
        util.assert(!instance, 'Must use TestViewModel.getInstance()');
        instance = this;

        this.currentTime = ko.observable();
        this.appVersion = ko.observable();

        window.setInterval(() => {
            this.currentTime(`We have ${new Date().toUTCString()}`);
        }, 1000);

        try {
            let version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'))).version;
            this.appVersion(version);
        } catch (e) {
            console.error(e);
            this.appVersion('could not be determined')
        }
    }
}

module.exports = TestViewModel;