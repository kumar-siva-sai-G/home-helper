import React from 'react';
import { Link } from 'react-router-dom';

const MobileLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">HomeFix</h1>
            </div>
            <Link
              to="/welcome"
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Home, <span className="text-emerald-600">Handled</span> with Care
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with trusted professionals for all your home service needs. From quick fixes to major renovations, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition duration-200">
                Download App
              </button>
              <Link
                to="/welcome"
                className="bg-white text-emerald-600 px-8 py-3 rounded-md border border-emerald-600 hover:bg-emerald-50 transition duration-200"
              >
                Sign Up Online
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HomeFix?</h3>
              <p className="text-lg text-gray-600">We're committed to providing top-notch service that fits your budget and schedule.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Verified Professionals</h4>
                <p className="text-gray-600">All our service providers are thoroughly vetted and background-checked for your peace of mind.</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h4>
                <p className="text-gray-600">Get connected with a professional in minutes and have your service completed promptly.</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Affordable Pricing</h4>
                <p className="text-gray-600">Competitive rates and transparent pricing ensure you get the best value for your money.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Simplify Home Maintenance?</h3>
            <p className="text-xl mb-8">Download the HomeFix app or sign up online today and experience hassle-free home services.</p>
            <Link
              to="/welcome"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-200"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold">HomeFix</h4>
              <p className="text-gray-400">Your trusted home service platform</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">© 2024 HomeFix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileLanding;