'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, Scale } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Gradient Stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-purple via-pink via-orange to-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-navy-dark mb-12 tracking-tight">
            ABOUT KLINGEMAN CPAs
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Klingeman CPAs is the premier tax advisory firm for enterprise clients and high-net-worth individuals who require sophisticated strategy and unparalleled IRS expertise. Led by <strong>Matt Klingeman, CPA</strong>—a former IRS manager with a Master's in Business Taxation—our firm brings insider knowledge from the highest levels of tax administration to every client engagement.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Matt spent over a decade in IRS management, overseeing complex audits and tax litigation for Fortune 500 companies and high-net-worth taxpayers. This experience, combined with 40+ years of combined team expertise, positions Klingeman CPAs as the strategic partner for businesses navigating multi-entity structures, private equity transactions, international compliance, and high-stakes IRS negotiations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We partner with established corporations, private equity firms, commercial real estate portfolios, and family offices who demand institutional-grade advisory services with personalized attention. Every engagement is led by Matt personally, ensuring our clients benefit from the highest level of strategic insight and proven IRS defense capabilities.
              </p>
            </div>

            {/* Statistics */}
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black text-purple mb-2">40+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Years Combined Experience</div>
              </div>

              <div>
                <div className="text-5xl font-black text-pink mb-2">100%</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">IRS Audit Success Rate</div>
              </div>

              <div>
                <div className="text-5xl font-black text-orange mb-2">$500M+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Client Assets Under Advisory</div>
              </div>
            </div>
          </div>

          {/* Credentials Badges */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <Building2 className="w-12 h-12 text-purple mb-4" />
              <h3 className="text-xl font-bold text-navy-dark mb-2">Former IRS Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Over a decade in IRS leadership overseeing complex audits and tax litigation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <GraduationCap className="w-12 h-12 text-pink mb-4" />
              <h3 className="text-xl font-bold text-navy-dark mb-2">Master's in Business Taxation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced expertise in corporate structures, M&A, and international tax compliance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <Scale className="w-12 h-12 text-orange mb-4" />
              <h3 className="text-xl font-bold text-navy-dark mb-2">40+ Years Combined Experience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Decades of institutional knowledge serving Fortune 500 and high-net-worth clients
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
