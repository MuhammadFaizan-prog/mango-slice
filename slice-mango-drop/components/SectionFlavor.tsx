'use client';

import { motion } from 'framer-motion';

export default function SectionFlavor() {
  const notes = [
    { title: 'Velvety', desc: 'A rich, buttery texture that melts instantly on the tongue.' },
    { title: 'Sweet', desc: 'Intense natural sweetness with hints of honey and apricot.' },
    { title: 'Tangy', desc: 'A subtle citrus zest that perfectly balances the sugar.' }
  ];

  return (
    <section style={{
      width: '100%',
      minHeight: '80vh',
      backgroundColor: '#FAFAFA', // Very light grey to distinguish from Heritage
      color: '#000000',
      padding: '96px 32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 900,
          marginBottom: '16px',
          color: '#FFB800',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em'
        }}>
          A Symphony of Flavor
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#333333',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Every sip is a carefully orchestrated balance of nature's finest notes, 
          delivering an experience that is both bold and delicate.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '48px',
        maxWidth: '1080px',
        width: '100%'
      }}>
        {notes.map((note, i) => (
          <motion.div
            key={note.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            style={{
              padding: '32px',
              borderLeft: '2px solid #E5E5E5',
              backgroundColor: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: 800,
              marginBottom: '12px',
              textTransform: 'uppercase',
              color: '#000000'
            }}>
              {note.title}
            </h3>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#333333'
            }}>
              {note.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
