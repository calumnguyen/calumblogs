'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, GraduationCap, Briefcase, BookOpen, Mail, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalumIsAllYouNeed } from './animated-hero-section';

interface PhoneHeroLayoutProps {
  appName?: string;
}

/**
 * Phone Hero Layout Component
 * 
 * Mobile version - just shows the hero without MacBook frame.
 * Includes burger menu and mobile popup.
 */
export function PhoneHeroLayout({ appName: _appName = 'CALUM' }: PhoneHeroLayoutProps): React.JSX.Element {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on mobile only, once per session
    const hasSeenPopup = sessionStorage.getItem('mobile-popup-seen');
    if (!hasSeenPopup) {
      // Small delay to let the page load
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      return () => { clearTimeout(timer); };
    }
  }, []);

  const handleClosePopup = (): void => {
    setShowPopup(false);
    sessionStorage.setItem('mobile-popup-seen', 'true');
  };

  const menuItems = [
    { label: 'Education', path: '/edu', icon: GraduationCap },
    { label: 'Professional', path: '/professional', icon: Briefcase },
    { label: 'Web Dev Projects', path: '/webdev', icon: Laptop },
    { label: 'Blogs', path: '/blogs', icon: BookOpen },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  const handleMenuClick = (path: string): void => {
    setIsMenuOpen(false);
    router.push(path);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <CalumIsAllYouNeed />
      
      {/* Burger Menu Button */}
      <button
        onClick={() => { setIsMenuOpen(!isMenuOpen); }}
        className="fixed top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen ? <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => { setIsMenuOpen(false); }}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <h2 className="text-2xl font-bold text-white mb-8">Navigation</h2>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.path}
                        onClick={() => { handleMenuClick(item.path); }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all duration-200 group"
                      >
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span className="text-lg font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </> : null}
      </AnimatePresence>

      {/* Mobile Popup */}
      <AnimatePresence>
        {showPopup ? <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={handleClosePopup}
            />
            
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 z-[70]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Laptop className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Better Experience Available
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The experience will be more amazing if you check it out on a Laptop or Computer
                </p>
                <button
                  onClick={handleClosePopup}
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </> : null}
      </AnimatePresence>
    </div>
  );
}

export default PhoneHeroLayout;

