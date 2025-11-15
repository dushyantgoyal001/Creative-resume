import React from 'react';
import { resumeData } from '@/data/accountData';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Nav */}
          <div className="flex items-center space-x-8">
            {/* Adobe Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/images/adobe-logo.svg" 
                alt="Adobe" 
                className="h-6"
              />
              <span className="text-lg font-medium text-gray-900">
                Adobe Account
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              {resumeData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm ${
                    item.active
                      ? 'text-gray-900 font-medium border-b-2 border-gray-900 pb-4'
                      : 'text-gray-600 hover:text-gray-900 pb-4'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* Apps Grid */}
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
              </svg>
            </button>

            {/* Profile Avatar */}
            <button className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src={resumeData.user.avatar}
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

