import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { NEWS } from '../../constants';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowLeft, ArrowUpRight, Shield, Radio, Tag } from 'lucide-react';

export const FieldReportDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const report = NEWS.find(n => n.id === id);
    const relatedReports = NEWS.filter(n => n.id !== id);

    if (!report) {
        return (
            <div className="min-h-screen bg-ikg-stealth font-sans text-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
                    <Shield className="w-16 h-16 text-white/10 mb-6" />
                    <h2 className="text-3xl font-black uppercase mb-4">Report Not Found</h2>
                    <p className="text-white/50 font-mono text-sm mb-8">The requested intelligence file does not exist or has been redacted.</p>
                    <Link to="/field-reports" className="px-6 py-3 bg-ikg-gold text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors">
                        Return to Intel Feed
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    // Simulated full article content based on category
    const articleContent = {
        TRAINING: [
            'The IKG Academy has officially opened enrollment for its 24th training cohort, continuing its legacy of producing the most highly-qualified security operatives in the region. This batch will feature an expanded curriculum incorporating the latest in cybersecurity awareness and drone counter-measures.',
            'Candidates will undergo a rigorous 14-week program that covers everything from fundamental tactical awareness to advanced close protection techniques. Our emphasis on real-world scenario training sets our graduates apart from the competition, ensuring they are battle-ready from day one.',
            'Applications are now being accepted from both military veterans and civilian professionals with demonstrable fitness and aptitude. The selection process remains highly competitive, with only a 12% acceptance rate in the previous cohort.',
            'The program will be conducted at our classified 300-acre training facility, featuring live-fire shoothouses, simulated urban environments, and medical trauma labs. Graduates receive internationally recognized certifications upon successful completion.'
        ],
        CORPORATE: [
            'Infinite Kingdom Guards is proud to announce a landmark strategic partnership with Smart City Africa, a leading urban development and technology integration firm operating across Sub-Saharan Africa.',
            'This partnership will see IKG provide end-to-end security consulting and physical protection for Smart City Africa\'s ambitious projects in Lagos, Nairobi, and Kigali. The scope includes comprehensive threat assessments, deployment of static and mobile guard units, and the installation of advanced surveillance infrastructure.',
            'The collaboration leverages IKG\'s deep expertise in securing critical infrastructure with Smart City Africa\'s vision for building safer, smarter urban environments. Together, the two firms will pioneer an integrated security model that combines physical patrols with IoT-enabled monitoring systems.',
            'This partnership represents a significant expansion of IKG\'s corporate client portfolio and reinforces our position as the preferred security partner for major development projects across the continent.'
        ],
        INTEL: [
            'IKG\'s intelligence division has issued a security advisory for all operations in the North-East Corridor following a significant escalation in asymmetric threat activity. All active deployments in the region have been placed on heightened alert status.',
            'Our monitoring systems detected a 40% increase in suspicious communications traffic and a corresponding rise in localized incidents over the past 72 hours. The threat assessment team has classified the current risk level as ELEVATED, recommending enhanced perimeter protocols for all client assets.',
            'Specific recommendations include the augmentation of static guard details, increased patrol frequency, and the activation of contingency evacuation plans. Clients with operations in the affected sectors have been individually briefed by their assigned tactical liaison.',
            'IKG\'s 24/7 Command Center continues to monitor the situation in real-time. Further updates will be dispatched through encrypted channels as the situation develops. All operatives are advised to maintain maximum situational awareness.'
        ]
    };

    const content = articleContent[report.category as keyof typeof articleContent] || articleContent.INTEL;

    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            {/* Hero Image */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={report.image}
                        alt={report.title}
                        className="w-full h-full object-cover filter grayscale contrast-125 opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ikg-stealth via-ikg-stealth/60 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-20 max-w-7xl mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/field-reports" className="inline-flex items-center gap-2 text-xs font-mono text-ikg-gold uppercase tracking-widest mb-6 hover:text-white transition-colors">
                            <ArrowLeft className="w-3 h-3" />
                            Back to Intel Feed
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-ikg-gold/20 border border-ikg-gold/30 text-ikg-gold text-xs font-mono uppercase tracking-widest flex items-center gap-1.5">
                                <Tag className="w-3 h-3" />
                                {report.category}
                            </span>
                            <span className="text-xs font-mono text-white/40 flex items-center gap-1.5">
                                <Clock className="w-3 h-3 text-ikg-gold" />
                                {report.date}
                            </span>
                            <span className="text-xs font-mono text-white/40 flex items-center gap-1.5">
                                <MapPin className="w-3 h-3 text-ikg-gold" />
                                Sector 7 — Classified
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
                            {report.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Article */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        {/* Classification Banner */}
                        <div className="flex items-center gap-3 p-4 bg-ikg-gold/5 border border-ikg-gold/20 mb-10">
                            <Radio className="w-4 h-4 text-ikg-gold animate-pulse" />
                            <span className="text-xs font-mono text-ikg-gold uppercase tracking-widest">
                                Classification: Declassified // Distribution: Public
                            </span>
                        </div>

                        {/* Article Body */}
                        <div className="space-y-6">
                            {content.map((paragraph, idx) => (
                                <motion.p
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`text-white/70 leading-relaxed text-lg ${idx === 0 ? 'first-letter:text-5xl first-letter:font-black first-letter:text-ikg-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1' : ''}`}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-12 border-t border-white/10"></div>

                        {/* Author / Classification Footer */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/[0.02] border border-white/10 p-6 gap-4">
                            <div>
                                <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Filed By</div>
                                <div className="text-sm font-bold text-white uppercase">IKG Intelligence Division</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Report ID</div>
                                <div className="text-sm font-mono text-ikg-gold">{report.id.toUpperCase()}-{Date.now().toString(36).toUpperCase()}</div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:w-1/3 space-y-8"
                    >
                        {/* Related Reports */}
                        <div className="bg-white/[0.02] border border-white/10 p-6">
                            <h3 className="text-sm font-bold uppercase mb-6 text-white flex items-center gap-2">
                                <Shield className="w-4 h-4 text-ikg-gold" />
                                Related Intelligence
                            </h3>
                            <div className="space-y-4">
                                {relatedReports.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/field-reports/${item.id}`}
                                        className="block group"
                                    >
                                        <div className="flex gap-4 p-3 bg-black/20 border border-white/5 hover:border-ikg-gold/30 transition-all">
                                            <div className="w-20 h-20 shrink-0 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-[10px] font-mono text-ikg-gold uppercase tracking-widest">{item.category}</span>
                                                <h4 className="text-sm font-bold uppercase text-white group-hover:text-ikg-gold transition-colors leading-tight mt-1 line-clamp-2">
                                                    {item.title}
                                                </h4>
                                                <span className="text-[10px] font-mono text-white/30 mt-1 block">{item.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white/[0.02] border border-white/10 p-6">
                            <h3 className="text-sm font-bold uppercase mb-4 text-white">Actions</h3>
                            <div className="space-y-2">
                                <Link
                                    to="/contact"
                                    className="w-full p-3 border border-white/5 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-ikg-gold hover:border-ikg-gold/30 transition-colors flex items-center justify-between"
                                >
                                    Contact Command
                                    <ArrowUpRight className="w-3 h-3" />
                                </Link>
                                <Link
                                    to="/booking"
                                    className="w-full p-3 border border-white/5 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-ikg-gold hover:border-ikg-gold/30 transition-colors flex items-center justify-between"
                                >
                                    Request Deployment
                                    <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </section>

            <Footer />
        </div>
    );
};
