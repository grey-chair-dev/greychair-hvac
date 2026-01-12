
import React from 'react';

const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-red-700 text-white py-2 px-4 text-center text-sm font-semibold sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
        <span>24/7 Emergency Service - Technicians On Call Now</span>
        <a href="tel:5135550123" className="underline hover:text-red-100 transition-colors">
          Call (513) 555-0123 for Immediate Dispatch
        </a>
      </div>
    </div>
  );
};

export default EmergencyBanner;
