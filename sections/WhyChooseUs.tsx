"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, CheckCircle2, Building, Scale, Lock } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <ShieldCheck className="text-luxury-gold" size={28} />,
      title: "Trusted Compliance Partner",
      desc: "We ensure all your filings strictly align with FBR, SRB, SECP, and PRA regulations, keeping your business fully compliant and protected."
    },
    {
      icon: <Clock className="text-luxury-gold" size={28} />,
      title: "24/7 Availability",
      desc: "Our advisors are dedicated to answering critical queries round-the-clock, resolving auditing emergencies and urgent tax submissions."
    },
    {
      icon: <CheckCircle2 className="text-luxury-gold" size={28} />,
      title: "Professional Consultation",
      desc: "Tailored advisory sessions conducted by experienced tax consultants to map your personal wealth, corporate structures, or property assets."
    },
    {
      icon: <Building className="text-luxury-gold" size={28} />,
      title: "Corporate Expertise",
      desc: "Decades of combined corporate consulting experience helping firms structure agreements, handle audits, and manage capital requirements."
    },
    {
      icon: <Scale className="text-luxury-gold" size={28} />,
      title: "Property & Legal Specialists",
      desc: "Complete command over real estate tax laws, capital gains liabilities, withholding rules, partnership deeds, and contracts."
    },
    {
      icon: <Lock className="text-luxury-gold" size={28} />,
      title: "Secure & Confidential",
      desc: "We prioritize security, guarding your company records, private files, and tax documentation with absolute legal confidentiality."
    }
  ];

  return (
    <section className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold font-body">
            Our Strengths
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-luxury-white">
            Why Choose Our Firm?
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-body text-sm md:text-base text-luxury-muted mt-4 leading-relaxed">
            We deliver top-tier financial, legal, and tax solutions to corporate entities, partnerships, and high-net-worth individuals across the nation.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-xl p-8 flex flex-col items-start text-left relative overflow-hidden"
            >
              {/* Decorative Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-luxury-gold/10" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-luxury-gold/5 border border-luxury-gold/20 mb-6">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold text-luxury-white tracking-wide mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-luxury-muted leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
