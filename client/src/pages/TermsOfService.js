import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <button onClick={() => navigate(-1)} className="text-indigo-600 hover:text-indigo-500 mb-4">
          &larr; Go Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <div className="text-gray-600 space-y-4">
          <p>Welcome to HomeFix. These terms and conditions outline the rules and regulations for the use of HomeFix's Website, located at homefix.com.</p>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use HomeFix if you do not agree to take all of the terms and conditions stated on this page.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Cookies</h2>
          <p>We employ the use of cookies. By accessing HomeFix, you agreed to use cookies in agreement with the HomeFix's Privacy Policy.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">License</h2>
          <p>Unless otherwise stated, HomeFix and/or its licensors own the intellectual property rights for all material on HomeFix. All intellectual property rights are reserved. You may access this from HomeFix for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Republish material from HomeFix</li>
            <li>Sell, rent or sub-license material from HomeFix</li>
            <li>Reproduce, duplicate or copy material from HomeFix</li>
            <li>Redistribute content from HomeFix</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Disclaimer</h2>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
          <ul className="list-disc list-inside ml-4">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;