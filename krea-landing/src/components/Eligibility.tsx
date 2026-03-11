import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { eligibilityData } from '../data/mockData';

const Eligibility: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* WHO SHOULD APPLY - 4 Card Grid */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-secondary">{eligibilityData.whoShouldApply.title}</h2>
            <div className="h-1.5 w-16 bg-[#8a2214] mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityData.whoShouldApply.points.map((point, i) => (
               <LiquidCard key={i} index={i}>
                 <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8a2214] transition-colors duration-500">
                    <span className="material-symbols-outlined text-3xl text-[#8a2214] group-hover:text-white transition-colors duration-500">
                      {i === 0 ? 'psychology' : i === 1 ? 'location_city' : i === 2 ? 'account_tree' : 'add_reaction'}
                    </span>
                 </div>
                 <p className="text-slate-600 font-bold text-sm leading-relaxed text-center px-2">{point}</p>
               </LiquidCard>
            ))}
          </div>
        </div>

        {/* ELIGIBILITY CRITERIA - Full Width or Highlighted */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="bg-[#0077b6] text-white p-10 lg:p-14 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 group"
          >
             <div className="md:w-1/3">
               <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-400 transition-colors duration-500">
                  <span className="material-symbols-outlined text-4xl text-cyan-50 group-hover:text-[#0077b6] transition-colors duration-500">fact_check</span>
               </div>
               <h2 className="text-4xl font-black mb-4">{eligibilityData.eligibility.title}</h2>
               <p className="text-cyan-100 font-medium opacity-80 italic">Requirements for aspiring clinical psychologists</p>
             </div>
             
             <ul className="md:w-2/3 grid sm:grid-cols-2 gap-8">
               {eligibilityData.eligibility.points.map((point, i) => (
                 <li key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                     <span className="material-symbols-outlined text-cyan-200 text-sm font-bold">arrow_forward_ios</span>
                   </div>
                   <span className="text-cyan-50 font-semibold leading-snug">{point}</span>
                 </li>
               ))}
             </ul>
          </motion.div>
        </div>
        
        {/* CAREER PATHWAYS - 4 Card Grid with Liquid Edge */}
        <div className="">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-black text-secondary">{eligibilityData.careerPathways.title}</h3>
            <div className="h-1.5 w-16 bg-cyan-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityData.careerPathways.paths.map((path, i) => (
               <LiquidCard key={i} index={i}>
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-50 transition-colors duration-300">
                   <span className="material-symbols-outlined text-4xl text-[#8a2214]">{path.icon}</span>
                 </div>
                 <h4 className="font-bold text-secondary text-lg mb-3 leading-tight text-center">{path.name}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed text-center">{path.description}</p>
               </LiquidCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LiquidCard: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center group relative overflow-hidden h-full hover:shadow-2xl transition-all duration-300"
    >
      {/* Live Border Draw on Hover */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-0 left-0 h-1 bg-[#8a2214] w-0 group-hover:w-full transition-all duration-300 delay-0" />
        <div className="absolute top-0 right-0 w-1 bg-[#8a2214] h-0 group-hover:h-full transition-all duration-300 delay-150" />
        <div className="absolute bottom-0 right-0 h-1 bg-[#8a2214] w-0 group-hover:w-full transition-all duration-300 delay-300" />
        <div className="absolute bottom-0 left-0 w-1 bg-[#8a2214] h-0 group-hover:h-full transition-all duration-300 delay-450" />
      </div>

      {/* Liquid Edge Animation (Maroon) */}
      <div className="absolute left-0 bottom-0 w-1.5 bg-rose-50 h-full z-0 pointer-events-none">
        <motion.div 
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : { height: 0 }}
          transition={{ delay: index * 0.15 + 0.2, duration: 1.5, ease: "circOut" }}
          className="w-full bg-[#8a2214] shadow-[0_0_15px_#8a2214]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default Eligibility;
