import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Languages,
  ArrowLeft,
} from 'lucide-react';
import styles from './Language.module.css';
import {
  presentations,
  activities,
  type Presentation,
  type Activity
} from './languageA1Data';
import HubView from './components/HubView';
import PresentationView from './components/PresentationView';
import ActivityView from './components/ActivityView';
import QuizView from './components/QuizView';

type ViewMode = 'hub' | 'presentation' | 'activity' | 'quiz';

export default function Language() {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedPresentation, setSelectedPresentation] = useState<Presentation | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [activityAnswers, setActivityAnswers] = useState<Record<number, string>>({});
  const [activityResults, setActivityResults] = useState<Record<number, boolean> | null>(null);
  const [currentActivityQuestion, setCurrentActivityQuestion] = useState(0);

  // Handle presentation selection
  const openPresentation = (presentation: Presentation) => {
    setSelectedPresentation(presentation);
    setViewMode('presentation');
  };

  // Handle activity selection
  const openActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setActivityAnswers({});
    setActivityResults(null);
    setCurrentActivityQuestion(0);
    setViewMode('activity');
  };

  // Handle activity answer
  const handleActivityAnswer = (questionId: number, answer: string) => {
    setActivityAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Check activity answers
  const checkActivityAnswers = () => {
    if (!selectedActivity) return;

    const results: Record<number, boolean> = {};
    selectedActivity.questions.forEach(q => {
      const userAnswer = activityAnswers[q.id];
      if (q.type === 'multiple-choice') {
        results[q.id] = userAnswer === String(q.correctAnswer);
      } else {
        results[q.id] = userAnswer?.toLowerCase().trim() === String(q.correctAnswer).toLowerCase().trim();
      }
    });
    setActivityResults(results);
  };

  // Reset activity
  const resetActivity = () => {
    setActivityAnswers({});
    setActivityResults(null);
    setCurrentActivityQuestion(0);
  };

  // Back to hub
  const backToHub = () => {
    setViewMode('hub');
    setSelectedPresentation(null);
    setSelectedActivity(null);
    setActivityAnswers({});
    setActivityResults(null);
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'presentation':
        return selectedPresentation && (
          <PresentationView
            selectedPresentation={selectedPresentation}
            backToHub={backToHub}
            setViewMode={setViewMode}
          />
        );
      case 'activity':
        return selectedActivity && (
          <ActivityView
            selectedActivity={selectedActivity}
            activityAnswers={activityAnswers}
            activityResults={activityResults}
            currentActivityQuestion={currentActivityQuestion}
            handleActivityAnswer={handleActivityAnswer}
            checkActivityAnswers={checkActivityAnswers}
            resetActivity={resetActivity}
            backToHub={backToHub}
            setCurrentActivityQuestion={setCurrentActivityQuestion}
          />
        );
      case 'quiz':
        return <QuizView />;
      case 'hub':
      default:
        return (
          <HubView
            presentations={presentations}
            activities={activities}
            openPresentation={openPresentation}
            openActivity={openActivity}
            setViewMode={setViewMode}
          />
        );
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          {viewMode === 'hub' ? (
            <Link to="/a1" className={styles.backLink}>
              <ArrowLeft size={20} /> Retour au niveau A1
            </Link>
          ) : (
            <button onClick={backToHub} className={styles.backLink}>
              <ArrowLeft size={20} /> Retour au menu
            </button>
          )}
          <div className={styles.headerInfo}>
            <div className={styles.headerIcon}>
              <Languages size={32} />
            </div>
            <div>
              <span className={styles.levelBadge}>A1-1</span>
              <h1>Langue française</h1>
              <p>Grammaire, Vocabulaire et Syntaxe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          {renderContent()}
        </div>
      </section>
    </div>
  );
}
