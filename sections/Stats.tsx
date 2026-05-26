"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FileSpreadsheet, Briefcase, Award } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={elementRef} className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-luxury-gold gold-text-glow">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      icon: <Users className="text-luxury-gold shrink-0" size={24} />,
      label: "Clients Served",
      value: 1800,
      suffix: "+"
    },
    {
      icon: <FileSpreadsheet className="text-luxury-gold shrink-0" size={24} />,
      label: "Tax Returns Filed",
      value: 4500,
      suffix: "+"
    },
    {
      icon: <Briefcase className="text-luxury-gold shrink-0" size={24} />,
      label: "Corporate Registrations",
      value: 750,
      suffix: "+"
    },
    {
      icon: <Award className="text-luxury-gold shrink-0" size={24} />,
      label: "Legal Consultations",
      value: 1200,
      suffix: "+"
    }
  ];

  return (
    <section className="py-12 bg-transparent border-y border-luxury-gold/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-luxury-card/30 border border-luxury-gold/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-luxury-gold/20 transition-all duration-300 group"
            >
              {/* Icon Container with glowing ring */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-luxury-gold/5 border border-luxury-gold/25 mb-4 group-hover:bg-luxury-gold/10 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              
              {/* Counter */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              
              {/* Label */}
              <span className="font-body text-xs md:text-sm text-luxury-muted tracking-wider uppercase mt-2 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
