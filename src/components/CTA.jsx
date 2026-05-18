import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative elements */}
          <div className={styles.dec1}></div>
          <div className={styles.dec2}></div>
          
          <div className={styles.content}>
            <h2>Empieza algo que sí termines.</h2>
            <p>
              Únete a estudiantes que decidieron organizarse sin presión, con un sistema que se adapta a su vida real.
            </p>
            
            <div className={styles.freeBadge}>
              <span className={styles.freeBadgeIcon}>🤍</span>
              <span>100% gratis para siempre, sin fines de lucro.</span>
            </div>

            <div className={styles.actionContainer}>
              <a
                href="https://github.com/thiagosilveira1891/planify2/releases/download/v1.0.0/Planify.Setup.1.0.0.exe"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <Download size={18} />
                Descarga para Windows (.exe)
              </a>
            </div>
            
            <p className={styles.disclaimer}>
              Requiere Windows 10 o superior. Sin anuncios ni distracciones.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
