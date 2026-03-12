import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Send, Clock, CheckCircle, Globe, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

import heroBg from '../../assets/images/hero_bg_3.png';

const offices = [
    {
        city: 'Abuja',
        type: 'Headquarters',
        address: '123 Defense Avenue, Central Business District, Abuja',
        phone: '+234 800 IKG GUARD',
        email: 'ops@ikg.com',
        status: 'ACTIVE',
        icon: Building2
    },
    {
        city: 'Lagos',
        type: 'Regional Hub',
        address: 'Victoria Island, Lagos',
        phone: '+234 801 000 0000',
        email: 'lagos@ikg.com',
        status: 'ACTIVE',
        icon: Globe
    },
    {
        city: 'Demsa',
        type: 'Training Command',
        address: 'Classified Facility, Adamawa State',
        phone: 'Encrypted Line',
        email: 'academy@ikg.com',
        status: 'ACTIVE',
        icon: Shield
    }
];

export const ContactPage: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('sent');
            setTimeout(() => {
                setFormStatus('idle');
                setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
            }, 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Contact Background"
                        className="w-full h-full object-cover opacity-30 filter grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-ikg-stealth/80 via-ikg-stealth/50 to-ikg-stealth"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                                <Mail className="w-12 h-12 text-ikg-gold" />
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
                            Initiate <span className="text-ikg-gold block md:inline">Contact</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-mono text-white/60 max-w-3xl mx-auto border-t border-white/10 pt-6 mt-6">
                            Secure communications channel for high-priority inquiries and deployment requests.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-3/5"
                    >
                        <div className="mb-8">
                            <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                                <Send className="w-4 h-4" />
                                Secure Transmission
                            </h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">Send a Briefing</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest text-white/40">Full Name / Organization</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors font-mono"
                                        placeholder="Commander Al-Falasi"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest text-white/40">Secure Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors font-mono"
                                        placeholder="ops@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest text-white/40">Contact Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors font-mono"
                                        placeholder="+234 800 000 0000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest text-white/40">Inquiry Type</label>
                                    <select
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/30 border border-white/10 p-4 text-white focus:border-ikg-gold outline-none transition-colors font-mono appearance-none"
                                    >
                                        <option value="" disabled className="bg-ikg-stealth">Select Category</option>
                                        <option value="security-audit" className="bg-ikg-stealth">Strategic Security Audit</option>
                                        <option value="asset-protection" className="bg-ikg-stealth">Asset Protection</option>
                                        <option value="executive-protection" className="bg-ikg-stealth">Executive Protection</option>
                                        <option value="training" className="bg-ikg-stealth">Training & Academy</option>
                                        <option value="government" className="bg-ikg-stealth">Government Contracting</option>
                                        <option value="general" className="bg-ikg-stealth">General Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Mission Briefing</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors font-mono resize-none"
                                    placeholder="Detail your security requirements, operational scope, and timeline..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                variant="primary"
                                className="w-full md:w-auto flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <div className="relative z-10 flex items-center gap-3 flex-row">
                                    {formStatus === 'idle' && (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Transmit Briefing</span>
                                        </>
                                    )}
                                    {formStatus === 'sending' && (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                            <span>Encrypting...</span>
                                        </>
                                    )}
                                    {formStatus === 'sent' && (
                                        <>
                                            <CheckCircle className="w-4 h-4" />
                                            <span>Transmission Received</span>
                                        </>
                                    )}
                                </div>
                            </Button>

                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-4">
                                All communications are AES-256 encrypted // Response within 24 hours
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-2/5 space-y-6"
                    >
                        <div className="mb-8">
                            <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Command Locations
                            </h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">Our Bases</h3>
                        </div>

                        {offices.map((office, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/[0.02] border border-white/10 p-6 hover:border-ikg-gold/30 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-ikg-gold/10 border border-ikg-gold/20 group-hover:bg-ikg-gold/20 transition-colors shrink-0">
                                        <office.icon className="w-5 h-5 text-ikg-gold" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-bold uppercase text-white">{office.city}</h4>
                                            <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                                {office.status}
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono text-ikg-gold uppercase tracking-widest block mb-3">{office.type}</span>

                                        <div className="space-y-2 text-sm text-white/50">
                                            <p className="flex items-start gap-2">
                                                <MapPin className="w-3 h-3 text-white/30 shrink-0 mt-1" />
                                                {office.address}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Phone className="w-3 h-3 text-white/30 shrink-0" />
                                                {office.phone}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Mail className="w-3 h-3 text-white/30 shrink-0" />
                                                {office.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Operating Hours */}
                        <div className="bg-ikg-gold/5 border border-ikg-gold/20 p-6">
                            <h4 className="text-sm font-bold uppercase mb-4 flex items-center gap-2 text-ikg-gold">
                                <Clock className="w-4 h-4" />
                                Operating Hours
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-white/60">Command Center</span>
                                    <span className="font-mono text-ikg-gold">24/7/365</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/60">Admin Office</span>
                                    <span className="font-mono text-white/80">Mon–Fri 08:00–18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/60">Emergency Line</span>
                                    <span className="font-mono text-green-500">Always Active</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="border-t border-white/5 relative overflow-hidden">
                <div className="h-[300px] md:h-[400px] relative bg-black/40">
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-5 filter invert"></div>

                    {/* Ping Points */}
                    <div className="absolute top-[45%] left-[48%] w-3 h-3 bg-ikg-gold rounded-full animate-ping"></div>
                    <div className="absolute top-[45%] left-[48%] w-3 h-3 bg-ikg-gold rounded-full"></div>

                    <div className="absolute top-[42%] left-[46%] w-2 h-2 bg-ikg-gold/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-[42%] left-[46%] w-2 h-2 bg-ikg-gold/60 rounded-full"></div>

                    <div className="absolute top-[50%] left-[47%] w-2 h-2 bg-ikg-gold/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-[50%] left-[47%] w-2 h-2 bg-ikg-gold/60 rounded-full"></div>

                    {/* Labels */}
                    <div className="absolute bottom-8 left-8 md:left-20">
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-1">Operational Grid</span>
                        <span className="text-2xl md:text-3xl font-black text-white/10 uppercase">Nigeria Command</span>
                    </div>

                    <div className="absolute top-8 right-8 md:right-20 text-right">
                        <div className="flex items-center gap-2 justify-end mb-2">
                            <span className="w-2 h-2 bg-ikg-gold rounded-full"></span>
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Active Base</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span className="w-2 h-2 bg-ikg-gold/40 rounded-full"></span>
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Regional Hub</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
