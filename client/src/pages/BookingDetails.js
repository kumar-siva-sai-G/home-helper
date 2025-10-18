import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BookingDetails = () => {
  const { providerId, serviceId } = useParams();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to book a service.');
      return;
    }

    try {
      const res = await axios.post('/api/bookings', {
        provider: providerId,
        service: serviceId,
        date,
        time,
        notes: description,
        status: 'pending',
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate(`/payment/${res.data._id}`);
    } catch (err) {
      console.error(err);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
      <div className="relative z-10">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Book Service</h1>
          <p className="text-gray-700">Provide details for your booking.</p>
        </header>
        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Describe the service needed"
            required
          />
        </div>
        <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
          Book Now
        </button>
      </form>
      </div>
    </div>
  );
};

export default BookingDetails;