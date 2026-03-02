import React from 'react';
import { Shield, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 md:px-20 font-sans text-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <img
                            src="/assets/images/infinite kingdom guards logo.svg"
                            alt="IKG Logo"
                            className="h-12 w-auto"
                        />
                        <span className="text-white font-bold tracking-tighter uppercase text-xl">IKG Ltd</span>
                    </div>
                    <p className="text-white/40 mb-6 font-mono text-xs">
                        RC 12345678<br />
                        NSCDC License No. XXXXX
                    </p>
                    <div className="flex gap-4">
                        {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
                            <a key={idx} href="#" className="text-white/40 hover:text-ikg-gold transition-colors">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Navigation</h4>
                    <ul className="space-y-4 text-white/50 font-mono text-xs">
                        {[
                            { label: 'About Us', href: '/about' },
                            { label: 'Capabilities', href: '/capabilities' },
                            { label: 'Academy', href: '/academy' },
                            { label: 'Field Reports', href: '/field-reports' },
                            { label: 'Contact', href: '/contact' }
                        ].map(item => (
                            <li key={item.label}><Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Legal</h4>
                    <ul className="space-y-4 text-white/50 font-mono text-xs">
                        {['Privacy Policy', 'Terms of Service', 'Indemnity', 'Sitemap'].map(item => (
                            <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Headquarters</h4>
                    <address className="text-white/50 font-mono text-xs not-italic space-y-4">
                        <p>123 Defense Avenue,<br />Central Business District,<br />Abuja, Nigeria.</p>
                        <p><a href="tel:+2348000000000" className="hover:text-white">+234 800 IKG GUARD</a></p>
                        <p><a href="mailto:ops@ikg.com" className="hover:text-white">ops@ikg.com</a></p>
                    </address>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row gap-4 justify-between items-center text-white/20 font-mono text-[10px] uppercase">
                <p>&copy; {new Date().getFullYear()} Infinite Kingdom Guards Ltd. All Rights Reserved.</p>
                <p className="font-bold tracking-widest text-ikg-gold/40">Securing The Future.</p>
            </div>
        </footer>
    );
};
