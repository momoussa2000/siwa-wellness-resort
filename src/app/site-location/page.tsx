'use client';

import { motion } from 'framer-motion';

export default function SiteLocation() {
  const siteFeatures = [
    {
      title: "Natural Resources",
      features: [
        "Natural hot and cold springs",
        "Mineral-rich salt lakes",
        "Desert landscape",
        "Palm groves and olive trees"
      ]
    },
    {
      title: "Climate",
      features: [
        "Year-round sunny weather",
        "Low humidity",
        "Cool desert nights",
        "Clear starlit skies"
      ]
    },
    {
      title: "Accessibility",
      features: [
        "8-hour drive from Cairo",
        "Private airport nearby",
        "4x4 vehicle access",
        "Helicopter landing area"
      ]
    }
  ];

  const locationBenefits = [
    {
      title: "Cultural Heritage",
      description: "Access to ancient Siwan traditions and healing practices",
      icon: "🏺"
    },
    {
      title: "Natural Healing",
      description: "Therapeutic springs and salt lakes with proven health benefits",
      icon: "💧"
    },
    {
      title: "Privacy",
      description: "Secluded location offering ultimate tranquility and exclusivity",
      icon: "🌟"
    },
    {
      title: "Adventure",
      description: "Proximity to desert safari routes and historical sites",
      icon: "🐪"
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
          Site & Location
        </motion.h1>

        {/* Location Overview */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Siwa Oasis</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Located in Egypt's Western Desert, Siwa Oasis is a natural wonder known for its pristine 
            beauty, rich cultural heritage, and healing natural resources. Our resort site has been 
            carefully selected to maximize access to these unique features while ensuring minimal 
            environmental impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Location Coordinates</h3>
              <p className="text-gray-700">29°12'N 25°31'E</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Elevation</h3>
              <p className="text-gray-700">-19m below sea level</p>
            </div>
          </div>
        </motion.section>

        {/* Site Features */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Site Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteFeatures.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-800">{category.title}</h3>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Location Benefits */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Location Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <span className="text-4xl">{benefit.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Environmental Considerations */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Environmental Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Protection Measures</h3>
              <p className="text-gray-700">
                Comprehensive environmental impact assessment and protection measures for local ecosystem
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Resource Management</h3>
              <p className="text-gray-700">
                Sustainable water management and renewable energy systems to minimize environmental impact
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 