import React from 'react';
import styles from './ServicesSection.module.css';

// Icon imports - adjust paths if necessary based on your final structure
import BrandingIcon from '../assets/icons/branding-icon.svg';
import PackagingIcon from '../assets/icons/packaging-icon.svg';
import SocialMediaIcon from '../assets/icons/social-media-icon.svg';
import StationeryIcon from '../assets/icons/stationery-icon.svg';
import CoffeeTableBooksIcon from '../assets/icons/coffee-table-books-icon.svg';
import CreativeProjectsIcon from '../assets/icons/creative-projects-icon.svg';

const servicesData = [
  {
    icon: BrandingIcon,
    name: 'Branding',
    microcopy: 'Logos that breathe, identities that speak.',
  },
  {
    icon: PackagingIcon,
    name: 'Packaging',
    microcopy: 'Packaging, but make it poetic.',
  },
  {
    icon: SocialMediaIcon,
    name: 'Social Media',
    microcopy: 'Scrolling stories, stopping thumbs.',
  },
  {
    icon: StationeryIcon,
    name: 'Stationery',
    microcopy: 'Paper trails with personality.',
  },
  {
    icon: CoffeeTableBooksIcon,
    name: 'Coffee Table Books',
    microcopy: 'Stories bound beautifully, for keeps.',
  },
  {
    icon: CreativeProjectsIcon,
    name: 'Creative Projects',
    microcopy: 'Your vision, our vibrant voyage.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.title}>What We Do</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <img src={service.icon} alt={`${service.name} icon`} className={styles.serviceIcon} />
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceMicrocopy}>{service.microcopy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
