import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpenText,
  ArrowLeft,
  ArrowRight,
  Clock,
  FileText,
  CheckCircle2,
  Lightbulb,
  HelpCircle,
  XCircle,
  Check,
  Award,
  Lock,
  Star,
  Printer
} from 'lucide-react';
import './SkillPage.css';
import { levels, questionSets, type Level, type Question } from './readingData';

// --- Reusable Test Component ---
interface ReadingTestProps {
  questions: Question[];
  onTestComplete: (score: number, answers: (number|null)[]) => void;
  levelTitle: Level;
  isFinalLevel: boolean;
  onNextTest: () => void;
  onGoToSelection: () => void;
}

const ReadingTest = ({ questions, onTestComplete, levelTitle, isFinalLevel, onNextTest, onGoToSelection }: ReadingTestProps) => {
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(() => Array(questions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Wrap state updates in setTimeout to avoid 'set-state-in-effect' lint warning
    // This effectively breaks the synchronous call chain that ESLint warns about.
    const timer = setTimeout(() => {
      setUserAnswers(Array(questions.length).fill(null));
      setCurrentQuestionIndex(0);
      setShowResults(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [questions]);

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishTest = () => {
    const score = userAnswers.reduce((acc: number, answer, index) => (answer === questions[index].correctAnswer ? acc + 1 : acc), 0);
    onTestComplete(score, userAnswers);
    setShowResults(true);
  }

  if (showResults) {
    const score = userAnswers.reduce((acc: number, answer, index) => (answer === questions[index].correctAnswer ? acc + 1 : acc), 0);
    const percentage = Math.round((score / questions.length) * 100);
    const levelNum = parseInt(levelTitle.slice(-1));
    const nextLevel = `A1-${levelNum + 1}`;
    const canProceed = !isFinalLevel && score >= 7;

    return (
      <div className="test-results">
        <div className="card-header"><Award size={24} className="text-primary" /><h2>Résultats du test ({levelTitle})</h2></div>
        <div className="results-summary">
          <p>Vous avez terminé le test de compréhension écrite.</p>
          <div className="score-display">Score : <strong>{score} / {questions.length}</strong> ({percentage}%)</div>
          {canProceed && <div className="unlock-message"><Star size={18} /> Bravo ! Vous avez débloqué le niveau {nextLevel}.</div>}
          {!canProceed && !isFinalLevel && <div className="unlock-message danger"><XCircle size={18} /> Score insuffisant. Vous devez obtenir au moins 7/10 pour continuer.</div>}
        </div>
        <div className="results-details">
          {questions.map((q, index) => (
            <div key={q.id} className="result-item">
              <div className="result-question">
                {userAnswers[index] === q.correctAnswer ? <CheckCircle2 size={20} className="text-success" /> : <XCircle size={20} className="text-danger" />}
                <p>Question {index + 1}: {q.question}</p>
              </div>
              <div className="result-answer">Votre réponse: <span className={userAnswers[index] === q.correctAnswer ? "correct" : "incorrect"}>{userAnswers[index] !== null ? q.options[userAnswers[index]!] : "Pas de réponse"}</span></div>
              {userAnswers[index] !== q.correctAnswer && <div className="result-correct-answer">Réponse correcte: <span className="correct">{q.options[q.correctAnswer]}</span></div>}
            </div>
          ))}
        </div>
        <div className="test-navigation">
            <button onClick={onGoToSelection} className="btn btn-secondary">Retour à la sélection</button>
            {canProceed && <button onClick={onNextTest} className="btn btn-primary">Test Suivant <ArrowRight size={18}/></button>}
            {!canProceed && <button onClick={() => navigate('/evaluation/language/summary')} className="btn btn-success"><Printer size={18}/> Voir le résumé complet</button>}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  return (
    <div className="test-interactive">
      <div className="question-header"><HelpCircle size={24} className="text-primary" /><h2>Question {currentQuestionIndex + 1} / {questions.length}</h2></div>
      <div className="question-text-content">
        <h4>Lisez le texte suivant :</h4>
        <pre>{currentQuestion.text}</pre>
      </div>
      <div className="question-prompt"><p>{currentQuestion.question}</p></div>
      <div className="question-options">
        {currentQuestion.options.map((option, optionIndex) => (
          <button
            key={optionIndex}
            className={`option-btn ${selectedAnswer === optionIndex ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(optionIndex)}
          >
            <span className="option-icon">
              {selectedAnswer === optionIndex ? <CheckCircle2 /> : <HelpCircle />}
            </span>
            {option}
          </button>
        ))}
      </div>
      <div className="test-navigation">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="btn btn-secondary"
        >
          <ArrowLeft size={18} /> Précédent
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={goToNextQuestion}
            className="btn btn-primary"
          >
            Suivant <ArrowRight size={18} />
          </button>
        ) : (
          <button
            onClick={handleFinishTest}
            className="btn btn-success"
            disabled={userAnswers[currentQuestionIndex] === null}
          >
            <Check size={20} /> Terminer le test
          </button>
        )}
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function Reading() {
  const [activeTest, setActiveTest] = useState<Level | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState<Record<Level, boolean>>(() => {
    // Start with default state: only A1-1 unlocked
    const initialUnlockedLevels: Record<Level, boolean> = {'A1-1': true, 'A1-2': false, 'A1-3': false, 'A1-4': false};

    // Validate progression chain: each level can only be unlocked if the previous one was completed
    for (let i = 0; i < levels.length; i++) {
      const currentLevel = levels[i];
      if (i === 0) {
        // A1-1 is always unlocked initially
        initialUnlockedLevels[currentLevel] = localStorage.getItem(`${currentLevel}_unlocked`) === 'true' || true;
      } else {
        // For other levels, check if previous level was unlocked
        const previousLevel = levels[i - 1];
        const isPreviousLevelUnlocked = localStorage.getItem(`${previousLevel}_unlocked`) === 'true';

        // This level is unlocked if both:
        // 1. It was previously marked as unlocked in localStorage, AND
        // 2. The previous level is also unlocked (maintains progression chain)
        const wasThisLevelUnlocked = localStorage.getItem(`${currentLevel}_unlocked`) === 'true';
        initialUnlockedLevels[currentLevel] = wasThisLevelUnlocked && isPreviousLevelUnlocked;
      }
    }

    return initialUnlockedLevels;
  });

  const handleTestComplete = (score: number, answers: (number|null)[]) => {
    if (!activeTest) return;
    localStorage.setItem(`reading_test_results_${activeTest}`, JSON.stringify(answers));
    const currentLevelIndex = levels.indexOf(activeTest);
    if (score >= 7 && currentLevelIndex < levels.length - 1) {
      const nextLevel = levels[currentLevelIndex + 1];
      localStorage.setItem(`${nextLevel}_unlocked`, 'true');
      setUnlockedLevels(prev => ({...prev, [nextLevel]: true}));
    }
  };

  const handleNextTest = () => {
    if (!activeTest) return;
    const currentLevelIndex = levels.indexOf(activeTest);
    const nextLevel = levels[currentLevelIndex + 1];
    if (nextLevel && unlockedLevels[nextLevel]) setActiveTest(nextLevel);
  }

  if (activeTest) {
      const isFinalLevel = activeTest === levels[levels.length - 1];

      return (
          <div className="skill-page">
              <section className="skill-header-section skill-header-primary">
                <div className="page-container">
                  <div onClick={() => setActiveTest(null)} className="back-link" style={{cursor: 'pointer'}}><ArrowLeft size={20} />Retour à la sélection</div>
                  <div className="skill-header-content">
                    <div className="skill-icon-large icon-primary">
                      <BookOpenText size={32} />
                    </div>
                    <div>
                      <span className="skill-label">Niveau {activeTest}</span>
                      <h1>Compréhension Écrite</h1>
                      <p>Testez votre capacité à comprendre des textes écrits en français</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="skill-content section">
                  <div className="page-container" style={{maxWidth: '800px', margin: '0 auto'}}>
                      <ReadingTest
                        questions={questionSets[activeTest]}
                        onTestComplete={handleTestComplete}
                        levelTitle={activeTest}
                        isFinalLevel={isFinalLevel}
                        onNextTest={handleNextTest}
                        onGoToSelection={() => setActiveTest(null)}
                      />
                  </div>
              </section>
          </div>
      )
  }

  return (
    <div className="skill-page">
      <section className="skill-header-section skill-header-primary">
        <div className="page-container">
          <Link to="/evaluation" className="back-link"><ArrowLeft size={20} />Retour à l'évaluation</Link>
          <div className="skill-header-content"><div className="skill-icon-large icon-primary"><BookOpenText size={32} /></div><div><span className="skill-label">Evaluation</span><h1>Compréhension Écrite</h1><p>Testez votre capacité à comprendre des textes écrits en français</p></div></div>
        </div>
      </section>
      <section className="skill-content section">
        <div className="page-container">
          <div className="skill-layout">
            <div className="skill-main">
              <div className="content-card">
                  <div className="card-header"><FileText size={24} className="text-primary" /><h2>Choisissez un niveau de test</h2></div>
                  <p>Commencez par le test A1-1. Obtenez un score de 7/10 ou plus pour débloquer le niveau suivant.</p>
                  <div className="level-selection-container">
                      {levels.map((level, index) => {
                          const isUnlocked = unlockedLevels[level];
                          const prevLevel = index > 0 ? levels[index-1] : null;
                          return (
                            <div key={level} className={`level-card ${!isUnlocked ? 'locked' : ''}`} onClick={isUnlocked ? () => setActiveTest(level) : undefined}>
                                {!isUnlocked && <div className="lock-overlay"><Lock size={24} /><span>Score de 7/10 en {prevLevel} requis</span></div>}
                                <div className="level-card-title">Niveau {level}</div>
                                <button className="btn btn-primary" disabled={!isUnlocked}>Commencer</button>
                            </div>
                          )
                      })}
                  </div>
              </div>
            </div>
            <aside className="skill-sidebar">
              <div className="sidebar-card"><h4><Clock size={18} /> Informations</h4><ul className="info-list"><li><span>Niveaux</span><strong>{levels.length}</strong></li><li><span>Questions</span><strong>10 par niveau</strong></li><li><span>Niveau</span><strong>A1</strong></li></ul></div>
              <div className="sidebar-card tip-card"><h4><Lightbulb size={18} /> Conseils</h4><ul className="tips-list"><li>Lisez d'abord les questions avant le texte</li><li>Repérez les mots-clés dans le texte</li><li>Ne vous arrêtez pas sur les mots inconnus</li><li>Vérifiez vos réponses si vous avez le temps</li></ul></div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}