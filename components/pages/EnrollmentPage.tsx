import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  BookOpen, 
  Calendar, 
  Mail, 
  FileText,
  ChevronRight,
  ChevronLeft,
  X,
  Award,
  Download
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { Button } from '../ui/Button';
import { CURRICULUM } from '../../constants';

// Step Indicators
const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Secure Payment', icon: CreditCard },
  { id: 3, title: 'Confirmation', icon: CheckCircle },
];

export const EnrollmentPage: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();
  const navigate = useNavigate();
  const selectedClass = CURRICULUM.find(c => c.id === classId) || CURRICULUM[0];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Beginner',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptId, setReceiptId] = useState('');

  // Pre-fill logic
  useEffect(() => {
    const savedClient = localStorage.getItem('ikg_client');
    if (savedClient) {
      try {
        const client = JSON.parse(savedClient);
        setFormData(prev => ({
          ...prev,
          name: client.name || '',
          email: client.email || '',
        }));
      } catch (e) {
        console.error('Failed to parse saved client data', e);
      }
    }
  }, []);

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.email) {
        alert('Please fill in your name and email to proceed.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      processPayment();
    }
  };

  const processPayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setReceiptId(`IKG-ACAD-${Math.floor(100000 + Math.random() * 900000)}`);
      setCurrentStep(3);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = currentStep >= step.id;
              const isCurrent = currentStep === step.id;

              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center relative z-10 transition-all duration-500">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-500 ${
                      isActive ? 'bg-ikg-gold border-ikg-gold text-black' : 'bg-black/40 border-white/10 text-white/40'
                    } ${isCurrent ? 'scale-110 shadow-[0_0_20px_rgba(255,183,0,0.3)]' : ''}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${isActive ? 'text-white' : 'text-white/30'}`}>
                      {step.title}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex-grow h-[1px] bg-white/10 mx-4 -mt-8 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: currentStep > step.id ? '100%' : '0%' }}
                        className="absolute inset-0 bg-ikg-gold"
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white/[0.02] border border-white/10 p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <User className="w-32 h-32" />
                  </div>
                  
                  <h2 className="text-3xl font-black uppercase mb-8 flex items-center gap-3">
                    <span className="text-ikg-gold text-sm font-mono border border-ikg-gold/30 px-2">01</span>
                    Cadet Enrollment
                  </h2>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Full Command Name</label>
                        <input 
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white focus:border-ikg-gold outline-none transition-colors placeholder:text-white/10"
                          placeholder="OPERATIVE NAME"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Secure Communication Email</label>
                        <input 
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white focus:border-ikg-gold outline-none transition-colors placeholder:text-white/10"
                          placeholder="CADET@IKG.COM"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Contact Number</label>
                        <input 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white focus:border-ikg-gold outline-none transition-colors placeholder:text-white/10"
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Prior Tactical Experience</label>
                        <select 
                          value={formData.experience}
                          onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white focus:border-ikg-gold outline-none transition-colors appearance-none"
                        >
                          <option value="Beginner">CIVILIAN (BEGINNER)</option>
                          <option value="Intermediate">LAW ENFORCEMENT (INTERMEDIATE)</option>
                          <option value="Advanced">MILITARY (ADVANCED)</option>
                          <option value="Elite">SPECIAL OPS (ELITE)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex justify-end">
                      <Button onClick={handleNext} className="group">
                        Proceed to Logistics <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white/[0.02] border border-white/10 p-8 md:p-12 relative overflow-hidden"
                >
                  {isProcessing && (
                    <div className="absolute inset-0 bg-ikg-stealth/90 z-50 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 border-4 border-ikg-gold border-t-transparent rounded-full animate-spin mb-6" />
                      <div className="text-xl font-black uppercase tracking-widest text-ikg-gold animate-pulse">
                        Verifying Transaction...
                      </div>
                      <div className="mt-2 text-white/40 font-mono text-[10px] uppercase">
                        Establishing secure handshake with Paystack
                      </div>
                    </div>
                  )}

                  <h2 className="text-3xl font-black uppercase mb-8 flex items-center gap-3">
                    <span className="text-ikg-gold text-sm font-mono border border-ikg-gold/30 px-2">02</span>
                    Logistics Authorization
                  </h2>

                  <div className="space-y-8">
                    <div className="p-6 bg-ikg-gold/5 border border-ikg-gold/20 flex items-start gap-4">
                      <ShieldCheck className="w-6 h-6 text-ikg-gold flex-shrink-0" />
                      <div>
                        <h4 className="font-bold uppercase text-ikg-gold mb-1">Secure Enrollment Fee</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          Your authorization covers all tactical gear, training materials, and certification fees for the <span className="text-white">{selectedClass.title}</span> module.
                        </p>
                      </div>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-8 rounded-sm">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-white/40 uppercase font-mono text-xs">Merchant</span>
                        <span className="font-bold uppercase">IKG ACADEMY INT.</span>
                      </div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-white/40 uppercase font-mono text-xs">Class Module</span>
                        <span className="font-bold uppercase text-ikg-gold">{selectedClass.title}</span>
                      </div>
                      <div className="w-full h-px bg-white/10 mb-6" />
                      <div className="flex justify-between items-end">
                        <span className="text-white/40 uppercase font-mono text-xs">Total Commitment</span>
                        <span className="text-4xl font-black text-white">₦750,000</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10">
                      <button 
                        onClick={() => setCurrentStep(1)}
                        className="text-white/40 hover:text-white flex items-center gap-2 font-mono uppercase text-[10px] tracking-widest transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" /> Edit Parameters
                      </button>
                      <Button onClick={handleNext} variant="primary" className="w-full sm:w-auto px-12">
                        Authorize Payment
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/[0.02] border border-white/10 p-8 md:p-12 text-center"
                >
                  <div className="w-20 h-20 bg-ikg-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(255,183,0,0.2)]">
                    <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                  
                  <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Enrollment Confirmed</h2>
                  <p className="text-white/60 max-w-md mx-auto mb-12">
                    Operative <span className="text-white font-bold">{formData.name}</span>, your position in the <span className="text-white font-bold">{selectedClass.title}</span> module is now secure.
                  </p>

                  {/* Class-Specific Receipt */}
                  <div className="max-w-md mx-auto bg-black p-8 border border-white/10 relative text-left font-mono">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <FileText className="w-24 h-24" />
                    </div>
                    
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <span className="text-ikg-gold font-black">IKG ACADEMY</span>
                      <span className="text-[10px] text-white/40">{new Date().toLocaleDateString()}</span>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <div className="text-[10px] text-white/40 uppercase">Receipt Protocol ID</div>
                        <div className="text-sm font-bold">{receiptId}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/40 uppercase">Tactical Module</div>
                        <div className="text-sm font-bold">{selectedClass.title}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/40 uppercase">Assigned Operative</div>
                        <div className="text-sm font-bold uppercase">{formData.name}</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 border border-white/5 text-[9px] uppercase tracking-wider text-white/40 mb-8 leading-relaxed">
                      This digital receipt serves as your temporary clearance. Full briefing documents will be sent to {formData.email}.
                    </div>

                    <button className="w-full py-3 bg-white/5 border border-white/10 text-center text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                      <Download className="w-4 h-4 text-ikg-gold group-hover:scale-110 transition-transform" />
                      Save Transcript
                    </button>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button as="link" to="/dashboard" variant="primary">
                      Command Dashboard
                    </Button>
                    <Button as="link" to="/academy" variant="outline">
                      Back to Academy
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Class Details */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-ikg-stealth border border-white/10 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-16 h-16" />
              </div>
              
              <h3 className="text-ikg-gold font-mono text-[10px] uppercase tracking-[0.3em] mb-4">Training Module</h3>
              <h4 className="text-2xl font-black uppercase text-white mb-6 leading-none">
                {selectedClass.title}
              </h4>
              
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                {selectedClass.description}
              </p>

              <div className="space-y-4">
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">Core Competencies:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedClass.topics.map((topic, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 uppercase">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-white/40">
                  <Calendar className="w-4 h-4 text-ikg-gold" />
                  <span className="text-xs uppercase font-mono">Duration: 5-Day Intensive</span>
                </div>
                <div className="flex items-center gap-3 text-white/40">
                  <Award className="w-4 h-4 text-ikg-gold" />
                  <span className="text-xs uppercase font-mono">Certification: IKG-LEVEL-1</span>
                </div>
              </div>
            </div>

            <div className="bg-ikg-gold/5 border border-ikg-gold/20 p-6 flex items-start gap-4">
              <Lock className="w-4 h-4 text-ikg-gold mt-1" />
              <p className="text-[10px] text-white/50 leading-relaxed uppercase tracking-widest font-mono">
                Encryption: 256-Bit SSL Secured<br />
                Handshake: Active<br />
                Status: Verified
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
