import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { Shield, Target, Award, Users, History, Globe, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Assets
import heroBg from '../../assets/images/hero_bg_3.png';
import missionVisionImage from '../../assets/images/about-mission-vision-v2.png';
import founderImage from '../../assets/images/wisdom-kwati-ceo.png';
import mdImage from '../../assets/images/saliu-samuel-anavi-md.png';

const milestones = [
    { year: '2005', title: 'Foundation', description: 'Established by Commander Al-Falasi to provide elite protection services.' },
    { year: '2010', title: 'International Expansion', description: 'Operations expanded to 5 continents, securing critical infrastructure.' },
    { year: '2018', title: 'Cyber Division', description: 'Launch of dedicated cybersecurity wing for hybrid threat mitigation.' },
    { year: '2025', title: 'Global Standard', description: 'Recognized as the premier private security firm worldwide.' }
];

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 filter grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-ikg-stealth/80 via-ikg-stealth/50 to-ikg-stealth"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                                <Shield className="w-12 h-12 text-ikg-gold animate-pulse" />
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
                            Forging the <span className="text-ikg-gold block md:inline">Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-mono text-white/60 max-w-3xl mx-auto border-t border-white/10 pt-6 mt-6">
                            Redefining global security through tactical innovation and elite personnel.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision - Split Layout */}
            <section className="py-24 relative">
                <div className="flex flex-col lg:flex-row gap-20 items-center max-w-7xl mx-auto px-6 md:px-20 w-full">
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl md:text-5xl font-bold uppercase mb-8 leading-tight">
                            Uncompromising Protection in a <span className="text-white/40">Complex World</span>
                        </h3>
                        
                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                            <Target className="w-4 h-4" />
                            Our Mission
                        </h2>
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                To deliver <strong className="text-white font-medium">matchless security solutions</strong> through continuous capacity building, dynamic engagement of experts, and use of state-of-the-art technology globally available for the delight of our stakeholders.
                            </p>
                        </div>

                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mt-12 mb-6 flex items-center gap-3">
                            <Globe className="w-4 h-4" />
                            Our Vision
                        </h2>
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                To be a <strong className="text-white font-medium">one-stop hub</strong> and the most innovative security solution provider in Nigeria and beyond.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-12">
                            {['Global Reach', 'Elite Personnel', '24/7 Command', 'Cyber Secure'].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white/80">
                                    <CheckCircle className="w-5 h-5 text-ikg-gold" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-ikg-gold/20 blur-2xl rounded-full opacity-20"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 group">
                            <div className="absolute inset-0 bg-ikg-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src={missionVisionImage}
                                alt="IKG Security Team"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                                <span className="text-4xl font-black text-white/10 absolute -top-4 right-4">01</span>
                                <h4 className="text-xl font-bold uppercase text-white mb-2">Elite Guard Unit</h4>
                                <p className="text-xs font-mono text-ikg-gold tracking-widest uppercase">Deployed: Corporate Headquarters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            <section className="py-24 bg-ikg-lattice/30 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-ikg-gold/5 blur-3xl rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4">Core Principles</h2>
                        <h3 className="text-3xl md:text-5xl font-bold uppercase">The IKG Code</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Target, title: 'Professionalism', desc: 'Displaying the highest level of competence and conduct in all operations.' },
                            { icon: Award, title: 'Excellence', desc: 'A standard that exceeds all global security benchmarks.' },
                            { icon: Globe, title: 'Innovation', desc: 'Leveraging cutting-edge technology and modern tactical solutions.' },
                            { icon: Users, title: 'Integrity', desc: 'Unwavering moral courage and honesty in facing threats.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 bg-black/40 border border-white/10 hover:border-ikg-gold/50 transition-all group"
                            >
                                <item.icon className="w-12 h-12 text-white/20 group-hover:text-ikg-gold transition-colors mb-6" />
                                <h4 className="text-xl font-bold uppercase mb-4 text-white">{item.title}</h4>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col md:flex-row items-stretch gap-0 bg-ikg-stealth border border-white/10 shadow-2xl">
                    <div className="w-full md:w-2/5 relative overflow-hidden group min-h-[500px]">
                        <div className="absolute inset-0 bg-ikg-gold/0 group-hover:bg-ikg-gold/10 transition-colors z-10 text-center"></div>
                        <img
                            src={founderImage}
                            alt="Wisdom Kwati"
                            className="w-full h-full object-cover object-top filter grayscale contrast-125"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="bg-black/80 backdrop-blur px-4 py-2 border-l-2 border-ikg-gold">
                                <span className="block font-mono text-xs text-ikg-gold uppercase tracking-widest">Founder & CEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 p-12 md:p-16 flex flex-col justify-center bg-ikg-lattice/50 relative">
                        <div className="absolute top-8 right-8 text-white/5 text-9xl font-black select-none">CEO</div>

                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-6">Visionary Leadership</h2>
                        <h3 className="text-3xl md:text-5xl font-bold uppercase mb-8 leading-none">Wisdom <br /> Kwati</h3>

                        <p className="text-white/70 leading-relaxed mb-10 text-lg font-light italic">
                            "Infinite Kingdom Guards delivers elite, need-based security solutions driven by a commitment to continuous innovation and excellence. We serve as the essential 'third eye' for your organization, with a team of resourceful professionals dedicated to ensuring absolute protection and client delight."
                        </p>
                        <div className="flex items-center gap-4 mb-12">
                             <div className="h-[1px] w-12 bg-ikg-gold"></div>
                             <span className="text-ikg-gold font-mono text-sm tracking-widest uppercase">From The Desk of the Chairman</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Managing Director Section - Mirrored Layout */}
            <section className="py-24 relative bg-ikg-lattice/20">
                <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col md:flex-row-reverse items-stretch gap-0 bg-ikg-stealth border border-white/5 shadow-2xl">
                    <div className="w-full md:w-2/5 relative overflow-hidden group min-h-[500px]">
                        <div className="absolute inset-0 bg-ikg-gold/0 group-hover:bg-ikg-gold/10 transition-colors z-10 text-center"></div>
                        <img
                            src={mdImage}
                            alt="Saliu Samuel Anavi"
                            className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
                        />
                        <div className="absolute bottom-6 right-6 z-20">
                            <div className="bg-black/80 backdrop-blur px-4 py-2 border-r-2 border-ikg-gold text-right">
                                <span className="block font-mono text-xs text-ikg-gold uppercase tracking-widest">Managing Director</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 p-12 md:p-16 flex flex-col justify-center relative">
                        <div className="absolute top-8 left-8 text-white/5 text-9xl font-black select-none">MD</div>

                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-6">Strategic Operations</h2>
                        <h3 className="text-3xl md:text-5xl font-bold uppercase mb-8 leading-none">Saliu <br /> Samuel Anavi</h3>

                        <p className="text-white/70 leading-relaxed mb-8 text-lg font-light">
                            "Excellence is not an act, but a habit. At IKG, our management system is built on the foundations of precision and unwavering accountability. We ensure that every operative on the field embodies the high standards of discipline that our clients expect and deserve."
                        </p>
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="py-24 bg-black/20 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 md:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4">Legacy</h2>
                        <h3 className="text-3xl md:text-5xl font-bold uppercase">Our History</h3>
                    </div>

                    <div className="relative border-l border-white/10 ml-6 md:ml-1/2 md:-translate-x-px space-y-12">
                        {milestones.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-ikg-gold rounded-full md:left-1/2 md:-translate-x-[5px]"></div>

                                <div className="md:w-1/2 p-4"></div>
                                <div className={`md:w-1/2 p-4 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                                    <span className="text-4xl font-black text-white/10 block mb-2">{item.year}</span>
                                    <h4 className="text-xl font-bold uppercase text-white mb-2">{item.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
