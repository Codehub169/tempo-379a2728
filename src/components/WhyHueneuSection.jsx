import React from 'react';
import styles from './WhyHueneuSection.module.css'; // Will be created in a future step

const WhyHueneuSection = () => {
  return (
    <section id="why-hueneu" className={styles.whyHueneuSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Why hueneu?</h2>
        
        <div className={styles.pitchContainer}>
          <p className={styles.pitchLine}>
            We don't just design—<span className={styles.highlight}>we decode stories</span>.
          </p>
          <p className={styles.pitchLine}>
            Designs that <span className={styles.highlight}>speak quietly</span> but <span className={styles.highlight}>stay with you</span>.
          </p>
        </div>

        <div className={styles.philosophyContainer}>
          <p className={styles.philosophyText}>
            At hueneu, we believe in the power of <span className={styles.emphasis}>calm</span>,
            the allure of <span className={styles.emphasis}>mystery</span>, 
            and the strength of <span className={styles.emphasis}>balance</span>.
          </p>
          <p className={styles.philosophyText}>
            Our approach is a gentle unfolding, revealing the extraordinary in the understated. 
            We craft visual narratives that resonate deeply, creating connections that are both 
            <span className={styles.emphasis}>intuitive</span> and <span className={styles.emphasis}>intriguing</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
