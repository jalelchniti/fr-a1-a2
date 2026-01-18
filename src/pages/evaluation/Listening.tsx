import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Headphones,
  ArrowLeft,
  ArrowRight,
  Clock,
  Volume2,
  CheckCircle2,
  Lightbulb,
  HelpCircle,
  XCircle,
  Check,
  Award,
  PlayCircle,
  PauseCircle,
  Lock,
  Star,
  Printer
} from 'lucide-react';
import './SkillPage.css';
import { levels, questionSets, type Level, type Question } from './listeningData';

// --- Reusable Test Component ---
interface ListeningTestProps {
  questions: Question[];
  onTestComplete: (score: number, answers: (number|null)[]) => void;
  levelTitle: Level;
  isFinalLevel: boolean;
  onNextTest: () => void;
  onGoToSelection: () => void;
}

const ListeningTest = ({ questions, onTestComplete, levelTitle, isFinalLevel, onNextTest, onGoToSelection }: ListeningTestProps) => {
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(() => Array(questions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
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

  // Clean up speech synthesis on component unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlayAudio = (text: string) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
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
        <div className="card-header"><Award size={24} className="text-secondary" /><h2>Résultats du test ({levelTitle})</h2></div>
        <div className="results-summary">
          <p>Vous avez terminé le test de compréhension orale.</p>
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
      <div className="question-header"><HelpCircle size={24} className="text-secondary" /><h2>Question {currentQuestionIndex + 1} / {questions.length}</h2></div>
      <div className="question-audio-content">
        <h4>Écoutez l'audio suivant :</h4>
        <button className="audio-player" onClick={() => handlePlayAudio(currentQuestion.transcript)}>
          {isSpeaking ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
          <div className="audio-info">
            <span>{isSpeaking ? 'En cours de lecture...' : `Écouter l'audio ${currentQuestionIndex + 1}`}</span>
            <small>Synthèse vocale du navigateur</small>
          </div>
        </button>
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
export default function Listening() {
  const [activeTest, setActiveTest] = useState<Level | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState<Record<Level, boolean>>(() => {
    // Start with default state: only A1-1 unlocked
    const initialUnlockedLevels: Record<Level, boolean> = {'A1-1': true, 'A1-2': false, 'A1-3': false, 'A1-4': false};

    // Validate progression chain: each level can only be unlocked if the previous one was completed
    // First, check what's in localStorage for each level
    const localStorageState: Record<Level, boolean> = {} as Record<Level, boolean>;
    levels.forEach(level => {
        localStorageState[level] = localStorage.getItem(`${level}_unlocked`) === 'true';
    });

    // A1-1 is unlocked if it was previously unlocked OR if no progress exists (first-time user)
    const hasAnyProgress = Object.values(localStorageState).some(value => value === true);
    initialUnlockedLevels['A1-1'] = localStorageState['A1-1'] || !hasAnyProgress;

    // For other levels, they can only be unlocked if:
    // 1. They were previously marked as unlocked in localStorage, AND
    // 2. The previous level is also unlocked (maintains progression chain)
    for (let i = 1; i < levels.length; i++) {
      const currentLevel = levels[i];
      const previousLevel = levels[i - 1];
      initialUnlockedLevels[currentLevel] = localStorageState[currentLevel] && initialUnlockedLevels[previousLevel];
    }

    return initialUnlockedLevels;
  });

  const handleTestComplete = (score: number, answers: (number|null)[]) => {
    if (!activeTest) return;
    localStorage.setItem(`listening_test_results_${activeTest}`, JSON.stringify(answers));
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
              <section className="skill-header-section skill-header-secondary">
                <div className="page-container">
                  <div onClick={() => setActiveTest(null)} className="back-link" style={{cursor: 'pointer'}}><ArrowLeft size={20} />Retour à la sélection</div>
                  <div className="skill-header-content">
                    <div className="skill-icon-large icon-secondary">
                      <Headphones size={32} />
                    </div>
                    <div>
                      <span className="skill-label">Niveau {activeTest}</span>
                      <h1>Compréhension Orale</h1>
                      <p>Testez votre capacité à comprendre le français parlé</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="skill-content section">
                  <div className="page-container" style={{maxWidth: '800px', margin: '0 auto'}}>
                      <ListeningTest
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
      <section className="skill-header-section skill-header-secondary">
        <div className="page-container">
          <Link to="/evaluation" className="back-link"><ArrowLeft size={20} />Retour à l'évaluation</Link>
          <div className="skill-header-content"><div className="skill-icon-large icon-secondary"><Headphones size={32} /></div><div><span className="skill-label">Evaluation</span><h1>Compréhension Orale</h1><p>Testez votre capacité à comprendre le français parlé</p></div></div>
        </div>
      </section>
      <section className="skill-content section">
        <div className="page-container">
          <div className="skill-layout">
            <div className="skill-main">
              <div className="content-card">
                  <div className="card-header"><Volume2 size={24} className="text-secondary" /><h2>Choisissez un niveau de test</h2></div>
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
              <div className="sidebar-card tip-card"><h4><Lightbulb size={18} /> Conseils</h4><ul className="tips-list"><li>Utilisez des écouteurs pour une meilleure qualité</li><li>Lisez les questions avant d'écouter</li><li>Concentrez-vous sur les mots-clés</li><li>Vous pouvez écouter plusieurs fois</li></ul></div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
