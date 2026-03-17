import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Shield, ShieldCheck, Target, Activity, ChevronRight, Lock, ChevronDown, CheckCircle, FileText, ShieldAlert } from 'lucide-react';
import { CURRICULUM } from '../../constants';
import { Button } from '../ui/Button';
import img from '@/public/assets/images/ikg_academy_training.png';

export const Academy: React.FC = () => {
    const [expandedModule, setExpandedModule] = useState<string | null>(null);

    // Map curriculum to icons for the grid - matching AcademyPage.tsx logic
    const moduleIcons: Record<string, any> = {
        '1': ShieldCheck,
        '2': Lock,
        '3': Activity,
        '4': Target,
        '5': ShieldAlert,
        '6': BookOpen,
        '7': FileText,
    };

    const displayModules = CURRICULUM.slice(0, 7).map((m) => ({
        ...m,
        icon: moduleIcons[m.id] || Shield,
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="academy" className="py-24 w-full bg-ikg-stealth relative overflow-hidden border-t border-white/5">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ikg-gold/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-20 w-full">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <Lock className="w-4 h-4 text-ikg-gold" />
                            <span className="text-ikg-gold font-mono uppercase tracking-[0.2em] text-[10px] md:text-sm">Security Academy</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-6xl font-black text-white uppercase leading-none"
                        >
                            Security <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Academy</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md text-white/40 font-mono text-[10px] md:text-xs text-left leading-relaxed border-l border-white/10 pl-4 md:pl-0 md:border-0"
                    >
                        [SYSTEM_MSG]: THE IKG ACADEMY BUILDS ELITE PROTECTORS THROUGH RIGOROUS PHYSICAL CONDITIONING, TACTICAL STUDY, AND REAL-WORLD STRESS INOCULATION.
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto"
                >
                    {/* Main Feature - Spans 2x2 */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm border border-white/10 h-[400px] md:h-[516px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                        <img
                            src={img}
                            alt="Infinite Kingdom Guards Elite Academy Training Program"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[50%] group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
                            <h3 className="text-2xl md:text-4xl font-black text-white uppercase mb-3 tracking-tighter">Elite Status</h3>
                            <p className="text-white/60 mb-6 md:mb-8 max-w-sm font-mono text-[10px] md:text-sm leading-relaxed">JOIN THE RANKS OF THE WORLD'S MOST DISCIPLINED SECURITY FORCE. RECRUITMENT IS OPEN FOR BATCH 24.</p>

                            <Button as="link" to="/enrollment/1" className="mt-8 rounded-sm">
                                <span className="flex items-center gap-2">
                                    Enroll Now
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
                                </span>
                            </Button>

                        </div>
                    </motion.div>

                    {/* Modules */}
                    {displayModules.map((module) => (
                        <motion.div
                            key={module.id}
                            layout
                            variants={itemVariants}
                            className={`md:col-span-1 p-8 relative rounded-sm border border-white/5 bg-white/5 backdrop-blur-md hover:border-ikg-gold/30 transition-all duration-500 group cursor-pointer`}
                            onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 rounded-sm bg-black/60 border border-white/10 flex items-center justify-center text-ikg-gold group-hover:border-ikg-gold transition-colors">
                                        <module.icon className="w-7 h-7" />
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedModule === module.id ? 180 : 0 }}
                                        className="text-white/20 group-hover:text-ikg-gold transition-colors"
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-black text-white uppercase mb-2 tracking-tight group-hover:text-ikg-gold transition-colors">{module.title}</h4>
                                    <p className="text-white/40 text-xs font-mono mb-4 leading-relaxed line-clamp-2">{module.description}</p>

                                    <AnimatePresence>
                                        {expandedModule === module.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pt-4 border-t border-white/10 mt-4"
                                            >
                                                <div className="space-y-3">
                                                    {module.topics.map((topic, i) => (
                                                        <div key={i} className="flex items-center gap-3 text-[10px] font-mono text-white/60">
                                                            <CheckCircle className="w-3 h-3 text-ikg-gold" />
                                                            {topic.toUpperCase()}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Full Curriculum Link */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-1 rounded-sm border border-white/10 bg-white/[0.02] overflow-hidden relative"
                    >
                        <Button
                            as="link"
                            to="/academy"
                            variant="ghost"
                            className="w-full h-full flex flex-col items-center justify-center text-center p-8 gap-6 hover:bg-ikg-gold group transition-all duration-500 cursor-pointer border-0"
                        >
                            <div className="absolute inset-0 bg-ikg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <BookOpen className="w-10 h-10 text-ikg-gold group-hover:text-black transition-colors relative z-10" />
                            <h4 className="text-sm font-black text-white group-hover:text-black uppercase transition-colors relative z-10 leading-tight">View Full<br />Curriculum</h4>
                            <div className="w-8 h-[2px] bg-white/10 group-hover:bg-black/20 transition-colors relative z-10" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};