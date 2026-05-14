import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background gradients */}
      <div className={styles.bgGradient1}></div>
      <div className={styles.bgGradient2}></div>

      <div className={`container ${styles.content}`}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Sparkles className={styles.badgeIcon} size={14} />
          <span>Diseñada para tu paz mental</span>
        </motion.div>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Una forma más <br />
          <span className={styles.titleHighlight}>tranquila</span> de enfocarte.
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Convierte el estudio en un hábito sostenible. Planify reduce el ruido mental 
          para que estudiar se sienta como un respiro, no como una carrera contra el tiempo.
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className={styles.primaryBtn}>
            Comienza a estudiar
            <ArrowRight size={18} className={styles.btnIcon} />
          </button>
          <button className={styles.secondaryBtn}>
            Ver cómo funciona
          </button>
        </motion.div>
      </div>

      <motion.div 
        className={styles.mockupContainer}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.mockup}>
          {/* Abstract representation of the timer */}
          <div className={styles.mockupHeader}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.timerCircle}>
            <div className={styles.timerInner}>
              <span className={styles.time}>25:00</span>
              <span className={styles.timeLabel}>Enfocando en Filosofía</span>
            </div>
          </div>
          <div className={styles.floatingCard1}>
            <span className={styles.fcTitle}>Racha actual</span>
            <span className={styles.fcValue}>12 días 🌿</span>
          </div>
          <div className={styles.floatingCard2}>
            <span className={styles.fcTitle}>Ruido mental</span>
            <span className={styles.fcValue}>Mínimo</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
