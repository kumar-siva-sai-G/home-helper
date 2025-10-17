const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  stripePaymentIntentId: {
    type: String,
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

const Payment = mongoose.model('Payment', PaymentSchema);

async function createPayment(data) {
  const payment = new Payment(data);
  await payment.save();
  return payment;
}

async function findPaymentById(id) {
  return await Payment.findById(id).populate('booking');
}

async function findPaymentsByBooking(bookingId) {
  return await Payment.find({ booking: bookingId }).populate('booking');
}

async function updatePayment(id, data) {
  return await Payment.findByIdAndUpdate(id, data, { new: true });
}

async function deletePayment(id) {
  await Payment.findByIdAndDelete(id);
}

module.exports = {
  Payment,
  createPayment,
  findPaymentById,
  findPaymentsByBooking,
  updatePayment,
  deletePayment,
};