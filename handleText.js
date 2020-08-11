// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');
// process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/yunyun/Downloads/tts-key.json'

// Creates a client
const client = new textToSpeech.TextToSpeechClient();
async function handleText(text = 'omar sucks', language = 'en-US', gender = 'MALE') {
  const request = {  
    input: { text  },  
    voice: { languageCode: language, ssmlGender: gender },
    audioConfig: { audioEncoding: 'MP3' }
  };
  const [ response ]  = await client.synthesizeSpeech(request); // make api call
  const buf = response.audioContent
  const audioString = buf.toString('base64');
  return audioString
}

module.exports.handleText = handleText
