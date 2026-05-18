import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
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
          <span>Diseñada para estudiantes universitarios</span>
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
          <a
            href="https://github.com/thiagosilveira1891/planify2/releases/download/v1.0.0/Planify.Setup.1.0.0.exe"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Comienza a estudiar <ArrowRight size={16} className={styles.btnIcon} />
          </a>
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
            <svg className={styles.timerSvg} viewBox="0 0 100 100">
              <circle className={styles.timerTrack} cx="50" cy="50" r="46" />
              <motion.circle 
                className={styles.timerProgress} 
                cx="50" cy="50" r="46" 
                initial={{ strokeDashoffset: 289 }}
                animate={{ strokeDashoffset: 120 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              />
            </svg>
            <div className={styles.timerInner}>
              <span className={styles.time}>50:00</span>
              <span className={styles.timeLabel}>Deep Work</span>
            </div>
          </div>

          <div className={styles.timerControls}>
            <button className={styles.iconBtn}><RotateCcw size={18} /></button>
            <button className={styles.playBtn}><Play size={22} className={styles.playIcon} /></button>
            <button className={styles.iconBtn}><Volume2 size={18} /></button>
          </div>

          <div className={styles.floatingCard1}>
            <span className={styles.fcTitle}>Racha actual</span>
            <span className={styles.fcValue}>12 días 🌿</span>
          </div>
          <div className={styles.floatingCard2}>
            <span className={styles.fcTitle}>Horas de vuelo</span>
            <span className={styles.fcValue}>120h 🚀</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
