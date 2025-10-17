import React from 'react';
import { Link } from 'react-router-dom';

const ProviderDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
     <div className="relative z-10">
       <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
         <div className="flex items-center justify-between mb-4">
           <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
           <Link to="/" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
             Home
           </Link>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <Link to="/manage-profile" className="bg-indigo-600 text-white py-4 px-6 rounded-lg text-center hover:bg-indigo-700 transition duration-200">
             Manage Profile
           </Link>
           <Link to="/view-bookings" className="bg-indigo-600 text-white py-4 px-6 rounded-lg text-center hover:bg-indigo-700 transition duration-200">
             View Bookings
           </Link>
         </div>
       </div>
     </div>
   </div>
 );
};

export default ProviderDashboard;