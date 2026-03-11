import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '../data/mockData';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl lg:text-5xl font-bold text-secondary mb-6"
          >
            {featuresData.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '8rem' }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-1.5 bg-primary rounded-full mx-auto"
          />
        </div>

        {/* 1. Living Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 group/grid">
          {featuresData.items.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: any; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`relative p-10 rounded-2xl bg-slate-50 border border-slate-100 group transition-all duration-500 cursor-pointer overflow-hidden ${
        index === 6 ? 'lg:col-span-2' : ''
      } hover:shadow-2xl hover:bg-white`}
    >
      {/* 2. Live Border Draw on Hover */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300 delay-0" />
        <div className="absolute top-0 right-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-300 delay-150" />
        <div className="absolute bottom-0 right-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300 delay-300" />
        <div className="absolute bottom-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-300 delay-450" />
      </div>

      <div className="relative z-20">
        <span className="material-symbols-outlined text-primary text-5xl mb-6 block transition-transform group-hover:scale-110">
          {feature.icon}
        </span>
        <h4 className="font-bold text-secondary text-xl mb-3">{feature.title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Features;
