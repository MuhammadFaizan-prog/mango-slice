'use client';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#FFB800',
      color: '#ffffff',
      padding: '96px 32px',
      position: 'relative',
      zIndex: 10,
      overflow: 'hidden'
    }}>
      {/* Optional Gradient Overlay for Depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(255,184,0,1) 0%, rgba(255,160,0,1) 100%)',
        zIndex: 0
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '48px',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1
      }}>
        <div>
          <h3 style={{
            fontSize: 'clamp(64px, 12vw, 200px)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            lineHeight: 0.8,
            letterSpacing: '-0.04em',
            marginLeft: '-0.05em',
            textShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            Slice
          </h3>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          textAlign: 'right',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '32px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: '#ffffff',
            textTransform: 'uppercase',
            textShadow: '0 1px 4px rgba(0,0,0,0.1)'
          }}>
            {['Instagram', 'Twitter', 'LinkedIn'].map((item) => (
              <a 
                key={item} 
                href="#" 
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  position: 'relative',
                  opacity: 0.9,
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                {item}
              </a>
            ))}
          </div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.8)',
            fontWeight: 500
          }}>
            © 2026 Slice Experience. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
