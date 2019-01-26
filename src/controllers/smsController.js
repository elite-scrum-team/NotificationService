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
// This isn't really in use as it cost money to use it and we don't want to pay

/**
 * Sms Controller
 * @module controllers/smsController
 */

module.exports = {
    /**
     * @function
     * Send the subscribed users a email about a warning that has been updated
     *
     * @param  {[{ telephone: 'telephone2'}, { telephone: 'telephone2'}]} telephone
     * An array of objects that contains the email of the subscribed users
     *
     * @param {string} title
     * The title of the warning they have subscribed to
     *
     * @param {int} status
     * The code for the type of status the warning has been set to
     *
     * @param {string} comment
     * The comment that was added to the status change
     *
     * @returns {Promise<*>} returns a promise and then the status code from sendgrid
     */
    async updatedWarningStatus(telephone, title, status, comment) {
        switch (status) {
            case 0:
                status = 'Unreviewed';
                break;
            case 1:
                status = 'Acknowledged';
                break;
            case 2:
                status = 'Work in progress';
                break;
            case 3:
                status = 'Finished';
                break;
            case 4:
                status = 'Disabled';
                break;
        }
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
