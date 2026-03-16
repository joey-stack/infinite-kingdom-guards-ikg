import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@/public/assets/images/hero_bg_3.png';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-ikg-stealth font-sans">
      {/* Background Layer (Darkened with Parallax) */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          style={{ y, scale }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroBg}
            alt="Elite Tactical Guard Surveillance - Infinite Kingdom Guards"
            className="w-full h-full object-cover object-center opacity-80"
            fetchPriority="high"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-30% to-transparent" />
        <div className="absolute inset-0 bg-scanlines opacity-15 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      </div>

      {/* HI-TECH HUD Elements */}
      <div className="absolute inset-4 border border-white/10 pointer-events-none rounded-sm z-20">
        {/* Top Corners */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-ikg-gold/40 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/10 rounded-tr-lg" />

        {/* Bottom Corners */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/10 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-ikg-gold/40 rounded-br-lg" />


      </div>

      {/* Main Content Container */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-6 md:px-20 flex items-center">
        {/* Text Content */}
        <motion.div
          style={{ opacity }}
          className="flex flex-col justify-center h-full pt-24 md:pt-0 relative z-40 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-ikg-gold" />
              <h2 className="text-ikg-gold font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase">
                Global Defense Initiative
              </h2>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Infinite <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Kingdom</span> <br />
              Guards
            </h1>

            <p className="text-white/50 text-sm md:text-lg font-light max-w-lg mb-10 md:12 border-l border-ikg-gold/30 pl-6 py-1 leading-relaxed">
              Precision-engineered security for high-value assets and elite personal protection. We define the <span className="text-white">new standard</span> of global surveillance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:8">
              <Button variant="primary">
                Book Now
              </Button>

              <Button variant="outline">
                Explore
              </Button>
            </div>
          </motion.div>
        </motion.div>
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