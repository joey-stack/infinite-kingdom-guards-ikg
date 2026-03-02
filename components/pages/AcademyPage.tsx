import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { BookOpen, UserCheck, ShieldAlert, Award, FileText, Crosshair, Map } from 'lucide-react';

// Assets
import heroBg from '../../assets/images/hero-guard.png';
import professionalImg from '../../assets/images/Professional.png';

const courses = [
    {
        title: 'Tactical Combat Casualty Care (TCCC)',
        level: 'Advanced',
        duration: '5 Days',
        description: 'Comprehensive medical training for high-threat environments. Covers hemorrhage control, airway management, and shock treatment under fire.',
        icon: ShieldAlert,
        modules: ['Hemorrhage Control', 'Airway Management', 'Shock Treatment', 'Evacuation Protocols']
    },
    {
        title: 'Close Protection Operative',
        level: 'Expert',
        duration: '14 Days',
        description: 'The gold standard for executive protection. Includes route planning, threat assessment, embus/debus drills, and defensive driving.',
        icon: UserCheck,
        modules: ['Threat Assessment', 'Route Planning', 'Defensive Driving', 'Close Quarter Battle']
    },
    {
        title: 'Surveillance & Counter-Surveillance',
        level: 'Intermediate',
        duration: '7 Days',
        description: 'Master the art of observation. Effectively track targets while remaining undetected, and identify hostile surveillance teams.',
        icon: Crosshair,
        modules: ['Static Observation', 'Mobile Surveillance', 'Technical Surveillance', 'Counter-Measures']
    },
    {
        title: 'Cybersecurity Awareness for Field Ops',
        level: 'Basic',
        duration: '3 Days',
        description: 'Essential digital hygiene and operational security (OPSEC) for field agents. Securing comms, devices, and digital footprints.',
        icon: FileText,
        modules: ['Digital Footprint', 'Secure Comms', 'Device Hardening', 'Social Engineering']
    }
];

export const AcademyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Academy Hero"
                        className="w-full h-full object-cover object-top opacity-50 filter grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-ikg-stealth/80 via-transparent to-ikg-stealth"></div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                                <Award className="w-16 h-16 text-ikg-gold" />
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
                            Elite <span className="text-ikg-gold">Training</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-mono text-white/60 max-w-3xl mx-auto border-t border-white/10 pt-6 mt-6">
                            Forging the next generation of tactical operatives through rigorous, real-world scenarios.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-mono uppercase tracking-widest text-ikg-gold">
                                Status: Enrolling
                            </div>
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-mono uppercase tracking-widest text-white/60">
                                Next Intake: DEC 2026
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Curriculum Grid */}
            <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Curriculum
                        </h2>
                        <h3 className="text-4xl font-bold uppercase">Active Courses</h3>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-white/40 text-sm max-w-xs">
                            All courses are certified by international security standards bodies and include practical field assessments.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/[0.02] border border-white/10 p-8 hover:border-ikg-gold/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                <course.icon className="w-48 h-48 text-white" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-ikg-gold/10 rounded border border-ikg-gold/20 group-hover:bg-ikg-gold/20 transition-colors">
                                        <course.icon className="w-8 h-8 text-ikg-gold" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border mb-2 ${course.level === 'Expert' ? 'border-red-500 text-red-500' :
                                            course.level === 'Advanced' ? 'border-orange-500 text-orange-500' :
                                                'border-green-500 text-green-500'
                                            }`}>
                                            {course.level}
                                        </span>
                                        <span className="text-xs font-mono text-white/40">{course.duration}</span>
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-ikg-gold transition-colors">{course.title}</h4>
                                <p className="text-white/60 leading-relaxed mb-8 min-h-[5rem] h-auto">
                                    {course.description}
                                </p>

                                <div className="mb-8">
                                    <span className="text-xs font-mono text-white/30 uppercase tracking-widest block mb-3">Key Modules:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {course.modules.map((mod, mIdx) => (
                                            <span key={mIdx} className="px-2 py-1 bg-white/5 text-xs text-white/60 rounded border border-white/5">
                                                {mod}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-4 border border-white/20 text-white uppercase font-bold tracking-widest hover:bg-ikg-gold hover:text-black hover:border-ikg-gold transition-all group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                    Enroll Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Application Process / Facility */}
            <section className="py-24 bg-ikg-lattice/30 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4">Training Ground</h2>
                            <h3 className="text-4xl font-bold uppercase mb-6">The Proving Grounds</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                Located in a classified remote facility, our training center simulates diverse operational environments, from dense urban kill houses to rugged hostile terrain.
                            </p>
                            <ul className="space-y-4 font-mono text-sm text-white/60">
                                <li className="flex items-center gap-3">
                                    <Map className="w-4 h-4 text-ikg-gold" />
                                    <span>300+ Acre Tactical Facility</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Crosshair className="w-4 h-4 text-ikg-gold" />
                                    <span>Live-Fire Shoothouses</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ShieldAlert className="w-4 h-4 text-ikg-gold" />
                                    <span>Simulated Medical Trauma Labs</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[400px] border border-white/10 bg-black/50 overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595183885060-6cb2cc8ba24a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <div className="text-3xl sm:text-4xl font-black text-white mb-2">ZONE 4</div>
                                <div className="text-ikg-gold font-mono text-xs uppercase tracking-widest">Urban Warfare Sim</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructors */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-ikg-gold font-mono text-sm tracking-widest uppercase mb-4">Faculty</h2>
                        <h3 className="text-4xl font-bold uppercase">Master Instructors</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Instructor 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-ikg-stealth border border-white/10 p-8 text-center hover:border-ikg-gold/30 transition-colors group"
                        >
                            <div className="w-32 h-32 mx-auto mb-6 relative">
                                <div className="absolute inset-0 rounded-full border-2 border-ikg-gold/20 animate-spin-slow"></div>
                                <img
                                    src={professionalImg}
                                    alt="Instructor"
                                    className="w-full h-full object-cover object-top rounded-full filter grayscale contrast-125"
                                />
                            </div>
                            <h4 className="text-xl font-bold uppercase text-white mb-1">Cpt. Price (Ret.)</h4>
                            <span className="text-ikg-gold font-mono text-xs uppercase tracking-widest mb-6 block">Lead Instructor</span>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Former Special Air Service. Expert in counter-terrorism and hostage rescue with 25 years operational experience.
                            </p>
                        </motion.div>

                        {/* Instructor 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-ikg-stealth border border-white/10 p-8 text-center hover:border-ikg-gold/30 transition-colors group"
                        >
                            <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center bg-white/5 rounded-full">
                                <UserCheck className="w-16 h-16 text-white/20" />
                            </div>
                            <h4 className="text-xl font-bold uppercase text-white mb-1">Sgt. "Soap" MacTavish</h4>
                            <span className="text-ikg-gold font-mono text-xs uppercase tracking-widest mb-6 block">Demolitions</span>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Specialist in explosive ordnance disposal and tactical breaching. Certified Master Breacher.
                            </p>
                        </motion.div>

                        {/* Instructor 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-ikg-stealth border border-white/10 p-8 text-center hover:border-ikg-gold/30 transition-colors group"
                        >
                            <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center bg-white/5 rounded-full">
                                <Crosshair className="w-16 h-16 text-white/20" />
                            </div>
                            <h4 className="text-xl font-bold uppercase text-white mb-1">Agent 47</h4>
                            <span className="text-ikg-gold font-mono text-xs uppercase tracking-widest mb-6 block">Stealth Ops</span>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Unrivaled expertise in infiltration, disguise, and silent elimination. Classified background.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
