import React from 'react';
import { userData, socialSignIns } from '@/data/accountData';

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img 
            src={userData.avatar} 
            alt={userData.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {userData.name}
        </h2>
        
        {/* Edit Profile Button */}
        <button className="px-6 py-2 border border-gray-900 rounded-full text-sm font-medium hover:bg-gray-50 transition">
          Edit profile
        </button>
      </div>

      {/* Email */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-1">{userData.email}</p>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Change email
        </a>
      </div>

      {/* Password Status */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-1">No current password set</p>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Set password
        </a>
      </div>

      {/* Social Sign-ins */}
      <div>
        <div className="flex items-center justify-center space-x-3 mb-3">
          {socialSignIns.map((social) => (
            <div
              key={social.name}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <img 
                src={social.icon} 
                alt={social.name}
                className="w-5 h-5"
              />
            </div>
          ))}
        </div>
        <a href="#" className="text-sm text-blue-600 hover:underline block text-center">
          Manage social sign in
        </a>
      </div>
    </div>
  );
}

