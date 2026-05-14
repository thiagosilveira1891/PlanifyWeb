import { motion } from 'framer-motion';
import { LayoutDashboard, CheckSquare, BarChart3, Target, Calendar, Settings } from 'lucide-react';
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
                <strong>Planify es diferente: es 100% gratis y Open Source.</strong>
              </p>
              <p>
                Hemos creado un entorno de escritorio nativo (Desktop App). 
                Sin distracciones del navegador, sin pestañas infinitas. Solo tú, tu enfoque, 
                y un dashboard diseñado para darte paz mental y visualizar tu progreso real.
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
            className={styles.appWindow}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Window Header */}
            <div className={styles.windowHeader}>
              <div className={styles.windowControls}>
                <span className={styles.closeBtn}></span>
                <span className={styles.minBtn}></span>
                <span className={styles.maxBtn}></span>
              </div>
              <div className={styles.windowTitle}>Planify</div>
            </div>
            
            {/* App Layout */}
            <div className={styles.appLayout}>
              {/* Sidebar */}
              <div className={styles.sidebar}>
                <div className={styles.sidebarMenu}>
                  <div className={`${styles.menuItem} ${styles.active}`}><LayoutDashboard size={14} /> <span>Dashboard</span></div>
                  <div className={styles.menuItem}><CheckSquare size={14} /> <span>Tareas</span></div>
                  <div className={styles.menuItem}><BarChart3 size={14} /> <span>Estadísticas</span></div>
                  <div className={styles.menuItem}><Target size={14} /> <span>Metas</span></div>
                  <div className={styles.menuItem}><Calendar size={14} /> <span>Calendario</span></div>
                </div>
                <div className={styles.sidebarBottom}>
                  <div className={styles.menuItem}><Settings size={14} /> <span>Ajustes</span></div>
                </div>
              </div>

              {/* Main Content */}
              <div className={styles.mainContent}>
                <header className={styles.mainHeader}>
                  <h3>¡Buenos días, estudiante! ☀️</h3>
                  <p>Tienes 3 tareas para hoy.</p>
                </header>
                
                <div className={styles.dashboardGrid}>
                  <div className={styles.heatmapCard}>
                    <div className={styles.cardHeader}>
                      <h4>Constancia de Estudio</h4>
                      <span className={styles.rachaBadge}>🔥 12 días</span>
                    </div>
                    <div className={styles.heatmapGrid}>
                       {Array.from({ length: 56 }).map((_, i) => (
                         <div key={i} className={styles.heatCell} style={{ opacity: Math.random() > 0.3 ? Math.random() * 0.8 + 0.2 : 0.05 }}></div>
                       ))}
                    </div>
                  </div>
                  
                  <div className={styles.tasksCard}>
                    <h4>Próximas Entregas</h4>
                    <div className={styles.taskList}>
                      <div className={styles.taskItem}>
                        <div className={styles.checkbox}></div>
                        <div className={styles.taskInfo}>
                          <span className={styles.taskName}>Lectura Filosofía</span>
                          <span className={styles.taskTagAlert}>Hoy, 18:00</span>
                        </div>
                      </div>
                      <div className={styles.taskItem}>
                        <div className={styles.checkbox}></div>
                        <div className={styles.taskInfo}>
                          <span className={styles.taskName}>TP Redes y Sistemas</span>
                          <span className={styles.taskTag}>Mañana</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
