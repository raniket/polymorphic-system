const express = require('express');
const app = express();
const port = 3000;

const Messanger = require('./Messanger');

const ConsoleOutput = require('./output-device/ConsoleOutput');
const FileOutput = require('./output-device/FileOutput');
const VoiceOutput = require('./output-device/VoiceOutput');

const messanger = new Messanger(new ConsoleOutput());
// const messanger = new Printer(new FileOutput());

messanger.start();


app.get('/change-output-device', (req, res) => {
    const outputDevice = req.query.outputDevice;
    if (outputDevice === 'console') {
        messanger.setOutputDevice(new ConsoleOutput());
    } else if (outputDevice === 'file') {
        messanger.setOutputDevice(new FileOutput());
    } else if (outputDevice === 'voice') {
        messanger.setOutputDevice(new VoiceOutput());
    } 
    res.send('ok');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})