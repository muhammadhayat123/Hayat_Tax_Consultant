"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppCTA() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.a
        href="https://wa.me/923341537350?text=Assalamualaikum"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Glowing pulsing layer */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        <MessageSquare size={26} className="fill-current" />
      </motion.a>
    </div>
  );
}
