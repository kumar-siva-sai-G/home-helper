const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model('Booking', BookingSchema);

async function createBooking(data) {
  const booking = new Booking(data);
  await booking.save();
  return booking;
}

async function findBookingById(id) {
  return await Booking.findById(id).populate('customer').populate('provider').populate('service');
}

async function findBookingsByCustomer(customerId) {
  return await Booking.find({ customer: customerId }).populate('customer').populate('provider').populate('service');
}

async function findBookingsByProvider(providerId) {
  return await Booking.find({ provider: providerId }).populate('customer').populate('provider').populate('service');
}

async function updateBooking(id, data) {
  return await Booking.findByIdAndUpdate(id, data, { new: true });
}

async function deleteBooking(id) {
  await Booking.findByIdAndDelete(id);
}

module.exports = {
  Booking,
  createBooking,
  findBookingById,
  findBookingsByCustomer,
  findBookingsByProvider,
  updateBooking,
  deleteBooking,
};