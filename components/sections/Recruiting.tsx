import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Target, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import recruitingImg from '@/public/assets/images/feature-guard.png';

export const Recruiting: React.FC = () => {
    return (
        <section id="recruiting" className="h-[70vh] w-full flex flex-col md:flex-row bg-ikg-stealth overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col md:flex-row h-full">

            {/* Image Side (Left on Desktop, Top on Mobile) */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                {/* The Image */}
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={recruitingImg}
                    alt="Elite IKG Guards"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-opacity duration-700"
                />
            </div>

            {/* Content Side (Right on Desktop, Bottom on Mobile) */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-ikg-lattice flex flex-col justify-center px-8 md:px-20 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ikg-gold to-transparent opacity-30" />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-12 h-0.5 bg-ikg-gold" />
                        <span className="text-ikg-gold font-mono uppercase tracking-[0.2em] text-sm">Join The Force</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-8">
                        Do You Have<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">What It Takes?</span>
                    </h2>

                    <p className="text-white/60 mb-10 text-lg md:text-xl font-light leading-relaxed max-w-md">
                        We don't just hire guards; we forge elite protectors. Join a legacy of discipline, honor, and unyielding defense.
                    </p>

                    {/* Feature Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="flex flex-col items-start">
                            <ShieldCheck className="text-ikg-gold w-8 h-8 mb-3" />
                            <span className="text-white font-bold uppercase text-sm">Elite Vetting</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <Target className="text-ikg-gold w-8 h-8 mb-3" />
                            <span className="text-white font-bold uppercase text-sm">Combat Ready</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <Award className="text-ikg-gold w-8 h-8 mb-3" />
                            <span className="text-white font-bold uppercase text-sm">Top Benefits</span>
                        </div>
                    </div>

                    <Button variant="outline" className="text-ikg-gold border-ikg-gold hover:text-black">
                        <span className="flex items-center gap-4 whitespace-nowrap">
                            Apply Now
                            <ArrowRight className="w-5 h-5 relative z-10" />
                        </span>
                    </Button>
                </motion.div>
            </div>

            </div>

        </section>
    );
};
