'use client';

import { motion } from "framer-motion";

export default function FinancialProjections() {
  const financialData = {
    summary: {
      totalInvestment: "14.8M – 19.05M EGP",
      projectedRevenueY1: "52M EGP",
      projectedEBITDAY1: "34M EGP",
      expectedROI: "3-5 Years",
      keyProfitDrivers: ["Accommodation", "Wellness Programs", "F&B"]
    },
    yearlyProjections: [
      { year: 1, revenue: "52M", ebitda: "34M", margin: "65%" },
      { year: 2, revenue: "69.3M", ebitda: "47.3M", margin: "68%" },
      { year: 3, revenue: "74.3M", ebitda: "50.3M", margin: "68%" }
    ],
    keyMetrics: {
      averageNightlyRate: "250 USD (~12,645 EGP)",
      occupancyRate: "70%",
      roomCount: "20"
    },
    facilitiesCosts: [
      { item: "Land Acquisition", cost: "10M-12M EGP" },
      { item: "Pool & Landscaping", cost: "800K-1.2M EGP" },
      { item: "Kitchen & Restaurant", cost: "1.5M-2M EGP" },
      { item: "Spa & Wellness Center", cost: "600K-800K EGP" },
      { item: "Eco Huts (15-20 units)", cost: "1.2M-1.5M EGP" },
      { item: "Yoga Space", cost: "200K-300K EGP" },
      { item: "Cold Room", cost: "150K-200K EGP" },
      { item: "Gift Shop", cost: "100K-150K EGP" },
      { item: "Staff Housing", cost: "500K-700K EGP" },
      { item: "Hydroponic Farm", cost: "100K EGP" }
    ],
    hydroponicFarmImpact: {
      initialInvestment: "100K EGP",
      annualRevenuePotential: "300K-500K EGP",
      annualCostSavings: "100K-150K EGP",
      estimatedROI: "12-18 months"
    },
    operationalExpensesSummary: {
      retailEstimateMonthly: "148,000 EGP",
      wholesaleEstimateMonthly: "103,600 – 118,400 EGP",
      potentialMonthlySavings: "29,600 – 44,400 EGP",
      savingsPercentage: "20-30%"
    },
    operationalExpensesBreakdown: {
      salariesWages: {
        totalMonthly: "184,000 EGP",
        roles: [
          { role: "General Manager (1)", cost: "20,000 EGP" },
          { role: "Front Desk (2)", cost: "24,000 EGP" },
          { role: "House Keeping (8)", cost: "64,000 EGP" },
          { role: "Kitchen Staff (4)", cost: "32,000 EGP" },
          { role: "Admin (Finance) (1)", cost: "12,000 EGP" },
          { role: "Gardeners/Janitors (4)", cost: "32,000 EGP" }
        ]
      },
      foodBeverage: {
        monthlyRetailEstimate: "130,000 EGP",
        items: [
          { name: "Chicken (10-12 kg)", cost: "2,000 EGP" },
          { name: "Beef/Lamb (7-9 kg)", cost: "4,500 EGP" },
          { name: "Fish (7-9 kg)", cost: "1,300 EGP" },
          { name: "Eggs (100-120)", cost: "450 EGP" },
          { name: "Fresh Vegetables (18-20 kg)", cost: "650 EGP" },
          { name: "Fresh Fruit (10-12 kg)", cost: "1,000 EGP" },
          { name: "Milk/Dairy (12-15L Milk, 6-9kg Yogurt, 4-6kg Cheese)", cost: "2,270 EGP" },
          { name: "Grains/Carbs (5-7 kg)", cost: "250 EGP" },
          { name: "Oil, Spices, Condiments (Bulk)", cost: "4,000 EGP" },
        ],
        note: "Estimates based on retail prices for 3-day cycles. Expected 20-30% savings with wholesale."
      },
      amenitiesSupplies: {
        monthlyRetailEstimate: "18,000 EGP",
        items: ["Refillable toiletries", "Cleaning materials", "Laundry supplies", "Pool maintenance chemicals"],
        note: "Estimates based on retail prices. Expected 20-30% savings with wholesale."
      },
      other: [
        { category: "Locals (Tips)", monthly: "50,000 EGP" },
        { category: "Marketing & Sales", monthly: "~100K EGP" },
        { category: "Maintenance & Repairs", monthly: "~80K EGP" }
      ]
    },
    revenueStreams: [
      { source: "Accommodation", percentage: "60%", color: "bg-blue-600" }, 
      { source: "Food & Beverage", percentage: "20%", color: "bg-green-500" },
      { source: "Activities", percentage: "13%", color: "bg-yellow-500" },
      { source: "Retail", percentage: "7%", color: "bg-purple-500" }
    ]
  };

  const formatCurrency = (value: string) => value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-blue-900"
        >
          Financial Projections & Investment Overview
        </motion.h1>

        {/* Executive Financial Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12 border border-blue-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Executive Financial Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Total Estimated Investment</p>
              <p className="text-xl font-bold text-blue-700">{financialData.summary.totalInvestment}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Projected Revenue (Year 1)</p>
              <p className="text-xl font-bold text-blue-700">{financialData.summary.projectedRevenueY1}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Projected EBITDA (Year 1)</p>
              <p className="text-xl font-bold text-blue-700">{financialData.summary.projectedEBITDAY1}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Expected ROI Period</p>
              <p className="text-xl font-bold text-blue-700">{financialData.summary.expectedROI}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-1">Key Profit Drivers:</p>
            <p className="font-semibold text-blue-700">{financialData.summary.keyProfitDrivers.join(", ")}</p>
          </div>
        </motion.section>

        {/* 3-Year Projections Table */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-6 rounded-lg shadow-md mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">3-Year Financial Projections</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-100 text-left">
                  <th className="p-3 font-semibold text-blue-800">Year</th>
                  <th className="p-3 font-semibold text-blue-800">Projected Revenue (EGP)</th>
                  <th className="p-3 font-semibold text-blue-800">Projected EBITDA (EGP)</th>
                  <th className="p-3 font-semibold text-blue-800">EBITDA Margin</th>
                </tr>
              </thead>
              <tbody>
                {financialData.yearlyProjections.map((yearData, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="p-3">Year {yearData.year}</td>
                    <td className="p-3">{formatCurrency(yearData.revenue)}</td>
                    <td className="p-3">{formatCurrency(yearData.ebitda)}</td>
                    <td className="p-3">{yearData.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Facilities Investment Breakdown */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 p-6 rounded-lg shadow-md mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Facilities Investment Breakdown</h2>
          <p className="text-sm text-gray-600 mb-4">Total Estimated: <span className="font-bold">{financialData.summary.totalInvestment}</span></p>
          <ul className="space-y-3">
            {financialData.facilitiesCosts.map((facility, index) => (
              <li key={index} className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">{facility.item}</span>
                <span className="font-semibold text-blue-700">{facility.cost}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Operational Expense Modeling Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-yellow-50 p-8 rounded-lg shadow-lg mb-12 border border-yellow-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-yellow-800">Operational Expense Modeling</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To ensure conservative financial planning, our initial monthly cost estimates for supplies (food, amenities, operations) are based on <span className="font-semibold">retail pricing</span> benchmarks (Amazon/Hyper One), totaling approximately <span className="font-semibold">{financialData.operationalExpensesSummary.retailEstimateMonthly}</span>. However, we anticipate significant savings through wholesale purchasing post-launch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded shadow-md text-center">
              <p className="text-sm text-gray-500 mb-1">Retail Estimate (Monthly)</p>
              <p className="text-xl font-bold text-yellow-700">{financialData.operationalExpensesSummary.retailEstimateMonthly}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md text-center">
              <p className="text-sm text-gray-500 mb-1">Est. Wholesale (Monthly)</p>
              <p className="text-xl font-bold text-green-700">{financialData.operationalExpensesSummary.wholesaleEstimateMonthly}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md text-center">
              <p className="text-sm text-gray-500 mb-1">Potential Savings (Monthly)</p>
              <p className="text-xl font-bold text-green-700">{financialData.operationalExpensesSummary.potentialMonthlySavings} ({financialData.operationalExpensesSummary.savingsPercentage})</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            This strategic margin buffer strengthens the business model, enhances EBITDA potential, and demonstrates resilience even under high-cost retail scenarios.
          </p>
          
          {/* Detailed Cost Breakdowns */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Salaries & Wages Breakdown (NEW COLUMN) */}
            <div className="bg-white p-6 rounded-lg shadow-inner lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800">Salaries & Wages Estimate</h3>
              <p className="text-sm text-gray-600 mb-4">Est. Monthly Total: <span className="font-semibold">{financialData.operationalExpensesBreakdown.salariesWages.totalMonthly}</span></p>
              <ul className="space-y-2 text-sm mb-4">
                {financialData.operationalExpensesBreakdown.salariesWages.roles.map((item, index) => (
                  <li key={index} className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">{item.role}</span>
                    <span className="font-medium text-gray-700">{item.cost}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Food & Beverage Cost Breakdown (Adjusted Span) */}
            <div className="bg-white p-6 rounded-lg shadow-inner lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800">Food & Beverage Cost Estimate (Retail)</h3>
              <p className="text-sm text-gray-600 mb-4">Est. Monthly (Retail): <span className="font-semibold">{financialData.operationalExpensesBreakdown.foodBeverage.monthlyRetailEstimate}</span></p>
              <p className="text-xs text-gray-500 mb-4">Breakdown based on 3-day cycles for 10-12 guests + staff:</p>
              <ul className="space-y-2 text-sm mb-4">
                {financialData.operationalExpensesBreakdown.foodBeverage.items.map((item, index) => (
                  <li key={index} className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="font-medium text-gray-700">{item.cost}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic">{financialData.operationalExpensesBreakdown.foodBeverage.note}</p>
            </div>
            
            {/* Amenities & Other Costs (Adjusted Span) */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-inner mb-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">Amenities & Supplies Estimate (Retail)</h3>
                <p className="text-sm text-gray-600 mb-4">Est. Monthly (Retail): <span className="font-semibold">{financialData.operationalExpensesBreakdown.amenitiesSupplies.monthlyRetailEstimate}</span></p>
                <p className="text-xs text-gray-500 mb-2">Includes:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {financialData.operationalExpensesBreakdown.amenitiesSupplies.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">{financialData.operationalExpensesBreakdown.amenitiesSupplies.note}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">Other Monthly Operational Expenses</h3>
                <ul className="space-y-2">
                  {financialData.operationalExpensesBreakdown.other.map((expense, index) => (
                    <li key={index} className="flex justify-between border-b border-gray-100 pb-1 text-sm">
                      <span className="text-gray-600">{expense.category}</span>
                      <span className="font-medium text-gray-700">{expense.monthly}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Revenue Streams Breakdown */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 p-6 rounded-lg shadow-md mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Projected Revenue Streams</h2>
          <div className="relative pt-1">
            {/* Labels */}
            <div className="flex mb-2 items-center justify-between">
              {financialData.revenueStreams.map((stream, index) => (
                <div key={index} className="text-center px-1" style={{ width: `${stream.percentage}` }}>
                  <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${stream.color.replace('bg-', 'text-').replace('-500', '-700').replace('-600', '-800')} ${stream.color.replace('bg-', 'bg-').replace('-500', '-100').replace('-600', '-100')}`}>
                    {stream.source} ({stream.percentage})
                  </span>
                </div>
              ))}
            </div>
            {/* Bar Chart */}
            <div className="overflow-hidden h-5 text-xs flex rounded bg-gray-200">
              {financialData.revenueStreams.map((stream, index) => (
                <div 
                  key={index} 
                  style={{ width: `${stream.percentage}` }} 
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${stream.color} transition-all duration-500 ease-out`}>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Hydroponic Farm Financial Impact */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-green-50 p-8 rounded-lg shadow-lg border border-green-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-green-800">Hydroponic Farm: Financial Impact & ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Initial Investment</p>
              <p className="text-xl font-bold text-green-700">{financialData.hydroponicFarmImpact.initialInvestment}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Annual Revenue Potential</p>
              <p className="text-xl font-bold text-green-700">{financialData.hydroponicFarmImpact.annualRevenuePotential}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Annual Cost Savings (F&B)</p>
              <p className="text-xl font-bold text-green-700">{financialData.hydroponicFarmImpact.annualCostSavings}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-500 mb-1">Estimated ROI</p>
              <p className="text-xl font-bold text-green-700">{financialData.hydroponicFarmImpact.estimatedROI}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-green-700">
            The hydroponic farm not only contributes to sustainability but also offers significant financial benefits through produce sales and operational cost reduction.
          </p>
        </motion.section>
      </div>
    </div>
  );
} 