import React from 'react';
import styles from './StorySection.module.css';

const StorySection = () => {
  return (
    <section id="story" className={styles.storySection}>
      <div className={styles.storyContent}>
        <h2 className={styles.title}>The <span className={styles.hueText}>hue</span><span className={styles.neuText}>neu</span> Story</h2>
        <p className={styles.paragraph}>
          At hueneu, we believe in the power of balance. 
          <span className={styles.hueHighlight}>"Hue"</span> represents the vibrant bursts of creativity, the unexpected color palettes, 
          and the bold ideas that make a design memorable.
        </p>
        <p className={styles.paragraph}>
          <span className={styles.neuHighlight}>"Neu"</span> signifies the grounding neutrality, the calm confidence, and the intentional 
          simplicity that ensures clarity and timelessness. It's the quiet space where loud stories can truly resonate.
        </p>
        <div className={styles.whoKnewContainer}>
          {/* This area will feature the 'Who Knew?' visual pop-out or scroll-triggered element. */}
          {/* For now, a placeholder text or simple visual cue. */}
          <h3 className={styles.whoKnewTitle}>And the "Who Knew?" Moment?</h3>
          <p className={styles.whoKnewText}>
            It's that delightful surprise, the unexpected twist, the moment our designs 
            reveal a deeper layer of meaning. It's where thoughtful strategy meets playful execution. 
            <span className={styles.stayTuned}>(More on this intriguing magic soon!)</span>
          </p>
          {/* Placeholder for future WhoKnewPopup component or interactive element */}
          {/* <WhoKnewPopup /> */}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
