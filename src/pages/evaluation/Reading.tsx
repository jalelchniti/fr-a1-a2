import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Award
} from 'lucide-react';
import './SkillPage.css';

// --- Data Structures ---
interface Question {
  id: number;
  text: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const readingQuestions: Question[] = [
  {
    id: 1,
    text: "De : Jean-Paul\nÀ : Marianne\nObjet : Soirée cinéma\n\nSalut Marianne,\nJ'espère que tu vas bien. Est-ce que tu es libre samedi soir ? Je te propose d'aller voir le nouveau film de science-fiction au cinéma Le Rex. La séance est à 20h00. Dis-moi si ça t'intéresse !\n\nÀ bientôt,\nJean-Paul",
    question: "Quelle est la proposition de Jean-Paul ?",
    options: [
      "Aller au restaurant",
      "Aller au cinéma",
      "Faire une promenade",
      "Visiter un musée"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Météo France : Prévisions pour le week-end\nSamedi : Nuageux avec des averses l'après-midi. Températures : 15°C - 20°C.\nDimanche : Grand soleil sur toute la France. Températures en hausse : 18°C - 25°C.",
    question: "Quel temps fera-t-il dimanche ?",
    options: [
      "Il va pleuvoir",
      "Il y aura des nuages",
      "Il fera beau et ensoleillé",
      "Il va neiger"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    text: "Recette du gâteau au chocolat\n1. Préchauffez le four à 180°C.\n2. Faites fondre 200g de chocolat avec 150g de beurre.\n3. Dans un saladier, mélangez 3 œufs et 100g de sucre.\n4. Ajoutez le chocolat fondu, puis 50g de farine.\n5. Versez dans un moule et faites cuire 20 minutes.",
    question: "Quelle est la première étape de la recette ?",
    options: [
      "Faire fondre le chocolat",
      "Mélanger les œufs et le sucre",
      "Préchauffer le four",
      "Ajouter la farine"
    ],
    correctAnswer: 2
  }
];

// --- Test Component ---
const ReadingTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(readingQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < readingQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = (): number => {
    return userAnswers.reduce((acc: number, answer, index) => {
      return answer !== null && answer === readingQuestions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / readingQuestions.length) * 100);
    return (
      <div className="test-results">
        <div className="card-header">
          <Award size={24} className="text-primary" />
          <h2>Résultats du test</h2>
        </div>
        <div className="results-summary">
          <p>Vous avez terminé le test de compréhension écrite.</p>
          <div className="score-display">
            Score : <strong>{score} / {readingQuestions.length}</strong> ({percentage}%)
          </div>
        </div>
        <div className="results-details">
          {readingQuestions.map((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer !== null && userAnswer === q.correctAnswer;
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

  const currentQuestion = readingQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  return (
    <div className="test-interactive">
      <div className="question-header">
        <HelpCircle size={24} className="text-primary" />
        <h2>Question {currentQuestionIndex + 1} / {readingQuestions.length}</h2>
      </div>
      <div className="question-text-content">
        <h4>Lisez le texte suivant :</h4>
        <pre>{currentQuestion.text}</pre>
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
        {currentQuestionIndex < readingQuestions.length - 1 ? (
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
export default function Reading() {
  const [testStarted, setTestStarted] = useState(false);

  return (
    <div className="skill-page">
      {/* Header */}
      <section className="skill-header-section skill-header-primary">
        <div className="page-container">
          <Link to="/evaluation" className="back-link">
            <ArrowLeft size={20} />
            Retour à l'évaluation
          </Link>
          <div className="skill-header-content">
            <div className="skill-icon-large icon-primary">
              <BookOpenText size={32} />
            </div>
            <div>
              <span className="skill-label">Evaluation</span>
              <h1>Compréhension Écrite</h1>
              <p>Testez votre capacité à comprendre des textes écrits en français</p>
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
                      <FileText size={24} className="text-primary" />
                      <h2>À propos de ce test</h2>
                    </div>
                    <p>
                      Cette évaluation mesure votre capacité à comprendre différents types
                      de textes écrits en français, allant des messages simples du quotidien
                      aux textes plus élaborés.
                    </p>
                    <div className="skill-features">
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Textes courts et messages</span></div>
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Articles de journaux simples</span></div>
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Correspondance personnelle</span></div>
                      <div className="feature-item"><CheckCircle2 size={18} className="text-success" /><span>Instructions et notices</span></div>
                    </div>
                  </div>
                  <div className="start-test-container">
                    <button onClick={() => setTestStarted(true)} className="btn btn-primary btn-large">
                      Commencer le test <ArrowRight size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <ReadingTest />
              )}
            </div>

            {/* Sidebar */}
            <aside className="skill-sidebar">
              <div className="sidebar-card">
                <h4><Clock size={18} /> Informations</h4>
                <ul className="info-list">
                  <li><span>Durée</span><strong>~5 min</strong></li>
                  <li><span>Questions</span><strong>{readingQuestions.length}</strong></li>
                  <li><span>Niveau</span><strong>A1 - A2</strong></li>
                </ul>
              </div>

              <div className="sidebar-card tip-card">
                <h4><Lightbulb size={18} /> Conseils</h4>
                <ul className="tips-list">
                  <li>Lisez d'abord les questions avant le texte</li>
                  <li>Repérez les mots-clés dans le texte</li>
                  <li>Ne vous arrêtez pas sur les mots inconnus</li>
                  <li>Vérifiez vos réponses si vous avez le temps</li>
                </ul>
              </div>

              <div className="sidebar-card nav-card">
                <h4>Navigation</h4>
                <Link to="/evaluation/listening" className="next-skill-link">
                  <span>
                    <span className="next-label">Suivant</span>
                    <span className="next-title">Compréhension orale</span>
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