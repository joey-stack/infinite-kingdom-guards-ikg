import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ShieldCheck, Calculator, FileText, CreditCard, ChevronDown } from 'lucide-react';

export const Booking: React.FC = () => {
  const [guards, setGuards] = useState(1);
  const [service, setService] = useState('Standard Guarding');
  const [invoiceRef, setInvoiceRef] = useState('');
  const [manualAmount, setManualAmount] = useState('');
  
  const BASE_RATE = 85000; // Mock Rate in Naira

  const isInvoiceMode = service === 'Monthly Invoice Settlement';
  
  // Parse manual amount for display, remove non-numeric chars for calculation
  const parsedManualAmount = manualAmount ? parseInt(manualAmount.replace(/[^0-9]/g, '')) || 0 : 0;
  
  const total = isInvoiceMode ? parsedManualAmount : guards * BASE_RATE;

  return (
    <Section id="booking" className="bg-ikg-lattice text-ikg-anduril flex-col md:flex-row">
      {/* Left: Calculator */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center border-r border-white/5">
        <div className="mb-12">
            <span className="font-mono text-xs text-ikg-gold tracking-widest uppercase mb-4 block">
              {isInvoiceMode ? 'Client Services' : 'Deployment Portal'}
            </span>
            <h2 className="text-4xl font-sans font-bold uppercase mb-6">
              {isInvoiceMode ? 'Settle Accounts.' : <>Secure Your <br/> Assets Now.</>}
            </h2>
            <p className="font-mono text-xs text-ikg-anduril/60 max-w-sm">
                {isInvoiceMode 
                  ? 'Enter your invoice reference number to generate a payment gateway link for your monthly service retainer.'
                  : 'Instant deployment configuration. Select your requirements to generate a provisional invoice and initiate dispatch.'}
            </p>
        </div>

        <div className="space-y-8 max-w-md">
            <div>
                <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-ikg-anduril/80">Service Tier / Action</label>
                <div className="relative group">
                  <select 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-ikg-stealth border border-white/10 p-4 font-sans text-sm focus:border-ikg-gold outline-none text-ikg-anduril appearance-none cursor-pointer hover:bg-white/5 transition-colors"
                  >
                      <optgroup label="New Deployment">
                        <option>Standard Guarding</option>
                        <option>Mobile Patrol Unit</option>
                        <option>VIP Protection Detail</option>
                        <option>Event Security</option>
                      </optgroup>
                      <optgroup label="Existing Clients">
                        <option>Monthly Invoice Settlement</option>
                      </optgroup>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-ikg-anduril/50 group-hover:text-ikg-gold transition-colors" />
                  </div>
                </div>
            </div>
            
            {isInvoiceMode ? (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                 <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-ikg-anduril/80">Invoice Reference</label>
                    <div className="flex items-center bg-ikg-stealth border border-white/10 focus-within:border-ikg-gold transition-colors group">
                        <div className="pl-4 text-ikg-anduril/30 group-focus-within:text-ikg-gold transition-colors">
                            <FileText className="w-4 h-4" />
                        </div>
                        <input 
                            type="text" 
                            value={invoiceRef}
                            onChange={(e) => setInvoiceRef(e.target.value)}
                            placeholder="INV-202X-XXXX"
                            className="w-full bg-transparent p-4 font-sans text-sm outline-none text-ikg-anduril placeholder-ikg-anduril/20 uppercase"
                        />
                    </div>
                 </div>
                 
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-ikg-anduril/80">Invoice Amount (₦)</label>
                    <input 
                        type="text" 
                        value={manualAmount}
                        onChange={(e) => setManualAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full bg-ikg-stealth border border-white/10 p-4 font-sans text-sm focus:border-ikg-gold outline-none text-ikg-anduril"
                    />
                 </div>
               </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-ikg-anduril/80">Personnel Count</label>
                    <div className="flex items-center gap-4">
                        <input 
                            type="range" 
                            min="1" 
                            max="50" 
                            value={guards}
                            onChange={(e) => setGuards(parseInt(e.target.value))}
                            className="flex-1 accent-ikg-gold h-1 bg-ikg-stealth appearance-none cursor-pointer"
                        />
                        <span className="font-sans font-bold text-2xl w-12 text-right">{guards}</span>
                    </div>
                </div>
            )}

            <div className="p-6 bg-ikg-stealth border border-ikg-gold/20 mt-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs text-ikg-anduril/60 uppercase">
                        {isInvoiceMode ? 'Total Payable' : 'Estimated Monthly'}
                    </span>
                    <Calculator className="w-4 h-4 text-ikg-gold" />
                </div>
                <div className="text-3xl font-sans font-bold text-ikg-gold">
                    ₦{total.toLocaleString()}
                </div>
                <p className="font-mono text-[10px] text-ikg-anduril/40 mt-2">
                    {isInvoiceMode ? '*Secure payment gateway via Paystack/Flutterwave.' : '*Excluding tax and logistics. Subject to final audit.'}
                </p>
            </div>

            <Button variant="primary" className="w-full h-14 md:h-16 tracking-widest flex items-center justify-center gap-2">
                {isInvoiceMode ? <CreditCard className="w-5 h-5 relative z-10" /> : <ShieldCheck className="w-5 h-5 relative z-10" />}
                <span className="relative z-10 font-sans font-bold uppercase">{isInvoiceMode ? 'Pay Invoice' : 'Proceed to Payment'}</span>
            </Button>
        </div>
      </div>

      {/* Right: Info/Visual */}
      <div className="w-full md:w-1/2 bg-ikg-stealth p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1200&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
            alt="Deployment"
         />
         <div className="relative z-10 p-8 border border-white/10 bg-ikg-stealth/80 backdrop-blur-md max-w-sm mx-auto">
             <h3 className="font-sans text-xl font-bold mb-4 text-ikg-anduril">Client Portal</h3>
             <p className="font-mono text-xs text-ikg-anduril/60 mb-6">
                 Login to view detailed billing history, active duty rosters, and incident reports.
             </p>
             <Button as="link" to="/login" variant="outline" className="w-full tracking-widest">
                 Access Portal
             </Button>
         </div>
      </div>
    </Section>
  );
};