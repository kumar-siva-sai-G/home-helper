import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <button onClick={() => navigate(-1)} className="text-indigo-600 hover:text-indigo-500 mb-4">
          &larr; Go Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <div className="text-gray-600 space-y-4">
          <p>At HomeFix, accessible from homefix.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HomeFix and how we use it.</p>
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Log Files</h2>
          <p>HomeFix follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Information We Collect</h2>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
          <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Third-Party Privacy Policies</h2>
          <p>HomeFix's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;