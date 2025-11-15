import React from 'react';
import { resumeData } from '@/data/accountData';

export default function CreativeCloudOffer() {
  const identityCard = resumeData.identityCard;
  
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
      {/* Gradient Header with Title */}
      <div className="h-32 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          CREATIVE IDENTITY CARD
        </h1>
      </div>
      
      {/* Card Content */}
      <div className="p-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Signature Style */}
            <div>
              <h3 className="text-sm font-bold mb-2 tracking-wide">SIGNATURE STYLE</h3>
              <p className="text-2xl font-normal">{identityCard.signatureStyle}</p>
            </div>
            
            <div className="border-t border-gray-200"></div>
            
            {/* Core Themes */}
            <div>
              <h3 className="text-sm font-bold mb-3 tracking-wide">CORE THEMES</h3>
              <div className="space-y-1">
                {identityCard.coreThemes.map((theme, index) => (
                  <p key={index} className="text-2xl font-normal">{theme}</p>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200"></div>
            
            {/* Portfolio Proof */}
            <div>
              <h3 className="text-sm font-bold mb-3 tracking-wide">PORTFOLIO PROOF</h3>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <img 
                    src={identityCard.portfolio.icon} 
                    alt={identityCard.portfolio.platform}
                    className="w-6 h-6 invert"
                  />
                </div>
                <span className="text-2xl font-normal">{identityCard.portfolio.projectCount} projects</span>
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
                      <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{technique.appName}</span>
                      </div>
                    </div>
                    <span className="text-xl">{technique.name}</span>
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
                  <p key={index} className="text-xl font-normal">{strength}</p>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200"></div>
            
            {/* Adobe Verified & Actions */}
            <div className="flex items-center justify-between">
              {identityCard.verification.isVerified && (
                <div className="flex items-center space-x-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                  <div>
                    <div className="text-xl font-bold">{identityCard.verification.platform}</div>
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
                <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition">
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
  );
}

