import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LogIn, Menu, X } from 'lucide-react';

export default function Header({ onLogin }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9] border-b-4 border-black px-4 lg:px-8 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand border-2 border-black p-1.5 px-3 rounded font-black text-xl uppercase shadow-brutal-sm group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-none transition-all">
            Byte Size
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-bold text-sm">
          <a href="#features" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all duration-300">Features</a>
          <a href="#mixers" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all duration-300">Mixers</a>
          <a href="#how-it-works" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all duration-300">How it works</a>
          <a href="#faq" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all duration-300">FAQ</a>
        </nav>
      </div>

      {/* Search and Auth Controls */}
      <div className="hidden md:flex items-center gap-4">
        {/* Search Input Box */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 xl:w-60 bg-white border-2 border-black py-1.5 pl-3 pr-8 rounded text-sm font-medium focus:outline-none focus:ring-0 focus:border-brand-strong transition-colors"
          />
          <Search className="absolute right-2.5 w-4 h-4 text-black cursor-pointer" />
        </div>

        {/* Login & CTA Buttons */}
        <button 
          onClick={onLogin}
          className="flex items-center gap-1.5 font-bold text-sm px-3 py-1.5 hover:underline"
        >
          <LogIn className="w-4 h-4" />
          Login
        </button>

        <motion.button 
          whileHover={{ scale: 1.03, x: -1, y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={onLogin}
          className="bg-brand border-2 border-black px-4 py-2 font-black text-sm rounded shadow-brutal hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
        >
          Sign Up
        </motion.button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-2">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-1.5 border-2 border-black rounded bg-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[68px] left-0 right-0 bg-[#FFFDF9] border-b-4 border-black p-6 flex flex-col gap-4 md:hidden shadow-brutal z-40"
          >
            <div className="relative flex items-center mb-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-black py-2 pl-3 pr-10 rounded text-sm font-medium"
              />
              <Search className="absolute right-3 w-5 h-5 text-black" />
            </div>

            <a 
              href="#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold py-2 border-b border-gray-200"
            >
              Features
            </a>
            <a 
              href="#mixers" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold py-2 border-b border-gray-200"
            >
              Mixers
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold py-2 border-b border-gray-200"
            >
              How it works
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold py-2 border-b border-gray-200"
            >
              FAQ
            </a>

            <div className="flex items-center gap-4 mt-2">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onLogin(); }}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-black py-2.5 font-bold rounded bg-white"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onLogin(); }}
                className="flex-1 bg-brand border-2 border-black py-2.5 font-black rounded shadow-brutal"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
