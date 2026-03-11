import React from 'react';
import { campusData } from '../data/mockData';

const Campus: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-8">
              {campusData.title}
            </h2>
            <p className="text-slate-600 mb-10 text-xl leading-relaxed">
              {campusData.description}
            </p>
            <div className="flex items-center gap-4 text-secondary font-bold text-lg">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <span>{campusData.location}</span>
            </div>
          </div>

          <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden relative shadow-2xl">
            <img 
              src={campusData.image} 
              alt="Campus Aerial" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-6xl">play_arrow</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 text-center pb-20">
          <div className="space-y-12">
            <h3 className="text-4xl lg:text-7xl font-extrabold text-secondary leading-tight">
              Applications for the MSc in <br/>
              <span className="text-primary italic">Clinical Psychology</span> are now open.
            </h3>
            
            <button className="bg-primary text-white px-16 py-8 rounded-2xl font-black text-2xl shadow-xl hover:bg-secondary transition-all active:scale-95">
               APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
