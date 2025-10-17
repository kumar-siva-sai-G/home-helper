import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/bookings', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setBookings(res.data);
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <Link to="/dashboard" className="text-emerald-600 hover:text-emerald-800 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
        </div>
        {bookings.length > 0 ? (
          <ul className="space-y-4">
            {bookings.map(booking => (
              <li key={booking._id} className="p-4 bg-gray-50 rounded-lg shadow">
                <p><strong>Service:</strong> {booking.service.name}</p>
                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no bookings.</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;