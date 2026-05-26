"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav py-4 border-b border-[rgba(212,175,55,0.25)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-luxury-white">
            HAYAT<span className="text-luxury-gold transition-colors duration-300 group-hover:text-luxury-goldSoft"> TAX</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 border border-luxury-gold text-luxury-gold rounded bg-luxury-gold/5 hidden sm:inline-block font-sans">
            & Co.
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium tracking-wide uppercase font-body text-luxury-white hover:text-luxury-gold transition-colors duration-300 py-1"
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/923341537350?text=Assalamualaikum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg text-luxury-gold font-body text-sm font-semibold tracking-wide uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          >
            <PhoneCall size={16} />
            <span>WhatsApp Chat</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-luxury-white hover:text-luxury-gold transition-colors p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 bg-luxury-bg border-b border-luxury-gold/20 shadow-2xl z-40 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-serif tracking-wider uppercase ${
                      isActive ? "text-luxury-gold font-bold" : "text-luxury-white"
                    } hover:text-luxury-gold transition-colors`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <hr className="border-luxury-gold/10" />
              <a
                href="https://wa.me/923341537350?text=Assalamualaikum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3.5 rounded bg-luxury-gold hover:bg-luxury-goldSoft text-luxury-bg font-body font-bold tracking-wider uppercase transition-colors"
              >
                <PhoneCall size={18} />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
