'use client';

import { motion } from 'framer-motion';
import { Building2, Briefcase, Building, Scale, TreeDeciduous, Globe } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Corporate Tax Strategy",
    description: "Multi-entity structuring, M&A tax planning, and strategic advisory for established businesses navigating complex corporate tax landscapes. We optimize tax positions across acquisitions, restructurings, and international expansion.",
  },
  {
    icon: Briefcase,
    title: "High-Net-Worth Tax Planning",
    description: "Comprehensive wealth preservation strategies for executives, entrepreneurs, and family offices. From income optimization to charitable giving structures, we protect and grow generational wealth through sophisticated tax planning.",
  },
  {
    icon: Building,
    title: "Private Equity & Real Estate",
    description: "Complex partnership structures, 1031 exchanges, and portfolio optimization for private equity funds and commercial real estate investors. Expert guidance on carried interest, capital accounts, and tax-efficient exit strategies.",
  },
  {
    icon: Scale,
    title: "IRS Audit Defense & Litigation",
    description: "Expert representation leveraging former IRS management insight. We handle high-stakes audits, appeals, and tax court litigation with proven success in securing favorable outcomes and penalty abatements for complex tax positions.",
  },
  {
    icon: TreeDeciduous,
    title: "Estate & Succession Planning",
    description: "Sophisticated estate structures, trust administration, and generational wealth transfer strategies. We design tax-efficient succession plans for business owners and family offices ensuring legacy preservation and minimized estate tax exposure.",
  },
  {
    icon: Globe,
    title: "International Tax Compliance",
    description: "Cross-border transactions, foreign entity structuring, and FATCA/FBAR compliance for multinational operations. Strategic guidance on transfer pricing, repatriation strategies, and navigating complex international tax treaties.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-gray-50 py-24 lg:py-32 overflow-hidden">
      {/* Gradient Stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-purple via-pink via-orange to-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-navy-dark mb-6 tracking-tight">
            STRATEGIC TAX ADVISORY
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl font-light leading-relaxed">
            Comprehensive tax strategy and advisory services for complex business structures and high-net-worth individuals
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-lg border border-gray-200 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => window.location.href = 'mailto:Matt.Klingeman@klingemancpas.com'}
              className="bg-navy-dark text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-navy hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Discuss Your Tax Strategy
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
