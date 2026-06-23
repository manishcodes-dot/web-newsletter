import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner({ onLogin }) {
  return (
    <section className="py-20 px-4 lg:px-8 bg-brand-orange border-b-4 border-black relative overflow-hidden bg-grid">
      {/* Decorative floating items */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-white border-2 border-black rotate-12 hidden md:flex items-center justify-center font-black">☕</div>
      <div className="absolute bottom-10 right-10 w-14 h-14 bg-white border-2 border-black -rotate-12 hidden md:flex items-center justify-center font-black">🎮</div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white border-2 border-black px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-sm">
          <Sparkles className="w-4.5 h-4.5 text-brand-strong" />
          No credit card required
        </div>

        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
          Ready to level up your <br />
          <span className="bg-white px-2.5 py-0.5 border-4 border-black inline-block mt-2 transform -rotate-1 shadow-brutal">coding skills?</span>
        </h2>

        <p className="text-lg md:text-xl font-bold text-black/80 max-w-xl mx-auto mb-8">
          Join over 12,000+ developers who read Byte Size to stay ahead of the curve every single week.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03, x: -2, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onLogin}
            className="bg-black text-white font-black px-8 py-4 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-shadow flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, x: -2, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onLogin}
            className="bg-white text-black font-bold px-8 py-4 rounded-md border-2 border-black shadow-brutal hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow w-full sm:w-auto text-center"
          >
            Schedule Enterprise Demo
          </motion.button>
        </div>
      </div>
    </section>
  );
}
