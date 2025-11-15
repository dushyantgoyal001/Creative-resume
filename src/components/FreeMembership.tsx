import React from 'react';
import { freeMembershipCards, freeServices } from '@/data/accountData';

export default function FreeMembership() {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Adobe free membership
        </h2>
        <p className="text-gray-600">
          Your Adobe account includes access to many apps and services:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Cards */}
        {freeMembershipCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {card.description}
              </p>
              <button className="px-6 py-2 border border-gray-900 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}

        {/* Services List Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <ul className="space-y-4">
            {freeServices.map((service) => (
              <li key={service.name} className="flex items-center space-x-3">
                <div className="w-8 h-8 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
                  <img 
                    src={service.icon}
                    alt={service.name}
                    className="w-5 h-5"
                  />
                </div>
                <span className="text-sm text-gray-700">{service.name}</span>
              </li>
            ))}
            <li>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                +18 view more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

