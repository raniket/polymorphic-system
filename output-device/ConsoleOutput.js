const IOutPut = require('./IOutPut')

class ConsoleOutput extends IOutPut {
    constructor() {
        super();
    }
    out(message) {
        console.log(message)
    }
}

module.exports = ConsoleOutput