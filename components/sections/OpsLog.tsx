import React from 'react';
import { Section } from '../ui/Section';
import { OPS_LOGS } from '../../constants';

const LOG_IMAGES: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1548266652-99cf277df8c3?q=80&w=800&auto=format&fit=crop', // Data center/Dark
  '2': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', // Satellite/Globe
  '3': 'https://images.unsplash.com/photo-1508614589041-895b8cba3e51?q=80&w=800&auto=format&fit=crop', // Digital map
  '4': 'https://images.unsplash.com/photo-1563206767-5b1d972b9fb1?q=80&w=800&auto=format&fit=crop', // CCTV/Urban
};

export const OpsLog: React.FC = () => {
  return (
    <Section className="bg-ikg-stealth flex flex-col text-ikg-anduril">
        <div className="p-8 md:p-12 border-b border-white/10 flex justify-between items-end">
            <div>
                <span className="font-mono text-xs text-ikg-anduril/50 tracking-widest uppercase block mb-2">Global Presence</span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-ikg-anduril">Field Reports</h2>
            </div>
            <a href="#" className="hidden md:block font-mono text-xs text-ikg-gold border-b border-ikg-gold hover:text-white hover:border-white transition-colors pb-1 uppercase tracking-widest">
                View All Archives
            </a>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex-1 overflow-x-auto snap-x mandatory flex no-scrollbar items-center">
            {OPS_LOGS.map((log, i) => (
                <div key={log.id} className="snap-center shrink-0 w-[85vw] md:w-[40vw] h-[60vh] md:h-[70vh] relative ml-8 md:ml-12 group cursor-pointer overflow-hidden bg-ikg-lattice border border-white/5">
                    <img 
                        src={LOG_IMAGES[log.id] || LOG_IMAGES['1']} 
                        alt={log.location}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 filter grayscale contrast-125"
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-ikg-stealth to-transparent">
                        <div className="flex items-center gap-4 mb-2">
                             <span className={`w-2 h-2 rounded-full ${log.status === 'ACTIVE' ? 'bg-ikg-gold' : 'bg-ikg-anduril/50'}`}></span>
                             <span className="font-mono text-xs text-ikg-anduril/70 tracking-widest uppercase">{log.location}</span>
                        </div>
                        <h3 className="text-2xl font-sans font-bold text-ikg-anduril uppercase">{log.code}</h3>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full bg-ikg-stealth/0 group-hover:bg-ikg-stealth/20 transition-colors pointer-events-none" />
                </div>
            ))}
            <div className="w-12 shrink-0"></div> {/* Spacer */}
        </div>
    </Section>
  );
};