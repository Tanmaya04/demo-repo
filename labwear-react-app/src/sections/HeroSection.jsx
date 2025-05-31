import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" style={{ position: 'relative', textAlign: 'center', color: 'white', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img
        src="https://source.unsplash.com/featured/?fashion,studio,modern,abstract&w=1200&h=400"
        alt="Modern Fashion Studio"
        style={{
          width: '100%',
          height: '100%', // Changed to 100% to fill the section
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0, // Background layer
          filter: 'brightness(0.6)' // Adjusted brightness
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, padding: '20px', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}> {/* Added subtle background to text for readability */}
        <h1 style={{ fontSize: '3.5em', marginBottom: '15px', color: '#fff', fontWeight: 'bold' }}>Welcome to Labwear Studios</h1>
        <p style={{ fontSize: '1.6em', color: '#f0f0f0' }}>Your vision, our manufacturing expertise.</p>
      </div>
    </section>
  );
};

export default HeroSection;
