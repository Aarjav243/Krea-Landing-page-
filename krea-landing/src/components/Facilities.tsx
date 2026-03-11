import React from 'react';
import { motion } from 'framer-motion';
import { facilitiesData } from '../data/mockData';

const Facilities: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-6">
            {facilitiesData.images.map((img, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                key={i}
                className={`relative rounded-2xl overflow-hidden shadow-2xl ${i === 1 ? 'mt-12' : ''}`}
              >
                <img src={img} alt="Lab" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-primary/10" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-4xl font-bold text-secondary mb-8"
          >
            {facilitiesData.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mb-12 text-lg leading-relaxed"
          >
            {facilitiesData.description}
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilitiesData.items.map((item, i) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: i * 0.1, duration: 0.4 }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
                key={i}
                className="relative flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100 group transition-all duration-500 cursor-pointer overflow-hidden hover:shadow-lg hover:bg-white"
              >
                {/* Live Border Draw on Hover */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300 delay-0" />
                  <div className="absolute top-0 right-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-300 delay-150" />
                  <div className="absolute bottom-0 right-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300 delay-300" />
                  <div className="absolute bottom-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-300 delay-450" />
                </div>

                <div className="relative z-20 flex gap-4 items-center w-full">
                  <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="text-secondary font-bold text-lg flex-1">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
