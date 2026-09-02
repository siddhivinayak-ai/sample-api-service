// services/notification.js
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Uses deprecated regional domain that will stop working
const client = twilio(accountSid, authToken, {
  domain: 'api.twilio.com',
  lazyLoading: true
});

async function sendSMS(to, body) {
  return await client.messages.create({
    body: body,
    from: '+1234567890',
    to: to
  });
}

module.exports = { sendSMS };
