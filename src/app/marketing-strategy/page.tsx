'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function MarketingStrategy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Marketing Strategy</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Marketing Plan Overview</h2>
            <p className="text-gray-800 mb-6">
              Revenue includes group rentals, spa services, gift shop sales, and add-ons like meals and excursions. Outsourced facilitators bring guests while the resort handles hospitality and experiences.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Branding Strategy</h2>
            <p className="text-gray-800 mb-6">
              The resort features 15-20 eco huts, a yoga deck, spa, natural hot spring, communal firepit, and organic dining. Design language incorporates ancient Egyptian motifs with minimalist luxury and local artisan work.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Marketing Channels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Primary Channels</h3>
                <ul className="list-disc pl-6 text-gray-800">
                  <li>Group leaders and wellness influencers</li>
                  <li>Outsourced facilitators</li>
                  <li>Direct bookings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secondary Channels</h3>
                <ul className="list-disc pl-6 text-gray-800">
                  <li>Digital nomads</li>
                  <li>Eco-tourists</li>
                  <li>Tour operators</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Promotional Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Experiences & Activities</h3>
                <ul className="list-disc pl-6 text-gray-800">
                  <li>Mr. Abdullah's Telescope & Stargazing Night</li>
                  <li>Natural Hot Spring Soak</li>
                  <li>Salt Lake Plunge</li>
                  <li>Loweesa Tea Ritual by bonfire or hot spring</li>
                  <li>Desert Safari with Bedouin guides</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Unique Selling Points</h3>
                <ul className="list-disc pl-6 text-gray-800">
                  <li>Unique location and eco design</li>
                  <li>Trusted local partner (Hesham)</li>
                  <li>Cultural immersion</li>
                  <li>Ready infrastructure</li>
                  <li>Influencer partnerships</li>
                  <li>Exclusive Hathor-powered spa</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Marketing Budget</h2>
            <p className="text-gray-800 mb-6">
              Total investment needed: 19M EGP | Equity offered: up to 40%
              Funds will be allocated toward land, buildout, spa, furnishings, marketing, and working capital.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 