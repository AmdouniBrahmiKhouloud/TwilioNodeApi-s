const express = require('express');
const dotenv = require('dotenv');
const twilio = require('twilio');
const VoiceResponse = twilio.twiml.VoiceResponse;
dotenv.config();
const app = express();
app.all('/voice', (request, response) => {
    const twiml = new VoiceResponse();
    twiml.say({ voice: 'alice' },'Hello, welcome to the callbot. How can I help you today?');
    response.type('text/xml');
    response.send(twiml.toString());
});
app.listen(process.env.PORT, () => console.log('App is listening on url http://localhost:' + process.env.PORT));
