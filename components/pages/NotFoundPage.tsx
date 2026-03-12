import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ShieldOff, Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-32 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto relative z-10"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                        className="flex justify-center mb-10"
                    >
                        <div className="p-6 bg-red-500/10 rounded-full border border-red-500/20">
                            <ShieldOff className="w-16 h-16 text-red-500" />
                        </div>
                    </motion.div>

                    {/* Error Code */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8"
                    >
                        <span className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none block">
                            404
                        </span>
                    </motion.div>

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-8"
                    >
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        Sector Not Found
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 leading-none">
                            Access <span className="text-red-500">Denied</span>
                        </h1>
                        <p className="text-white/50 font-mono text-sm max-w-md mx-auto mb-12 leading-relaxed">
                            The requested sector does not exist in our operational grid. This location may have been classified or relocated.
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            as="link"
                            to="/"
                            variant="primary"
                            className="flex items-center gap-2 !px-8 !py-4 !text-xs"
                        >
                            <Home className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Return to Base</span>
                        </Button>
                        <Button
                            onClick={() => navigate(-1)}
                            variant="outline"
                            className="flex items-center gap-2 !px-8 !py-4 !text-xs"
                        >
                            <ArrowLeft className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Go Back</span>
                        </Button>
                    </motion.div>

                    {/* System Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-16 pt-8 border-t border-white/5"
                    >
                        <p className="text-[10px] text-white/20 font-mono uppercase tracking-widest">
                            SYSTEM: IKG-GRID-404 // ERROR: UNCHARTED_SECTOR // TIMESTAMP: {new Date().toISOString()}
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};
