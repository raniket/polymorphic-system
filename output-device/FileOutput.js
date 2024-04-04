const fs = require('fs');
const IODeviceInterface = require('./IODeviceInterface')


class FileOutput extends IODeviceInterface {

    constructor() {
        super();
        this.fileName = 'output.txt';
    }

    write(message) {
        fs.appendFile(this.fileName, message, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = FileOutput