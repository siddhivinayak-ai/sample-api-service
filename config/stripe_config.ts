// config/stripe_config.ts
import Stripe from 'stripe';

export const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27', // Pinned legacy API version
  typescript: true,
});
