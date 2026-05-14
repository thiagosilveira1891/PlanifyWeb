import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>
          <Leaf className={styles.logoIcon} />
          <span>Planify</span>
        </div>
        
        <nav className={styles.nav}>
          <a href="#features">Características</a>
          <a href="#experience">Experiencia</a>
          <a href="#showcase">Rachas</a>
        </nav>
        
        <button className={styles.ctaButton}>
          Empieza gratis
        </button>
      </div>
    </header>
  );
};

export default Header;
