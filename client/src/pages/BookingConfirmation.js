import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
      <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md text-center max-w-md">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-700 mb-6">Your service has been booked successfully. You will receive a confirmation email shortly.</p>
        <Link to="/welcome" className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;