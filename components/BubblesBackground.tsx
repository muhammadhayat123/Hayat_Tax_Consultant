"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  size: number;
  left: number; // percentage (0 - 100)
  delay: number; // seconds
  duration: number; // seconds
  sway: number; // pixels
  color: string;
}

export default function BubblesBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const bubbleColors = [
      "rgba(212, 175, 55, 0.15)",   // Primary Luxury Gold
      "rgba(201, 162, 39, 0.08)",   // Soft Gold
      "rgba(154, 123, 28, 0.12)",   // Darker Gold
      "rgba(245, 245, 245, 0.04)",  // Soft White
      "rgba(212, 175, 55, 0.05)",   // Translucent Glowing Gold
    ];

    const generatedBubbles = Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 55 + 15; // 15px to 70px
      const left = Math.random() * 100; // 0% to 100%
      const delay = Math.random() * 12; // up to 12s delay
      const duration = Math.random() * 20 + 20; // 20s to 40s duration (slow and elegant)
      const sway = Math.random() * 80 - 40; // -40px to 40px horizontal sway
      const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];

      return {
        id: i,
        size,
        left,
        delay,
        duration,
        sway,
        color,
      };
    });

    setBubbles(generatedBubbles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border border-luxury-gold/[0.12] backdrop-blur-[0.5px]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-10%",
            background: `radial-gradient(circle at 35% 35%, ${bubble.color}, transparent 80%)`,
            boxShadow: `0 0 15px rgba(212, 175, 55, 0.05), inset 0 0 10px rgba(255, 255, 255, 0.03)`,
          }}
          animate={{
            y: [0, -1500], // Move up across the page height
            x: [0, bubble.sway, -bubble.sway, bubble.sway, 0], // Smooth horizontal swaying
            scale: [1, 1.15, 0.9, 1.1, 1], // Gentle pulsing size
            opacity: [0, 0.7, 0.7, 0.3, 0], // Smooth fade-in, stay, and fade-out
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}
