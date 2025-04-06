'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function MarketAnalysis() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Market Analysis</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Target Market & Opportunity</h2>
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
            <p className="text-gray-800 mb-6">
              Global demand for wellness travel is booming, and Siwa's uniqueness offers a rare, authentic setting. With strategic marketing, the resort can tap into a wide network of international retreat leaders looking for turnkey venues.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">SWOT Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Strengths</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Unique location with ancient heritage and natural beauty</li>
                  <li>Operational licenses and infrastructure ready</li>
                  <li>Strong niche targeting wellness tourism</li>
                  <li>Trusted local partner (Hesham) with deep community ties</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Weaknesses</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Remote location may deter less adventurous travelers</li>
                  <li>Hot summer months (June–Sept) reduce capacity</li>
                  <li>Limited access to high-end contractors or materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Opportunities</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Rising global demand for wellness travel and retreats</li>
                  <li>Potential to host diverse retreats (art, writing, sound therapy)</li>
                  <li>Ability to scale and franchise model to other desert/oasis regions</li>
                  <li>Government or NGO collaboration for sustainable tourism initiatives</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Threats</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Political/economic instability in Egypt</li>
                  <li>Dependence on tourism which may fluctuate</li>
                  <li>New competitors entering Siwa or other desert regions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Market Size & Growth</h2>
            <p className="text-gray-800 mb-6">
              The global wellness tourism market continues to grow, with increasing demand for authentic, transformative experiences. Our target market of wellness facilitators and retreat organizers represents a growing segment seeking unique venues for their programs. The combination of Siwa's natural beauty, ancient heritage, and our turnkey facility positions us well to capture this market.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Competitive Landscape</h2>
            <p className="text-gray-800 mb-6">
              While there are other wellness retreats in Egypt, few offer the unique combination of ancient Egyptian heritage, natural wonders, and turnkey facility for group leaders. Our focus on hosting external facilitators rather than running our own programs sets us apart from traditional resorts and retreat centers.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 