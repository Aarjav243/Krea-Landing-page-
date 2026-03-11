import React from 'react';
import { navData } from '../data/mockData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <img 
              src="/sias-logo-black.png" 
              alt="SIAS Logo" 
              className="w-24 h-auto object-contain"
            />
            <span className="font-bold text-2xl tracking-tight uppercase">{navData.brand} | Krea</span>
          </div>
          <p className="text-white text-base leading-relaxed max-w-xs">
            Division of Humanities and Social Sciences.<br/>
            School of Interwoven Arts and Sciences (SIAS).
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-3xl text-primary">contact_support</span>
            <h4 className="font-bold text-xl text-primary uppercase tracking-widest">Connect</h4>
          </div>
          <div className="space-y-6 text-base text-white">
            <div className="flex gap-4 items-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-xl text-white">mail</span>
              </div>
              <span className="group-hover:text-primary transition-colors">clinical.psychology@krea.edu.in</span>
            </div>
            <div className="flex gap-4 items-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-xl text-white">phone</span>
              </div>
              <span className="group-hover:text-primary transition-colors">+91 1234 567 890</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-3xl text-primary">location_on</span>
            <h4 className="font-bold text-xl text-primary uppercase tracking-widest">Location</h4>
          </div>
          <p className="text-base text-white leading-relaxed max-w-xs">
            Krea University, 5655, Central Expressway,<br/>
            Sri City, Andhra Pradesh 517646
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-[#8a2214] text-center text-sm text-white tracking-widest uppercase bg-transparent">
        © 2024 Krea University. All Rights Reserved. MSc Clinical Psychology Program.
      </div>
    </footer>
  );
};

export default Footer;
