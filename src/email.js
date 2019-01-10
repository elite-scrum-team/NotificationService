// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'nikolai.holt@gmail.com',
  from: 'noreply@hverdagshelt.com',
  /*subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',*/
  templateId: 'd-63fa4e52b76545f2bbe6f978350bffe0',
  dynamic_template_data: {
    Recipient_Name: 'Fuck Face',
    Generated_Password: 'itstotallyrandom',
    Sender_Name: 'TheDude',
    Sender_Address: 'Thisville',
    Sender_City: 'Unknown',
    Sender_State: 'Unconscious',
    Sender_Zip: 'locked',
    Unsubscribe_Link: 'imgur.com',
    Unsubscribe_Preferences: 'nrk.no',
  }
};
sgMail.send(msg);

