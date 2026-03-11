import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { courseData } from '../data/mockData';

const CourseStructure: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. Scroll-Controlled Ink Draw (The Spine)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-background-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-secondary mb-32 text-center">{courseData.title}</h2>
        
        <div className="relative">
          {/* Static Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200" />
          
          {/* Dynamic Ink Line */}
          <motion.div 
            style={{ scaleY: pathLength }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top z-10"
          />

          <div className="space-y-48 relative z-20">
            {courseData.phases.map((phase, index) => (
              <TimelineItem key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ phase: any; index: number }> = ({ phase, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // 2. Parallax Content Cards
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // The card moves slightly slower/faster than the scroll to create floating depth
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={itemRef} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
      <motion.div 
        style={{ y: yParallax }}
        className="flex-1 w-full"
      >
        <div className="bg-white p-10 rounded-2xl shadow-2xl border-t-8 border-primary relative">
          <div className="text-primary font-bold mb-6 flex items-center gap-3 text-lg">
            <span className="material-symbols-outlined text-3xl">{phase.icon}</span> 
            {phase.title}
          </div>
          <ul className="space-y-4 text-slate-600">
            {phase.courses.map((course: string, i: number) => (
              <li key={i} className="flex gap-4 items-center">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Timeline Node */}
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        <div className="w-6 h-6 bg-white border-4 border-slate-300 rounded-full z-20" />
        {/* Node fills with ink when line passes (CSS trick based on z-index and the ink line behind it) */}
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
};

export default CourseStructure;
