import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShieldAlert } from 'lucide-react';
import { servicesData } from '../../data/services';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';

export const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = servicesData.find(s => s.id === id);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    if (!service) {
        return (
            <div className="min-h-screen bg-ikg-stealth flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
                    <Link to="/" className="text-ikg-gold hover:underline">Return to Base</Link>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-ikg-stealth font-sans">
            <Navbar />

            <main className="pt-24 pb-12 px-6 md:px-20 max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center text-white/50 hover:text-ikg-gold transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Command
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-ikg-gold/10 rounded border border-ikg-gold/30">
                                <service.icon className="w-8 h-8 text-ikg-gold" />
                            </div>
                            <span className="text-ikg-gold font-mono text-sm tracking-widest uppercase">Service Detail // {service.id}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase mb-8 leading-none">
                            {service.title}
                        </h1>

                        <p className="text-xl text-white/80 font-light leading-relaxed mb-10 border-l-2 border-ikg-gold pl-6">
                            {service.longDesc}
                        </p>

                        <div className="bg-ikg-lattice/50 border border-white/10 p-8 mb-8">
                            <h3 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Operational Features</h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-ikg-gold shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Booking Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black/40 border border-white/10 p-8 md:p-10 h-fit sticky top-32 clip-path-slant"
                    >
                        {formStatus === 'success' ? (
                            <div className="text-center py-20">
                                <ShieldAlert className="w-16 h-16 text-green-500 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-white uppercase mb-4">Request Received</h3>
                                <p className="text-white/60 mb-8">
                                    Our operations team has received your deployment request. A tactical coordinator will contact you shortly.
                                </p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="px-8 py-3 bg-white/10 text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest font-bold text-sm"
                                >
                                    Make Another Request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white uppercase mb-2">Request Service</h3>
                                    <p className="text-white/40 text-sm font-mono mb-8">SECURE ENCRYPTED TRANSMISSION</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-ikg-gold tracking-widest">Client Name / Organization</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-ikg-gold transition-colors"
                                        placeholder="ENTER IDENTIFIER"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-ikg-gold tracking-widest">Contact Frequency</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-ikg-gold transition-colors"
                                        placeholder="EMAIL@DOMAIN.COM"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-ikg-gold tracking-widest">Mission Parameters</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-ikg-gold transition-colors resize-none"
                                        placeholder="DESCRIBE OPERATIONAL REQUIREMENTS..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full py-4 bg-ikg-gold text-black font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group mt-4"
                                >
                                    {formStatus === 'submitting' ? 'Transmitting...' : 'Initialize Request'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
