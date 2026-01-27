import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  RotateCcw,
  XCircle
} from 'lucide-react';
import styles from '../Language.module.css';
import type { Activity } from '../languageA1Data';

interface ActivityViewProps {
  selectedActivity: Activity;
  activityAnswers: Record<number, string>;
  activityResults: Record<number, boolean> | null;
  currentActivityQuestion: number;
  handleActivityAnswer: (questionId: number, answer: string) => void;
  checkActivityAnswers: () => void;
  resetActivity: () => void;
  backToHub: () => void;
  setCurrentActivityQuestion: (question: number) => void;
}

export default function ActivityView({
  selectedActivity,
  activityAnswers,
  activityResults,
  currentActivityQuestion,
  handleActivityAnswer,
  checkActivityAnswers,
  resetActivity,
  backToHub,
  setCurrentActivityQuestion
}: ActivityViewProps) {
  const currentQuestion = selectedActivity.questions[currentActivityQuestion];
  const score = {
    correct: activityResults ? Object.values(activityResults).filter(r => r).length : 0,
    total: selectedActivity.questions.length
  };
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

            {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
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

            {currentQuestion.hint && (
              <div className={styles.hint}>
                <Lightbulb size={16} /> {currentQuestion.hint}
              </div>
            )}
          </div>

          <div className={styles.activityNavigation}>
            <button
              className="btn btn-secondary"
              onClick={() => setCurrentActivityQuestion(currentActivityQuestion - 1)}
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
                onClick={() => setCurrentActivityQuestion(currentActivityQuestion + 1)}
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
                    Votre réponse : {q.type === 'multiple-choice' && q.options
                      ? q.options[Number(activityAnswers[q.id])]
                      : activityAnswers[q.id]}
                  </span>
                  {!activityResults[q.id] && (
                    <span className={styles.answerCorrect}>
                      Réponse correcte : {q.type === 'multiple-choice' && q.options
                        ? q.options[Number(q.correctAnswer)]
                        : q.correctAnswer}
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
}
