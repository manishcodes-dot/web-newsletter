import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, MessageSquare, Sparkles } from 'lucide-react';

export default function Hero({ onLogin }) {
  const [activeTab, setActiveTab] = useState('lounge');
  
  return (
    <section className="relative overflow-hidden bg-brand border-b-4 border-black py-16 lg:py-24 px-4 lg:px-8 bg-grid">
      {/* Absolute Decorative Shapes */}
      <div className="absolute top-8 right-8 w-24 h-24 rounded-full border-4 border-black opacity-10 bg-transparent hidden md:block" />
      <div className="absolute bottom-12 left-8 w-16 h-16 border-4 border-black rotate-12 opacity-10 bg-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1.5 bg-white border-2 border-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-strong fill-brand-strong" />
            Voted #1 Developer Newsletter
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 text-black"
          >
            where developers <br />
            learn byte-sized <br />
            <span className="bg-brand-cyan px-2 py-1 inline-block border-4 border-black transform -rotate-1 shadow-brutal mt-1">clean code</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium max-w-xl mb-8 text-black leading-relaxed"
          >
            Byte Size is the ultimate feed for developers to read clean snippets, understand agent systems, and build software architectures without the fluff.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02, x: -2, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
              className="bg-brand-cyan text-black border-2 border-black font-black px-8 py-4 rounded-md shadow-brutal hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow text-center flex items-center justify-center gap-2"
            >
              Get started for free
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, x: -2, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
              className="bg-white text-black border-2 border-black font-bold px-6 py-4 rounded-md shadow-brutal hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow text-center flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-black" />
              Watch a 1-min demo
            </motion.button>
          </motion.div>

          {/* Active Avatars Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mt-8"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-brand-pink flex items-center justify-center font-bold text-xs">👨‍💻</div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-brand-green flex items-center justify-center font-bold text-xs">👩‍🎨</div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-brand-purple flex items-center justify-center font-bold text-xs">🧑‍💼</div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-brand-orange flex items-center justify-center font-bold text-xs">🙋‍♀️</div>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-black">
              Joined by <span className="underline decoration-2">12,000+ teams</span> this week
            </div>
          </motion.div>
        </div>

        {/* Visual Element (Interactive Panel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-white border-4 border-black p-6 rounded-lg shadow-brutal-lg max-w-md mx-auto w-full"
        >
          {/* Header of Visual Panel */}
          <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-brand-pink border-2 border-black" />
              <div className="w-3.5 h-3.5 rounded-full bg-brand-green border-2 border-black" />
              <div className="w-3.5 h-3.5 rounded-full bg-brand-cyan border-2 border-black" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider bg-brand-purple px-2 py-0.5 border border-black rounded">
              Lobby #240
            </span>
          </div>

          {/* Tab Selector inside Panel */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {['lounge', 'mixers', 'users'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-1.5 px-2 rounded text-xs font-black uppercase border-2 border-black transition-all ${
                  activeTab === tab 
                    ? 'bg-brand shadow-brutal-sm translate-x-[-1px] translate-y-[-1px]' 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="min-h-[180px] bg-gray-50 border-2 border-black rounded p-3 flex flex-col justify-between">
            {activeTab === 'lounge' && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between bg-white border border-black p-2 rounded text-sm font-bold shadow-brutal-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">☕</span>
                    <span>Watercooler Lounge</span>
                  </div>
                  <span className="text-xs bg-brand-green border border-black px-1.5 rounded-full">4 active</span>
                </div>
                <div className="flex items-center justify-between bg-white border border-black p-2 rounded text-sm font-bold shadow-brutal-sm opacity-80">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎮</span>
                    <span>Casual Games Room</span>
                  </div>
                  <span className="text-xs bg-brand-pink border border-black px-1.5 rounded-full">2 active</span>
                </div>
                <div className="flex items-center justify-between bg-white border border-black p-2 rounded text-sm font-bold shadow-brutal-sm opacity-80">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎸</span>
                    <span>Chill Music Corner</span>
                  </div>
                  <span className="text-xs bg-gray-200 border border-black px-1.5 rounded-full">empty</span>
                </div>
              </div>
            )}

            {activeTab === 'mixers' && (
              <div className="flex flex-col gap-2">
                <div className="bg-brand-pink border border-black p-2.5 rounded text-sm font-black flex items-center justify-between shadow-brutal-sm">
                  <span>🎨 DOODLE RACE</span>
                  <span className="bg-white border border-black text-[10px] px-1.5 py-0.5 rounded">STARTING NOW</span>
                </div>
                <div className="bg-brand-cyan border border-black p-2.5 rounded text-sm font-black flex items-center justify-between shadow-brutal-sm">
                  <span>🃏 CHARADES PARTY</span>
                  <span className="bg-white border border-black text-[10px] px-1.5 py-0.5 rounded">5 MINS LEFT</span>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 bg-white border border-black p-1.5 rounded shadow-brutal-sm">
                  <span className="w-5 h-5 rounded-full bg-brand-orange border border-black flex items-center justify-center text-[10px]">👩‍💻</span>
                  <span className="text-xs font-black">Sarah K.</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-black p-1.5 rounded shadow-brutal-sm">
                  <span className="w-5 h-5 rounded-full bg-brand-purple border border-black flex items-center justify-center text-[10px]">👨‍💻</span>
                  <span className="text-xs font-black">Alex M.</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-black p-1.5 rounded shadow-brutal-sm">
                  <span className="w-5 h-5 rounded-full bg-brand-pink border border-black flex items-center justify-center text-[10px]">👩‍🎨</span>
                  <span className="text-xs font-black">Lia W.</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-black p-1.5 rounded shadow-brutal-sm">
                  <span className="w-5 h-5 rounded-full bg-brand-green border border-black flex items-center justify-center text-[10px]">🧑‍💼</span>
                  <span className="text-xs font-black">David H.</span>
                </div>
              </div>
            )}

            {/* Bottom Interaction indicator */}
            <div className="flex items-center justify-between border-t border-black/10 pt-2 mt-2">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Try clicking tabs above</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-bold text-green-700">Live</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
