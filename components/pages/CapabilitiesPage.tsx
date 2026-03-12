import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { servicesData } from '../../data/services';
import { motion } from 'framer-motion';
import { CheckCircle, Server, Radio, Globe, Lock, Cpu, Eye, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// Assets
import heroBg from '../../assets/images/feature-guard.png';

export const CapabilitiesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Capabilities Background"
                        className="w-full h-full object-cover opacity-30 filter grayscale contrast-125 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ikg-stealth via-ikg-stealth/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-4 px-4 py-1 border border-ikg-gold/30 rounded-full bg-ikg-gold/5 backdrop-blur-md"
                    >
                        <span className="text-ikg-gold font-mono text-xs tracking-[0.2em] uppercase">Operational Superiority</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none"
                    >
                        Full Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-ikg-gold via-yellow-200 to-ikg-gold">Dominance</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-mono text-white/60 max-w-2xl mx-auto"
                    >
                        Comprehensive security solutions engineered for the modern asymmetric threat landscape.
                    </motion.p>
                </div>
            </section>

            {/* Core Capabilities Grid */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto md:px-20 w-full flex flex-col md:flex-row justify-between items-end mb-16 px-4 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Service Portfolio
                        </h2>
                        <h3 className="text-4xl font-bold uppercase">Operational Services</h3>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="font-mono text-xs text-white/40 uppercase">
                            Status: <span className="text-green-500">Active</span><br />
                            Region: <span className="text-white">Global</span>
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, idx) => (
                        <Link to={`/services/${service.id}`} key={service.id} className="group block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="relative h-full bg-white/[0.02] border border-white/10 p-8 transition-all duration-500 hover:border-ikg-gold/50 hover:bg-white/[0.04] overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-ikg-gold/0 via-transparent to-transparent group-hover:from-ikg-gold/5 transition-all duration-500"></div>

                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="font-mono text-4xl font-black text-white/20 group-hover:text-ikg-gold">0{idx + 1}</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8 p-4 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-ikg-gold/50 group-hover:bg-ikg-gold/20 transition-all duration-300">
                                        <service.icon className="w-8 h-8 text-white group-hover:text-ikg-gold transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-ikg-gold transition-colors tracking-tight">{service.title}</h3>
                                    <p className="text-white/50 leading-relaxed mb-8 text-sm h-12 overflow-hidden">{service.desc}</p>

                                    <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-white/60 group-hover:text-white transition-colors">
                                                <CheckCircle className="w-4 h-4 text-ikg-gold/50 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ikg-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        View Protocol <span className="text-lg leading-none">›</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Tech Specs / Specializations */}
            <section className="py-32 bg-ikg-lattice/30 border-y border-white/5 relative overflow-hidden">
                {/* Background visual elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ikg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="md:w-1/2">
                            <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                                <Cpu className="w-4 h-4" />
                                Technical Infrastructure
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold uppercase leading-none">
                                Advanced <br /><span className="text-white/30">Systems Integration</span>
                            </h3>
                        </div>
                        <p className="text-white/60 md:w-1/3 text-right mt-8 md:mt-0 font-light border-r-2 border-ikg-gold pr-6">
                            Integrating bleeding-edge technology with tactical expertise to provide unmatched situational awareness and rapid response capabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Cyber-Physical Defense',
                                icon: Server,
                                color: 'text-blue-400',
                                border: 'border-blue-500/30',
                                bg: 'bg-blue-500/10',
                                desc: 'Unified protection protocols securing both physical assets and digital infrastructure against hybrid threats. Real-time intrusion detection and automated countermeasures.'
                            },
                            {
                                title: 'Secure Comms Grid',
                                icon: Radio,
                                color: 'text-green-400',
                                border: 'border-green-500/30',
                                bg: 'bg-green-500/10',
                                desc: 'Military-grade encrypted communication networks ensuring unbroken command and control chains in hostile environments with redundant satellite uplinks.'
                            },
                            {
                                title: 'Global Threat Intel',
                                icon: Globe,
                                color: 'text-red-400',
                                border: 'border-red-500/30',
                                bg: 'bg-red-500/10',
                                desc: '24/7 monitoring of geopolitical instability, travel risks, and emerging security vectors worldwide using AI-driven predictive modeling.'
                            },
                            {
                                title: 'Biometric Access Control',
                                icon: Lock,
                                color: 'text-purple-400',
                                border: 'border-purple-500/30',
                                bg: 'bg-purple-500/10',
                                desc: 'Multi-factor biometric authentication, facial recognition surveillance, and strict perimeter enforcement protocols for zero-trust environments.'
                            }
                        ].map((spec, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-black/40 border border-white/10 p-10 flex flex-col sm:flex-row gap-8 items-start hover:bg-white/5 transition-colors group"
                            >
                                <div className={`p-5 rounded-xl border ${spec.border} ${spec.bg} backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                                    <spec.icon className={`w-8 h-8 ${spec.color}`} />
                                </div>
                                <div>
                                    <h4 className={`text-2xl font-bold uppercase mb-3 ${spec.color} group-hover:brightness-125 transition-all`}>{spec.title}</h4>
                                    <p className="text-white/60 text-base leading-relaxed group-hover:text-white/80 transition-colors">
                                        {spec.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6 md:px-20 w-full bg-ikg-gold text-black p-12 md:p-20 relative overflow-hidden clip-path-button">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-2/3">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6">Need Deployment?</h3>
                            <p className="text-black/80 text-xl font-medium max-w-2xl">
                                Our tactical teams are on standby for immediate mobilization. Contact Command for a confidential consultation regarding your security requirements.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-end">
                            <Button
                                as="link"
                                to="/contact"
                                variant="primary"
                                className="px-10 py-5 bg-black text-white hover:bg-white hover:text-black border-2 border-black"
                            >
                                Initiate Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
