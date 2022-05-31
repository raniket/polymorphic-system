const gTTS = require('gtts');
const IOutPut = require('./IOutPut')
	
class VoiceOutput extends IOutPut {
    constructor() {
        super();
    }
    out(message) {
        const speech = new gTTS(message, 'en');
        speech.save('voice.mp3', function (err, result){
            if(err) { throw new Error(err); }
        });
        // speech.stream().pipe(res);
    }
}

module.exports = VoiceOutput

