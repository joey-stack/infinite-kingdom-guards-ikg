import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Calculator, User, CreditCard, CheckCircle, Clock, MapPin, AlertTriangle, X, Lock } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { servicesData } from '../../data/services';
import { Button } from '../ui/Button';
import { CURRICULUM } from '../../constants';

// ─── Mock Paystack Payment Modal ───────────────────────────────────
const PaymentModal: React.FC<{
    isOpen: boolean;
    email: string;
    amount: number;
    onSuccess: (reference: { reference: string }) => void;
    onClose: () => void;
}> = ({ isOpen, email, amount, onSuccess, onClose }) => {
    const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('processing');
        setTimeout(() => {
            setStep('success');
            setTimeout(() => {
                onSuccess({ reference: `PS-${Date.now()}` });
            }, 1500);
        }, 2500);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="bg-[#0a0a0a] border border-white/10 w-full max-w-md relative overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-[#00C853]/10 border-b border-[#00C853]/20 p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#00C853] rounded flex items-center justify-center">
                                <Lock className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm">Paystack Secure</div>
                                <div className="text-[10px] text-white/40 font-mono">TEST MODE</div>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {step === 'form' && (
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div className="text-center mb-4">
                                <div className="text-white/50 text-sm">{email}</div>
                                <div className="text-3xl font-black text-white mt-2">
                                    ₦{(amount).toLocaleString()}<span className="text-sm text-white/40">.00</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-white/40 mb-1 block">CARD NUMBER</label>
                                    <input
                                        type="text"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                                        placeholder="0000 0000 0000 0000"
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white font-mono placeholder-white/20 focus:border-[#00C853] outline-none"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-white/40 mb-1 block">EXPIRY</label>
                                        <input
                                            type="text"
                                            value={expiry}
                                            onChange={(e) => setExpiry(e.target.value.slice(0, 5))}
                                            placeholder="MM/YY"
                                            className="w-full bg-white/5 border border-white/10 p-3 text-white font-mono placeholder-white/20 focus:border-[#00C853] outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-white/40 mb-1 block">CVV</label>
                                        <input
                                            type="password"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                            placeholder="•••"
                                            className="w-full bg-white/5 border border-white/10 p-3 text-white font-mono placeholder-white/20 focus:border-[#00C853] outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#00C853] text-white font-bold uppercase tracking-widest hover:bg-[#00E676] transition-colors"
                            >
                                Pay ₦{amount.toLocaleString()}.00

                            </button>

                            <p className="text-center text-[10px] text-white/30 font-mono">
                                DEMO MODE — No real charges will be made. Enter any values.
                            </p>
                        </form>
                    )}

                    {step === 'processing' && (
                        <div className="p-12 flex flex-col items-center justify-center">
                            <div className="w-16 h-16 border-4 border-[#00C853] border-t-transparent rounded-full animate-spin mb-6"></div>
                            <div className="text-white font-bold uppercase">Processing Payment...</div>
                            <div className="text-xs text-white/40 font-mono mt-2">Verifying with Paystack gateway</div>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="p-12 flex flex-col items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 10 }}
                            >
                                <CheckCircle className="w-16 h-16 text-[#00C853] mb-6" />
                            </motion.div>
                            <div className="text-white font-bold uppercase text-xl">Payment Confirmed</div>
                            <div className="text-xs text-white/40 font-mono mt-2">Redirecting to Command Center...</div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// ─── Main Booking Page ─────────────────────────────────────────────
export const BookingPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const isAcademy = searchParams.get('type') === 'academy';
    const preselectedModule = searchParams.get('module');

    // Form State
    const [selectedService, setSelectedService] = useState(
        isAcademy 
            ? (preselectedModule || CURRICULUM[0].id)
            : servicesData[0].id
    );
    const [guards, setGuards] = useState(1);
    const [duration, setDuration] = useState(isAcademy ? 30 : 1); // Courses are longer
    const [location, setLocation] = useState(isAcademy ? 'IKG Academy Regional Campus' : '');
    const [date, setDate] = useState('');
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    // Sync selected module if URL changes
    useEffect(() => {
        if (preselectedModule) {
            setSelectedService(preselectedModule);
        }
    }, [preselectedModule]);

    // Pricing Constants
    const BASE_RATE_PER_GUARD = 250000;

    const SERVICE_MULTIPLIERS: Record<string, number> = {
        'escort-services': 1.5,
        'close-protection': 2.5,
        'protocol': 1.2,
        'office-security': 1.0,
        'bouncers': 1.1,
        'armed-protection': 3.0,
        'crowd-control': 1.4,
        'home-security': 1.3,
        'security-trainings': 1.2,
        'security-consultation': 1.5
    };

    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const serviceMultiplier = SERVICE_MULTIPLIERS[selectedService] || 1;
        const calculatedCost = guards * duration * BASE_RATE_PER_GUARD * serviceMultiplier;
        setTotalCost(Math.round(calculatedCost));
    }, [selectedService, guards, duration]);

    // Payment Success
    const onPaymentSuccess = (reference: { reference: string }) => {
        setShowPaymentModal(false);
        setLoading(true);

        setTimeout(() => {
            const newClient = {
                name: clientName,
                email: email,
                id: `IKG-${Math.floor(Math.random() * 10000)}`,
                deployments: [
                    {
                        id: reference.reference,
                        serviceId: selectedService,
                        guards: guards,
                        location: location,
                        status: 'Active',
                        startDate: date,
                        cost: totalCost
                    }
                ]
            };

            localStorage.setItem('ikg_client', JSON.stringify(newClient));
            localStorage.setItem('ikg_auth', 'true');
            setLoading(false);
            navigate('/dashboard');
        }, 2000);
    };

    const handlePayment = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!clientName || !email || !location || !date) {
            alert('Please fill in all required fields.');
            return;
        }
        setShowPaymentModal(true);
    };

    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            {/* Payment Modal */}
            <PaymentModal
                isOpen={showPaymentModal}
                email={email}
                amount={totalCost}
                onSuccess={onPaymentSuccess}
                onClose={() => setShowPaymentModal(false)}
            />

            <div className="pt-32 pb-20 relative">
                <div className="text-center mb-16 max-w-7xl mx-auto px-6 md:px-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-ikg-gold/10 border border-ikg-gold/30 text-ikg-gold text-xs font-mono uppercase tracking-widest mb-6"
                    >
                        <Shield className="w-4 h-4" />
                        Secure Request Protocol
                    </motion.div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        {isAcademy ? 'Academy' : 'Deploy'} <span className="text-ikg-gold">{isAcademy ? 'Enrollment' : 'Assets'}</span>
                    </h1>
                    <p className="text-white/60 max-w-2xl mx-auto font-mono text-sm">
                        {isAcademy 
                            ? "Secure your position in the upcoming elite training intake. All certifications are globally recognized." 
                            : "Configure your security detail. Instant deployment available for high-priority sectors."}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col lg:flex-row gap-12 items-start">

                    {/* Configuration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-2/3 bg-white/[0.02] border border-white/10 p-6 sm:p-8 md:p-12 relative overflow-hidden"
                    >
                        {loading && (
                            <div className="absolute inset-0 bg-ikg-stealth/90 z-50 flex flex-col items-center justify-center">
                                <div className="w-16 h-16 border-4 border-ikg-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                                <div className="font-mono text-ikg-gold animate-pulse">ESTABLISHING SECURE CONNECTION...</div>
                            </div>
                        )}

                        <form onSubmit={handlePayment} className="space-y-8">
                            {/* Service Selection / Course Selection */}
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                                    {isAcademy ? 'Select Course Module' : 'Operational Requirement'}
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(isAcademy ? CURRICULUM : servicesData).map((item: any) => {
                                        const Icon = item.icon || Shield;
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => setSelectedService(item.id)}
                                                className={`cursor-pointer p-4 border transition-all duration-300 flex items-center gap-4 group ${selectedService === item.id
                                                    ? 'bg-ikg-gold/10 border-ikg-gold'
                                                    : 'bg-black/20 border-white/10 hover:border-white/30'
                                                    }`}
                                            >
                                                <div className={`p-2 rounded ${selectedService === item.id ? 'bg-ikg-gold text-black' : 'bg-white/5 text-white group-hover:bg-white/10'}`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className={`font-bold uppercase text-sm ${selectedService === item.id ? 'text-ikg-gold' : 'text-white'}`}>
                                                    {item.title}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Guard Count / Student Count */}
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                                        {isAcademy ? 'Student Count' : 'Personnel Count'}
                                    </label>
                                    <div className="flex items-center gap-4 bg-black/20 border border-white/10 p-4">
                                        <User className="w-5 h-5 text-ikg-gold" />
                                        <input
                                            type="number"
                                            min="1"
                                            max="50"
                                            value={guards}
                                            onChange={(e) => setGuards(parseInt(e.target.value) || 1)}
                                            className="bg-transparent border-none outline-none text-white font-mono text-xl w-full"
                                        />
                                    </div>
                                </div>

                                {/* Duration */}
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                                        {isAcademy ? 'Course Duration (Days)' : 'Duration (Days)'}
                                    </label>
                                    <div className="flex items-center gap-4 bg-black/20 border border-white/10 p-4">
                                        <Clock className="w-5 h-5 text-ikg-gold" />
                                        <input
                                            type="number"
                                            min="1"
                                            max="365"
                                            value={duration}
                                            onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                                            className="bg-transparent border-none outline-none text-white font-mono text-xl w-full"
                                            readOnly={isAcademy} // Academy durations might be fixed, but for now we keep state
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Client Details */}
                            <div className="space-y-6 pt-6 border-t border-white/5">
                                <label className="block text-xs font-mono uppercase tracking-widest text-white/40">Mission Parameters</label>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <span className="text-xs text-white/30 uppercase">Client Name</span>
                                        <input
                                            type="text"
                                            value={clientName}
                                            onChange={(e) => setClientName(e.target.value)}
                                            className="w-full bg-black/20 border border-white/10 p-4 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors"
                                            placeholder="John Doe / Company Ltd."
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs text-white/30 uppercase">Secure Email</span>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-black/20 border border-white/10 p-4 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors"
                                            placeholder="cmd@domain.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <span className="text-xs text-white/30 uppercase">Deployment Location</span>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                            <input
                                                type="text"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full bg-black/20 border border-white/10 p-4 pl-12 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors"
                                                placeholder="Sector 7, Global"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs text-white/30 uppercase">Start Date</span>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full bg-black/20 border border-white/10 p-4 text-white placeholder-white/20 focus:border-ikg-gold outline-none transition-colors scheme-dark"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>

                    {/* Cost Summary & Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/3 space-y-6"
                    >
                        <div className="bg-ikg-lattice/30 border border-white/10 p-8 sticky top-32">
                            <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-ikg-gold" />
                                Deployment Cost
                            </h3>

                            <div className="space-y-4 mb-8 text-sm">
                                <div className="flex justify-between text-white/60">
                                    <span>Base Rate / Guard</span>
                                    <span className="font-mono text-white">₦{BASE_RATE_PER_GUARD.toLocaleString()}</span>

                                </div>
                                <div className="flex justify-between text-white/60">
                                    <span>Service Multiplier</span>
                                    <span className="font-mono text-white">x{SERVICE_MULTIPLIERS[selectedService] || 1}</span>
                                </div>
                                <div className="flex justify-between text-white/60">
                                    <span>Duration</span>
                                    <span className="font-mono text-white">{duration} Days</span>
                                </div>
                                <div className="w-full h-px bg-white/10 my-4"></div>
                                <div className="flex justify-between items-end">
                                    <span className="font-bold uppercase text-white">Total Estimate</span>
                                    <span className="text-3xl font-black text-ikg-gold font-mono">
                                        ₦{totalCost.toLocaleString()}

                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button
                                    onClick={() => handlePayment()}
                                    variant="primary"
                                    className="w-full h-14 flex items-center justify-center gap-2"
                                >
                                    <CreditCard className="w-4 h-4 relative z-10" />
                                    <span className="relative z-10">Authorize Payment</span>
                                </Button>
                                <p className="text-[10px] text-center text-white/30 leading-relaxed">
                                    <AlertTriangle className="w-3 h-3 inline mr-1 text-ikg-gold" />
                                    By authorizing, you agree to the tactical engagement protocols. Funds are held in escrow until mission completion.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded">
                            <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Secure Guarantee
                            </h4>
                            <p className="text-white/50 text-xs leading-relaxed">
                                All transactions are encrypted via Paystack secure gateway. Your operational details remain classified.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
