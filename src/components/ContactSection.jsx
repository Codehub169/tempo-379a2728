import React from 'react';
import styles from './ContactSection.module.css';
import ContactForm from './ContactForm'; // Assuming ContactForm.jsx will be created
// import { InstagramIcon } from '../assets/icons'; // Example if using an SVG icon component

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Let's Work Together</h2>
        <p className={styles.introText}>
          Have a project in mind, a story to tell, or just want to say hello?
          <br />
          Drop us a line. We'd love to hear from you.
        </p>
        
        <ContactForm />

        <div className={styles.connectPrompt}>
          <p>Or find us sketching out ideas on Instagram:</p>
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.instagramLink}
          >
            {/* <InstagramIcon className={styles.instaIcon} /> */}
            @hueneu_
          </a>
        </div>

        {/* Optional: Link to services deck or 'Who Knew?' visual snippet */}
        {/* 
        <div className={styles.optionalLinkContainer}>
          <p>Curious about the finer details? 
            <a href="/path-to-services-deck.pdf" target="_blank" rel="noopener noreferrer" className={styles.deckLink}>
              View our Services Deck
            </a>
          </p>
        </div>
        */}
      </div>
    </section>
  );
};

export default ContactSection;
