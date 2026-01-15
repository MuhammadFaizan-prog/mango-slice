'use client';

import { motion } from 'framer-motion';

export default function SectionHeritage() {
  return (
    <section style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff', // Pure White for consistency
      color: '#000000', // Standard Black
      position: 'relative',
      padding: '120px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1280px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center'
      }}>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-20%' }}
        >
          <span style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '24px',
            color: '#FFB800' // Mango Yellow Accent
          }}>
            Our Heritage
          </span>
          <h2 style={{
            fontSize: 'clamp(48px, 5vw, 80px)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: '32px',
            fontFamily: 'var(--font-outfit), sans-serif',
            color: '#000000',
            textTransform: 'uppercase'
          }}>
            The King of <br />
            <span style={{ color: '#FFB800' }}>Mangoes.</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '480px',
            opacity: 0.8,
            marginBottom: '40px',
            color: '#333333' // Dark Grey for body text
          }}>
            Sourced directly from the sun-drenched orchards of Ratnagiri, 
            our Alphonso mangoes are strictly hand-picked at peak ripeness. 
            Known as "Hapus", these are the undisputed royalty of the fruit kingdom, 
            celebrated for their rich sweetness and creamy pulp.
          </p>
          <button style={{
            padding: '16px 40px',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            fontSize: '14px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Discover the Roots
          </button>
        </motion.div>

        {/* Right Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            position: 'relative',
            height: '600px',
            width: '100%',
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
          }}
        >
           <img 
             src="/images/orchard-heritage.png"
             alt="Ratnagiri Mango Orchard"
             style={{
               width: '100%',
               height: '100%',
               objectFit: 'cover',
               transition: 'transform 10s ease-out'
             }}
             onLoad={(e) => {
               const target = e.target as HTMLImageElement;
               target.style.transform = 'scale(1.1)';
             }}
           />
           
           {/* Overlay for text legibility if needed */}
           <div style={{
             position: 'absolute',
             top: 0,
             left: 0,
             width: '100%',
             height: '100%',
             background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)'
           }} />
        </motion.div>
      </div>
    </section>
  );
}
