const fs = require('fs');
const IOutPut = require('./IOutPut')


class FileOutput extends IOutPut {

    constructor() {
        super();
        this.fileName = 'output.txt';
    }

    out(message) {
        fs.appendFile(this.fileName, message, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = FileOutput