'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-teal-dark via-navy-dark to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight"
            >
              WE ARE<br />KLINGEMAN CPAs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 font-light leading-relaxed"
            >
              Strategic Tax Advisory Led by Former IRS Management
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={() => window.location.href = 'mailto:Matt.Klingeman@klingemancpas.com'}
              className="bg-gold text-navy-dark px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Schedule a Meeting
            </motion.button>

            {/* Credentials Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-gold">Former IRS Management</p>
                  <p className="text-xs text-gray-400 mt-1">Insider expertise at the highest level</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-gold">Master's in Taxation</p>
                  <p className="text-xs text-gray-400 mt-1">Advanced business tax expertise</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-gold">40+ Years Experience</p>
                  <p className="text-xs text-gray-400 mt-1">Decades of proven results</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] lg:h-[700px] order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-purple/20 rounded-2xl blur-3xl" />
            <Image
              src="/images/matt-klingeman.jpg"
              alt="Matt Klingeman, CPA - Former IRS Manager"
              fill
              className="object-cover object-center rounded-2xl shadow-2xl relative z-10"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
