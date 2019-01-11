const client = new require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY);
const hostNr = '+4759447127';

module.exports = {
  updatedWarningStatus(telephone, title, status, comment) {
    const msg = {
      body: title + ' har blitt satt til ' + status + ' med kommentaren ' + comment,
      to: telephone,
      from: hostNr,
    };
    return client.messages.create(msg);
  }
};
