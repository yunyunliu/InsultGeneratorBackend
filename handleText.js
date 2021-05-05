// Imports the Google Cloud text-to-speech client library
const textToSpeech = require('@google-cloud/text-to-speech');

// set environment variable GOOGLE_APPLICATION_CREDENTIALS to pathname to directory that contains key json file
process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/yunyun/Downloads/tts-test-312721-6da152d99e02.json'

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

// define function that makes api call
async function handleText(text, language, gender) {
  const request = {  
    input: { text  },  
    voice: { languageCode: language, ssmlGender: gender },
    audioConfig: { audioEncoding: 'MP3' }
  };
  // api call here
  const [ response ]  = await client.synthesizeSpeech(request); 
  const buf = response.audioContent
  const audioString = buf.toString('base64');

  return audioString 
}

module.exports.handleText = handleText
