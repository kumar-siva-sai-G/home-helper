import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ServiceSelection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/services');
        setServices(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Link to="/dashboard" className="text-emerald-600 hover:text-emerald-800 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Select a Service</h1>
            <p className="text-xl text-gray-700">Choose the service you need help with</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service._id}
              to={`/providers/${service._id}`}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-emerald-300"
            >
              <div className="text-6xl mb-4 text-center">{service.icon || '🔧'}</div>
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">{service.name}</h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;