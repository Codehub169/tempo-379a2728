import React, { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const logoRef = useRef(null);

  // Basic animation for logo parts - more complex animations could be done via SVG's SMIL or JS libraries
  useEffect(() => {
    const logo = logoRef.current;
    if (logo) {
      const hueElement = logo.querySelector('#logo-hue');
      const neuElement = logo.querySelector('#logo-neu');
      
      if (hueElement && neuElement) {
        // Simple sequential fade-in and slight move-up
        setTimeout(() => {
          hueElement.style.opacity = '1';
          hueElement.style.transform = 'translateY(0)';
        }, 500); // Start 'hue' animation after a short delay

        setTimeout(() => {
          neuElement.style.opacity = '1';
          neuElement.style.transform = 'translateY(0)';
        }, 800); // Start 'neu' animation after 'hue'
      }
    }
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Animated hueneu logo (SVG embedded as object for better animation control) */}
        <object 
          ref={logoRef} 
          type="image/svg+xml" 
          data="/logo-animated.svg" 
          className={styles.logo}
          aria-label="hueneu logo"
        >
          {/* Fallback content for browsers that don't support object tag for SVG */}
          <img src="/logo-animated.svg" alt="hueneu logo" />
        </object>

        <h1 className={styles.tagline}>Where stories find their aesthetic.</h1>
        <p className={styles.subtext}>Designs that whisper loud stories.</p>
      </div>
      
      {/* Smooth scroll-down indicator */}
      <a href="#story" className={styles.scrollIndicator} aria-label="Scroll to next section">
        <div className={styles.mouse}>
          <div className={styles.scroller}></div>
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </a>
    </section>
  );
};

export default HeroSection;
