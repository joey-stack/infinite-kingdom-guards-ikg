import React, { useEffect, useState } from 'react';

export const Scanlines: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none z-10 bg-scanlines bg-[length:100%_4px] opacity-20 animate-scan mix-blend-overlay" />
);

export const RedDot: React.FC = () => (
  <div className="w-2 h-2 rounded-full bg-ikg-red animate-pulse-fast shadow-[0_0_8px_rgba(255,51,51,0.8)]" />
);

export const Telemetry: React.FC = () => {
  const [coords, setCoords] = useState({ lat: 9.0765, lng: 7.3986 }); // Abuja
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate micro-fluctuations in GPS
      setCoords(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        lng: prev.lng + (Math.random() - 0.5) * 0.0001
      }));
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] sm:text-xs text-ikg-gold/70 leading-tight tracking-widest">
      <div className="flex justify-between w-full max-w-[200px]">
        <span>LAT:</span>
        <span>{coords.lat.toFixed(6)} N</span>
      </div>
      <div className="flex justify-between w-full max-w-[200px]">
        <span>LNG:</span>
        <span>{coords.lng.toFixed(6)} E</span>
      </div>
      <div className="flex justify-between w-full max-w-[200px] mt-1">
        <span>ZULU:</span>
        <span>{time.toISOString().split('T')[1].split('.')[0]}Z</span>
      </div>
    </div>
  );
};

export const CornerBrackets: React.FC = () => (
  <>
    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20 pointer-events-none" />
    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 pointer-events-none" />
    <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20 pointer-events-none" />
    <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20 pointer-events-none" />
  </>
);
