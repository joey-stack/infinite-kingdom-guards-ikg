import React from 'react';

export const TrustSignals: React.FC = () => {
    // Placeholder logos or text for now
    const signals = ["ISO 9001:2015", "NSCDC LICENSED", "ISPS CODE COMPLIANT", "IPSA MEMBER", "ASIS INTERNATIONAL"];

    return (
        <section className="bg-ikg-lattice py-8 border-y border-white/5 overflow-hidden max-w-full">
            <div className="flex animate-marquee whitespace-nowrap max-w-full">
                {signals.map((signal, index) => (
                    <div key={index} className="flex items-center mx-8 opacity-50 hover:opacity-100 transition-opacity">
                        <span className="w-2 h-2 bg-ikg-gold rounded-full mr-4" />
                        <span className="text-white font-mono text-sm tracking-[0.2em]">{signal}</span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {signals.map((signal, index) => (
                    <div key={`dup-${index}`} className="flex items-center mx-8 opacity-50 hover:opacity-100 transition-opacity">
                        <span className="w-2 h-2 bg-ikg-gold rounded-full mr-4" />
                        <span className="text-white font-mono text-sm tracking-[0.2em]">{signal}</span>
                    </div>
                ))}
            </div>
            {/* Inline style for marquee animation if not in global css yet */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};
