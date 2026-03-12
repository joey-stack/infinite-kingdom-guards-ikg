import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
    return (
        <section id="deploy" className="bg-ikg-gold py-24 px-6 md:px-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 drop-shadow-lg">
                    Secure Your Future
                </h2>
                <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
                    Whether you need elite protection or seek to join our ranks, the time to act is now.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <Button as="link" to="/contact" variant="primary" className="w-[300px]">
                        Hire IKG Guards
                    </Button>
                    <Button as="link" to="/academy" variant="outline" className="w-[300px]">
                        <span>Join The Academy</span>
                        <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-2 relative z-10" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
