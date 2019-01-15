const env = process.env.NODE_ENV || 'development';
const TWILIO_ACCOUNT_SID =
    env !== 'development'
        ? process.env.TEST_TWILIO_ACCOUNT_SID
        : process.env.TWILIO_ACCOUNT_SID;
const TWILIO_API_KEY =
    env !== 'development'
        ? process.env.TEST_TWILIO_API_KEY
        : process.env.TWILIO_API_KEY;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_API_KEY);
const hostNr = env !== 'development' ? '+15005550006' : '+4759447127';

module.exports = {
    async updatedWarningStatus(telephone, title, status, comment) {
        const msg = {
            body:
                title +
                ' har blitt satt til "' +
                status +
                '"' +
                (comment !== '' ? ' med kommentaren "' + comment + '"' : null),
            to: telephone,
            from: hostNr,
        };
        const res = await client.messages.create(msg);
        if (res.errorCode == null) {
            return 200;
        } else {
            return res.errorCode;
        }
    },
};
