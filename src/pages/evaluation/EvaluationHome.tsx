import { Link } from 'react-router-dom';
import {
  BookOpenText,
  Headphones,
  Languages,
  ArrowRight,
  Clock,
  Target,
  BarChart3
} from 'lucide-react';
import styles from './EvaluationHome.module.css';
import Breadcrumb from '../../components/Breadcrumb';
import ProgressTracker from '../../components/ProgressTracker';
import SidebarNav from '../../components/SidebarNav';

const skillCards = [
  {
    path: '/reading',
    title: 'Compréhension Écrite',
    subtitle: 'Lecture',
    description: 'Évaluez votre capacité à comprendre des textes écrits en français, des messages simples aux articles plus complexes.',
    icon: BookOpenText,
    color: 'primary',
    duration: '15-20 min',
    questions: '10-15 questions'
  },
  {
    path: '/listening',
    title: 'Compréhension Orale',
    subtitle: 'Écoute',
    description: 'Testez votre compréhension des dialogues et enregistrements audio en français courant.',
    icon: Headphones,
    color: 'secondary',
    duration: '15-20 min',
    questions: '10-15 questions'
  },
  {
    path: '/language',
    title: 'Grammaire & Vocabulaire',
    subtitle: 'Langue',
    description: 'Vérifiez votre maîtrise des structures grammaticales et de votre richesse lexicale.',
    icon: Languages,
    color: 'accent',
    duration: '20-25 min',
    questions: '20-25 questions'
  }
];

const breadcrumbItems = [
  { label: 'Accueil' }
];

const progressSteps = [
  { id: '1', title: 'A1.1', completed: true, locked: false, path: '/a1/1' },
  { id: '2', title: 'A1.2', completed: true, locked: false, path: '/a1/2' },
  { id: '3', title: 'A1.3', completed: false, locked: false, path: '/a1/3' },
  { id: '4', title: 'A1.4', completed: false, locked: true, path: '/a1/4' },
];

const sidebarItems = [
  { title: 'Vue d\'ensemble', path: '/', active: true },
  { title: 'Compréhension Écrite', path: '/reading' },
  { title: 'Compréhension Orale', path: '/listening' },
  { title: 'Grammaire & Vocabulaire', path: '/language' },
];

export default function EvaluationHome() {
  return (
    <div className={styles['evaluationPageEnhanced']}>
      <Breadcrumb items={breadcrumbItems} />
      <ProgressTracker steps={progressSteps} currentStepId="3" />

      <div style={{ display: 'flex', gap: '2rem' }}>
        <SidebarNav title="Évaluation" items={sidebarItems} />

        <div style={{ flex: 1 }}>
          {/* Header Section */}
          <section className={styles['evalHeaderEnhanced']}>
            <div className={`${styles['pageContainer']} ${styles['container']}`}>
              <div className={styles['evalHeaderContentEnhanced']}>
                <div className={styles['evalBadgeEnhanced']}>
                  <Target size={16} />
                  Évaluation diagnostique
                </div>
                <h1>Évaluez vos compétences</h1>
                <p>
                  Découvrez votre niveau actuel en français grâce à notre évaluation complète.
                  Cette évaluation vous permettra d'identifier vos points forts et les domaines
                  à améliorer pour progresser efficacement.
                </p>
              </div>
            </div>
          </section>

          {/* Info Cards */}
          <section className={`${styles['evalInfo']} ${styles['section']}`}>
            <div className={`${styles['pageContainer']} ${styles['container']}`}>
              <div className={styles['infoCardsEnhanced']}>
                <div className={styles['infoCardEnhanced']}>
                  <div className={styles['infoIconEnhanced']}>
                    <Clock size={24} />
                  </div>
                  <div className={styles['infoContentEnhanced']}>
                    <h4>Durée totale</h4>
                    <p>50-65 minutes</p>
                  </div>
                </div>
                <div className={styles['infoCardEnhanced']}>
                  <div className={styles['infoIconEnhanced']}>
                    <Target size={24} />
                  </div>
                  <div className={styles['infoContentEnhanced']}>
                    <h4>3 Compétences</h4>
                    <p>Lecture, Écoute, Langue</p>
                  </div>
                </div>
                <div className={styles['infoCardEnhanced']}>
                  <div className={styles['infoIconEnhanced']}>
                    <BarChart3 size={24} />
                  </div>
                  <div className={styles['infoContentEnhanced']}>
                    <h4>Résultats détaillés</h4>
                    <p>Par compétence</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={`${styles['evalSkills']} ${styles['section']}`}>
            <div className={`${styles['pageContainer']} ${styles['container']}`}>
              <div className={styles['sectionTitle']}>
                <h2>Choisissez une compétence</h2>
                <p>Vous pouvez évaluer chaque compétence séparément ou toutes à la suite</p>
              </div>

              <div className={styles['skillsGridEnhanced']}>
                {skillCards.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <Link
                      to={skill.path}
                      key={skill.path}
                      className={`${styles['skillCardEnhanced']} ${styles[`skill${skill.color.charAt(0).toUpperCase() + skill.color.slice(1)}Enhanced`]}`}
                    >
                      <div className={styles['skillHeaderEnhanced']}>
                        <div className={styles[`icon${skill.color.charAt(0).toUpperCase() + skill.color.slice(1)}Enhanced`]}>
                          <Icon size={28} />
                        </div>
                        <span className={styles['skillSubtitleEnhanced']}>{skill.subtitle}</span>
                      </div>
                      <h3>{skill.title}</h3>
                      <p>{skill.description}</p>
                      <div className={styles['skillMetaEnhanced']}>
                        <span>
                          <Clock size={14} />
                          {skill.duration}
                        </span>
                        <span>
                          <Target size={14} />
                          {skill.questions}
                        </span>
                      </div>
                      <div className={styles['skillActionEnhanced']}>
                        <span>Commencer</span>
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles['evalCtaEnhanced']}>
            <div className={`${styles['pageContainer']} ${styles['container']}`}>
              <div className={styles['ctaBoxEnhanced']}>
                <div className={styles['ctaContentEnhanced']}>
                  <h3>Évaluation complète</h3>
                  <p>
                    Passez les trois tests à la suite pour obtenir une évaluation
                    complète de votre niveau en français.
                  </p>
                </div>
                <Link to="/reading" className={`${styles['btn']} ${styles['btnPrimary']}`}>
                  Démarrer l'évaluation complète
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
