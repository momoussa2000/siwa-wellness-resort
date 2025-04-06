'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function OperationsPlan() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Operations Plan</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Model & Revenue Streams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Space Rental Model</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Full-resort rentals for retreat leaders</li>
                  <li>Fixed group pricing or per-person rate options</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Revenue Streams</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Resort rental fees</li>
                  <li>Add-ons (meals, excursions, guides, salt lake trips)</li>
                  <li>Gift shop sales (local artisanal products, Siwan crafts)</li>
                  <li>Spa services (massage, skin & hair care)</li>
                  <li>Future potential: branded products, in-house events</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operational Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Core Team</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Manager</li>
                  <li>Kitchen/hospitality staff</li>
                  <li>Housekeepers</li>
                  <li>Maintenance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Outsourced Operations</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Retreat leaders bring their own guests and facilitators</li>
                  <li>Spa operations by Hathor Natural Cosmetics</li>
                  <li>Hathor covers their own staffing costs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Local Management</h2>
            <p className="text-gray-800 mb-6">
              Hesham acts as fixer, guide, operations support, and staff recruiter, leveraging his deep local connections and expertise in Siwa.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Seasonal Operations</h2>
            <p className="text-gray-800 mb-6">
              Lower capacity expected from June–September due to heat. Operations will be adjusted accordingly during these months.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Suggested Experiences & Activities</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Mr. Abdullah's Telescope & Stargazing Night: Learn ancient navigation techniques, explore constellations, and observe planets and the moon up close</li>
              <li>Natural Hot Spring Soak: Reawaken your body and soul while relaxing in Siwa's naturally heated springs</li>
              <li>Salt Lake Plunge: Dive into the turquoise salt lakes and experience their healing, detoxifying properties</li>
              <li>Loweesa Tea Ritual: Enjoy Siwa's famed tea by a bonfire or while soaking at a spring, steeped in tradition and calm</li>
              <li>Desert Safari: Off-road adventure with Bedouin drivers over golden dunes, culminating in a breathtaking sunset view and meditative stillness</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Quality Control</h2>
            <p className="text-gray-800 mb-6">
              Our operational model ensures quality through:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Carefully selected retreat leaders and facilitators</li>
              <li>Professional spa services by Hathor Natural Cosmetics</li>
              <li>Local expertise through Hesham's guidance</li>
              <li>Consistent staff training and development</li>
              <li>Regular feedback collection from guests and facilitators</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 