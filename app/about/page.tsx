"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, FileText, Scale, Home, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const credentials = [
    {
      icon: <Award className="text-luxury-gold" size={24} />,
      title: "Chartered Accountant",
      desc: "Top-tier accounting standards, financial audit management, and complex financial analysis."
    },
    {
      icon: <FileText className="text-luxury-gold" size={24} />,
      title: "Tax Consultant",
      desc: "Expertise in Income Tax, Sales Tax, advance adjustment, NTN/STRN setups, and FBR filings."
    },
    {
      icon: <Scale className="text-luxury-gold" size={24} />,
      title: "Legal Consultant",
      desc: "Drafting partnership deeds, MoA & AoA, employment contracts, and handling legal compliance."
    },
    {
      icon: <Home className="text-luxury-gold" size={24} />,
      title: "Property Consultant",
      desc: "Guidance on Capital Gains Tax, property tax evaluations, withholding tax, and FBR values."
    },
    {
      icon: <ShieldCheck className="text-luxury-gold" size={24} />,
      title: "Corporate Compliance Expert",
      desc: "SECP setup, partnership filings, annual returns, and audit response handling."
    }
  ];

  return (
    <div className="bg-luxury-bg min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold font-body">
            About Our Firm
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-luxury-white">
            Hayat Tax Consultants & Co.
          </h1>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-body text-base text-luxury-muted mt-6 leading-relaxed">
            We are a premium, full-service advisory firm specializing in corporate law, tax filing, accounting architecture, and real estate compliance. Our philosophy is anchored on integrity, speed, and precision.
          </p>
        </div>

        {/* Firm Ethos & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-luxury-white border-l-4 border-luxury-gold pl-4">
              Our Mission & Commitment
            </h2>
            <p className="font-body text-sm md:text-base text-luxury-muted leading-relaxed">
              At Hayat Tax Consultants & Co., we operate under our core guiding motto: <strong className="text-luxury-gold font-medium">“Legal Excellence That Gives More”</strong>. We believe in providing robust legal shields and financial optimizations that add direct, quantifiable value to our clients.
            </p>
            <p className="font-body text-sm md:text-base text-luxury-muted leading-relaxed">
              Whether you are an individual freelancer seeking NTN registration, a fast-growing startup establishing custom SECP company parameters, or a property developer needing FBR evaluation advice, we handle the friction of regulatory compliance so you can thrive.
            </p>
            <ul className="space-y-3 font-body text-sm text-luxury-muted pt-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-luxury-gold" />
                <span>Custom-tailored tax strategies for maximum adjustments.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-luxury-gold" />
                <span>Frictionless company registrations and partnership setups.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-luxury-gold" />
                <span>Absolute compliance security and confidential data handling.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-bl-full pointer-events-none" />
            <h3 className="font-serif text-xl font-bold text-luxury-white mb-4">
              Why We Are Different
            </h3>
            <p className="font-body text-sm text-luxury-muted leading-relaxed mb-4">
              Unlike traditional legal practitioners who operate in isolated silos, we synthesize financial expertise (Chartered Accountancy) with corporate legal structures and taxation planning. This multi-layered perspective enables us to prevent legal bottlenecks before they impact your balance sheets.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-sm text-luxury-gold hover:text-luxury-goldSoft font-body font-semibold uppercase tracking-wider group transition-colors duration-300"
            >
              <span>Speak to our advisors</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Founder Profile Section */}
        <div className="border-t border-luxury-gold/15 pt-20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative glass-card rounded-2xl p-4 w-full max-w-[340px] border border-luxury-gold/25 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                <div className="relative h-[360px] w-full rounded-xl overflow-hidden bg-[#151515]">
                  <Image
                    src="/founder.png"
                    alt="Founder Muhammad Hayat"
                    fill
                    sizes="(max-w-7xl) 100vw, 340px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-80" />
                </div>
                <div className="pt-4 text-center">
                  <h3 className="font-serif text-lg font-bold text-luxury-white">
                    Muhammad Hayat
                  </h3>
                  <p className="font-body text-xs text-luxury-gold uppercase tracking-widest mt-1">
                    Founder & Principal Consultant
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder Biography & Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8 flex flex-col space-y-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold font-body">
                  Leadership Profile
                </span>
                <h2 className="font-serif text-3xl font-bold text-luxury-white mt-1">
                  Meet the Founder
                </h2>
                <div className="w-12 h-[1px] bg-luxury-gold mt-3" />
              </div>
              <p className="font-body text-sm md:text-base text-luxury-muted leading-relaxed">
                Muhammad Hayat is a highly respected <strong className="text-luxury-white">Chartered Accountant</strong>, tax specialist, and legal compliance counsel. Recognizing the gap between compliance requirements and quality service, he founded Hayat Tax Consultants & Co. in PECHS, Karachi to offer a luxury-grade, highly client-centric advisory platform.
              </p>
              <p className="font-body text-sm md:text-base text-luxury-muted leading-relaxed">
                Under his leadership, the firm has helped over 1,500 clients resolve tax audits, structure property sales, register corporations, and manage complex cross-border tax affairs.
              </p>

              {/* Credentials list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex space-x-4 items-start p-4 rounded-xl bg-luxury-card/45 border border-luxury-gold/5 hover:border-luxury-gold/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-luxury-gold/5 border border-luxury-gold/15 shrink-0">
                      {cred.icon}
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-luxury-white text-sm tracking-wide">
                        {cred.title}
                      </h4>
                      <p className="font-body text-xs text-luxury-muted mt-1 leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
