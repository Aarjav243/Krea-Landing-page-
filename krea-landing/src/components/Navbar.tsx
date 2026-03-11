import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: "Programme", href: "#" },
    { name: "Structure", href: "#" },
    { name: "Facilities", href: "#" },
    { name: "Eligibility", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#006699] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        {/* Left: Logo & University Name */}
        <div className="flex items-center gap-6 shrink-0">
           <img 
             src="/sias-logo-black.png" 
             alt="SIAS Logo" 
             className="w-48 h-auto object-contain"
           />
          <div className="flex flex-col text-white border-l border-white/20 pl-6 py-1">
            <span className="font-bold text-sm lg:text-base leading-tight tracking-widest whitespace-nowrap uppercase">
              SCHOOL OF INTERWOVEN
            </span>
            <span className="font-bold text-sm lg:text-base leading-tight tracking-widest whitespace-nowrap uppercase">
              ARTS AND SCIENCES
            </span>
          </div>
        </div>
        
        {/* Center: Nav links */}
        <div className="hidden lg:flex items-center gap-8 mx-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white font-semibold text-sm hover:text-cyan-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Right: CTA Button */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="bg-[#8a2214] text-white px-6 py-2 rounded-md font-bold text-sm shadow-xl hidden sm:block whitespace-nowrap hover:bg-[#a02b1a] transition-all crimson-ripple">
            Apply Now
          </button>
          
          <button className="text-white p-2 lg:hidden hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
