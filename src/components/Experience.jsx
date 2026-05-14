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
                cada segundo de tu día o para venderte una suscripción premium. Te llenan de 
                notificaciones rojas, gráficos estresantes y gamificación tóxica.
              </p>
              <p>
                <strong>Planify es diferente: es 100% gratis y sin fines de lucro.</strong>
              </p>
              <p>
                Creemos que la educación no debería ser un modelo de negocio. Hemos creado esta 
                herramienta por y para estudiantes. Hemos eliminado todo el ruido visual para dejar 
                solo lo esencial: tú, tu enfoque, y un progreso constante que respeta tu ritmo natural.
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
