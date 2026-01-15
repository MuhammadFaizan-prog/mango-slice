'use client';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      padding: '32px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '28px',
        letterSpacing: '-0.03em',
        textTransform: 'uppercase',
        textShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        Slice
      </div>
      <div style={{
        display: 'flex',
        gap: '48px',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        color: '#ffffff',
        textTransform: 'uppercase',
        textShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        {['Our Story', 'The Mango', 'Shop'].map((item) => (
          <div key={item} style={{ position: 'relative', cursor: 'pointer', padding: '4px 0' }} className="group">
            <a 
              href="#" 
              style={{ 
                color: 'inherit', 
                textDecoration: 'none',
                opacity: 0.9,
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              {item}
            </a>
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '0%',
              height: '2px',
              backgroundColor: '#ffffff',
              transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 8px rgba(255,255,255,0.8)'
            }} 
            className="group-hover:w-full"
            ref={(el) => {
              if (el && el.parentElement) {
                el.parentElement.onmouseenter = () => { el.style.width = '100%'; };
                el.parentElement.onmouseleave = () => { el.style.width = '0%'; };
              }
            }}
            />
          </div>
        ))}
      </div>
      <button style={{
        padding: '12px 32px',
        border: '1px solid rgba(255,255,255,0.4)',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '0.15em',
        color: '#ffffff',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = '#ffffff';
        e.currentTarget.style.color = '#000000';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = '#ffffff';
      }}
      >
        Taste Real
      </button>
    </nav>
  );
}
