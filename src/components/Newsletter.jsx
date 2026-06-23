import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-brand-green border-b-4 border-black">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black p-8 md:p-12 rounded-lg shadow-brutal relative overflow-hidden">
        
        {/* Background Decorative Emojis */}
        <div className="absolute top-4 right-4 text-4xl opacity-10 select-none">📬</div>
        <div className="absolute bottom-4 left-4 text-4xl opacity-10 select-none">💌</div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <span className="bg-brand border-2 border-black font-black uppercase text-xs px-3 py-1 rounded shadow-brutal-sm inline-block mb-4">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Get Byte-Sized Coding Deep Dives
          </h2>
          <p className="font-semibold text-gray-700 mb-8 max-w-lg mx-auto">
            Join 12,000+ developers getting weekly clean code tips, agent architecture diagrams, and tech trend breakdowns every Tuesday.
          </p>

          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-4 max-w-md mx-auto"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full bg-[#FFFDF9] border-2 border-black py-4 pl-12 pr-4 rounded text-sm font-bold placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-brand-strong transition-colors"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02, x: -2, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-brand border-2 border-black font-black uppercase text-xs tracking-wider px-6 py-4 rounded shadow-brutal hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 whitespace-nowrap min-w-[120px]"
                >
                  {status === 'loading' ? (
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-brand-cyan border-2 border-black p-6 rounded shadow-brutal-sm inline-flex flex-col items-center max-w-sm mx-auto"
              >
                <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center mb-3 shadow-brutal-sm">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-black uppercase text-sm mb-1">Successfully Subscribed!</h4>
                <p className="text-xs font-bold text-gray-600">Check your inbox next Tuesday morning.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] font-bold text-gray-500 mt-6">
            Zero spam. Unsubscribe with 1 click at any time.
          </p>
        </div>

      </div>
    </section>
  );
}
