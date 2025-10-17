import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import Login from './pages/Login';
import MobileLanding from './pages/MobileLanding';
import ServiceSelection from './pages/ServiceSelection';
import ProviderMarketplace from './pages/ProviderMarketplace';
import BookingDetails from './pages/BookingDetails';
import PaymentScreen from './pages/PaymentScreen';
import BookingConfirmation from './pages/BookingConfirmation';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import Dashboard from './pages/Dashboard';

import Bookings from './pages/Bookings';



import ProviderDashboard from './pages/ProviderDashboard';

import ManageProfile from './pages/ManageProfile';
import ViewBookings from './pages/ViewBookings';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MobileLanding />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<ServiceSelection />} />
          <Route path="/providers/:serviceId" element={<ProviderMarketplace />} />
          <Route path="/booking/:providerId/:serviceId" element={<BookingDetails />} />
          <Route path="/payment/:bookingId" element={<PaymentScreen />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/home" element={<WelcomeScreen />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/manage-profile" element={<ManageProfile />} />
          <Route path="/view-bookings" element={<ViewBookings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
