const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const host = 'HverdagsHelt@hverdagsheltprosjekt.com';
const unsub_link = 'imgur.com'; //havn't really implemented this
const unsub_pref = 'nrk.no'; //nor this

/**
 * Email Controller
 * @module controllers/emailController
 */

module.exports = {
    /**
     * @function
     * Send the randomly generated password to a newly registered user
     *
     * @param {string} email
     * The email address of the newly registered user
     *
     * @param {string} password
     * The randomly generated password
     *
     * @returns {Promise<*>} returns a promise and then the status code from sendgrid
     */
    async sendRegistrationEmail(email, password) {
        const msg = {
            to: email,
            from: host,
            templateId: 'd-63fa4e52b76545f2bbe6f978350bffe0',
            dynamic_template_data: {
                Generated_Password: password,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = await sgMail.send(msg);
        return res[0].statusCode;
    },

    /**
     * @function
     * Send a new randomly generated password to a user that forgot or lost their old password
     *
     * @param {string} email
     * The email address of the user that forgot their password
     *
     * @param {string} password
     * The randomly generated password
     *
     * @returns {Promise<*>} returns a promise and then the status code from sendgrid
     */
    async sendNewPassword(email, password) {
        const msg = {
            to: email,
            from: host,
            templateId: 'd-eecfa27c0b85422f90d97ef80acbd072',
            dynamic_template_data: {
                Generated_Password: password,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = await sgMail.send(msg);
        return res[0].statusCode;
    },

    /**
     * @function
     * Send the subscribed users a email about a warning that has been updated
     *
     * @param  {[{ email: 'email'}, { email: 'email2'}]} emails
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
    async updatedWarningStatus(emails, title, status, comment) {
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
            to: emails,
            from: host,
            templateId: 'd-87ecb13d6be24b5eb1a321e61121b8c6',
            dynamic_template_data: {
                Warning_Title: title,
                Warning_Status: status,
                Warning_Comment: comment,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = await sgMail.sendMultiple(msg);
        return res[0].statusCode;
    },

    /**
     * @function
     * Send the subscribed users an email about that it is a new comment on their subscribed warning
     *
     * @param  {[{ email: 'email'}, { email: 'email2'}]} emails
     * An array of objects that contains the email of the subscribed users
     *
     * @param {string} title
     * The title of the warning that has been changed
     *
     * @param {string} comment
     * The new comment on the warning
     *
     * @returns {Promise<*>} returns a promise and then the status code from sendgrid
     */
    async newWarningComment(emails, title, comment) {
        const msg = {
            to: emails,
            from: host,
            templateId: 'd-472fb23477fa4c51b3602c9b516c6dc2',
            dynamic_template_data: {
                Warning_Title: title,
                Warning_Comment: comment,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = await sgMail.sendMultiple(msg);
        return res[0].statusCode;
    },

    /**
     * @function
     * Send an email to a company that they have a new contract
     *
     * @param {string} email
     * The email address of the company
     *
     * @param {string} title
     * The title of the warning
     *
     * @param {string} name
     * Name of the company
     *
     * @param {string} details
     * Details that the worker that assigned them the task amay have putten in, like a comment
     *
     * @returns {Promise<*>} returns a promise and then the status code from sendgrid
     */
    async newContract(email, title, name, details) {
        const msg = {
            to: email,
            from: host,
            templateId: 'd-a4e97543cd0b4dae9fd040a98a3767ee',
            dynamic_template_data: {
                Warning_Title: title,
                Company: name,
                Warning_Details: details,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = await sgMail.send(msg);
        return res[0].statusCode;
    },
};
