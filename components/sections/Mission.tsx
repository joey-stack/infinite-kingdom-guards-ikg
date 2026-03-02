import React from 'react';
import { Section } from '../ui/Section';

export const Mission: React.FC = () => {
  return (
    <Section id="mission" className="bg-ikg-stealth text-ikg-anduril flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center border-r border-white/5 relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-ikg-gold/50"></div>
         <span className="font-mono text-xs text-ikg-gold tracking-widest uppercase mb-6">From The Desk of the Chairman</span>
         <h2 className="font-sans font-bold text-3xl md:text-5xl mb-8 leading-tight">
            Sworn enemies with docility and status quo.
         </h2>
         <p className="font-mono text-xs md:text-sm text-ikg-anduril/70 leading-relaxed mb-6">
            "The strive for excellence is a lifetime venture. We seek to unleash the creative and innovative potentials of ourselves and our teams to secure the future. It is said that the largest room is the room for improvement."
         </p>
         <p className="font-mono text-xs md:text-sm text-ikg-anduril/70 leading-relaxed">
            "We provide a need-based service that impacts your organization above ourselves. No one does it alone; the need for 'the third eye' is essential."
         </p>
      </div>

      <div className="w-full md:w-1/2 bg-ikg-lattice p-8 md:p-20 flex flex-col justify-center">
         <span className="font-mono text-xs text-ikg-anduril/40 tracking-widest uppercase mb-6">Our Background</span>
         <div className="prose prose-invert max-w-none">
             <p className="font-sans text-lg md:text-xl leading-relaxed text-ikg-anduril/90 mb-6">
                Infinite Kingdom Guards Ltd was birthed out of the drive for the provision of world-class public and private sector security solutions that uniquely add value to people and organizations in Nigeria and beyond.
             </p>
             <p className="font-mono text-xs text-ikg-anduril/60 leading-relaxed mb-4">
                Registered on 28th October 2022, following series of strategic sessions idealizing, simulating, and testing various models.
             </p>
             <p className="font-mono text-xs text-ikg-anduril/60 leading-relaxed">
                We are a team of professionals with diverse backgrounds and a collective experience of over one hundred years. Our deep-seated passion is to deliver world-class service.
             </p>
         </div>
      </div>
    </Section>
  );
};