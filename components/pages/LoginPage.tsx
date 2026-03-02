import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulate authentication delay
        setTimeout(() => {
            const storedClient = localStorage.getItem('ikg_client');

            if (storedClient) {
                const client = JSON.parse(storedClient);
                // For demo: accept any password if email matches
                if (client.email === email) {
                    localStorage.setItem('ikg_auth', 'true');
                    setLoading(false);
                    navigate('/dashboard');
                    return;
                }
            }

            // Demo fallback: create a demo account on any login
            if (email && password) {
                const demoClient = {
                    name: 'Demo Operator',
                    email: email,
                    id: `IKG-${Math.floor(Math.random() * 10000)}`,
                    deployments: [
                        {
                            id: `REF-${Date.now()}`,
                            serviceId: 'mobile-static-security',
                            guards: 3,
                            location: 'Lagos HQ, Nigeria',
                            status: 'Active',
                            startDate: new Date().toISOString().split('T')[0],
                            cost: 2250
                        }
                    ]
                };
                localStorage.setItem('ikg_client', JSON.stringify(demoClient));
                localStorage.setItem('ikg_auth', 'true');
                setLoading(false);
                navigate('/dashboard');
                return;
            }

            setLoading(false);
            setError('ACCESS DENIED — Invalid credentials. Contact Command for assistance.');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md relative"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-ikg-gold/20 to-transparent rounded blur-xl opacity-30 pointer-events-none"></div>

                    <div className="relative bg-ikg-lattice/50 border border-white/10 p-10 md:p-12 backdrop-blur-sm">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-white/5 rounded-full border border-white/10">
                                    <Shield className="w-10 h-10 text-ikg-gold" />
                                </div>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Client Access</h1>
                            <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Encrypted Portal // Authorized Personnel Only</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-500/10 border border-red-500/30 p-4 mb-6 flex items-start gap-3"
                            >
                                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <p className="text-red-400 text-xs font-mono">{error}</p>
                            </motion.div>
                        )}

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Secure Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-black/30 border border-white/10 p-4 pl-12 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors font-mono"
                                        placeholder="operative@ikg.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Access Code</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-black/30 border border-white/10 p-4 pl-12 pr-12 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors font-mono"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-ikg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        <Lock className="w-4 h-4" />
                                        Authenticate
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer Links */}
                        <div className="mt-8 pt-6 border-t border-white/5 text-center space-y-3">
                            <p className="text-xs text-white/30">
                                No account?{' '}
                                <Link to="/booking" className="text-ikg-gold hover:text-white transition-colors">
                                    Request Deployment
                                </Link>
                            </p>
                            <p className="text-[10px] text-white/20 font-mono">
                                SYSTEM: IKG-SEC-PORTAL v4.2.1 // AES-256 ENCRYPTED
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};
