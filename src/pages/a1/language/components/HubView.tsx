import {
  BookOpen,
  PenTool,
  ClipboardCheck,
  ChevronRight,
  Target,
  Clock,
  ArrowRight
} from 'lucide-react';
import styles from '../Language.module.css';
import type { Presentation, Activity } from '../languageA1Data';

interface HubViewProps {
  presentations: Presentation[];
  activities: Activity[];
  openPresentation: (presentation: Presentation) => void;
  openActivity: (activity: Activity) => void;
  setViewMode: (viewMode: 'quiz') => void;
}

export default function HubView({
  presentations,
  activities,
  openPresentation,
  openActivity,
  setViewMode
}: HubViewProps) {
  return (
    <div className={styles.hubContainer}>
      {/* Presentations Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <BookOpen size={24} />
          </div>
          <div>
            <h2>Présentations</h2>
            <p>Découvrez les leçons de grammaire et vocabulaire</p>
          </div>
        </div>
        <div className={styles.cardGrid}>
          {presentations.map(presentation => (
            <div
              key={presentation.id}
              className={styles.card}
              onClick={() => openPresentation(presentation)}
            >
              <div className={styles.cardIcon}>
                <BookOpen size={20} />
              </div>
              <div className={styles.cardContent}>
                <h3>{presentation.title}</h3>
                <p>{presentation.description}</p>
                <div className={styles.cardMeta}>
                  <span><Target size={14} /> {presentation.objectives.length} objectifs</span>
                  <span><Clock size={14} /> 10-15 min</span>
                </div>
              </div>
              <ChevronRight size={20} className={styles.cardArrow} />
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <PenTool size={24} />
          </div>
          <div>
            <h2>Activités</h2>
            <p>Pratiquez avec des exercices interactifs</p>
          </div>
        </div>
        <div className={styles.cardGrid}>
          {activities.map(activity => (
            <div
              key={activity.id}
              className={styles.card}
              onClick={() => openActivity(activity)}
            >
              <div className={styles.cardIcon}>
                <PenTool size={20} />
              </div>
              <div className={styles.cardContent}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.tag}>{activity.type}</span>
                  <span>{activity.questions.length} questions</span>
                </div>
              </div>
              <ChevronRight size={20} className={styles.cardArrow} />
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <ClipboardCheck size={24} />
          </div>
          <div>
            <h2>Quiz d'évaluation</h2>
            <p>Testez vos connaissances avec un quiz complet</p>
          </div>
        </div>
        <div className={styles.quizCard} onClick={() => setViewMode('quiz')}>
          <div className={styles.quizInfo}>
            <ClipboardCheck size={32} />
            <div>
              <h3>Quiz A1-1 : Grammaire & Vocabulaire</h3>
              <p>10 questions pour évaluer votre niveau</p>
            </div>
          </div>
          <button className="btn btn-primary">
            Commencer le quiz <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
