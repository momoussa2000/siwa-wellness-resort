'use client';

import { motion } from 'framer-motion';

export default function TargetMarket() {
  const marketSegments = [
    {
      title: "Wellness Enthusiasts",
      description: "Health-conscious individuals seeking holistic wellness experiences",
      characteristics: [
        "Age: 30-65",
        "High disposable income",
        "Values authentic experiences",
        "Interested in holistic health"
      ]
    },
    {
      title: "Cultural Explorers",
      description: "Travelers interested in immersive cultural experiences and sustainable tourism",
      characteristics: [
        "Age: 25-60",
        "Adventure-oriented",
        "Environmentally conscious",
        "Appreciates local traditions"
      ]
    },
    {
      title: "Corporate Groups",
      description: "Companies seeking unique retreat and team-building locations",
      characteristics: [
        "Mid to large-sized companies",
        "Focus on employee wellbeing",
        "Values sustainability",
        "International presence"
      ]
    }
  ];

  const marketOpportunities = [
    {
      title: "Growing Wellness Tourism",
      stats: "17% annual growth in wellness tourism sector",
      description: "Rising global interest in wellness travel and holistic health experiences"
    },
    {
      title: "Unique Location",
      stats: "One of few luxury wellness resorts in Siwa",
      description: "First-mover advantage in an untapped market with natural healing resources"
    },
    {
      title: "Sustainable Tourism",
      stats: "73% of travelers seek sustainable options",
      description: "Growing demand for eco-friendly and culturally responsible travel experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-blue-900"
        >
          Target Market & Opportunity
        </motion.h1>

        {/* Market Overview */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Market Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The global wellness tourism market presents a significant opportunity, with travelers increasingly 
            seeking authentic, transformative experiences that combine health, culture, and sustainability. 
            Siwa Wellness Resort is positioned to capture this growing market by offering a unique blend of 
            traditional healing practices and modern wellness approaches in an extraordinary setting.
          </p>
        </motion.section>

        {/* Target Segments */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Target Segments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketSegments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{segment.title}</h3>
                <p className="text-gray-700 mb-4">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.characteristics.map((trait, traitIndex) => (
                    <li key={traitIndex} className="flex items-start text-gray-600">
                      <span className="mr-2">•</span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Market Opportunities */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Market Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{opportunity.title}</h3>
                <p className="text-2xl font-bold text-green-600 mb-3">{opportunity.stats}</p>
                <p className="text-gray-700">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Competitive Advantage */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Our Competitive Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Location & Heritage</h3>
              <p className="text-gray-700">Unique access to Siwa's natural healing resources and rich cultural heritage</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Local Partner Network</h3>
              <p className="text-gray-700">Strong local partnerships and Hesham's established network</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Sustainable Practices</h3>
              <p className="text-gray-700">Industry-leading environmental initiatives and community engagement</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Authentic Experience</h3>
              <p className="text-gray-700">Genuine integration of traditional practices with modern wellness approaches</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Innovation</h3>
              <p className="text-gray-700">Cutting-edge sustainability technology and wellness programs</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Turnkey Solution</h3>
              <p className="text-gray-700">Ready infrastructure for retreat leaders, minimizing their logistical burden</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 