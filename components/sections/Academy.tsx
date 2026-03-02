import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Shield, ShieldCheck, Target, Activity, ChevronRight, Lock } from 'lucide-react';
import img from '@/assets/images/hero_bg_3.png';

export const Academy: React.FC = () => {
    const modules = [
        {
            icon: Shield,
            title: "Guard Certification",
            text: "Comprehensive legal & tactical curriculum.",
            colSpan: "md:col-span-2",
            bg: "bg-white/5"
        },
        {
            icon: Target,
            title: "Field Simulations",
            text: "Real-world stress inoculation scenarios.",
            colSpan: "md:col-span-2",
            bg: "bg-ikg-gold/10" // Highlighted
        },
        {
            icon: ShieldCheck,
            title: "Compliance",
            text: "Accurate incident reporting & law.",
            colSpan: "md:col-span-1",
            bg: "bg-white/5"
        },
        {
            icon: Activity,
            title: "Emergency Med",
            text: "First aid & trauma response basics.",
            colSpan: "md:col-span-1",
            bg: "bg-white/5"
        },
        {
            icon: BookOpen,
            title: "VIP Protection",
            text: "Close protection & motorcade tactics.",
            colSpan: "md:col-span-1",
            bg: "bg-white/5"
        },
    ];

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

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <Lock className="w-4 h-4 text-ikg-gold" />
                            <span className="text-ikg-gold font-mono uppercase tracking-[0.2em] text-sm">Security Academy</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white uppercase leading-none"
                        >
                            Forge Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Legacy</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md text-white/60 font-light text-right md:text-left"
                    >
                        The IKG Academy builds elite protectors through rigorous physical conditioning, tactical study, and real-world simulation.
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]"
                >
                    {/* Main Feature / Image Block - Spans 2x2 */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-white/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <img
                            src={img}
                            alt="Academy Training"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                            <h3 className="text-3xl font-black text-white uppercase mb-2">Elite Status</h3>
                            <p className="text-white/70 mb-6 max-w-sm">Join the ranks of the world's most disciplined security force. Recruitment is open for the new intake.</p>

                            <button className="group flex items-center gap-3 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-ikg-gold transition-colors rounded-sm">
                                Enroll Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Modules */}
                    {modules.map((module, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className={`${module.colSpan} p-6 relative rounded-2xl border border-white/10 ${module.bg} backdrop-blur-sm hover:border-ikg-gold/50 transition-colors group flex flex-col justify-between`}
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRight className="text-ikg-gold" />
                            </div>

                            <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center mb-4 text-ikg-gold group-hover:bg-ikg-gold group-hover:text-black transition-colors">
                                <module.icon className="w-6 h-6" />
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-white uppercase mb-2">{module.title}</h4>
                                <p className="text-white/50 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">{module.text}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Final CTA Block */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-1 rounded-2xl border border-ikg-gold/30 bg-ikg-gold/5 flex flex-col items-center justify-center text-center p-6 gap-4 hover:bg-ikg-gold hover:text-black group transition-all duration-300 cursor-pointer"
                    >
                        <BookOpen className="w-8 h-8 text-ikg-gold group-hover:text-black transition-colors" />
                        <h4 className="text-lg font-bold text-white uppercase group-hover:text-black transition-colors">View Full<br />Curriculum</h4>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};