import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { philosophyData } from '../data/mockData';

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 bg-background-light overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-secondary mb-24"
        >
          {philosophyData.title}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-[#0077b6]/10 text-[#0077b6] px-6 py-3 rounded-full font-bold text-sm lg:text-base border border-[#0077b6]/20 mb-20 shadow-sm"
        >
          <span className="material-symbols-outlined text-xl">history_toggle_off</span>
          480+ Hours of supervised clinical service
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          {/* 1. Liquid Morphing Connector */}
          <div className="hidden md:block absolute top-[40%] left-0 w-full h-24 -translate-y-1/2 z-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none">
              <motion.path
                d="M 50 50 Q 200 10 400 50 T 750 50"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8a0000" />
                  <stop offset="1" stopColor="#0F204B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {philosophyData.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4 relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.4, type: "spring", stiffness: 100 }}
                className="relative z-10 w-full md:w-64"
              >
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-white/50 relative overflow-hidden group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform relative">
                    <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                  </div>
                  <h3 className="font-bold text-secondary text-2xl mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
              {index < 2 && (
                 <span className="material-symbols-outlined text-primary text-4xl md:hidden animate-bounce">
                  arrow_downward
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
