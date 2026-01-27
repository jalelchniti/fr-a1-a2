import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Languages,
  Lightbulb,
  Target
} from 'lucide-react';
import styles from '../Language.module.css';
import TextToSpeech from '../../../../components/TextToSpeech';
import type { Presentation } from '../languageA1Data';

interface PresentationViewProps {
  selectedPresentation: Presentation;
  backToHub: () => void;
  setViewMode: (viewMode: 'quiz') => void;
}

export default function PresentationView({
  selectedPresentation,
  backToHub,
  setViewMode
}: PresentationViewProps) {
  return (
    <div className={styles.presentationContainer}>
      <div className={styles.presentationHeader}>
        <h1>{selectedPresentation.title}</h1>
        <p>{selectedPresentation.description}</p>
      </div>

      {/* Objectives */}
      <div className={styles.presentationSection}>
        <h2><Target size={20} /> Objectifs</h2>
        <ul className={styles.objectivesList}>
          {selectedPresentation.objectives.map((obj, i) => (
            <li key={i}><CheckCircle size={16} /> {obj}</li>
          ))}
        </ul>
      </div>

      {/* Vocabulary */}
      <div className={styles.presentationSection}>
        <h2><BookOpen size={20} /> Vocabulaire</h2>
        <div className={styles.vocabularyGrid}>
          {selectedPresentation.vocabulary.map((item, i) => (
            <div key={i} className={styles.vocabularyCard}>
              <div className={styles.vocabMain}>
                <span className={styles.vocabFrench}>{item.french}</span>
                <TextToSpeech text={item.french} />
              </div>
              <span className={styles.vocabEnglish}>{item.english}</span>
              {item.example && (
                <span className={styles.vocabExample}>"{item.example}"</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Grammar */}
      <div className={styles.presentationSection}>
        <h2><Languages size={20} /> Grammaire</h2>
        {selectedPresentation.grammar.map((rule, i) => (
          <div key={i} className={styles.grammarCard}>
            <h3>{rule.title}</h3>
            <p>{rule.explanation}</p>
            <div className={styles.examplesGrid}>
              {rule.examples.map((ex, j) => (
                <div key={j} className={styles.exampleItem}>
                  <span className={styles.exampleFrench}>{ex.french}</span>
                  <span className={styles.exampleEnglish}>{ex.english}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className={styles.presentationSection}>
        <h2><Lightbulb size={20} /> Conseils</h2>
        <div className={styles.tipsContainer}>
          {selectedPresentation.tips.map((tip, i) => (
            <div key={i} className={styles.tipCard}>
              <Lightbulb size={18} />
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.presentationFooter}>
        <button className="btn btn-secondary" onClick={backToHub}>
          <ArrowLeft size={18} /> Retour
        </button>
        <button className="btn btn-primary" onClick={() => setViewMode('quiz')}>
          Passer au quiz <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
