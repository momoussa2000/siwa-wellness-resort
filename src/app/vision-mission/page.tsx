'use client';

import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-blue-900"
        >
          Vision & Mission
        </motion.h1>

        <div className="space-y-12">
          {/* Vision Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To create a transformative wellness sanctuary in Siwa Oasis that harmoniously blends 
              traditional healing practices with modern wellness approaches, while preserving and 
              celebrating the unique cultural and natural heritage of the region.
            </p>
          </motion.section>

          {/* Mission Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Our Mission</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Provide exceptional wellness experiences that combine local traditions with contemporary practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Foster sustainable tourism that benefits the local community and preserves Siwa's natural environment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Create meaningful employment opportunities for local residents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Promote wellness education and cultural exchange between guests and the local community</span>
              </li>
            </ul>
          </motion.section>

          {/* Values Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-800">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-700">Authenticity</h3>
                <p className="text-gray-700">Staying true to Siwa's cultural heritage while innovating in wellness practices</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-700">Sustainability</h3>
                <p className="text-gray-700">Minimizing environmental impact while maximizing positive community impact</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-700">Excellence</h3>
                <p className="text-gray-700">Delivering exceptional service and transformative experiences</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-700">Community</h3>
                <p className="text-gray-700">Building strong relationships with local stakeholders and guests</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
} 