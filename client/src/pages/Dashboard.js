import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/background.mp4';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8 relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <Link to="/" className="text-emerald-600 hover:text-emerald-800 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link to="/home" className="bg-emerald-600 text-white py-4 px-6 rounded-lg text-center hover:bg-emerald-700 transition duration-200">
            Home
          </Link>
          <Link to="/services" className="bg-emerald-600 text-white py-4 px-6 rounded-lg text-center hover:bg-emerald-700 transition duration-200">
            Services
          </Link>
          <Link to="/profile" className="bg-emerald-600 text-white py-4 px-6 rounded-lg text-center hover:bg-emerald-700 transition duration-200">
            My Profile
          </Link>
          <Link to="/bookings" className="bg-emerald-600 text-white py-4 px-6 rounded-lg text-center hover:bg-emerald-700 transition duration-200">
            My Bookings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;