const host = 'noreply@hverdagshelt.com';
const unsub_link = 'imgur.com';
const unsub_pref = 'nrk.no';

export const sendRegistrationEmail = (email, name, password) => {
  const msg = {
    to: email,
    from: host,
    templateId: 'd-63fa4e52b76545f2bbe6f978350bffe0',
    dynamic_template_data: {
      Recipient_Name: name,
      Generated_Password: password,
      Unsubscribe_Link: unsub_link,
      Unsubscribe_Preferences: unsub_pref,
    }
  };
  sgMail.send(msg);
};

export const sendNewPassword = (email, name, password) => {
  const msg = {
    to: email,
    from: host,
    templateId: 'd-eecfa27c0b85422f90d97ef80acbd072',
    dynamic_template_data: {
      Recipient_Name: name,
      Generated_Password: password,
      Unsubscribe_Link: unsub_link,
      Unsubscribe_Preferences: unsub_pref,
    }
  };
  sgMail.send(msg);
};




/*subject: 'Sending with SendGrid is Fun',
text: 'and easy to do anywhere, even with Node.js',
html: '<strong>and easy to do anywhere, even with Node.js</strong>',*/

/*Sender_Name: 'TheDude',
      Sender_Address: 'Thisville',
      Sender_City: 'Unknown',
      Sender_State: 'Unconscious',
      Sender_Zip: 'locked',*/