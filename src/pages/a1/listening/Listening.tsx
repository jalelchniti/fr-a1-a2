import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Headphones,
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
  Volume2,
  Eye,
  EyeOff
} from 'lucide-react';
import styles from './Listening.module.css';
import EnhancedEvaluation from '../../../components/EnhancedEvaluation';
import TextToSpeech from '../../../components/TextToSpeech';
import {
  presentations,
  activities,
  getEnhancedQuizQuestions,
  type Presentation,
  type Activity
} from './listeningA1Data';

type ViewMode = 'hub' | 'presentation' | 'activity' | 'quiz';

export default function Listening() {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedPresentation, setSelectedPresentation] = useState<Presentation | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [activityAnswers, setActivityAnswers] = useState<Record<number, string>>({});
  const [activityResults, setActivityResults] = useState<Record<number, boolean> | null>(null);
  const [currentActivityQuestion, setCurrentActivityQuestion] = useState(0);
  const [showTranscript, setShowTranscript] = useState<Record<string, boolean>>({});

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
    setShowTranscript({});
    setViewMode('activity');
  };

  // Handle activity answer
  const handleActivityAnswer = (questionId: number, answer: string) => {
    setActivityAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Toggle transcript visibility
  const toggleTranscript = (id: string) => {
    setShowTranscript(prev => ({
      ...prev,
      [id]: !prev[id]
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
    setShowTranscript({});
  };

  // Back to hub
  const backToHub = () => {
    setViewMode('hub');
    setSelectedPresentation(null);
    setSelectedActivity(null);
    setActivityAnswers({});
    setActivityResults(null);
    setShowTranscript({});
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
            <p>Découvrez des dialogues et stratégies d'écoute</p>
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
                <Headphones size={20} />
              </div>
              <div className={styles.cardContent}>
                <h3>{presentation.title}</h3>
                <p>{presentation.description}</p>
                <div className={styles.cardMeta}>
                  <span><Target size={14} /> {presentation.objectives.length} objectifs</span>
                  <span><Volume2 size={14} /> {presentation.listeningTexts.length} dialogues</span>
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
            <p>Pratiquez la compréhension orale</p>
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
            <p>Testez votre compréhension orale</p>
          </div>
        </div>
        <div className={styles.quizCard} onClick={() => setViewMode('quiz')}>
          <div className={styles.quizInfo}>
            <ClipboardCheck size={32} />
            <div>
              <h3>Quiz A1-1 : Compréhension Orale</h3>
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

        {/* Listening Texts */}
        <div className={styles.presentationSection}>
          <h2><Headphones size={20} /> Dialogues</h2>
          {selectedPresentation.listeningTexts.map((listeningText) => (
            <div key={listeningText.id} className={styles.listeningTextCard}>
              <h3>{listeningText.title}</h3>
              <p className={styles.context}><em>{listeningText.context}</em></p>

              {/* Audio Player */}
              <div className={styles.audioSection}>
                <TextToSpeech text={listeningText.transcript} />
                <button
                  className={styles.transcriptToggle}
                  onClick={() => toggleTranscript(listeningText.id)}
                >
                  {showTranscript[listeningText.id] ? (
                    <><EyeOff size={16} /> Masquer le texte</>
                  ) : (
                    <><Eye size={16} /> Voir le texte</>
                  )}
                </button>
              </div>

              {/* Transcript (togglable) */}
              {showTranscript[listeningText.id] && (
                <div className={styles.transcriptBox}>
                  <p>{listeningText.transcript}</p>
                </div>
              )}

              {/* Vocabulary */}
              <div className={styles.vocabularySection}>
                <h4><BookOpen size={16} /> Vocabulaire clé</h4>
                <div className={styles.vocabularyGrid}>
                  {listeningText.vocabulary.map((item, i) => (
                    <div key={i} className={styles.vocabularyCard}>
                      <span className={styles.vocabFrench}>{item.french}</span>
                      <span className={styles.vocabEnglish}>{item.english}</span>
                      {item.phonetic && (
                        <span className={styles.vocabPhonetic}>[{item.phonetic}]</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Listening Tips */}
              <div className={styles.tipsSection}>
                <h4><Lightbulb size={16} /> Conseils d'écoute</h4>
                <ul>
                  {listeningText.listeningTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Listening Strategies */}
        <div className={styles.presentationSection}>
          <h2><Headphones size={20} /> Stratégies d'écoute</h2>
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
    const questionTranscriptKey = `activity-${currentQuestion.id}`;

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
            {/* Audio Section */}
            <div className={styles.audioBox}>
              <div className={styles.audioBoxHeader}>
                <Headphones size={18} />
                <span>Écoutez l'audio</span>
              </div>
              <div className={styles.audioControls}>
                <TextToSpeech text={currentQuestion.transcript} />
                <button
                  className={styles.transcriptToggle}
                  onClick={() => toggleTranscript(questionTranscriptKey)}
                >
                  {showTranscript[questionTranscriptKey] ? (
                    <><EyeOff size={16} /> Masquer</>
                  ) : (
                    <><Eye size={16} /> Texte</>
                  )}
                </button>
              </div>
              {showTranscript[questionTranscriptKey] && (
                <div className={styles.transcriptInline}>
                  <p>{currentQuestion.transcript}</p>
                </div>
              )}
            </div>

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
          title="Quiz A1-1 : Compréhension Orale"
          subtitle="Écoutez les audios et répondez aux questions"
          questions={questions}
          timeLimit={25}
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
              <Headphones size={32} />
            </div>
            <div>
              <span className={styles.levelBadge}>A1-1</span>
              <h1>Compréhension Orale</h1>
              <p>Écoute et compréhension de dialogues simples</p>
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
