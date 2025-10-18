import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProviderMarketplace = () => {
  const { serviceId } = useParams();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get(`/api/providers/service/${serviceId}`);
        setProviders(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProviders();
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
      <div className="relative z-10">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Available Providers</h1>
          <p className="text-gray-700">Select a provider for your service.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {providers.map((provider) => (
          <div key={provider._id} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{provider.user.name}</h2>
            <p className="text-gray-600 mb-2 font-medium">{provider.designation}</p>
            <p className="text-gray-600 mb-2">{provider.bio}</p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1">{provider.rating || 'No reviews'}</span>
            </div>
            <p className="text-lg font-bold text-purple-700">${provider.hourlyRate}/hr</p>
            <Link
              to={`/booking/${provider._id}/${serviceId}`}
              className="mt-4 inline-block bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            >
              Book Now
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderMarketplace;