const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const host = 'HverdagsHelt@hverdagsheltprosjekt.com';
const unsub_link = 'imgur.com';
const unsub_pref = 'nrk.no';

module.exports = {
    sendRegistrationEmail(email, name, password) {
        const msg = {
            to: email,
            from: host,
            templateId: 'd-63fa4e52b76545f2bbe6f978350bffe0',
            dynamic_template_data: {
                Recipient_Name: name,
                Generated_Password: password,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = sgMail.send(msg);
        return res[0].statusCode;
    },

    sendNewPassword(email, name, password) {
        const msg = {
            to: email,
            from: host,
            templateId: 'd-eecfa27c0b85422f90d97ef80acbd072',
            dynamic_template_data: {
                Recipient_Name: name,
                Generated_Password: password,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = sgMail.send(msg);
        return res[0].statusCode;
    },

    updatedWarningStatus(email, title, status, comment) {
        const msg = {
            to: email,
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
        const res = sgMail.send(msg);
        return res[0].statusCode;
    },

    newWarningComment(email, title, name, comment) {
        const msg = {
            to: email,
            from: host,
            templateId: 'd-472fb23477fa4c51b3602c9b516c6dc2',
            dynamic_template_data: {
                Warning_Title: title,
                Name_Commenter: name,
                Warning_Comment: comment,
                Unsubscribe_Link: unsub_link,
                Unsubscribe_Preferences: unsub_pref,
            },
        };
        const res = sgMail.send(msg);
        return res[0].statusCode;
    },
};
