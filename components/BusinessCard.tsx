"use client";

import React from "react";
import Image from "next/image";
import { Download, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 border border-luxury-gold/30 shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative overflow-hidden group w-full"
    >
      {/* Decorative Corner Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:bg-luxury-gold/10" />

      {/* Component Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold">
          <CreditCard size={16} className="animate-pulse" />
        </div>
        <h4 className="font-serif text-sm font-semibold tracking-wider text-luxury-white uppercase">
          Digital Business Card
        </h4>
      </div>

      {/* Interactive Card Image View */}
      <div className="relative aspect-[1.78/1] w-full rounded-xl overflow-hidden bg-luxury-bg border border-luxury-gold/20 shadow-2xl group/card cursor-pointer">
        <Image
          src="/business-card.jpg"
          alt="Hayat Tax Consultant Business Card"
          fill
          sizes="(max-w-md) 100vw, 400px"
          className="object-cover transition-transform duration-700 group-hover/card:scale-[1.03]"
        />
        {/* Soft Golden Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/15 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Action Block */}
      <div className="mt-5 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="text-left">
          <p className="font-serif text-sm font-bold text-luxury-white">
            Hayat Tax Consultant
          </p>
          <p className="font-body text-[10px] text-luxury-gold uppercase tracking-widest mt-0.5">
            PECHS, Karachi, Pakistan
          </p>
        </div>

        <a
          href="/Card.pdf"
          download="Hayat_Tax_Consultants_Business_Card.pdf"
          className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded bg-luxury-gold/10 border border-luxury-gold/30 hover:bg-luxury-gold hover:text-luxury-bg text-luxury-gold font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_2px_10px_rgba(212,175,55,0.05)] hover:shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
        >
          <Download size={14} />
          <span>Save / Download PDF</span>
        </a>
      </div>
    </motion.div>
  );
}
