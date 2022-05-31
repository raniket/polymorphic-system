class Printer {
    constructor(outputDevice) {
        this.messageQueue = [
            '\n Hi', 
            '\n How are you doing',
            '\n This is a call from Google',
            '\n Regarding the Job interview for a software engineer profile',
            '\n If you are interested please call me back',
            '\n I will explain the details to you',
            '\n About the interview process',
            '\n Please also let me know the time you are available',
            '\n And what is your notice period',
            '\n Thank you',
        ]

        this.outputDevice = outputDevice
    }

    print() {
        setInterval(() => {
            let message = this.messageQueue.shift()
            this.outputDevice.out(message)
        } , 1000)
    }

    setOutputDevice(outputDevice) {
        this.outputDevice = outputDevice
    }

    getOutputDevice() {
        return this.outputDevice
    }
}

module.exports = Printer
