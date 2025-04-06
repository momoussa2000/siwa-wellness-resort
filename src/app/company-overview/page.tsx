'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyOverview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Company Overview</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vision & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Vision</h3>
                <p className="text-gray-800 mb-6">
                  To become the most inspiring wellness destination in Egypt, where ancient wisdom meets modern comfort in the heart of Siwa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Mission</h3>
                <p className="text-gray-800 mb-6">
                  To provide facilitators and guests with a soulful, all-inclusive sanctuary for wellness, reflection, and connection with nature, rooted in Siwan heritage and sustainable living.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Concept & Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Design Elements</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Mud-brick eco huts with minor luxuries (AC, private bathrooms)</li>
                  <li>Ancient Egyptian vibe blended with modern, minimalist interiors</li>
                  <li>15-20 suites, each sleeping 2-3 people (approx. 25-30 sqm per suite)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Retreat Focus</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-800">
                  <li>Yoga</li>
                  <li>Detox</li>
                  <li>Spiritual healing</li>
                  <li>Mommy & me</li>
                  <li>Sound therapy</li>
                  <li>Creative writing</li>
                  <li>Desert meditations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Add-on Experiences</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Local excursions</li>
              <li>Salt float experiences</li>
              <li>Bonfire nights</li>
              <li>Siwan spa rituals</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Location</h2>
            <div className="relative h-64 mb-6">
              <Image
                src="/images/Tranquil Desert Pool.png"
                alt="Tranquil Desert Pool at Siwa Wellness Resort"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-800 mb-6">
              Our resort is strategically located in the heart of Siwa Oasis, minutes away from major natural wonders including the salt lakes, Great Sand Sea, and the Oracle Temple. The 1.5 feddan plot (approx. 1.55 acres) comes with full access to water, electricity, and necessary operational licenses.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 