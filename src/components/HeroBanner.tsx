import React from 'react';
import { userData } from '@/data/accountData';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-36 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-600">
        {/* Additional gradient overlays for more complexity */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 via-transparent to-orange-500/60"></div>
      </div>
      
      {/* Welcome Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-4xl font-light">
          Welcome to your account, {userData.name.split(' ')[0]}
        </h1>
      </div>
    </div>
  );
}

