import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Radio, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
    const reviews = [
        {
            text: "IKG's rapid response saved our asset during the incident. Unmatched professionalism.",
            author: "Director, Oil & Gas Logistics",
            location: "Delta Region, Sector 4",
            timestamp: "04:22 HRS",
            id: "LOG-8921"
        },
        {
            text: "The detail in their surveillance reporting gives us complete peace of mind. Zero blind spots.",
            author: "Estate Manager, Lekki Phase 1",
            location: "Lekki Operations Command",
            timestamp: "14:10 HRS",
            id: "LOG-3310"
        },
        {
            text: "Tactical discipline that rivals the military. They don't just secure the perimeter; they own it.",
            author: "Expatriate Consultant",
            location: "Victoria Island - Secure Zone",
            timestamp: "21:45 HRS",
            id: "LOG-1192"
        }
    ];

    return (
        <section id="field-reports" className="py-24 bg-ikg-stealth relative overflow-hidden border-t border-white/5">
            {/* Background Map Visualization */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-ikg-gold font-mono text-xs tracking-widest uppercase">
                            <Radio className="w-4 h-4 animate-pulse" />
                            <span>Incoming Transmission</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                            Field <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Reports</span>
                        </h2>
                    </div>
                </div>

                {/* Transmissions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-1 relative group hover:border-ikg-gold/50 transition-colors"
                        >
                            {/* Terminal Header */}
                            <div className="bg-white/5 p-2 flex justify-between items-center text-[10px] font-mono text-white/40 mb-1">
                                <span className="text-ikg-gold">encryptedroot@ikg-sys:~$</span>
                                <span>{review.id} // VERIFIED</span>
                            </div>

                            <div className="p-6">
                                <Quote className="w-8 h-8 text-white/10 absolute top-12 right-6" />

                                <div className="flex flex-col gap-2 mb-6">
                                    <div className="flex items-center gap-2 text-xs font-mono text-ikg-gold/60">
                                        <Clock className="w-3 h-3" /> {review.timestamp}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                                        <MapPin className="w-3 h-3" /> {review.location}
                                    </div>
                                </div>

                                <p className="text-white/80 font-light leading-relaxed mb-8 italic relative z-10 font-mono text-sm">
                                    "{review.text}"
                                </p>

                                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <ShieldCheck className="w-4 h-4 text-ikg-gold" />
                                        </div>
                                        <span className="text-white font-bold text-xs uppercase tracking-wider">{review.author}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Scanning Line Animation */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ikg-gold/5 to-transparent h-[10px] w-full animate-scan opacity-0 group-hover:opacity-100 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
