import { Leaf } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Leaf className={styles.logoIcon} />
            <span>Planify</span>
          </div>
          <p className={styles.tagline}>
            Un lugar tranquilo para concentrarse y estudiar. Diseñado para estudiantes que quieren paz, no presión.
          </p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Producto</h4>
            <a href="#">Características</a>
            <a href="#">Filosofía</a>
            <a href="#">Precios</a>
          </div>
          <div className={styles.column}>
            <h4>Comunidad</h4>
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">Blog</a>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Planify. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
