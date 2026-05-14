import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.label}>Nuestra Filosofía</span>
            <h2 className={styles.title}>Estudiar no debería sentirse como una carrera.</h2>
            <div className={styles.content}>
              <p>
                La mayoría de las aplicaciones de productividad están diseñadas para exprimir
                cada segundo de tu día. Te llenan de notificaciones rojas, gráficos de
                rendimiento estresantes y gamificación que te hace sentir culpable si descansas.
              </p>
              <p>
                <strong>Planify es diferente.</strong>
              </p>
              <p>
                Creemos que el mejor trabajo nace de la calma, no del pánico.
                Hemos eliminado todo el ruido visual para dejar solo lo esencial:
                tú, tu enfoque, y un progreso constante que respeta tu ritmo natural.
              </p>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>85%</span>
                <span className={styles.statText}>Menos ansiedad al iniciar una sesión de estudio.</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className={styles.visualSection}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.abstractArt}>
              {/* Nature inspired abstract elements */}
              <div className={styles.circle1}></div>
              <div className={styles.circle2}></div>
              <div className={styles.glassCard}>
                <div className={styles.gLine}></div>
                <div className={styles.gLineShort}></div>
                <div className={styles.gLine}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
