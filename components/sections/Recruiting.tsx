import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Target, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import recruitingImg from '@/public/assets/images/feature-guard.png';

export const Recruiting: React.FC = () => {
    return (
        <section id="recruiting" className="h-screen w-full flex flex-col md:flex-row bg-ikg-stealth overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col md:flex-row h-full">

            {/* Image Side (Left on Desktop, Top on Mobile) */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-ikg-gold/10 mix-blend-overlay z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 md:bg-gradient-to-r" />

                {/* The Image */}
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={recruitingImg}
                    alt="Elite IKG Guards"
                    loading="lazy"
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />
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
                        Apply Now <ArrowRight className="w-5 h-5 relative z-10 ml-4" />
                    </Button>
                </motion.div>
            </div>

            </div>

        </section>
    );
};
