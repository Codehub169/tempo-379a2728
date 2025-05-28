import React, { useEffect, useRef } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = ({ targetId }) => {
  const indicatorRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Optional: Add a subtle fade-in or entrance animation if desired
  useEffect(() => {
    const currentIndicator = indicatorRef.current;
    if (currentIndicator) {
      // Example: Simple fade-in
      currentIndicator.style.opacity = '0';
      setTimeout(() => {
        currentIndicator.style.transition = 'opacity 0.5s ease-in-out';
        currentIndicator.style.opacity = '1';
      }, 1500); // Delay to allow hero content to animate first
    }
  }, []);

  return (
    <a 
      href={`#${targetId}`} 
      className={styles.scrollIndicator}
      onClick={handleClick}
      ref={indicatorRef}
      aria-label="Scroll to next section"
    >
      <div className={styles.mouse}>
        <div className={styles.scroller}></div>
      </div>
      <span className={styles.scrollText}>Scroll</span>
    </a>
  );
};

export default ScrollIndicator;
