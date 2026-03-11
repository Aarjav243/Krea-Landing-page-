import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '_DSC5182.JPG', '_DSC5183.JPG', '_DSC5188.JPG', '_DSC5189.JPG',
  '_DSC5190.JPG', '_DSC5194.JPG', '_DSC5201.JPG', '_DSC5202.JPG',
  '_DSC5205.JPG', '_DSC5206.JPG', '_DSC5209.JPG', '_DSC5211.JPG',
  '_DSC5218.JPG', '_DSC5219.JPG'
];

const PsychologyLabMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-secondary mb-2"
        >
          Life at the Psychology Lab
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500"
        >
          Glimpses into our research environment and student activities
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-6 pr-6 whitespace-nowrap min-w-max"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 50, // Moderate pace for a full set of images
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((img, index) => (
            <div
              key={`first-${index}`}
              className="w-80 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-white"
            >
              <img
                src={`/Psychology lab/${img}`}
                alt={`Psychology Lab ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Psychology+Lab';
                }}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6 pr-6 whitespace-nowrap min-w-max"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 50, // Must match the first animation's duration perfectly
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((img, index) => (
            <div
              key={`second-${index}`}
              className="w-80 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-white"
            >
              <img
                src={`/Psychology lab/${img}`}
                alt={`Psychology Lab ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Psychology+Lab';
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PsychologyLabMarquee;
