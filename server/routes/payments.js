const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_...');
const { Payment, createPayment } = require('../models/Payment');
const { updateBooking } = require('../models/Booking');
const auth = require('../middleware/auth');

const router = express.Router();

// Create payment intent
router.post('/create-payment-intent', auth, async (req, res) => {
  const { bookingId, amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // in cents
      currency: 'usd',
      metadata: { bookingId },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Confirm payment
router.post('/confirm', auth, async (req, res) => {
  const { paymentIntentId, bookingId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status === 'succeeded') {
      await createPayment({
        booking: bookingId,
        amount: paymentIntent.amount / 100,
        stripePaymentIntentId: paymentIntentId,
        status: 'completed',
      });
      await updateBooking(bookingId, { status: 'confirmed' });
      res.json({ message: 'Payment confirmed' });
    } else {
      res.status(400).json({ message: 'Payment failed' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;