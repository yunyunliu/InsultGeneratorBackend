// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');
// process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/yunyun/Downloads/tts-key.json'

// Creates a client
const client = new textToSpeech.TextToSpeechClient();
async function handleText(req, res) {
  // The text to synthesize
  const text = req.body.text || 'hello there';
  const request = {  // Construct the request
    input: { text },  
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    // select the type of audio encoding
    audioConfig: { audioEncoding: 'MP3' }
  };
  const [ response ]  = await client.synthesizeSpeech(request); // make api call
  // decode base 64 encoded audioContent string to binary string
  const audioContent = response.audioContent
  const binary = audioContent.toString('binary')
  return binary
}

module.exports.handleText = handleText
