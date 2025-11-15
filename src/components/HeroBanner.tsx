import React from 'react';
import { resumeData } from '@/data/accountData';

export default function HeroBanner() {
  // Get first name from centralized data
  const firstName = resumeData.user.name.split(' ')[0];
  
  return (
      <div className="relative w-full h-36 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-700">
          {/* Additional gradient overlays for more complexity */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 via-transparent to-orange-600/70"></div>
        </div>
      
          {/* Welcome Text */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Welcome to your account, {firstName}
            </h1>
          </div>
    </div>
  );
}

