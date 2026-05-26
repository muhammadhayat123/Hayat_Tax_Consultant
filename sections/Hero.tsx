"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-24 bg-transparent">
      {/* Dark Vignette Overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0B0B0B_0%,transparent_70%)] pointer-events-none" />

      {/* Background Glows - darker & more subtle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-luxury-gold/3 to-transparent rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-luxury-gold/[0.02] via-transparent to-luxury-gold/[0.02] rounded-full blur-[200px] pointer-events-none" />

      {/* Floating Gold Light Particles - more stars, darker feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 20, 0],
              opacity: [0.05, 0.3, 0.05],
              scale: [1, 1.2 + Math.random() * 0.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${0.5 + Math.random() * 1.5}px`,
                height: `${0.5 + Math.random() * 1.5}px`,
                background: `radial-gradient(circle, rgba(212,175,55,0.6), rgba(212,175,55,0.1))`,
                boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(212,175,55,0.15)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-luxury-gold/10 border border-luxury-gold/30 px-4 py-1.5 rounded-full w-fit"
          >
            <ShieldCheck size={14} className="text-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.2em] font-body text-luxury-gold font-semibold">
              Hayat Tax Consultants & Co.
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-luxury-white"
          >
            Professional <span className="gold-gradient-text">Tax, Legal</span> & Property Consultancy
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-base md:text-lg text-luxury-muted leading-relaxed max-w-xl"
          >
            Trusted experts in Income Tax, Sales Tax, SECP Company Registration, Property Taxation & Corporate Legal Services. Let us handle compliance while you focus on growth.
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="border-l-2 border-luxury-gold pl-4 py-1 italic font-serif text-luxury-goldSoft text-base md:text-lg"
          >
            “Legal Excellence That Gives More”
          </motion.div>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded bg-gradient-to-r from-luxury-gold to-luxury-goldSoft hover:from-luxury-goldSoft hover:to-luxury-gold text-luxury-bg font-body font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)]"
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </Link>

            <a
              href="https://wa.me/923341537350?text=Assalamualaikum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded border border-luxury-gold/30 hover:border-luxury-gold bg-luxury-card/30 hover:bg-luxury-gold/10 text-luxury-white hover:text-luxury-gold font-body font-semibold uppercase tracking-wider text-sm transition-all duration-300"
            >
              <PhoneCall size={16} />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </div>

        {/* Right Founder Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Card Border Glow */}
          <div className="absolute inset-0 -m-1 bg-gradient-to-tr from-luxury-gold/25 via-transparent to-luxury-gold/5 rounded-2xl blur-md pointer-events-none" />
          
          <div className="relative glass-card rounded-2xl p-4 w-full max-w-[380px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-luxury-gold/30">
            {/* Image Container with golden overlays */}
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-[#151515] border border-luxury-gold/10">
              <Image
                src="/founder.png"
                alt="Founder - Hayat Tax Consultants & Co."
                fill
                sizes="(max-w-7xl) 100vw, 380px"
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-80" />
              
              {/* Image Border Glow Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.15),transparent_60%)]" />
            </div>

            {/* Content info on card footer */}
            <div className="pt-4 text-center">
              <h3 className="font-serif text-lg font-bold text-luxury-white tracking-wide">
                Muhammad Hayat
              </h3>
              <p className="font-body text-xs text-luxury-gold uppercase tracking-widest mt-1">
                Chartered Accountant & Founder
              </p>
              <div className="flex justify-center space-x-2 mt-3 text-[10px] text-luxury-muted uppercase tracking-wider font-body">
                <span>Tax Expert</span>
                <span className="text-luxury-gold">•</span>
                <span>Legal Counsel</span>
              </div>
            </div>

            {/* Glowing Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}