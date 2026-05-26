"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  TrendingUp,
  Building2,
  LineChart,
  Scale,
  Home,
  CheckCircle,
  PhoneCall,
  Calendar
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  desc: string;
  items: string[];
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const servicesData: ServiceItem[] = [
    {
      id: "income-tax",
      title: "Income Tax Services",
      icon: <FileText size={24} className="text-luxury-gold" />,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
      desc: "Comprehensive personal and business income tax planning, filing, and audit management in Pakistan.",
      items: [
        "NTN Registration (Individual & Business)",
        "Income Tax Return Filing (FBR IRIS)",
        "Wealth Statement Preparation & Reconciliation",
        "Reply to FBR Tax Notices & Audit Handling",
        "Advance Tax Calculations & Adjustment",
        "Tax Planning & Wealth Optimization",
        "Salaried Return Filing & Optimizations",
        "Business Return Filing (SMEs & Corporates)",
        "Freelancer & YouTuber Special Taxation Schemes",
        "Non-Resident Tax Returns & Foreign Asset Declaration"
      ]
    },
    {
      id: "sales-tax",
      title: "Sales Tax / GST",
      icon: <TrendingUp size={24} className="text-luxury-gold" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      desc: "Provincial and federal Sales Tax registration, return filings, and regional authority compliance.",
      items: [
        "STRN (Sales Tax Registration Number) Setup",
        "Monthly Sales Tax Return Filing (FBR/IRIS)",
        "PRA (Punjab Revenue Authority) Returns",
        "SRB (Sindh Revenue Board) Returns",
        "KPRA (Khyber Pakhtunkhwa Revenue Authority) Returns",
        "BRA (Balochistan Revenue Authority) Returns",
        "Sales Tax Audit Assistance",
        "Sales Tax Withholding Compliance Advice"
      ]
    },
    {
      id: "corporate",
      title: "Company & Corporate Compliance",
      icon: <Building2 size={24} className="text-luxury-gold" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      desc: "Frictionless setup and legal filings for corporate structures under SECP rules.",
      items: [
        "SECP Private Limited Company Registration",
        "Single Member Company (SMC-Private Ltd) Setup",
        "Partnership (AOP) Registration with Registrar",
        "Sole Proprietorship Setup & Business NTN",
        "Filing of Annual Forms (Form A, Form 29, etc.)",
        "Alteration of Share Capital & Transfer of Shares",
        "Trade Mark & Patent Registration Support"
      ]
    },
    {
      id: "advisory",
      title: "Business Advisory",
      icon: <LineChart size={24} className="text-luxury-gold" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      desc: "Strategic guidance on structuring businesses, setting up accounts, and mapping cashflow plans.",
      items: [
        "Optimal Business Structure Advice (Tax/Legal)",
        "Startup Advisory & Feasibility Studies",
        "Accounting System Implementation (Cloud/ERP)",
        "Internal Control Audits & System Implementation",
        "Budgeting, Cashflow & Financial Planning"
      ]
    },
    {
      id: "legal",
      title: "Corporate Legal Services",
      icon: <Scale size={24} className="text-luxury-gold" />,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop",
      desc: "Drafting bulletproof legal contracts, agreements, and corporate resolutions.",
      items: [
        "Partnership Deeds Drafting & Registration",
        "Memorandum & Articles of Association (MoA/AoA)",
        "Shareholder & Joint Venture Agreements",
        "Employment Contracts & NDAs",
        "Vendor Service Level Agreements (SLAs)"
      ]
    },
    {
      id: "real-estate",
      title: "Real Estate Taxation",
      icon: <Home size={24} className="text-luxury-gold" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
      desc: "Advising buyers and sellers on property transactions, wealth audits, and CGT rules.",
      items: [
        "Capital Gain Tax (Section 37) Calculation",
        "Property Tax Advisory & Compliance Setup",
        "Withholding Tax on Purchase/Sale (Section 236)",
        "FBR Valuation Advisory & Assessment",
        "Audits on Sale/Purchase of Immovable Assets"
      ]
    }
  ];

  const filteredServices = activeTab === "all"
    ? servicesData
    : servicesData.filter(s => s.id === activeTab);

  return (
    <div className="bg-luxury-bg min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold font-body">
            Our Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-luxury-white">
            Consulting & Compliance Services
          </h1>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-body text-base text-luxury-muted mt-6 leading-relaxed">
            Choose a category below to explore our comprehensive legal drafts, corporate registrations, sales tax audits, and real estate advisory details.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
              activeTab === "all"
                ? "bg-luxury-gold text-luxury-bg border-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-luxury-card/50 text-luxury-white border-luxury-gold/25 hover:border-luxury-gold hover:bg-luxury-gold/5"
            }`}
          >
            All Services
          </button>
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-luxury-gold text-luxury-bg border-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  : "bg-luxury-card/50 text-luxury-white border-luxury-gold/25 hover:border-luxury-gold hover:bg-luxury-gold/5"
              }`}
            >
              {tab.title.replace(" Services", "").replace("Compliance", "")}
            </button>
          ))}
        </div>

        {/* Services Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col relative group border border-luxury-gold/25 hover:border-luxury-gold/45 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Background Image with Dark Overlay */}
                <div className="relative h-[220px] w-full bg-[#151515] overflow-hidden border-b border-luxury-gold/15">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-7xl) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Luxury Gold and Dark Gradients Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-card via-luxury-card/60 to-transparent" />
                  <div className="absolute inset-0 bg-luxury-bg/30 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Floating Icon Box inside Image */}
                  <div className="absolute bottom-4 left-6 flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#111] border border-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-luxury-white tracking-wide drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-8 flex-grow flex flex-col justify-between bg-[#111111]/90">
                  <div>
                    <p className="font-body text-sm text-luxury-muted leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Sub-services lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start space-x-2 text-xs text-luxury-muted font-body">
                          <CheckCircle size={14} className="text-luxury-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions inside card */}
                  <div className="border-t border-luxury-gold/10 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-wider font-body text-luxury-gold font-semibold">
                      Professional standard advisory
                    </span>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-luxury-gold hover:bg-luxury-goldSoft text-luxury-bg font-body font-bold text-xs uppercase tracking-wide transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                    >
                      <span>Inquire Now</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-24 p-8 md:p-12 rounded-2xl border border-luxury-gold/25 relative overflow-hidden bg-gradient-to-r from-luxury-card to-[#0e0e0e] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-white">
                Resolve Your Compliance Issues Today
              </h3>
              <p className="font-body text-sm md:text-base text-luxury-muted mt-3 leading-relaxed">
                Schedule a private consult with Muhammad Hayat (Chartered Accountant) to review your FBR audits, wealth statements, or SECP structures.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded bg-luxury-gold hover:bg-luxury-goldSoft text-luxury-bg font-body font-bold text-xs uppercase tracking-wider transition-colors duration-300 text-center"
              >
                <Calendar size={14} />
                <span>Book Consultation</span>
              </Link>
              <a
                href="https://wa.me/923341537350?text=Assalamualaikum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded border border-luxury-gold/20 hover:border-luxury-gold bg-luxury-bg/50 text-luxury-white hover:text-luxury-gold font-body font-bold text-xs uppercase tracking-wider transition-colors duration-300 text-center"
              >
                <PhoneCall size={14} />
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
