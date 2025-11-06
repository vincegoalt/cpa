'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Klingeman CPAs has been instrumental in structuring our acquisition strategy and navigating multi-state tax compliance. Matt's former IRS management experience gave us confidence during a high-stakes audit that saved us millions. When complex tax issues arise, we know we have the best advisor in our corner.",
    name: "James Morrison",
    title: "CEO, Morrison Manufacturing Group",
  },
  {
    quote: "Managing a commercial real estate portfolio with hundreds of properties requires sophisticated tax planning and entity structuring. Klingeman CPAs delivers institutional-grade advisory with the personal attention you'd expect from a true strategic partner. Their expertise in 1031 exchanges and partnership structures is unmatched.",
    name: "Sandra Chen",
    title: "Principal, Chen Capital Real Estate",
  },
  {
    quote: "In private equity, tax efficiency can make or break a deal. Matt and his team understand the nuances of fund structures, carried interest, and international transactions. Their former IRS insight gives us an edge in even the most complex tax positions. They're not just our CPAs—they're strategic advisors we trust with every major decision.",
    name: "David Williams",
    title: "Managing Partner, Williams Capital Partners",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-gradient-to-br from-purple via-magenta to-pink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white text-center mb-6 tracking-tight">
            CLIENTS
          </h2>
          <p className="text-xl text-white/90 text-center mb-16 font-light">
            Trusted by enterprise leaders and high-net-worth individuals
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-lg shadow-xl"
              >
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-navy-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.title}</p>
                </div>
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
              className="bg-white text-purple px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Request Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
