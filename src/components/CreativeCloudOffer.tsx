import React from 'react';
import { creativeCloudOffer } from '@/data/accountData';

export default function CreativeCloudOffer() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image and Plan Info */}
        <div className="md:w-2/5 bg-gray-50 p-6 border-r border-gray-200">
          {/* Sale Image */}
          <div className="mb-4">
            <img 
              src={creativeCloudOffer.image}
              alt="Creative Cloud Sale"
              className="w-full h-auto rounded"
            />
          </div>
          
          {/* Plan Info */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {creativeCloudOffer.planName}
          </h3>
          <p className="text-sm text-gray-600">
            {creativeCloudOffer.planDescription}
          </p>
        </div>

        {/* Right side - Offer Details */}
        <div className="md:w-3/5 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {creativeCloudOffer.title}
          </h2>
          
          <p className="text-sm text-gray-600 mb-4">
            {creativeCloudOffer.description}
          </p>

          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-baseline space-x-2 mb-1">
              <span className="text-sm text-gray-500">Starting at</span>
              <span className="text-sm text-gray-500 line-through">
                {creativeCloudOffer.originalPrice}
              </span>
              <span className="text-2xl font-bold text-green-700">
                {creativeCloudOffer.discountedPrice}
              </span>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View offer terms
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Save now
            </button>
            <button className="px-6 py-2 border border-gray-900 rounded-full text-sm font-medium hover:bg-gray-50 transition">
              View other plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

