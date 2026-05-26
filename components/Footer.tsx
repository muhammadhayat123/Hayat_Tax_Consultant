"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-luxury-gold/20 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Gold Grid Gradients */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Identity */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-luxury-white">
                HAYAT<span className="text-luxury-gold"> TAX</span>
              </span>
              <span className="text-[10px] block uppercase tracking-[0.25em] text-luxury-gold font-sans font-semibold">
                Consultants & Co.
              </span>
            </Link>
            <p className="text-sm text-luxury-muted font-body leading-relaxed max-w-xs">
              “Legal Excellence That Gives More” — Trusted compliance partners, providing premier tax, legal, and financial advisory since inception.
            </p>
            <div className="flex items-center space-x-2 pt-2 text-xs text-luxury-gold font-medium uppercase tracking-wider font-body">
              <Clock size={14} />
              <span>Availability: 24/7 Professional Advisory</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-semibold text-luxury-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-luxury-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home Page", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-2 text-sm text-luxury-muted hover:text-luxury-gold transition-colors duration-300 font-body"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-luxury-gold" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-semibold text-luxury-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-luxury-gold">
              Primary Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Income Tax return filing", href: "/services" },
                { label: "Sales Tax / STRN Registration", href: "/services" },
                { label: "SECP Company Setup", href: "/services" },
                { label: "Corporate Legal Services", href: "/services" },
                { label: "Property & Real Estate Tax", href: "/services" }
              ].map((srv, idx) => (
                <li key={idx}>
                  <Link
                    href={srv.href}
                    className="group flex items-center space-x-2 text-sm text-luxury-muted hover:text-luxury-gold transition-colors duration-300 font-body"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-luxury-gold" />
                    <span>{srv.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-semibold text-luxury-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-luxury-gold">
              Contact Info
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-luxury-gold shrink-0 mt-0.5" />
                <span className="text-sm text-luxury-muted font-body leading-relaxed">
                  PECHS, Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-luxury-gold shrink-0" />
                <a href="tel:03183608176" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors duration-300 font-body">
                  0318-3608176
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-luxury-gold shrink-0" />
                <a href="https://wa.me/923341537350" target="_blank" rel="noopener noreferrer" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors duration-300 font-body">
                  WhatsApp: 0334-1537350
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-luxury-gold shrink-0" />
                <a href="mailto:chartard12@gmail.com" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors duration-300 font-body break-all">
                  chartard12@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Golden Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left space-y-4 sm:space-y-0">
          <p className="text-xs text-luxury-muted font-body">
            &copy; {new Date().getFullYear()} Hayat Tax Consultants & Co. All rights reserved.
          </p>
          <p className="text-xs text-luxury-muted/70 font-body flex items-center justify-center space-x-1">
            <span>Powered by Premium Legal Standards</span>
            <span className="text-luxury-gold">•</span>
            <Link href="/services" className="hover:text-luxury-gold transition-colors">
              Terms & Compliance
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
