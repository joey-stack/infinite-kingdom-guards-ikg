import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { CURRICULUM } from '../../constants';

export const Modules: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id="modules" className="bg-ikg-stealth text-ikg-anduril flex-col md:flex-row">
      
      {/* Left Panel: Lattice Grey */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center border-r border-white/5 bg-ikg-lattice">
        <span className="font-mono text-xs text-ikg-gold tracking-widest uppercase mb-8">Training Standard // The 14-Module</span>
        
        <div className="space-y-8">
            {CURRICULUM.map((step, idx) => (
                <div 
                    key={step.id} 
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer transition-all duration-300 ${activeStep === idx ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="font-mono text-xs font-bold text-ikg-anduril">0{idx + 1}</span>
                        <h3 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-ikg-anduril">{step.title}</h3>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${activeStep === idx ? 'max-h-40' : 'max-h-0'}`}>
                        <p className="font-mono text-xs text-ikg-anduril/60 leading-relaxed max-w-sm ml-8 mt-2">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Right Panel: Stealth Black */}
      <div className="w-full md:w-1/2 bg-ikg-stealth text-ikg-anduril p-8 md:p-20 flex flex-col justify-center relative overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ikg-lattice via-ikg-stealth to-ikg-stealth"></div>
        </div>

        <div className="relative z-10">
            <h4 className="font-sans text-xl md:text-2xl font-bold mb-8 border-l-2 border-ikg-gold pl-4 text-ikg-anduril">
                Module Specifications
            </h4>
            
            <ul className="grid grid-cols-1 gap-4">
                {CURRICULUM[activeStep].topics.map((mod, i) => (
                    <li key={i} className="flex items-center justify-between border-b border-white/10 pb-4 group">
                        <span className="font-mono text-sm tracking-wider uppercase text-ikg-anduril/70 group-hover:text-ikg-anduril transition-colors">{mod}</span>
                        <span className="w-1.5 h-1.5 bg-ikg-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </li>
                ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-end">
                <span className="font-mono text-[10px] text-ikg-anduril/40 uppercase">Validation Required</span>
                <span className="font-sans text-4xl font-bold text-white/5">0{activeStep + 1}</span>
            </div>
        </div>
      </div>
    </Section>
  );
};