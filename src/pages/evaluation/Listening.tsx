import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  PauseCircle
} from 'lucide-react';
import './SkillPage.css';

// --- Data Structures ---
interface Question {
  id: number;
  transcript: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const listeningQuestions: Question[] = [
  {
    id: 1,
    transcript: "Bonjour, je voudrais un billet de train pour Lyon, s'il vous plaît. Le prochain départ est à quelle heure ?",
    question: "Où va la personne ?",
    options: [
      "À la boulangerie",
      "À la gare",
      "Au supermarché",
      "À la pharmacie"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    transcript: "L'horloge de la place sonne dix heures et demie.",
    question: "Quelle heure est-il ?",
    options: [
      "8h00",
      "9h15",
      "10h30",
      "11h00"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    transcript: "Attention voyageurs, le train en provenance de Marseille et à destination de Paris aura un retard d'environ 30 minutes. Nous nous excusons pour ce désagrément.",
    question: "Quel est le problème ?",
    options: [
      "Le train est en retard",
      "Le magasin est fermé",
      "Il a perdu son portefeuille",
      "Il pleut"
    ],
    correctAnswer: 0
  }
];

// --- Test Component ---
const ListeningTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(listeningQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

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
    if (currentQuestionIndex < listeningQuestions.length - 1) {
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

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === listeningQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / listeningQuestions.length) * 100);
    return (
      <div className="test-results">
        <div className="card-header">
          <Award size={24} className="text-secondary" />
          <h2>Résultats du test</h2>
        </div>
        <div className="results-summary">
          <p>Vous avez terminé le test de compréhension orale.</p>
          <div className="score-display">
            Score : <strong>{score} / {listeningQuestions.length}</strong> ({percentage}%)
          </div>
        </div>
        <div className="results-details">
          {listeningQuestions.map((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            return (
              <div key={q.id} className="result-item">
                <div className="result-question">
                  {isCorrect ? <CheckCircle2 size={20} className="text-success" /> : <XCircle size={20} className="text-danger" />}
                  <p>Question {index + 1}: {q.question}</p>
                </div>
                <div className="result-answer">
                  Votre réponse: <span className={isCorrect ? "correct" : "incorrect"}>{userAnswer !== null ? q.options[userAnswer] : "Pas de réponse"}</span>
                </div>
                {!isCorrect && (
                  <div className="result-correct-answer">
                    Réponse correcte: <span className="correct">{q.options[q.correctAnswer]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button onClick={() => setShowResults(false)} className="btn btn-secondary">
          Refaire le test
        </button>
      </div>
    );
  }

  const currentQuestion = listeningQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  return (
    <div className="test-interactive">
      <div className="question-header">
        <HelpCircle size={24} className="text-secondary" />
        <h2>Question {currentQuestionIndex + 1} / {listeningQuestions.length}</h2>
      </div>
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
      <div className="question-prompt">
        <p>{currentQuestion.question}</p>
      </div>
      <div className="question-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(index)}
          >
            <span className="option-icon">
              {selectedAnswer === index ? <CheckCircle2 /> : <HelpCircle />}
            </span>
            {option}
          </button>
        ))}
      </div>
      <div className="test-navigation">
        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0} className="btn btn-secondary">
          <ArrowLeft size={18} /> Précédent
        </button>
        {currentQuestionIndex < listeningQuestions.length - 1 ? (
          <button onClick={goToNextQuestion} className="btn btn-primary">
            Suivant <ArrowRight size={18} />
          </button>
        ) : (
          <button onClick={() => setShowResults(true)} className="btn btn-success" disabled={userAnswers.includes(null)}>
            <Check size={18} /> Terminer le test
          </button>
        )}
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function Listening() {
  const [testStarted, setTestStarted] = useState(false);

  return (
    <div className="skill-page">
      {/* Header */}
      <section className="skill-header-section skill-header-secondary">
        <div className="page-container">
          <Link to="/evaluation" className="back-link">
            <ArrowLeft size={20} />
            Retour à l'évaluation
          </Link>
          <div className="skill-header-content">
            <div className="skill-icon-large icon-secondary">
              <Headphones size={32} />
            </div>
            <div>
              <span className="skill-label">Evaluation</span>
              <h1>Compréhension Orale</h1>
              <p>Testez votre capacité à comprendre le français parlé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="skill-content section">
        <div className="page-container">
          <div className="skill-layout">
            {/* Main Content */}
            <div className="skill-main">
              {!testStarted ? (
                <>
                  <div className="content-card">
                    <div className="card-header">
                      <Volume2 size={24} className="text-secondary" />
                      <h2>À propos de ce test</h2>
                    </div>
                    <p>
                      Cette évaluation mesure votre capacité à comprendre le français parlé
                      dans diverses situations de la vie quotidienne, des annonces publiques
                      aux conversations entre locuteurs natifs.
                    </p>
                    <div className="skill-features">
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Dialogues du quotidien</span></div>
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Annonces et messages</span></div>
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Interviews et reportages</span></div>
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Instructions orales</span></div>
                    </div>
                  </div>
                  <div className="start-test-container">
                    <button onClick={() => setTestStarted(true)} className="btn btn-primary btn-large">
                      Commencer le test <ArrowRight size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <ListeningTest />
              )}
            </div>

            {/* Sidebar */}
            <aside className="skill-sidebar">
              <div className="sidebar-card">
                <h4><Clock size={18} /> Informations</h4>
                <ul className="info-list">
                  <li><span>Durée</span><strong>~5 min</strong></li>
                  <li><span>Questions</span><strong>{listeningQuestions.length}</strong></li>
                  <li><span>Niveau</span><strong>A1 - A2</strong></li>
                </ul>
              </div>
              <div className="sidebar-card tip-card">
                <h4><Lightbulb size={18} /> Conseils</h4>
                <ul className="tips-list">
                  <li>Utilisez des écouteurs pour une meilleure qualité</li>
                  <li>Lisez les questions avant d'écouter</li>
                  <li>Concentrez-vous sur les mots-clés</li>
                  <li>Vous pouvez écouter plusieurs fois</li>
                </ul>
              </div>
              <div className="sidebar-card nav-card">
                <h4>Navigation</h4>
                <Link to="/evaluation/language" className="next-skill-link">
                  <span>
                    <span className="next-label">Suivant</span>
                    <span className="next-title">Grammaire & Vocabulaire</span>
                  </span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
