import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/images/hero_bg_3.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ikg-stealth font-sans">
      {/* Background Layer (Darkened) */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroBg}
            alt="Tactical Background"
            className="w-full h-full object-cover object-center opacity-90"
            fetchpriority="high"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 via-40% to-transparent" />
        <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      </div>

      {/* HI-TECH HUD Elements */}
      <div className="absolute inset-4 border border-white/10 pointer-events-none rounded-sm z-20">
        {/* Top Corners */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-ikg-gold/50 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />

        {/* Bottom Corners */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-ikg-gold/50 rounded-br-lg" />

        {/* Status Text */}


        <div className="absolute top-8 right-8 text-right hidden md:block">
          <span className="text-white/40 font-mono text-xs tracking-widest block">SECURE CONNECTION</span>
          <span className="text-ikg-gold/80 font-mono text-xs tracking-widest block">ENCRYPTED</span>
        </div>
      </div>


      {/* Main Content Container */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 items-center">

        {/* Text Content */}
        <div className="flex flex-col justify-center h-full pt-20 md:pt-0 relative z-40 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-ikg-gold font-mono text-sm md:text-base mb-4 tracking-[0.3em] uppercase pl-1 border-l-2 border-ikg-gold">
              Global Defense Initiative
            </h2>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
              Infinite <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Kingdom</span> <br />
              Guards
            </h1>

            <p className="text-gray-400 text-base md:text-xl font-light max-w-xl mb-12 border-l border-white/20 pl-6 py-2">
              Elite protection services for a dangerous world. We provide <span className="text-white font-medium">intelligence-driven security</span> for high-value assets and individuals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="relative group px-8 py-4 bg-ikg-gold text-black font-bold uppercase tracking-wider clip-path-button hover:bg-white transition-all duration-300">
                <span className="relative z-10">Initialize Protocol</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-10" />
              </button>

              <button className="relative group px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider clip-path-button hover:border-ikg-gold/50 transition-all duration-300 backdrop-blur-sm">
                <span className="group-hover:text-ikg-gold transition-colors">System Access</span>
              </button>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Side Elements */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 items-end pointer-events-none opacity-50 z-40">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white/30 rounded-full" />
        ))}
        <div className="h-24 w-[1px] bg-white/30 my-4" />
        <span className="text-white/30 font-mono text-xs rotate-90 origin-right translate-x-2">SCROLL_DOWN</span>
      </div>

    </section>
  );
};