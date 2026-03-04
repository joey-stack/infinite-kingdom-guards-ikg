import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, stagger } from 'framer-motion';
import { Menu, X, Shield, Instagram, Twitter, Linkedin, Phone, Mail, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Capabilities', href: '/capabilities' },
        { name: 'Academy', href: '/academy' },
        { name: 'Field Reports', href: '/field-reports' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${isScrolled ? 'bg-ikg-stealth/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img
                        src="/assets/images/infinite-kingdom-guards-logo.svg"
                        alt="IKG Logo"
                        className="w-10 h-10 transition-transform group-hover:scale-110"
                    />
                    <span className="font-orbitron font-black text-lg md:text-xl text-white tracking-wider">
                        INFINITE <span className="text-ikg-gold">KINGDOM</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-5">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.href}
                            onMouseEnter={() => {
                                const component = link.href.split('/')[1] || 'Home';
                                // This triggers the dynamic import if not already loaded
                                if (link.href !== '/') {
                                    import(`../pages/${component.charAt(0).toUpperCase() + component.slice(1)}Page`).catch(() => { });
                                }
                            }}
                            className="text-xs font-mono text-white/70 hover:text-ikg-gold uppercase tracking-wider transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/booking"
                        onMouseEnter={() => import('../pages/BookingPage').catch(() => { })}
                        className="ml-2 px-5 py-2 bg-ikg-gold text-black font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all"
                    >
                        Book Now
                    </Link>
                    <Link
                        to="/login"
                        onMouseEnter={() => import('../pages/LoginPage').catch(() => { })}
                        className="px-5 py-2 border border-white/20 text-white/70 font-bold uppercase text-[10px] tracking-widest hover:border-ikg-gold hover:text-ikg-gold transition-all"
                    >
                        Client Login
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-[60] text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <X size={28} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                            >
                                <Menu size={28} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[55] bg-ikg-stealth flex flex-col lg:hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-ikg-gold/5 blur-[120px] pointer-events-none"></div>

                        <div className="relative flex flex-col h-full pt-32 pb-12 px-8 overflow-y-auto">
                            {/* Main Links */}
                            <nav className="flex flex-col gap-6 mb-12">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className="group flex items-center gap-4"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="text-ikg-gold font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                                            <span className="text-4xl font-black uppercase tracking-tight text-white group-hover:text-ikg-gold transition-colors">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Secondary Actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col gap-4 mb-12"
                            >
                                <Link
                                    to="/booking"
                                    className="w-full py-4 bg-ikg-gold text-black text-center font-black uppercase text-sm tracking-[0.2em]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Initialize Deployment
                                </Link>
                                <Link
                                    to="/login"
                                    className="w-full py-4 border border-white/10 text-white text-center font-bold uppercase text-sm tracking-[0.2em] hover:bg-white/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Client Portal
                                </Link>
                            </motion.div>

                            {/* Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-auto grid grid-cols-2 gap-8 border-t border-white/10 pt-8"
                            >
                                <div>
                                    <h4 className="text-[10px] font-mono uppercase text-ikg-gold mb-4 tracking-[0.2em]">Contact Command</h4>
                                    <div className="space-y-3">
                                        <a href="tel:+123456789" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                                            <Phone size={14} className="text-ikg-gold" />
                                            <span className="text-xs font-mono">+971 4 000 0000</span>
                                        </a>
                                        <a href="mailto:ops@ikg.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                                            <Mail size={14} className="text-ikg-gold" />
                                            <span className="text-xs font-mono">ops@ikg.com</span>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-mono uppercase text-ikg-gold mb-4 tracking-[0.2em]">Social Feed</h4>
                                    <div className="flex gap-4">
                                        <a href="#" className="p-2 bg-white/5 border border-white/10 hover:border-ikg-gold/50 transition-colors">
                                            <Instagram size={18} className="text-white/70" />
                                        </a>
                                        <a href="#" className="p-2 bg-white/5 border border-white/10 hover:border-ikg-gold/50 transition-colors">
                                            <Twitter size={18} className="text-white/70" />
                                        </a>
                                        <a href="#" className="p-2 bg-white/5 border border-white/10 hover:border-ikg-gold/50 transition-colors">
                                            <Linkedin size={18} className="text-white/70" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Status Bar */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-12 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-white/20"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    <span>System Secure</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <Globe size={10} />
                                        <span>EST. 2018</span>
                                    </div>
                                    <span>V2.4.0</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
