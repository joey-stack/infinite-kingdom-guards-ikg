import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { NEWS } from '../../constants';
import { ArrowUpRight, Radio, ShieldAlert, BookOpen, Building2, MapPin, Clock, FileText, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Assets
import heroBg from '../../assets/images/hero_bg_3.png';

const ICONS = {
    'TRAINING': <BookOpen className="w-4 h-4" />,
    'INTEL': <ShieldAlert className="w-4 h-4" />,
    'CORPORATE': <Building2 className="w-4 h-4" />
};

export const FieldReportsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[55vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Intel Background"
                        className="w-full h-full object-cover opacity-20 filter grayscale contrast-150"
                    />
                    <div className="absolute inset-0 bg-ikg-stealth/80"></div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                </div>

                <div className="relative z-10 text-center px-6 mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-6 animate-pulse">
                            <Radio className="w-3 h-3" />
                            Live Feed Active
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none">
                            Global <span className="text-ikg-gold">Intel</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-mono text-white/60 max-w-3xl mx-auto border-t border-white/10 pt-6 mt-6">
                            Declassified field reports, strategic assessments, and operational updates from across the network.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Live Stats / Ticker (Visual specific) */}
            <div className="bg-black border-b border-white/10 py-3 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="mx-8 font-mono text-xs text-white/40 uppercase tracking-widest">
                            <span className="text-ikg-gold">{">>>"}</span> SYSTEM UPDATE: ENCRYPTED CONNECTION ESTABLISHED <span className="text-ikg-gold">{"///"}</span> THREAT LEVEL: ELEVATED <span className="text-ikg-gold">{"///"}</span> REGION: GLOBAL
                        </span>
                    ))}
                </div>
            </div>

            {/* Reports Feed */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col md:flex-row gap-16">

                    {/* Main Feed */}
                    <div className="md:w-2/3 space-y-12">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                            <h2 className="text-2xl font-bold uppercase flex items-center gap-3">
                                <FileText className="w-5 h-5 text-ikg-gold" />
                                Latest Dispatches
                            </h2>
                            <span className="text-xs font-mono text-white/40 uppercase">Sort: Chronological</span>
                        </div>

                        {NEWS.map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white/[0.02] border border-white/10 hover:border-ikg-gold/30 transition-all overflow-hidden flex flex-col md:flex-row"
                            >
                                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-ikg-gold/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-black/80 backdrop-blur border border-white/10 text-white/80 text-[10px] font-mono uppercase tracking-widest px-2 py-1">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 text-xs font-mono text-white/40 mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-3 h-3 text-ikg-gold" />
                                                {item.date}
                                            </span>
                                            <span className="text-white/20">|</span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-3 h-3 text-ikg-gold" />
                                                Sector 7
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-ikg-gold transition-colors leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-white/60 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                                            Operational analysis indicates significant shifts in regional stability. Full report details tactical adjustments and asset deployment strategies...
                                        </p>
                                    </div>

                                    <div className="flex justify-end">
                                        <Link to={`/field-reports/${item.id}`} className="text-xs font-mono uppercase tracking-widest text-ikg-gold flex items-center gap-2 group/btn">
                                            Access File <ArrowUpRight className="w-3 h-3 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Sidebar / Live Data */}
                    <div className="md:w-1/3 space-y-8">
                        {/* Threat Map Placeholder */}
                        <div className="bg-black/40 border border-white/10 p-6">
                            <h3 className="text-sm font-bold uppercase mb-4 flex items-center gap-2 text-red-500">
                                <Activity className="w-4 h-4" />
                                Threat Monitoring
                            </h3>
                            <div className="aspect-square bg-ikg-stealth border border-white/5 relative overflow-hidden group mb-4">
                                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10 inverted filter invert"></div>
                                {/* Ping dots */}
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-red-500 rounded-full animate-ping delay-700"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping delay-1000"></div>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase">
                                        <span>Active Threats</span>
                                        <span className="text-red-500">3 Detected</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 mt-1">
                                        <div className="w-[30%] h-full bg-red-500 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-white/40 font-mono leading-relaxed">
                                Real-time global threat assessment feed. Data encrypted.
                            </p>
                        </div>

                        {/* Recent Briefs */}
                        <div className="bg-black/40 border border-white/10 p-6">
                            <h3 className="text-sm font-bold uppercase mb-4 text-white">Quick Briefs</h3>
                            <ul className="space-y-4">
                                {[
                                    'Cyber-attack prevented in EU sector',
                                    'New maritime security protocols active',
                                    'Executive protection team deployed: Asia',
                                    'Training facility upgrade complete'
                                ].map((brief, i) => (
                                    <li key={i} className="text-xs text-white/50 border-b border-white/5 pb-2 last:border-0">
                                        <span className="text-ikg-gold mr-2">{">>"}</span>
                                        {brief}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
