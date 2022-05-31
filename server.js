const express = require('express');
const app = express();
const port = 3000;

const Printer = require('./client/Printer');

const ConsoleOutput = require('./output-device/ConsoleOutput');
const FileOutput = require('./output-device/FileOutput');
const VoiceOutput = require('./output-device/VoiceOutput');

const printer = new Printer(new ConsoleOutput());
// const printer = new Printer(new FileOutput());

printer.print();


app.get('/change-output-device', (req, res) => {
    const outputDevice = req.query.outputDevice;
    if (outputDevice === 'console') {
        printer.setOutputDevice(new ConsoleOutput());
    } else if (outputDevice === 'file') {
        printer.setOutputDevice(new FileOutput());
    } else if (outputDevice === 'voice') {
        printer.setOutputDevice(new VoiceOutput());
    } 
    res.send('ok');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})