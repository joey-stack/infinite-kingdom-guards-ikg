import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENT');
    setTimeout(() => setStatus('IDLE'), 3000);
  };

  return (
    <Section id="contact" className="bg-ikg-stealth text-ikg-anduril">
      <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col md:flex-row h-full">
        {/* Left Info Panel: Stealth Black */}
        <div className="w-full md:w-5/12 bg-ikg-stealth text-ikg-anduril px-6 py-12 md:p-24 flex flex-col justify-between border-r border-white/5">
            <div>
                <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-ikg-anduril">Initiate <br/> Dialogue.</h2>
                <p className="font-mono text-xs text-ikg-anduril/60 leading-relaxed max-w-xs">
                    Secure communications for high-priority asset protection and infrastructure inquiries.
                </p>
            </div>
            
            <div className="space-y-8 mt-12 md:mt-0">
                <div>
                    <span className="block font-mono text-[10px] text-ikg-gold uppercase tracking-widest mb-2">Headquarters</span>
                    <p className="font-sans text-lg text-ikg-anduril">Abuja, Nigeria</p>
                </div>
                <div>
                    <span className="block font-mono text-[10px] text-ikg-gold uppercase tracking-widest mb-2">Regional Hubs</span>
                    <p className="font-sans text-lg text-ikg-anduril">Lagos / Demsa</p>
                </div>
                <div>
                    <span className="block font-mono text-[10px] text-ikg-gold uppercase tracking-widest mb-2">Contact</span>
                    <p className="font-sans text-lg underline decoration-ikg-anduril/30 underline-offset-4 text-ikg-anduril">info@infinitekingdomguards.com</p>
                </div>
            </div>
        </div>

        {/* Right Form Panel: Lattice Grey */}
        <div className="w-full md:w-7/12 bg-ikg-lattice p-12 md:p-24 flex items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-12">
                <div className="space-y-8">
                    <div className="group">
                        <input 
                            type="text" 
                            required 
                            placeholder="Name / Organization"
                            className="w-full py-4 border-b border-ikg-anduril/20 font-sans text-xl placeholder-ikg-anduril/30 focus:outline-none focus:border-ikg-gold transition-colors bg-transparent text-ikg-anduril"
                        />
                    </div>
                    <div className="group">
                        <input 
                            type="email" 
                            required 
                            placeholder="Email Address"
                            className="w-full py-4 border-b border-ikg-anduril/20 font-sans text-xl placeholder-ikg-anduril/30 focus:outline-none focus:border-ikg-gold transition-colors bg-transparent text-ikg-anduril"
                        />
                    </div>
                    <div className="group">
                        <select className="w-full py-4 border-b border-ikg-anduril/20 font-sans text-xl text-ikg-anduril bg-transparent focus:outline-none focus:border-ikg-gold appearance-none rounded-none">
                            <option value="" disabled selected className="text-gray-500 bg-ikg-lattice">Inquiry Type</option>
                            <option className="bg-ikg-lattice">Strategic Security Audit</option>
                            <option className="bg-ikg-lattice">Asset Protection</option>
                            <option className="bg-ikg-lattice">Government Contracting</option>
                            <option className="bg-ikg-lattice">Chairman's Office</option>
                        </select>
                    </div>
                    <div className="group">
                         <textarea 
                            rows={3}
                            placeholder="Briefing"
                            className="w-full py-4 border-b border-ikg-anduril/20 font-sans text-xl placeholder-ikg-anduril/30 focus:outline-none focus:border-ikg-gold transition-colors bg-transparent resize-none text-ikg-anduril"
                        />
                    </div>
                </div>

                <Button 
                    type="submit" 
                    variant="ghost"
                    className="w-[300px]"
                >
                    {status === 'IDLE' ? (
                        <div className="flex items-center gap-4 relative z-10">
                            <span>Transmit Request</span>
                            <span className="w-8 h-px bg-ikg-gold group-hover:w-16 transition-all duration-300"></span>
                        </div>
                    ) : (
                        <span className="relative z-10">Transmission Sent</span>
                    )}
                </Button>
            </form>
        </div>
      </div>
    </Section>
  );
};