import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import MainContent from './components/MainContent';
import HowItWorks from './components/HowItWorks';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(null); // null | 'login' | 'signup'

  const handleLogin = (mode = 'login') => {
    setShowAuth(mode);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowAuth(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowAuth(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] text-black font-sans antialiased">
        <Dashboard onLogout={handleLogout} />
      </div>
    );
  }

  if (showAuth) {
    return (
      <Auth 
        initialMode={showAuth} 
        onClose={() => setShowAuth(null)} 
        onLoginSuccess={handleLoginSuccess} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-black font-sans antialiased">
      {/* 1. Header/Navbar */}
      <Header onLogin={handleLogin} />

      {/* 2. Hero Section */}
      <Hero onLogin={handleLogin} />

      {/* 3. Features/Highlights */}
      <Features />

      {/* 4. Social Proof */}
      <SocialProof />

      {/* 5. Content/Body Section */}
      <MainContent />

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Call-to-Action (CTA) Banner */}
      <CTABanner onLogin={handleLogin} />

      {/* 8. FAQ Section */}
      <FAQ />

      {/* 9. Newsletter/Email Signup */}
      <Newsletter />

      {/* 10. Footer */}
      <Footer />

      {/* Scroll to Top floating button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
