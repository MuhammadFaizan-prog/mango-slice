'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

interface SliceExperienceHUDProps {
  scrollYProgress: MotionValue<number>;
}

export default function SliceExperienceHUD({ scrollYProgress }: SliceExperienceHUDProps) {
  // Phase 1: 0-30%
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Phase 2: 30-60%
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.55, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);

  // Phase 3: 60-100%
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.65, 0.95], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.6, 1], [50, 0]);

  const baseTextStyle: React.CSSProperties = {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    padding: '0 20px',
    boxSizing: 'border-box'
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 20
    }}>
      
      {/* Phase 1 */}
      <motion.div 
        style={{ 
          opacity: opacity1, 
          y: y1,
          ...baseTextStyle 
        }}
      >
        <h1 style={{
          fontSize: 'clamp(48px, 12vw, 144px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'white',
          marginBottom: '16px',
          textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          lineHeight: 1.1
        }}>
          Slice Mango
        </h1>
        <p style={{
          fontSize: 'clamp(14px, 2vw, 24px)',
          color: '#ffe082',
          fontWeight: 300,
          letterSpacing: '0.3em',
          textTransform: 'uppercase'
        }}>
          The Premium Drop
        </p>
      </motion.div>

      {/* Phase 2 */}
      <motion.div 
        style={{ 
          opacity: opacity2, 
          y: y2,
          ...baseTextStyle 
        }}
      >
        <h2 style={{
          fontSize: 'clamp(36px, 10vw, 120px)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '24px',
          textShadow: '0 4px 20px rgba(0,0,0,0.4)',
          lineHeight: 1.2
        }}>
          Pure Mango<br/>
          <span style={{ color: '#ffd54f' }}>Indulgence</span>
        </h2>
      </motion.div>

      {/* Phase 3 */}
      <motion.div 
        style={{ 
          opacity: opacity3, 
          y: y3,
          ...baseTextStyle,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h2 style={{
          fontSize: 'clamp(48px, 12vw, 144px)',
          fontWeight: 900,
          background: 'linear-gradient(to bottom, #ffe082, #e6a000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '16px'
        }}>
          Thick.
        </h2>
        <h2 style={{
          fontSize: 'clamp(48px, 12vw, 144px)',
          fontWeight: 900,
          background: 'linear-gradient(to bottom, #ffd54f, #e6a000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '16px',
          marginLeft: '48px'
        }}>
          Juicy.
        </h2>
        <h2 style={{
          fontSize: 'clamp(48px, 12vw, 144px)',
          fontWeight: 900,
          color: 'white',
          textShadow: '0 4px 40px rgba(0,0,0,0.6)',
          marginLeft: '96px'
        }}>
          Real.
        </h2>
      </motion.div>

    </div>
  );
}
