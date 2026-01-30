import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenText,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  PenTool,
  ClipboardCheck,
  ChevronRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
  RotateCcw,
  FileText,
  Eye
} from 'lucide-react';
import styles from './Reading.module.css';
import EnhancedEvaluation from '../../../components/EnhancedEvaluation';
import {
  presentations,
  activities,
  getEnhancedQuizQuestions,
  type Presentation,
  type Activity
} from './readingA2Data';

type ViewMode = 'hub' | 'presentation' | 'activity' | 'quiz';

export default function Reading() {
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
      if (q.type === 'multiple-choice' || q.type === 'true-false') {
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

  // Calculate activity score
  const getActivityScore = () => {
    if (!activityResults || !selectedActivity) return { correct: 0, total: 0 };
    const correct = Object.values(activityResults).filter(r => r).length;
    return { correct, total: selectedActivity.questions.length };
  };

  // Render Hub View
  const renderHub = () => (
    <div className={styles.hubContainer}>
      {/* Presentations Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <BookOpen size={24} />
          </div>
          <div>
            <h2>Présentations</h2>
            <p>Découvrez des textes et stratégies de lecture</p>
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
                <FileText size={20} />
              </div>
              <div className={styles.cardContent}>
                <h3>{presentation.title}</h3>
                <p>{presentation.description}</p>
                <div className={styles.cardMeta}>
                  <span><Target size={14} /> {presentation.objectives.length} objectifs</span>
                  <span><FileText size={14} /> {presentation.readingTexts.length} textes</span>
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
            <p>Pratiquez la compréhension écrite</p>
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
            <p>Testez votre compréhension écrite</p>
          </div>
        </div>
        <div className={styles.quizCard} onClick={() => setViewMode('quiz')}>
          <div className={styles.quizInfo}>
            <ClipboardCheck size={32} />
            <div>
              <h3>Quiz A2-1 : Compréhension Écrite</h3>
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

  // Render Presentation View
  const renderPresentation = () => {
    if (!selectedPresentation) return null;

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

        {/* Reading Texts */}
        <div className={styles.presentationSection}>
          <h2><FileText size={20} /> Textes de lecture</h2>
          {selectedPresentation.readingTexts.map((readingText) => (
            <div key={readingText.id} className={styles.readingTextCard}>
              <h3>{readingText.title}</h3>
              <div className={styles.textBox}>
                <p>{readingText.text}</p>
              </div>

              {/* Vocabulary */}
              <div className={styles.vocabularySection}>
                <h4><BookOpen size={16} /> Vocabulaire clé</h4>
                <div className={styles.vocabularyGrid}>
                  {readingText.vocabulary.map((item, i) => (
                    <div key={i} className={styles.vocabularyCard}>
                      <span className={styles.vocabFrench}>{item.french}</span>
                      {item.example && (
                        <span className={styles.vocabExample}>« {item.example} »</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Comprehension Tips */}
              <div className={styles.tipsSection}>
                <h4><Lightbulb size={16} /> Conseils de compréhension</h4>
                <ul>
                  {readingText.comprehensionTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Reading Strategies */}
        <div className={styles.presentationSection}>
          <h2><Eye size={20} /> Stratégies de lecture</h2>
          <div className={styles.strategiesContainer}>
            {selectedPresentation.strategies.map((strategy, i) => (
              <div key={i} className={styles.strategyCard}>
                <span className={styles.strategyNumber}>{i + 1}</span>
                <span>{strategy}</span>
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
  };

  // Render Activity View
  const renderActivity = () => {
    if (!selectedActivity) return null;

    const currentQuestion = selectedActivity.questions[currentActivityQuestion];
    const score = getActivityScore();
    const isLastQuestion = currentActivityQuestion === selectedActivity.questions.length - 1;

    return (
      <div className={styles.activityContainer}>
        <div className={styles.activityHeader}>
          <h1>{selectedActivity.title}</h1>
          <p>{selectedActivity.description}</p>
          <div className={styles.activityProgress}>
            <span>Question {currentActivityQuestion + 1} / {selectedActivity.questions.length}</span>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${((currentActivityQuestion + 1) / selectedActivity.questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {!activityResults ? (
          <div className={styles.activityContent}>
            {/* Show text if available */}
            {currentQuestion.text && (
              <div className={styles.readingTextBox}>
                <div className={styles.textBoxHeader}>
                  <FileText size={18} />
                  <span>Texte à lire</span>
                </div>
                <p>{currentQuestion.text}</p>
              </div>
            )}

            <div className={styles.questionCard}>
              <span className={styles.instruction}>{currentQuestion.instruction}</span>
              <p className={styles.questionText}>{currentQuestion.question}</p>

              {currentQuestion.type === 'fill-blank' && (
                <input
                  type="text"
                  className={styles.fillBlankInput}
                  value={activityAnswers[currentQuestion.id] || ''}
                  onChange={(e) => handleActivityAnswer(currentQuestion.id, e.target.value)}
                  placeholder="Votre réponse..."
                />
              )}

              {(currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'true-false') && currentQuestion.options && (
                <div className={styles.optionsGrid}>
                  {currentQuestion.options.map((option, i) => (
                    <button
                      key={i}
                      className={`${styles.optionButton} ${activityAnswers[currentQuestion.id] === String(i) ? styles.selected : ''}`}
                      onClick={() => handleActivityAnswer(currentQuestion.id, String(i))}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.activityNavigation}>
              <button
                className="btn btn-secondary"
                onClick={() => setCurrentActivityQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentActivityQuestion === 0}
              >
                <ArrowLeft size={18} /> Précédent
              </button>

              {isLastQuestion ? (
                <button
                  className="btn btn-primary"
                  onClick={checkActivityAnswers}
                  disabled={Object.keys(activityAnswers).length < selectedActivity.questions.length}
                >
                  Vérifier mes réponses <CheckCircle size={18} />
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setCurrentActivityQuestion(prev => prev + 1)}
                >
                  Suivant <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.activityResults}>
            <div className={styles.scoreCard}>
              <h2>Résultats</h2>
              <div className={styles.scoreCircle}>
                <span className={styles.scoreNumber}>{score.correct}</span>
                <span className={styles.scoreTotal}>/ {score.total}</span>
              </div>
              <p>{score.correct === score.total ? 'Excellent travail !' : score.correct >= score.total * 0.7 ? 'Bon travail !' : 'Continuez à pratiquer !'}</p>
            </div>

            <div className={styles.answersReview}>
              {selectedActivity.questions.map((q) => (
                <div key={q.id} className={`${styles.answerItem} ${activityResults[q.id] ? styles.correct : styles.incorrect}`}>
                  <div className={styles.answerIcon}>
                    {activityResults[q.id] ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  </div>
                  <div className={styles.answerContent}>
                    <span className={styles.answerQuestion}>{q.question}</span>
                    <span className={styles.answerGiven}>
                      Votre réponse : {(q.type === 'multiple-choice' || q.type === 'true-false') && q.options
                        ? q.options[Number(activityAnswers[q.id])]
                        : activityAnswers[q.id]}
                    </span>
                    {!activityResults[q.id] && (
                      <span className={styles.answerCorrect}>
                        Réponse correcte : {(q.type === 'multiple-choice' || q.type === 'true-false') && q.options
                          ? q.options[Number(q.correctAnswer)]
                          : q.correctAnswer}
                      </span>
                    )}
                    {q.explanation && (
                      <span className={styles.answerExplanation}>
                        <Lightbulb size={14} /> {q.explanation}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.resultsActions}>
              <button className="btn btn-secondary" onClick={resetActivity}>
                <RotateCcw size={18} /> Recommencer
              </button>
              <button className="btn btn-primary" onClick={backToHub}>
                Retour au menu <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render Quiz View
  const renderQuiz = () => {
    const questions = getEnhancedQuizQuestions();

    return (
      <div className={styles.quizContainer}>
        <EnhancedEvaluation
          title="Quiz A2-1 : Compréhension Écrite"
          subtitle="Lisez les textes et répondez aux questions"
          questions={questions}
          timeLimit={20}
        />
      </div>
    );
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          {viewMode === 'hub' ? (
            <Link to="/a2" className={styles.backLink}>
              <ArrowLeft size={20} /> Retour au niveau A2
            </Link>
          ) : (
            <button onClick={backToHub} className={styles.backLink}>
              <ArrowLeft size={20} /> Retour au menu
            </button>
          )}
          <div className={styles.headerInfo}>
            <div className={styles.headerIcon}>
              <BookOpenText size={32} />
            </div>
            <div>
              <span className={styles.levelBadge}>A2-1</span>
              <h1>Compréhension Écrite</h1>
              <p>Lecture et compréhension de textes simples</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          {viewMode === 'hub' && renderHub()}
          {viewMode === 'presentation' && renderPresentation()}
          {viewMode === 'activity' && renderActivity()}
          {viewMode === 'quiz' && renderQuiz()}
        </div>
      </section>
    </div>
  );
}