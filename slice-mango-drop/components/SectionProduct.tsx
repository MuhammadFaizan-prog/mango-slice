'use client';

import { motion } from 'framer-motion';

export default function SectionProduct() {
  return (
    <section style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#050505', // Deep luxurious black
      color: '#ffffff',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '80px 32px'
    }}>
      {/* Background Glow for Spotlight Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '25%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(255,184,0,0.15) 0%, transparent 70%)',
        zIndex: 0,
        filter: 'blur(60px)'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1280px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '80px'
      }}>
        {/* Product Image Side */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: 'easeOut' }}
           viewport={{ once: true }}
           style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             position: 'relative'
           }}
        >
          <img 
            src="/images/bottle-premium.png" 
            alt="Slice Premium Mango Bottle"
            style={{
              maxHeight: '70vh',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'
            }}
          />
        </motion.div>

        {/* Product Details Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: '#fff' }}
        >
          <h2 style={{
            fontSize: 'clamp(48px, 6vw, 96px)',
            fontWeight: 900,
            lineHeight: 0.9,
            marginBottom: '32px',
            textTransform: 'uppercase',
            color: '#fff'
          }}>
            The <br />
            <span style={{ color: '#FFB800' }}>Golden</span> <br />
            Standard
          </h2>
          <p style={{
             fontSize: '18px',
             fontWeight: 400,
             opacity: 0.8,
             maxWidth: '400px',
             marginBottom: '48px',
             lineHeight: 1.6,
             color: '#ccc'
          }}>
            Experience the purest expression of mango. 
            No concentrate, no artificial preservatives—just the 
            undiluted soul of the Ratnagiri Alphonso.
          </p>

          <div style={{ display: 'flex', gap: '24px' }}>
            <button style={{
              padding: '20px 48px',
              backgroundColor: '#FFB800',
              color: '#000',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(255,184,0,0.2)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Shop Now
            </button>
            <button style={{
              padding: '20px 48px',
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
               e.currentTarget.style.borderColor = '#fff';
               e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            }}
            onMouseOut={(e) => {
               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
               e.currentTarget.style.backgroundColor = 'transparent';
            }}
            >
              Find Near You
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
