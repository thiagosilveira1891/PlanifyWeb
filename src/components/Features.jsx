import { motion } from 'framer-motion';
import { Focus, Clock, BookOpen, TrendingUp, Calendar, ZapOff } from 'lucide-react';
import styles from './Features.module.css';

const featuresData = [
  {
    icon: <Focus />,
    title: 'Modo Enfoque Profundo',
    description: 'Bloquea distracciones digitales y sumérgete en un entorno visualmente limpio diseñado para la concentración total.'
  },
  {
    icon: <Clock />,
    title: 'Pomodoro Orgánico',
    description: 'Temporizadores adaptativos que respetan tus ciclos de energía, recordándote descansar antes de que llegue la fatiga.'
  },
  {
    icon: <TrendingUp />,
    title: 'Rachas Saludables',
    description: 'Construye el hábito de estudiar celebrando la constancia sobre la intensidad. Un día a la vez.'
  },
  {
    icon: <BookOpen />,
    title: 'Organización Visual',
    description: 'Estructura tus materias y tareas con una jerarquía clara que elimina la sobrecarga cognitiva instantáneamente.'
  },
  {
    icon: <Calendar />,
    title: 'Progreso Semanal',
    description: 'Visualiza tus horas de estudio en mapas de calor elegantes que te ayudan a entender tus mejores momentos del día.'
  },
  {
    icon: <ZapOff />,
    title: 'Cero Presión',
    description: 'Sin notificaciones agresivas ni gamificación tóxica. Planify es una herramienta, no tu jefe.'
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
