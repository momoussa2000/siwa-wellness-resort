'use client';

import { motion } from "framer-motion";

export default function FinancialProjections() {
  const financialData = {
    yearlyProjections: [
      { year: 1, revenue: "52M", ebitda: "34M" },
      { year: 2, revenue: "69.3M", ebitda: "47.3M" },
      { year: 3, revenue: "74.3M", ebitda: "50.3M" }
    ],
    keyMetrics: {
      averageNightlyRate: "250 USD (~12,645 EGP)",
      occupancyRate: "70%",
      roomCount: "20"
    },
    facilitiesOverview: [
      { item: "Land", cost: "TBD" },
      { item: "Pool", cost: "TBD" },
      { item: "Kitchen & Restaurant", cost: "TBD" },
      { item: "Spa", cost: "TBD" },
      { item: "Eco Huts (15-20)", cost: "TBD" },
      { item: "Yoga Space", cost: "TBD" },
      { item: "Cold Room", cost: "TBD" },
      { item: "Gift Shop", cost: "TBD" },
      { item: "Staff Housing", cost: "TBD" }
    ],
    operationalExpenses: {
      monthlyRetail: "148,000 EGP",
      monthlyWholesale: "103,600-118,400 EGP",
      potentialSavings: "29,600-44,400 EGP"
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Financial Projections
        </motion.h1>

        {/* Key Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-6 rounded-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Key Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-600">Average Nightly Rate</p>
              <p className="text-xl font-semibold">{financialData.keyMetrics.averageNightlyRate}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-600">Occupancy Rate</p>
              <p className="text-xl font-semibold">{financialData.keyMetrics.occupancyRate}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-600">Room Count</p>
              <p className="text-xl font-semibold">{financialData.keyMetrics.roomCount}</p>
            </div>
          </div>
        </motion.div>

        {/* Yearly Projections */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 p-6 rounded-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">3-Year Financial Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {financialData.yearlyProjections.map((year, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">Year {year.year}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Revenue: <span className="font-semibold">{year.revenue} EGP</span></p>
                  <p className="text-gray-600">EBITDA: <span className="font-semibold">{year.ebitda} EGP</span></p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Operational Expenses */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 p-6 rounded-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Operational Expenses</h2>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600 mb-2">Monthly Retail Cost: <span className="font-semibold">{financialData.operationalExpenses.monthlyRetail}</span></p>
            <p className="text-gray-600 mb-2">Monthly Wholesale Cost: <span className="font-semibold">{financialData.operationalExpenses.monthlyWholesale}</span></p>
            <p className="text-gray-600">Potential Monthly Savings: <span className="font-semibold">{financialData.operationalExpenses.potentialSavings}</span></p>
          </div>
        </motion.div>

        {/* Facilities Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-50 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Facilities Overview</h2>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600 mb-4">Total Estimated Cost: <span className="font-semibold">14.7M – 18.95M EGP</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {financialData.facilitiesOverview.map((facility, index) => (
                <div key={index} className="border-b border-gray-200 py-2">
                  <p className="text-gray-600">{facility.item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 