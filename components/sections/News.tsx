import React from 'react';
import { Section } from '../ui/Section';
import { NEWS } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, Radio, ShieldAlert, BookOpen, Building2 } from 'lucide-react';

const ICONS = {
    'TRAINING': <BookOpen className="w-4 h-4" />,
    'INTEL': <ShieldAlert className="w-4 h-4" />,
    'CORPORATE': <Building2 className="w-4 h-4" />
};

export const News: React.FC = () => {
    return (
        <Section className="bg-ikg-lattice text-ikg-anduril flex flex-col h-screen">
            {/* Fixed Header for the Section */}
            <div className="shrink-0 p-8 md:p-12 border-b border-white/5 bg-ikg-lattice z-50">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-ikg-gold">
                            <Radio className="w-4 h-4 animate-pulse" />
                            <span className="font-mono text-xs tracking-widest uppercase">Comms Relay // Live Feed</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-ikg-anduril mb-4">
                            Situational Awareness.
                        </h2>
                        <p className="font-mono text-xs text-ikg-anduril/60 max-w-xl leading-relaxed">
                            Real-time intelligence aggregation: Regional threat assessments, strategic corporate developments, and academy mobilization orders.
                            We monitor the pulse of the kingdom so you don't have to.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scrollable Container with Stacking Cards */}
            <div className="flex-1 overflow-y-auto relative no-scrollbar bg-ikg-stealth">
                {NEWS.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="sticky top-0 min-h-full flex flex-col md:flex-row border-t border-ikg-gold/20 shadow-2xl origin-top will-change-transform"
                        style={{
                            // Visual stacking offset effect handled by sticky behavior,
                            // but we add z-index to ensure correct layering if needed.
                            zIndex: index + 1
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Image Half */}
                        <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative overflow-hidden group">
                            <div className="absolute inset-0 bg-ikg-stealth/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
                                loading="lazy"
                            />

                            {/* Category Badge */}
                            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-ikg-stealth/90 backdrop-blur-md px-4 py-2 border border-ikg-gold/30">
                                <span className="text-ikg-gold">{ICONS[item.category]}</span>
                                <span className="font-mono text-xs font-bold text-ikg-gold tracking-widest uppercase">{item.category}</span>
                            </div>
                        </div>

                        {/* Content Half */}
                        <div className="w-full md:w-1/2 bg-ikg-stealth p-8 md:p-16 flex flex-col justify-center border-l border-white/5 relative">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="font-sans text-9xl font-bold text-white stroke-text">0{index + 1}</span>
                            </div>

                            <div className="relative z-10">
                                <span className="font-mono text-xs text-ikg-anduril/40 block mb-4 border-l-2 border-ikg-gold pl-3">
                                    {item.date} // TRANSMISSION RECEIVED
                                </span>

                                <h3 className="font-sans text-3xl md:text-5xl font-bold leading-[0.9] mb-8 text-ikg-anduril uppercase">
                                    {item.title}
                                </h3>

                                <p className="font-mono text-sm text-ikg-anduril/60 leading-relaxed max-w-md mb-12">
                                    Access full dossier regarding this update. Authorized personnel only. secure connection established.
                                </p>

                                <button className="group flex items-center gap-3 text-ikg-gold hover:text-white transition-colors">
                                    <span className="font-mono text-xs uppercase tracking-[0.2em] border-b border-ikg-gold pb-1 group-hover:border-white transition-colors">
                                        Read Full Brief
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};