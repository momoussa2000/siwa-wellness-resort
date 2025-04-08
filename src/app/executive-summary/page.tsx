'use client';

import { motion } from "framer-motion";

export default function ExecutiveSummary() {
  const summaryData = {
    intro: "The Siwa Wellness Resort is an eco-friendly retreat in Egypt's Siwa Oasis, offering yoga and wellness retreats. Targeting group leaders and wellness influencers, the resort provides eco-friendly mud-brick huts, spa experiences, and curated cultural activities. The resort is designed to operate year-round, with strong revenue potential driven by advanced bookings and consistent group demand.",
    businessOverview: "The Siwa Wellness Resort is an eco-friendly retreat nestled in the heart of Egypt's Siwa Oasis. Designed with mud-brick eco huts and inspired by the mysticism of Ancient Egypt, our resort is built to host large wellness-focused retreats, targeting yoga instructors, spiritual leaders, mommy & me facilitators, and health influencers seeking authentic, serene environments. Operating year-round, our resort offers a turnkey space for group facilitators to host transformative retreats while enjoying the magical energy of Siwa.",
    locationAdvantage: "The resort will be developed on a 1.5 feddan plot (approx. 1.55 acres) in Siwa with access to water, electricity, and full licensing. The location is minutes from major natural wonders like the salt lakes, Great Sand Sea, and the Oracle Temple.",
    keyOffering: "We provide ready-made infrastructure, accommodations, and hospitality services for outside instructors to rent the full resort and host their groups.",
    targetMarket: {
      primary: [
        "Yoga instructors with international/local student bases",
        "Wellness retreat organizers",
        "Mommy & Me coaches",
        "Health & wellness influencers"
      ],
      secondary: [
        "Tour agencies focused on holistic travel",
        "Digital nomad wellness groups",
        "Conscious community builders"
      ]
    },
    financialHighlights: [
      { year: 1, revenue: "52M EGP", ebitda: "34M EGP" },
      { year: 2, revenue: "69.3M EGP", ebitda: "47.3M EGP" },
      { year: 3, revenue: "74.3M EGP", ebitda: "50.3M EGP" }
    ],
    investmentRequirements: "Total Capital Required: 19M EGP | Equity Offered: Up to 40% negotiable",
    developmentTimeline: [
      "Month 1-2: Land purchase & permits",
      "Month 3-6: Construction phase",
      "Month 7: Hiring & soft marketing",
      "Month 8: Trial retreat with partners",
      "Month 9: Full launch with bookings open"
    ]
  };

  const renderList = (items: string[]) => (
    <ul className="list-disc pl-6 space-y-1 text-gray-600">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );

  return (
    // Standard Page Layout
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-blue-900"
        >
          Executive Summary
        </motion.h1>

        {/* Concise Intro Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-8 rounded-lg shadow-md mb-12 border border-blue-100"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {summaryData.intro}
          </p>
        </motion.section>

        {/* Business Overview Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Business Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            {summaryData.businessOverview}
          </p>
        </motion.section>

        {/* Location & Offering Sections (Side-by-side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Location Advantage</h2>
            <p className="text-gray-700 leading-relaxed">
              {summaryData.locationAdvantage}
            </p>
          </motion.section>
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Key Offering</h2>
            <p className="text-gray-700 leading-relaxed">
              {summaryData.keyOffering}
            </p>
          </motion.section>
        </div>

        {/* Target Market Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Target Market</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Primary Market</h3>
              {renderList(summaryData.targetMarket.primary)}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Secondary Market</h3>
              {renderList(summaryData.targetMarket.secondary)}
            </div>
          </div>
        </motion.section>

        {/* Financial Highlights Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Financial Highlights (3-Year Projection)</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-100 text-left">
                  <th className="p-3 font-semibold text-blue-800">Year</th>
                  <th className="p-3 font-semibold text-blue-800">Revenue</th>
                  <th className="p-3 font-semibold text-blue-800">EBITDA</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.financialHighlights.map((yearData, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="p-3">Year {yearData.year}</td>
                    <td className="p-3">{yearData.revenue}</td>
                    <td className="p-3">{yearData.ebitda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Investment & Timeline Sections (Side-by-side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Investment Requirements</h2>
            <p className="text-gray-700 leading-relaxed">
              {summaryData.investmentRequirements}
            </p>
          </motion.section>
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Development Timeline</h2>
            {renderList(summaryData.developmentTimeline)}
          </motion.section>
        </div>

      </div>
    </div>
  );
} 