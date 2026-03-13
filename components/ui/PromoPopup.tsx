import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if they've already closed it this session
    const hasSeenPromo = sessionStorage.getItem('ikg_promo_closed');
    if (hasSeenPromo) return;

    // 10 seconds = 10000 milliseconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('ikg_promo_closed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, delay: 0.1 }}
            className="relative w-full max-w-4xl bg-ikg-gunmetal shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-ikg-stealth">
              <img 
                src="/assets/images/hero-guard.png" 
                alt="Security Training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ikg-gunmetal to-transparent" />
            </div>

             {/* Right Column - Content */}
             <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-ikg-gunmetal/50 rounded-full p-2 backdrop-blur-md"
                aria-label="Close promotion"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-ikg-gold/10 flex items-center justify-center shrink-0 mb-6 rounded-sm">
                <Calendar className="w-8 h-8 text-ikg-gold" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Security Academy</h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Join our Mailing List to stay informed about monthly tips, tracks, and discounts on our elite certification programs.
              </p>

              <Link to="/academy" onClick={handleClose} className="w-full">
                <Button variant="primary" className="w-full justify-center py-4 h-auto text-lg rounded-sm tracking-widest font-semibold">
                  LEARN MORE
                </Button>
              </Link>
              
              <button 
                onClick={handleClose}
                className="mt-6 text-sm text-gray-500 hover:text-gray-300 underline transition-colors w-full text-center tracking-wider"
              >
                NO, THANK YOU
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
