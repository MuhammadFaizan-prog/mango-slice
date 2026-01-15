'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useLenisScroll } from '@/hooks/useLenisScroll';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SliceScrollCanvas from '@/components/SliceScrollCanvas';
import SliceExperienceHUD from '@/components/SliceExperienceHUD';
import SectionHeritage from '@/components/SectionHeritage';
import SectionFlavor from '@/components/SectionFlavor';
import SectionProduct from '@/components/SectionProduct';

export default function Home() {
  // Initialize Lenis Smooth Scroll
  useLenisScroll();

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress for the 600vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '100vh',
      backgroundColor: '#111111',
      color: '#ffffff'
    }}>
      <Navbar />

      {/* 
        600vh Scroll Section 
        - The user scrolls through this 600vh height
        - The internal content is sticky for 100vh
      */}
      <section 
        ref={containerRef} 
        style={{
          position: 'relative',
          height: '600vh',
          width: '100%'
        }}
      >
        <div style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#111111'
        }}>
          <SliceScrollCanvas scrollYProgress={scrollYProgress} />
          {/* <SliceExperienceHUD scrollYProgress={scrollYProgress} /> */}
          
          {/* Optional: Scroll indicator at the bottom */}
          <div style={{
            position: 'absolute',
            bottom: '48px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.5,
            pointerEvents: 'none',
            mixBlendMode: 'difference',
            zIndex: 20
          }}>
            <span style={{ 
              fontSize: '10px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: 'white' 
            }}>Scroll to Sip</span>
            <div style={{ 
              width: '1px', 
              height: '48px', 
              background: 'linear-gradient(to bottom, white, transparent)' 
            }} />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div style={{ position: 'relative', zIndex: 5, backgroundColor: '#111111' }}>
        <SectionHeritage />
        <SectionFlavor />
        <SectionProduct />
      </div>

      {/* Content after the experience */}
      <Footer />
    </main>
  );
}
