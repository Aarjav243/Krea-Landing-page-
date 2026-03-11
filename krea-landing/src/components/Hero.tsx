import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/mockData';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0077b6] text-white py-20 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Network Background Pattern */}
      <div className="absolute inset-0 network-bg opacity-30 pointer-events-none" />
      
      {/* Subtle Connection Lines Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="fill-none stroke-white">
            <circle cx="10%" cy="20%" r="50" fill="white" fillOpacity="0.1" />
            <circle cx="85%" cy="30%" r="30" fill="white" fillOpacity="0.1" />
            <circle cx="70%" cy="70%" r="100" fill="white" fillOpacity="0.05" />
            <path d="M 0 0 Q 300 200 600 0" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-center z-20">
        
        {/* Left Column: Text Content (3/5 width) */}
        <div className="lg:col-span-3">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs lg:text-sm font-semibold tracking-widest uppercase mb-8 opacity-90"
          >
            {heroData.universityPrefix}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-[5rem] font-black leading-[1.05] mb-8"
          >
            <span className="block mb-2">{heroData.headlinePrefix}</span>
            <span className="text-cyan-300 block drop-shadow-xl">{heroData.headlineHighlight}</span>
          </motion.h1>

          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl lg:text-2xl font-bold mb-12 text-white/95 leading-relaxed"
          >
            {heroData.subheadline}
          </motion.h3>

          <div className="max-w-2xl space-y-8 text-base lg:text-lg text-white/80 leading-relaxed font-medium">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {heroData.descriptionPara1}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {heroData.descriptionPara2}
            </motion.p>
          </div>
        </div>

        {/* Right Column: Application Card (2/5 width) */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end h-full pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 40 }}
            className="w-full max-w-sm lg:max-w-md aspect-[3/4] bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-12 flex flex-col items-center justify-between text-slate-800 relative group overflow-hidden"
          >
             <div className="flex flex-col items-center flex-1 justify-center space-y-8">
              <div className="w-24 h-24 bg-cyan-100 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-5xl text-cyan-600">description</span>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-3xl font-black tracking-tight text-slate-900 leading-none">Application Form</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Meritto Form Embed Container</p>
              </div>

              <div className="w-full text-center pt-8 border-t border-slate-100">
                 <p className="text-[10px] text-slate-400 leading-relaxed max-w-[200px] mx-auto font-medium">
                    This container is ready for the Meritto form integration. Dimensions: 400px x 500px (responsive)
                 </p>
              </div>
            </div>
            
            {/* Subtle card accent */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-500" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
