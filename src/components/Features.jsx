import { motion } from 'framer-motion';
import { Timer, CheckSquare, BarChart3, Target, PenTool, Flame } from 'lucide-react';
import styles from './Features.module.css';

const featuresData = [
  {
    icon: <Timer />,
    title: 'Modo Enfoque Avanzado',
    description: 'Timer Pomodoro (25/5 o Deep Work 50/10) con anillo animado, sonidos ambiente (lluvia, bosque, café) y protección de racha.'
  },
  {
    icon: <CheckSquare />,
    title: 'Tareas y Materias',
    description: 'Gestión completa de vida universitaria: subtareas, prioridades, fechas límite inteligentes, horarios, notas y cálculo de créditos.'
  },
  {
    icon: <BarChart3 />,
    title: 'Dashboard Estadístico',
    description: 'Heatmap de 365 días estilo GitHub, gráficos de horas por semana, distribución por materia y completion rate.'
  },
  {
    icon: <Target />,
    title: 'Hábitos y Metas',
    description: 'Fija objetivos académicos o personales a corto y largo plazo con milestones. Mantén el tracking diario sin estrés.'
  },
  {
    icon: <PenTool />,
    title: 'Apuntes Rápidos',
    description: 'No pierdas ninguna idea. Usa el bloc de notas integrado o el canvas de dibujo libre mientras estás en una sesión.'
  },
  {
    icon: <Flame />,
    title: 'Gamificación Positiva',
    description: 'Suma horas de vuelo, desbloquea hitos (desde 10h hasta 500h) y mantén tu racha diaria estudiando el mínimo configurado.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Todo lo que necesitas.<br/>Nada de lo que sobra.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Diseñado cuidadosamente para estudiantes que valoran la claridad visual y la simplicidad.
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresData.map((feature, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
