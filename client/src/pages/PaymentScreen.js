import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PaymentScreen = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCashPayment = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to make a payment.');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/bookings/${bookingId}`,
        { status: 'confirmed' },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('Booking confirmed!');
      navigate('/bookings');
    } catch (err) {
      console.error(err);
      alert('Failed to confirm booking. Please try again.');
    }
  };

  const handleCreditCardPayment = (e) => {
    e.preventDefault();
    // Simulate payment
    alert('Payment successful!');
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
      <div className="relative z-10">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Payment</h1>
          <p className="text-gray-700">Choose your payment method.</p>
        </header>
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-4 border-b">
          <button onClick={() => setPaymentMethod('credit-card')} className={`py-2 px-4 ${paymentMethod === 'credit-card' ? 'border-b-2 border-emerald-700' : ''}`}>Credit Card</button>
          <button onClick={() => setPaymentMethod('upi')} className={`py-2 px-4 ${paymentMethod === 'upi' ? 'border-b-2 border-emerald-700' : ''}`}>UPI</button>
          <button onClick={() => setPaymentMethod('cash')} className={`py-2 px-4 ${paymentMethod === 'cash' ? 'border-b-2 border-emerald-700' : ''}`}>Cash After Work</button>
        </div>

        {paymentMethod === 'credit-card' && (
          <form onSubmit={handleCreditCardPayment} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="mb-4 flex gap-2">
              <div className="flex-1">
                <label className="block text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
              Pay Now
            </button>
          </form>
        )}

        {paymentMethod === 'upi' && (
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-800">UPI Payment</h2>
            <p>Scan the QR code or use the UPI ID below.</p>
            <div className="my-4">
              <img src="https://via.placeholder.com/150" alt="QR Code" className="mx-auto" />
            </div>
            <p>your-upi-id@okhdfcbank</p>
          </div>
        )}

        {paymentMethod === 'cash' && (
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-800">Cash After Work</h2>
            <p>You have selected to pay in cash after the service is completed.</p>
            <button onClick={handleCashPayment} className="mt-4 w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
              Confirm Booking
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default PaymentScreen;