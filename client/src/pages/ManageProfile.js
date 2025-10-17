import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageProfile = () => {
  const [provider, setProvider] = useState(null);
  const [form, setForm] = useState({ hourlyRate: '', bio: '' });

  useEffect(() => {
    const fetchProvider = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/providers/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProvider(res.data);
          setForm({ hourlyRate: res.data.hourlyRate, bio: res.data.bio });
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchProvider();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.put(`http://localhost:5000/api/providers/${provider._id}`,
          form,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        alert('Profile updated!');
      } catch (err) {
        console.error(err);
        alert('Failed to update profile. Please try again.');
      }
    }
  };

  if (!provider) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <Link to="/provider-dashboard" className="text-emerald-600 hover:text-emerald-800 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Manage Profile</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Hourly Rate</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                type="number"
                name="hourlyRate"
                value={form.hourlyRate}
                onChange={handleChange}
                className="w-full p-2 pl-8 border rounded"
                placeholder="0"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>
          <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageProfile;