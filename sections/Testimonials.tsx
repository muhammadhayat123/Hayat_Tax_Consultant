"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Zeeshan Ahmed",
      role: "CEO, TechVantage Solutions",
      comment: "Hayat Tax Consultants completely streamlined our corporate filing. Their SECP registration support and corporate tax advice saved us weeks of hassle. Their professional expertise is unmatched in Pakistan.",
      rating: 5
    },
    {
      name: "Ayesha Malik",
      role: "Founder, Bloom Digital",
      comment: "Filing income tax and sales tax used to be an administrative nightmare. The team at Hayat Tax Consultants took over our PRA returns and bookkeeping, allowing us to focus entirely on scaling our agency.",
      rating: 5
    },
    {
      name: "Tariq Mahmood",
      role: "Real Estate Developer",
      comment: "FBR property valuation and capital gain taxes are extremely complex. Their advisory services on real estate taxation guided us through a major asset sale smoothly. Exceptional, confidential legal advisory.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Decorative Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold font-body">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-luxury-white">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-body text-sm md:text-base text-luxury-muted mt-4 leading-relaxed">
            Discover how we support startups, established corporations, and individuals in maintaining compliance and driving financial efficiency.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Quote Icon Overlay */}
              <Quote className="absolute right-6 top-6 text-luxury-gold/5 w-16 h-16 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(rev.rating)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={16}
                      className="fill-luxury-gold text-luxury-gold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-sm md:text-base text-luxury-muted leading-relaxed italic mb-6">
                  “{rev.comment}”
                </p>
              </div>

              {/* Author Details */}
              <div className="border-t border-luxury-gold/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-luxury-white tracking-wide">
                    {rev.name}
                  </h4>
                  <p className="font-body text-xs text-luxury-gold/80 mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
