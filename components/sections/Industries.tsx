import React from 'react';
import { motion } from 'framer-motion';
import { Building, LandPlot, Plane, Factory, Landmark, Briefcase, Globe, Server, Shield, Lock } from 'lucide-react';

const industries = [
    { icon: Factory, name: "Oil & Gas" },
    { icon: Landmark, name: "Government" },
    { icon: Plane, name: "Aviation" },
    { icon: Building, name: "Corporate" },
    { icon: Briefcase, name: "High Net Worth" },
    { icon: LandPlot, name: "Estates" },
    { icon: Globe, name: "Logistics" },
    { icon: Server, name: "Data Centers" },
    { icon: Shield, name: "Defense" },
    { icon: Lock, name: "Banking" },
    // Duplicate for seamless loop
    { icon: Factory, name: "Oil & Gas" },
    { icon: Landmark, name: "Government" },
    { icon: Plane, name: "Aviation" },
    { icon: Building, name: "Corporate" },
    { icon: Briefcase, name: "High Net Worth" },
    { icon: LandPlot, name: "Estates" },
    { icon: Globe, name: "Logistics" },
    { icon: Server, name: "Data Centers" },
    { icon: Shield, name: "Defense" },
    { icon: Lock, name: "Banking" },
];

export const Industries: React.FC = () => {
    return (
        <section id="industries" className="py-24 bg-ikg-lattice relative overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-4">
                            Sectors <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Secured</span>
                        </h2>
                        <div className="h-1 w-24 bg-ikg-gold mx-auto md:mx-0" />
                    </div>
                    <p className="text-white/50 max-w-md font-mono text-sm text-center md:text-right">
                        Global threat monitoring active across all strategic verticals.
                    </p>
                </div>
            </div>

            {/* Fading Edges */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-ikg-lattice to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-ikg-lattice to-transparent z-20 pointer-events-none" />

            {/* Marquee Row 1 - Left */}
            <div className="flex overflow-hidden relative w-full mb-8 max-w-full">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {industries.map((ind, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-ikg-stealth border border-white/5 px-8 py-4 rounded-full min-w-[200px] hover:border-ikg-gold/50 hover:bg-white/5 transition-colors cursor-default">
                            <ind.icon className="w-6 h-6 text-ikg-gold/70" />
                            <span className="text-white/80 font-mono text-sm uppercase tracking-widest">{ind.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Marquee Row 2 - Right */}
            <div className="flex overflow-hidden relative w-full max-w-full">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [-2000, 0] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35
                    }}
                >
                    {industries.map((ind, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-ikg-stealth border border-white/5 px-8 py-4 rounded-full min-w-[200px] hover:border-ikg-gold/50 hover:bg-white/5 transition-colors cursor-default opacity-60 hover:opacity-100">
                            <ind.icon className="w-6 h-6 text-white/50" />
                            <span className="text-white/60 font-mono text-sm uppercase tracking-widest">{ind.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};
