import React from 'react';
import { Section } from '../ui/Section';
import { ArrowUpRight } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <Section className="relative text-ikg-anduril bg-ikg-stealth">
        {/* Full Width Background Image */}
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2670&auto=format&fit=crop" 
                alt="Wisdom Kwati"
                className="w-full h-full object-cover filter grayscale brightness-50 contrast-125"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ikg-stealth via-ikg-stealth/80 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-24 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <div>
                    <span className="font-mono text-xs text-ikg-gold tracking-widest uppercase mb-4 block">The Visionary</span>
                    <h2 className="text-5xl md:text-7xl font-sans font-bold mb-8 leading-[0.9] uppercase text-ikg-anduril">
                        Wisdom <br/> Kwati.
                    </h2>
                    <p className="text-ikg-anduril/80 max-w-lg text-sm leading-relaxed font-mono mb-8">
                        Founder of Africa's first Smart City and the "Africa Housing for All" initiative. Mr. Kwati has developed an outstanding global network across real estate, construction, agriculture, and asset management.
                    </p>
                    <p className="text-ikg-anduril/60 max-w-lg text-xs leading-relaxed font-mono">
                        He is also the driving force behind the Wisdom Kwati Children Village and the proposed Wisdom Kwati University in Demsa, Adamawa State. A results-oriented negotiator maximizing value in the economic sector.
                    </p>
                </div>

                <div className="flex flex-col gap-6 items-start lg:items-end border-l lg:border-l-0 lg:border-r border-white/20 pl-6 lg:pl-0 lg:pr-6">
                    <a href="#" className="group flex items-center gap-4 text-ikg-anduril hover:text-ikg-gold transition-colors">
                        <span className="font-sans font-bold text-lg uppercase tracking-tight">Wisdom Kwati Smart City</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href="#" className="group flex items-center gap-4 text-ikg-anduril hover:text-ikg-gold transition-colors">
                        <span className="font-sans font-bold text-lg uppercase tracking-tight">Wisdom Kwati University</span>
                         <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                     <a href="#" className="group flex items-center gap-4 text-ikg-anduril hover:text-ikg-gold transition-colors">
                        <span className="font-sans font-bold text-lg uppercase tracking-tight">Children Village Foundation</span>
                         <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    </Section>
  );
};