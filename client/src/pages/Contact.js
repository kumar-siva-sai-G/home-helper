import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
      <div className="relative z-10">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-700">Get in touch with HomeFix support.</p>
        </header>
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md max-w-md mx-auto">
          <p className="mb-4">Email: support@homefix.com</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, State 12345</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;