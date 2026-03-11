import React from 'react';
import { navData } from '../data/mockData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-4xl text-primary drop-shadow-lg">school</span>
            <span className="font-bold text-2xl tracking-tight uppercase">{navData.brand} | Krea</span>
          </div>
          <p className="text-white/50 text-base leading-relaxed max-w-xs">
            Division of Humanities and Social Sciences.<br/>
            School of Interwoven Arts and Sciences (SIAS).
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8 text-primary uppercase tracking-widest">Connect</h4>
          <div className="space-y-6 text-base text-white/50">
            <div className="flex gap-4 items-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <span className="group-hover:text-white transition-colors">clinical.psychology@krea.edu.in</span>
            </div>
            <div className="flex gap-4 items-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-xl">phone</span>
              </div>
              <span className="group-hover:text-white transition-colors">+91 1234 567 890</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8 text-primary uppercase tracking-widest">Location</h4>
          <p className="text-base text-white/50 leading-relaxed max-w-xs">
            Krea University, 5655, Central Expressway,<br/>
            Sri City, Andhra Pradesh 517646
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-white/5 text-center text-sm text-white/30 tracking-widest uppercase">
        © 2024 Krea University. All Rights Reserved. MSc Clinical Psychology Program.
      </div>
    </footer>
  );
};

export default Footer;
