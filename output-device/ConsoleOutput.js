const IODeviceInterface = require('./IODeviceInterface')

class ConsoleOutput extends IODeviceInterface {
    constructor() {
        super();
    }
    write(message) {
        console.log(message)
    }
}

module.exports = ConsoleOutput