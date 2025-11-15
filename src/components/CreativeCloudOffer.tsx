'use client';

import React, { useState } from 'react';
import { resumeData } from '@/data/accountData';

export default function CreativeCloudOffer() {
  const identityCard = resumeData.identityCard;
  const [showShareModal, setShowShareModal] = useState(false);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };
  
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
      {/* Gradient Header with Title */}
      <div className="h-32 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          CREATIVE IDENTITY CARD
        </h1>
      </div>
      
      {/* Card Content */}
      <div className="p-8">
        {/* Summary Section - Full Width */}
        <div className="mb-8">
          <h3 className="text-sm font-bold mb-3 tracking-wide">SUMMARY</h3>
          <p className="text-base text-gray-700 leading-relaxed">
            {identityCard.summary}
          </p>
        </div>

        <div className="border-t border-gray-200 mb-8"></div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Signature Style */}
            <div>
              <h3 className="text-sm font-bold mb-2 tracking-wide">SIGNATURE STYLE</h3>
              <p className="text-base font-normal">{identityCard.signatureStyle}</p>
            </div>
            
            <div className="border-t border-gray-200"></div>
            
            {/* Core Themes */}
            <div>
              <h3 className="text-sm font-bold mb-3 tracking-wide">CORE THEMES</h3>
              <div className="space-y-1">
                {identityCard.coreThemes.map((theme, index) => (
                  <p key={index} className="text-base font-normal">{theme}</p>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200"></div>
            
            {/* Portfolio Proof */}
            <div>
              <h3 className="text-sm font-bold mb-3 tracking-wide">PORTFOLIO PROOF</h3>
              <div className="space-y-3">
                {identityCard.portfolios.map((portfolio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded overflow-hidden flex items-center justify-center bg-white">
                      <img 
                        src={portfolio.icon} 
                        alt={portfolio.platform}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-base font-normal">{portfolio.projectCount} projects</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Techniques & Tools */}
            <div>
              <h3 className="text-sm font-bold mb-3 tracking-wide">TECHNIQUES & TOOLS</h3>
              <div className="space-y-3">
                {identityCard.techniques.map((technique, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-10 h-10 rounded overflow-hidden flex items-center justify-center">
                        <img 
                          src={technique.icon}
                          alt={technique.appName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-base">{technique.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200"></div>
            
            {/* Strengths & Skill Markers */}
            <div>
              <h3 className="text-sm font-bold mb-3 tracking-wide">STRENGTHS & SKILL MARKERS</h3>
              <div className="space-y-1">
                {identityCard.strengths.map((strength, index) => (
                  <p key={index} className="text-base font-normal">{strength}</p>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200"></div>
            
            {/* Adobe Verified & Actions */}
            <div className="flex items-center justify-between">
              {identityCard.verification.isVerified && (
                <div className="flex items-center space-x-2">
                  <img 
                    src="/images/verifiedLogo.svg" 
                    alt="Verified"
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="text-base font-bold">{identityCard.verification.platform}</div>
                    <div className="text-xs font-semibold tracking-wider">VERIFIED</div>
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button 
                  onClick={() => setShowShareModal(true)}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Share Modal */}
    {showShareModal && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => setShowShareModal(false)}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Share Profile</h3>
            <button 
              onClick={() => setShowShareModal(false)}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {identityCard.shareOptions?.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (option.name === 'Copy Link') {
                    handleCopyLink();
                  } else {
                    window.open(option.url, '_blank');
                  }
                }}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  {option.name === 'Copy Link' ? (
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ) : (
                    <img 
                      src={option.icon}
                      alt={option.name}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                </div>
                <span className="text-xs font-medium text-gray-700">{option.name}</span>
              </button>
            ))}
          </div>

          {/* Link Preview */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-2">Profile URL</p>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={typeof window !== 'undefined' ? window.location.href : ''}
                readOnly
                className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600"
              />
              <button 
                onClick={handleCopyLink}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
}

