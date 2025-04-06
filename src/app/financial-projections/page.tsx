'use client';

import { motion } from "framer-motion";

export default function FinancialProjections() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Financial Projections</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Facilities Overview</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Facility</th>
                    <th className="py-2 px-4 border-b">Estimated Cost (EGP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Land Acquisition (1.5 feddans)</td>
                    <td className="py-2 px-4 border-b">1.2M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Pool</td>
                    <td className="py-2 px-4 border-b">2M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Communal Area</td>
                    <td className="py-2 px-4 border-b">500K</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Cold Room</td>
                    <td className="py-2 px-4 border-b">2M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Restaurant + Kitchen</td>
                    <td className="py-2 px-4 border-b">3M – 5M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Staff Housing & Storage</td>
                    <td className="py-2 px-4 border-b">2M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Guest Rooms (15-20)</td>
                    <td className="py-2 px-4 border-b">3.75M – 5M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Yoga/Recreational Area</td>
                    <td className="py-2 px-4 border-b">500K</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Spa & Hot Spring Area</td>
                    <td className="py-2 px-4 border-b">1M – 1.5M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Gift Shop</td>
                    <td className="py-2 px-4 border-b">250K</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Hydroponic Farm</td>
                    <td className="py-2 px-4 border-b">100K</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2 px-4 border-b">Total Range</td>
                    <td className="py-2 px-4 border-b">14.8M – 19.05M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Financial Forecast (3-Year Summary)</h2>
            <p className="text-gray-800 mb-4">
              Assumptions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Average nightly rate per room: 250 USD (~12,645 EGP)</li>
              <li>Occupancy: 70% over 9 months (approx. 274 nights/year)</li>
              <li>20 rooms operating at 70% occupancy = 20 x 274 x 12,645 = ~69.3M EGP annual gross potential revenue</li>
            </ul>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Year</th>
                    <th className="py-2 px-4 border-b">Rooms</th>
                    <th className="py-2 px-4 border-b">Occupancy</th>
                    <th className="py-2 px-4 border-b">Annual Revenue (EGP)</th>
                    <th className="py-2 px-4 border-b">Expenses</th>
                    <th className="py-2 px-4 border-b">EBITDA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">15</td>
                    <td className="py-2 px-4 border-b">70%</td>
                    <td className="py-2 px-4 border-b">52M</td>
                    <td className="py-2 px-4 border-b">18M</td>
                    <td className="py-2 px-4 border-b">34M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">2</td>
                    <td className="py-2 px-4 border-b">20</td>
                    <td className="py-2 px-4 border-b">70%</td>
                    <td className="py-2 px-4 border-b">69.3M</td>
                    <td className="py-2 px-4 border-b">22M</td>
                    <td className="py-2 px-4 border-b">47.3M</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">3</td>
                    <td className="py-2 px-4 border-b">20</td>
                    <td className="py-2 px-4 border-b">75%</td>
                    <td className="py-2 px-4 border-b">74.3M</td>
                    <td className="py-2 px-4 border-b">24M</td>
                    <td className="py-2 px-4 border-b">50.3M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Performance Insights</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Break-even Point: Expected within 15–18 months of launch under 70% occupancy</li>
              <li>Average Group Size per Booking: 20–25 participants</li>
              <li>Monthly Revenue Potential (at 70% occupancy): ~5.7M EGP</li>
              <li>Gift Shop Upsell Potential: ~200K–300K EGP/year based on artisanal souvenir sales</li>
              <li>Spa Revenue Potential: Estimated 500K–1M EGP/year from massage and treatment bookings</li>
              <li>Max Onsite Capacity: ~60 guests across 20 suites</li>
              <li>Hydroponic Farm Revenue Potential: ~300K–500K EGP/year from produce sales to local markets and hotels</li>
              <li>Hydroponic Farm Cost Savings: ~100K–150K EGP/year by reducing produce purchasing costs</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hydroponic Farm Technical Details</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800">Setup Cost</h4>
                  <p className="text-gray-700">100,000 EGP</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Produce Types</h4>
                  <p className="text-gray-700">Lettuce varieties, parsley, mint, cabbage, and other seasonal vegetables and herbs</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Tower Count</h4>
                  <p className="text-gray-700">10 vertical towers</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Water Efficiency</h4>
                  <p className="text-gray-700">90% less water usage compared to traditional farming</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Educational Value</h4>
                  <p className="text-gray-700">Guests can participate in harvesting and learn about sustainable farming practices</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Revenue Stream</h4>
                  <p className="text-gray-700">Excess produce sold to local markets and hotels, generating 300K-500K EGP/year</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Cost Savings</h4>
                  <p className="text-gray-700">Reduces produce purchasing costs by 100K-150K EGP/year</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Monthly Operating Costs – Staffing & Utilities</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Role</th>
                    <th className="py-2 px-4 border-b">Count</th>
                    <th className="py-2 px-4 border-b">Salary (EGP)</th>
                    <th className="py-2 px-4 border-b">Total Monthly Cost (EGP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">General Manager</td>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">20,000</td>
                    <td className="py-2 px-4 border-b">20,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Front Desk</td>
                    <td className="py-2 px-4 border-b">2</td>
                    <td className="py-2 px-4 border-b">12,000</td>
                    <td className="py-2 px-4 border-b">24,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Housekeeping</td>
                    <td className="py-2 px-4 border-b">8</td>
                    <td className="py-2 px-4 border-b">8,000</td>
                    <td className="py-2 px-4 border-b">64,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Kitchen Staff</td>
                    <td className="py-2 px-4 border-b">4</td>
                    <td className="py-2 px-4 border-b">8,000</td>
                    <td className="py-2 px-4 border-b">32,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Admin / Finance Officer</td>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">12,000</td>
                    <td className="py-2 px-4 border-b">12,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Gardeners / Janitors</td>
                    <td className="py-2 px-4 border-b">4</td>
                    <td className="py-2 px-4 border-b">8,000</td>
                    <td className="py-2 px-4 border-b">32,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Utilities</td>
                    <td className="py-2 px-4 border-b">-</td>
                    <td className="py-2 px-4 border-b">-</td>
                    <td className="py-2 px-4 border-b">20,000</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2 px-4 border-b">Total Monthly Estimate</td>
                    <td className="py-2 px-4 border-b">-</td>
                    <td className="py-2 px-4 border-b">-</td>
                    <td className="py-2 px-4 border-b">204,000 EGP</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-800 mt-4">
              Monthly operating costs are expected to range between <strong>200K–210K EGP</strong>, depending on utility and seasonal fluctuations. Staffing for the spa is managed and paid for by Hathor.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Investment Requirements</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Total Capital Required: 19M EGP</li>
              <li>Equity Offered: Up to 40% negotiable</li>
              <li>Use of Funds:
                <ul className="list-disc pl-6 mt-2">
                  <li>Land purchase & permits</li>
                  <li>Construction of eco huts & facilities</li>
                  <li>Spa & gift shop development</li>
                  <li>Furnishing & equipment</li>
                  <li>Marketing & brand launch</li>
                  <li>Working capital for Year 1</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 