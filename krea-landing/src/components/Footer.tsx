import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-24 relative z-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-10 h-20">
            <img 
              src="/sias-logo-black.png" 
              alt="SIAS Logo" 
              className="w-48 h-auto object-contain"
            />
            <h3 className="font-bold text-3xl tracking-tight uppercase text-white leading-none whitespace-nowrap">
              SIAS | KREA
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-white text-lg leading-relaxed max-w-md opacity-90">
              Division of Humanities and Social Sciences.<br/>
              School of Interwoven Arts and Sciences (SIAS).
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-10 h-20">
            <span className="material-symbols-outlined text-4xl text-primary">contact_support</span>
            <h4 className="font-bold text-xl text-primary uppercase tracking-widest leading-none">Connect</h4>
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
          <div className="flex items-center gap-3 mb-10 h-20">
            <span className="material-symbols-outlined text-4xl text-primary">location_on</span>
            <h4 className="font-bold text-xl text-primary uppercase tracking-widest leading-none">Location</h4>
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
