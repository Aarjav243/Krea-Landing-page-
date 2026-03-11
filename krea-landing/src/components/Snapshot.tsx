import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { snapshotData } from '../data/mockData';

const Snapshot: React.FC = () => {
  return (
    <section className="pt-20 pb-32 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-cyan-600 font-bold tracking-widest text-xs uppercase mb-3"
          >
            {snapshotData.subheadline}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-secondary"
          >
            {snapshotData.headline}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {snapshotData.items.map((item, index) => (
            <SnapshotCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SnapshotCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });
  
  // 1. 3D Magnetic Tilt Cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-15 to 15 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      className="bg-white text-slate-800 p-8 rounded-3xl flex flex-col items-center text-center gap-4 relative group cursor-pointer overflow-hidden shadow-xl border border-slate-100 perspective-1000"
    >
      {/* 2. Live Border Draw on Hover */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 h-1 bg-[#8a2214] w-0 group-hover:w-full transition-all duration-300 delay-0" />
        <div className="absolute top-0 right-0 w-1 bg-[#8a2214] h-0 group-hover:h-full transition-all duration-300 delay-150" />
        <div className="absolute bottom-0 right-0 h-1 bg-[#8a2214] w-0 group-hover:w-full transition-all duration-300 delay-300" />
        <div className="absolute bottom-0 left-0 w-1 bg-[#8a2214] h-0 group-hover:h-full transition-all duration-300 delay-450" />
      </div>

      {/* 3. Liquid Fill Tubes (Updated to Maroon theme) */}
      <div className="absolute left-0 bottom-0 w-2 bg-rose-50 h-full pointer-events-none" style={{ transform: 'translateZ(-10px)' }}>
        <motion.div 
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ delay: index * 0.2 + 0.3, duration: 2, ease: "circOut" }}
          className="w-full bg-[#8a2214] shadow-[0_0_20px_#8a2214]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center h-full justify-start mt-4" style={{ transform: 'translateZ(30px)' }}>
        <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors duration-500">
           <span className="material-symbols-outlined text-4xl text-[#0077b6] group-hover:scale-110 transition-transform duration-500 block">
             {item.icon}
           </span>
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">
          {item.label}
        </h3>
        <p className="text-sm font-medium text-slate-600 mb-1">{item.value}</p>
        <p className="text-xs text-slate-400">{item.subvalue}</p>
      </div>
    </motion.div>
  );
};

export default Snapshot;
