// billing/stripe_service.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',  // DEPRECATED - this version is being sunset
});

async function listCharges(customerId) {
  // DEPRECATED: total_count is being removed from list responses
  const charges = await stripe.charges.list({
    customer: customerId,
    limit: 100,
  });
  
  // Bug: total_count will no longer exist after the API breaking change
  const totalCount = charges.total_count;
  console.log('Total charges:', totalCount);
  
  return charges.data;
}

async function createPaymentIntent(amount, currency) {
  return await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ['card'],
  });
}

module.exports = { listCharges, createPaymentIntent };
