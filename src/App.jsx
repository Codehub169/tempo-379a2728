import React from 'react';
import styles from './App.module.css';
// import HeroSection from './components/HeroSection';
// import StorySection from './components/StorySection';
// import ServicesSection from './components/ServicesSection';
// import WhyHueneuSection from './components/WhyHueneuSection';
// import ContactSection from './components/ContactSection';
// import ScrollIndicator from './components/ScrollIndicator';

function App() {
  // The main application component that will hold all sections
  return (
    <div className={styles.appContainer}>
      {/* 
        The following components are placeholders and will be implemented in future steps.
        They represent the different sections of the one-page website.
      */}
      {/* <HeroSection /> */}
      {/* <StorySection /> */}
      {/* <ServicesSection /> */}
      {/* <WhyHueneuSection /> */}
      {/* <ContactSection /> */}
      {/* <ScrollIndicator /> */}
      
      {/* Placeholder content until sections are built */}
      <header className={styles.appHeader}>
        <h1>hueneu</h1>
        <p>Where stories find their aesthetic.</p>
      </header>
      <main className={styles.mainContent}>
        <p>Website content will be populated here as components are built.</p>
      </main>
      <footer className={styles.appFooter}>
        <p>&copy; {new Date().getFullYear()} hueneu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
