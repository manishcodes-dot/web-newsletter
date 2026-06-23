import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff, CheckSquare, Square } from 'lucide-react';

export default function Auth({ initialMode = 'login', onClose, onLoginSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [email, setEmail] = useState('admin@bytesize.dev');
  const [password, setPassword] = useState('password');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'signup' && !name) {
      setError('Please enter your name');
      return;
    }
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (mode === 'signup' && !agreeTerms) {
      setError('You must agree to the Terms & Conditions');
      return;
    }

    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 1200);
  };

  const handleQuickLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-0 pointer-events-none opacity-5">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-black" />
        ))}
      </div>

      {/* Floating back button */}
      <button 
        onClick={onClose}
        className="absolute top-6 left-6 flex items-center gap-2 border-2 border-black bg-white px-3 py-1.5 rounded font-black text-xs uppercase shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      {/* Auth Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        className="w-full max-w-md bg-white border-4 border-black p-6 sm:p-8 rounded-2xl shadow-brutal-lg z-10 relative"
      >
        {/* Card Header Brand */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-brand border-2 border-black p-2 px-4 rounded-lg font-black text-xl uppercase shadow-brutal-sm mb-3">
            ⚡ Byte Size
          </div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {mode === 'login' ? 'Welcome back, developer!' : 'Join the developer community'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 border-2 border-black p-1 rounded-xl bg-gray-50 mb-6">
          <button
            onClick={() => { setMode('login'); setError(''); }}
            className={`py-2 rounded-lg font-black text-xs uppercase transition-all ${
              mode === 'login' 
                ? 'bg-brand-cyan border-2 border-black shadow-brutal-sm text-black translate-x-[-1px] translate-y-[-1px]' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => { setMode('signup'); setError(''); }}
            className={`py-2 rounded-lg font-black text-xs uppercase transition-all ${
              mode === 'signup' 
                ? 'bg-brand-pink border-2 border-black shadow-brutal-sm text-black translate-x-[-1px] translate-y-[-1px]' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Error message */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 bg-brand-pink border-2 border-black p-3 rounded-lg text-xs font-bold flex items-center justify-between"
          >
            <span>⚠️ {error}</span>
            <button onClick={() => setError('')} className="text-black hover:underline font-black">X</button>
          </motion.div>
        )}

        {/* Forms */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-black uppercase mb-1.5 text-black">Full Name</label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-black">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#FFFDF9] border-2 border-black py-2.5 pl-10 pr-4 rounded-lg text-xs font-bold focus:outline-none focus:ring-0 focus:border-black shadow-brutal-sm"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-black uppercase mb-1.5 text-black">Email Address</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-black">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                placeholder="developer@bytesize.dev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#FFFDF9] border-2 border-black py-2.5 pl-10 pr-4 rounded-lg text-xs font-bold focus:outline-none focus:ring-0 focus:border-black shadow-brutal-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase mb-1.5 text-black">Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-black">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#FFFDF9] border-2 border-black py-2.5 pl-10 pr-10 rounded-lg text-xs font-bold focus:outline-none focus:ring-0 focus:border-black shadow-brutal-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-black"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Form checkbox options */}
          <div className="flex items-center justify-between mt-1">
            {mode === 'login' ? (
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-black text-left"
              >
                {rememberMe ? (
                  <CheckSquare className="w-4 h-4 text-black fill-brand" />
                ) : (
                  <Square className="w-4 h-4 text-black" />
                )}
                Remember me
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setAgreeTerms(!agreeTerms)}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-black text-left"
              >
                {agreeTerms ? (
                  <CheckSquare className="w-4 h-4 text-black fill-brand-pink" />
                ) : (
                  <Square className="w-4 h-4 text-black" />
                )}
                I agree to the Terms of Service
              </button>
            )}

            {mode === 'login' && (
              <a href="#" className="text-xs font-bold text-black hover:underline">
                Forgot?
              </a>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02, x: -1, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`w-full border-2 border-black py-3 rounded-lg font-black text-xs uppercase shadow-brutal hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 ${
              mode === 'login' ? 'bg-brand' : 'bg-brand-pink'
            }`}
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              mode === 'login' ? 'Sign In' : 'Create Account'
            )}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <hr className="border-black/10 border-t-2" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[10px] font-black uppercase text-gray-400">
            Or continue with
          </span>
        </div>

        {/* Social logins */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={handleQuickLogin}
            disabled={loading}
            className="flex items-center justify-center gap-2 border-2 border-black py-2 rounded-lg font-bold text-xs hover:bg-gray-50 transition-colors shadow-brutal-sm cursor-pointer"
          >
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.18 4.114-3.553 0-6.44-2.887-6.44-6.44s2.887-6.44 6.44-6.44c1.633 0 3.12.617 4.254 1.62l3.059-3.059C19.16 2.196 15.89 1 12.24 1 5.955 1 1 5.955 1 12s4.955 11 11.24 11c6.545 0 11.24-4.545 11.24-11.24 0-.765-.082-1.35-.24-1.975H12.24z"/>
            </svg>
            Google
          </button>
          <button 
            onClick={handleQuickLogin}
            disabled={loading}
            className="flex items-center justify-center gap-2 border-2 border-black py-2 rounded-lg font-bold text-xs hover:bg-gray-50 transition-colors shadow-brutal-sm cursor-pointer"
          >
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Github
          </button>
        </div>

        {/* Toggle footer */}
        <div className="text-center mt-6 text-xs font-bold text-gray-500">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button 
                onClick={() => { setMode('signup'); setError(''); }} 
                className="text-black hover:underline font-black"
              >
                Sign up free
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button 
                onClick={() => { setMode('login'); setError(''); }} 
                className="text-black hover:underline font-black"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
