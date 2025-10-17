const express = require('express');
const { Booking, createBooking, findBookingsByCustomer, findBookingsByProvider, updateBooking } = require('../models/Booking');
const { findProviderByUserId } = require('../models/Provider');
const auth = require('../middleware/auth');

const router = express.Router();

// Create booking
router.post('/', auth, async (req, res) => {
  const { provider, service, date, time, address, cost, notes } = req.body;
  try {
    const booking = await createBooking({
      customer: req.user.id,
      provider,
      service,
      date,
      time,
      address,
      cost,
      notes,
    });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's bookings
router.get('/', auth, async (req, res) => {
  try {
    const bookings = await findBookingsByCustomer(req.user.id);
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get provider's bookings
router.get('/provider', auth, async (req, res) => {
  if (req.user.role !== 'provider') return res.status(403).json({ message: 'Access denied' });
  try {
    const provider = await findProviderByUserId(req.user.id);
    if (!provider) return res.json([]);
    const bookings = await findBookingsByProvider(provider._id);
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update booking status
router.put('/:id', auth, async (req, res) => {
  try {
    const booking = await updateBooking(req.params.id, req.body);
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;