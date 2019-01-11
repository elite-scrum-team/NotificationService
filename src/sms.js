const client = new require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY);

client.messages.create({
  body: 'Hello from Node',
  to: '+4792406455',  // Text this number
  from: '+4759447127' // From a valid Twilio number
})
  .then((message) => console.log(message.sid));
