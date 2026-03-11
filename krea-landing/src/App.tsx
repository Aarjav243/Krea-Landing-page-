import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Snapshot from './components/Snapshot';
import Features from './components/Features';
import CourseStructure from './components/CourseStructure';
import Facilities from './components/Facilities';
import Eligibility from './components/Eligibility';
import Campus from './components/Campus';
import Footer from './components/Footer';

import 'lenis/dist/lenis.css';

function App() {
  useEffect(() => {
    // Lenis smooth scroll makes the parallax and scrub animations feel premium
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="antialiased selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Snapshot />
        <Philosophy />
        <Features />
        <CourseStructure />
        <Facilities />
        <Eligibility />
        <Campus />
      </main>
      <Footer />
    </div>
  );
}

export default App;
