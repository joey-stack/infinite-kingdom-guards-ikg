import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { servicesData } from '../../data/services';
import React, { useRef, useEffect } from 'react';

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize scroll position to the middle section of the tripled data
  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current;
      containerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const handleInfiniteScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    // Use a threshold larger than 0 to trigger the jump earlier
    const threshold = 100;

    // If approaching the start, jump to the same position in the middle section
    if (scrollLeft < threshold) {
      containerRef.current.scrollTo({
        left: (scrollWidth / 3) + scrollLeft,
        behavior: 'auto'
      });
    }
    // If approaching the end, jump to the same position in the middle section
    else if (scrollLeft + clientWidth > scrollWidth - threshold) {
      containerRef.current.scrollTo({
        left: scrollLeft - (scrollWidth / 3),
        behavior: 'auto'
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      // Calculate scroll amount based on the first card's width + gap
      const firstCard = containerRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstCard ? firstCard.offsetWidth + 24 : 400; // 24 is gap-6

      const newScrollLeft =
        direction === 'left'
          ? containerRef.current.scrollLeft - scrollAmount
          : containerRef.current.scrollLeft + scrollAmount;

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 w-full bg-ikg-stealth relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-12 flex justify-between items-center">
        <div>
          <span className="text-ikg-gold font-mono text-xs tracking-widest uppercase mb-4 block">Operative Solutions / Services</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => scroll('left')}
            variant="outline"
            className="!px-3 !py-3 !text-white hover:!text-ikg-gold"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-5 h-5 relative z-10" />
          </Button>
          <Button
            onClick={() => scroll('right')}
            variant="outline"
            className="!px-3 !py-3 !text-white hover:!text-ikg-gold"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-5 h-5 relative z-10" />
          </Button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        onScroll={handleInfiniteScroll}
        className="flex overflow-x-auto pb-12 gap-6 no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Triple the data to ensure smooth infinite feeling during manual scrolls */}
        {[...servicesData, ...servicesData, ...servicesData].map((service, index) => (
          <Link
            to={`/services/${service.id}`}
            key={`${service.id}-${index}`}
            className="flex-shrink-0 w-[70vw] sm:w-[50vw] md:w-[450px] group"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-[500px] bg-white/5 border border-white/10 relative p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-500"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <span className="font-mono text-4xl font-bold text-white/5 group-hover:text-ikg-gold/20 transition-colors">
                  {((index % servicesData.length) + 1).toString().padStart(2, '0')}
                </span>
                <div className="p-3 bg-black/40 rounded border border-white/10 group-hover:border-ikg-gold transition-colors">
                  <service.icon className="w-6 h-6 text-white group-hover:text-ikg-gold transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-black text-white uppercase mb-4 group-hover:text-ikg-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed mb-8 border-l-2 border-white/10 pl-4 group-hover:border-ikg-gold transition-colors">
                  {service.desc}
                </p>

                <div className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  Access Protocol <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 group-hover:border-ikg-gold transition-colors" />
            </motion.div>
          </Link>
        ))}
      </div>
    </section >
  );
};