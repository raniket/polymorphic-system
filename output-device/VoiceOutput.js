const gTTS = require('gtts');
const IODeviceInterface = require('./IODeviceInterface')
	
class VoiceOutput extends IODeviceInterface {
    constructor() {
        super();
    }
    write(message) {
        const speech = new gTTS(message, 'en');
        speech.save('voice.mp3', function (err, result){
            if(err) { throw new Error(err); }
        });
        // speech.stream().pipe(res);
    }
}

module.exports = VoiceOutput

