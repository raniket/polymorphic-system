const express = require('express');
const app = express();

const Messanger = require('./Messanger');
const ConsoleOutput = require('./output-device/ConsoleOutput');
const FileOutput = require('./output-device/FileOutput');
const VoiceOutput = require('./output-device/VoiceOutput');

const messanger = new Messanger(new ConsoleOutput());
messanger.start();

app.get('/change-output-device', (req, res) => {
    const outputDevice = req.query.outputDevice;
    console.log('outputDevice changed to: ', outputDevice)
    if (outputDevice === 'console') {
        messanger.setOutputDevice(new ConsoleOutput());
    } else if (outputDevice === 'file') {
        messanger.setOutputDevice(new FileOutput());
    } else if (outputDevice === 'voice') {
        messanger.setOutputDevice(new VoiceOutput());
    } 
    res.send('ok');
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000!`);
})