'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExecutiveSummary() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Executive Summary</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Business Overview</h2>
            <p className="text-gray-800 mb-6">
              The Siwa Wellness Resort is a mid-range luxury retreat nestled in the heart of Egypt's Siwa Oasis. Designed with mud-brick eco huts and inspired by the mysticism of Ancient Egypt, our resort is built to host large wellness-focused retreats, targeting yoga instructors, spiritual leaders, mommy & me facilitators, and health influencers seeking authentic, serene environments. Operating year-round, our resort offers a turnkey space for group facilitators to host transformative retreats while enjoying the magical energy of Siwa.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Location Advantage</h2>
            <p className="text-gray-800 mb-6">
              The resort will be developed on a 1.5 feddan plot (approx. 1.55 acres) in Siwa with access to water, electricity, and full licensing. The location is minutes from major natural wonders like the salt lakes, Great Sand Sea, and the Oracle Temple.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Offering</h2>
            <p className="text-gray-800 mb-6">
              We provide ready-made infrastructure, accommodations, and hospitality services for outside instructors to rent the full resort and host their groups.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Target Market</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Primary Market</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Yoga instructors with international/local student bases</li>
                  <li>Wellness retreat organizers</li>
                  <li>Mommy & Me coaches</li>
                  <li>Health & wellness influencers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Secondary Market</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Tour agencies focused on holistic travel</li>
                  <li>Digital nomad wellness groups</li>
                  <li>Conscious community builders</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Financial Highlights</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Year</th>
                    <th className="py-2 px-4 border-b">Revenue (M EGP)</th>
                    <th className="py-2 px-4 border-b">EBITDA (M EGP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Year 1</td>
                    <td className="py-2 px-4 border-b">52M</td>
                    <td className="py-2 px-4 border-b">34M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Year 2</td>
                    <td className="py-2 px-4 border-b">69.3M</td>
                    <td className="py-2 px-4 border-b">47.3M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Year 3</td>
                    <td className="py-2 px-4 border-b">74.3M</td>
                    <td className="py-2 px-4 border-b">50.3M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Investment Requirements</h2>
            <p className="text-gray-800 mb-6">
              Total Capital Required: 19M EGP | Equity Offered: Up to 40% negotiable
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Development Timeline</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Month 1-2: Land purchase & permits</li>
              <li>Month 3-6: Construction phase</li>
              <li>Month 7: Hiring & soft marketing</li>
              <li>Month 8: Trial retreat with partners</li>
              <li>Month 9: Full launch with bookings open</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 