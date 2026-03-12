import React from 'react';
import { motion } from 'framer-motion';
import professionalImg from '@/assets/images/Professional_Portrait.jpg';

export const About: React.FC = () => {
    return (
        <section className="bg-ikg-stealth text-white py-24 relative overflow-hidden" id="about">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col lg:flex-row gap-16 items-center relative z-10">

                {/* Typography Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-ikg-gold" />
                        <span className="font-mono text-xs tracking-[0.2em] uppercase text-ikg-gold">Identity // Core</span>
                    </div>

                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-10 leading-[1.1] uppercase">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Standard</span> <br />
                        Of Defense.
                    </h2>

                    <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed border-l border-white/10 pl-6">
                        <p>
                            Infinite Kingdom Guards (IKG) is not just a security firm; we are a strategic partner in risk mitigation. Born from a need for <strong className="text-white font-medium">intelligence-led protection</strong>, we serve clients who cannot afford compromise.
                        </p>
                        <p>
                            We combine the discipline of military heritage with the sophistication of corporate service, ensuring your safety is felt, but rarely seen.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-6">
                        <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm min-w-[140px] transition-colors hover:border-ikg-gold hover:bg-white/10 group cursor-default">
                            <span className="block text-4xl font-bold mb-1 text-ikg-gold transition-transform group-hover:scale-110 origin-left">40+</span>
                            <span className="text-[10px] font-mono uppercase text-gray-400 tracking-widest group-hover:text-white transition-colors">Years Experience</span>
                        </div>
                        <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm min-w-[140px] transition-colors hover:border-ikg-gold hover:bg-white/10 group cursor-default">
                            <span className="block text-4xl font-bold mb-1 text-ikg-gold transition-transform group-hover:scale-110 origin-left">0</span>
                            <span className="text-[10px] font-mono uppercase text-gray-400 tracking-widest group-hover:text-white transition-colors">Security Breaches</span>
                        </div>
                    </div>
                </motion.div>

                {/* HUD/Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 relative"
                >
                    <div className="relative aspect-[3/4] overflow-hidden clip-path-slant bg-black/50 border border-white/10">
                        {/* Image */}
                        <img
                            src={professionalImg}
                            alt="IKG Corporate Guard"
                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                            loading="lazy"
                        />

                        {/* HUD Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        {/* Corners */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-ikg-gold/50" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-ikg-gold/50" />

                        {/* Scanline */}
                        <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
                    </div>

                    {/* Floating Info Box */}
                    <div className="absolute -bottom-6 -left-6 bg-ikg-gold p-6 text-black w-48 shadow-lg shadow-ikg-gold/20 clip-path-button">
                        <div className="font-mono text-xs font-bold mb-1">Samuel Anavi Saliu</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-80">Managing Director</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
