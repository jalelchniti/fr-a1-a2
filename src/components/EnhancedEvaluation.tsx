import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import ResultsVisualization from './ResultsVisualization';
import TextToSpeech from './TextToSpeech';
import '../styles/evaluation-enhancements.css';

interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
}

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-in-blank' | 'drag-drop' | 'short-answer';
  question: string;
  transcript?: string;
  instruction?: string;
  options?: Option[];
  correctAnswer?: string;
  userAnswer?: string;
  category?: string;
}

interface EvaluationProps {
  title: string;
  subtitle: string;
  questions: Question[];
  timeLimit?: number; // in minutes
}

const EnhancedEvaluation: React.FC<EvaluationProps> = ({
  title,
  subtitle,
  questions,
  timeLimit
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(timeLimit ? timeLimit * 60 : 0); // in seconds
  const [showResults, setShowResults] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Timer effect
  React.useEffect(() => {
    if (!timeLimit || showResults) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimit, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleFillBlankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: e.target.value
    }));
  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowTranscript(false);
    }
  };

  const goToPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowTranscript(false);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    setShowTranscript(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (question.type === 'multiple-choice' || question.type === 'true-false') {
        const correctOption = question.options?.find(opt => opt.isCorrect);
        if (correctOption && userAnswer === correctOption.id) {
          score++;
        }
      } else if (question.type === 'fill-in-blank' || question.type === 'short-answer') {
        if (userAnswer?.toLowerCase() === question.correctAnswer?.toLowerCase()) {
          score++;
        }
      }
    });
    return score;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    // Prepare results for visualization
    const results = questions.map(question => {
      const userAnswer = answers[question.id];
      let isCorrect = false;

      if (question.type === 'multiple-choice' || question.type === 'true-false') {
        const correctOption = question.options?.find(opt => opt.isCorrect);
        isCorrect = correctOption ? userAnswer === correctOption.id : false;
      } else if (question.type === 'fill-in-blank' || question.type === 'short-answer') {
        isCorrect = userAnswer?.toLowerCase() === question.correctAnswer?.toLowerCase();
      }

      return {
        questionId: question.id,
        questionText: question.question,
        userAnswer: userAnswer || 'Pas de réponse',
        correctAnswer: question.correctAnswer || '',
        isCorrect,
        category: question.category || 'Général'
      };
    });

    return (
      <div className="evaluationContainer">
        <div className="evaluationHeader">
          <h1 className="evaluationTitle">Résultats de l'évaluation</h1>
          <p className="evaluationSubtitle">Voici vos résultats détaillés</p>
        </div>

        <ResultsVisualization
          results={results}
          overallScore={percentage}
          totalQuestions={questions.length}
        />
      </div>
    );
  }

  return (
    <div className="evaluationContainer">
      {timeLimit && (
        <div className="timer">
          <Clock size={16} style={{ marginRight: '8px' }} />
          {formatTime(timeRemaining)}
        </div>
      )}

      <div className="evaluationHeader">
        <h1 className="evaluationTitle">{title}</h1>
        <p className="evaluationSubtitle">{subtitle}</p>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="questionCounter">
        Question {currentQuestionIndex + 1} sur {questions.length}
      </div>

      <div className="questionCard">
        <div className="questionNumber">Question</div>

        {/* Audio section for listening exercises - shows prominently above the question */}
        {currentQuestion.transcript && (
          <div className="audio-section">
            <div className="audio-prompt">
              <span className="audio-icon">🎧</span>
              <span>Écoutez l'audio :</span>
            </div>
            <div className="audio-controls">
              <TextToSpeech text={currentQuestion.transcript} lang="fr-FR" />
              <button
                className="transcript-toggle"
                onClick={() => setShowTranscript(!showTranscript)}
                aria-label={showTranscript ? "Masquer la transcription" : "Afficher la transcription"}
              >
                {showTranscript ? "Masquer le texte" : "Voir le texte"}
              </button>
            </div>
            {showTranscript && (
              <div className="transcript-container">
                <div className="transcript-content">
                  {currentQuestion.transcript}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="questionTextContainer">
          <h3 className="questionText">{currentQuestion.question}</h3>
          {/* Only show TTS for the question if there's no transcript (non-listening exercises) */}
          {!currentQuestion.transcript && (
            <div className="tts-transcript-controls">
              <TextToSpeech text={currentQuestion.question} lang="fr-FR" />
            </div>
          )}
        </div>

        {currentQuestion.instruction && (
          <div className="questionInstruction">
            {currentQuestion.instruction}
          </div>
        )}

        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <div className="optionsContainer">
            {currentQuestion.options.map(option => (
              <label
                key={option.id}
                className={`optionItem ${answers[currentQuestion.id] === option.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.id}
                  checked={answers[currentQuestion.id] === option.id}
                  onChange={() => handleAnswerSelect(option.id)}
                  className="optionInput"
                />
                <span className="optionLabel">{option.text}</span>
              </label>
            ))}
          </div>
        )}

        {currentQuestion.type === 'true-false' && currentQuestion.options && (
          <div className="optionsContainer">
            {currentQuestion.options.map(option => (
              <label
                key={option.id}
                className={`optionItem ${answers[currentQuestion.id] === option.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.id}
                  checked={answers[currentQuestion.id] === option.id}
                  onChange={() => handleAnswerSelect(option.id)}
                  className="optionInput"
                />
                <span className="optionLabel">{option.text}</span>
              </label>
            ))}
          </div>
        )}

        {(currentQuestion.type === 'fill-in-blank') && (
          <div className="fillBlankContainer">
            <input
              type="text"
              value={answers[currentQuestion.id] || ''}
              onChange={handleFillBlankChange}
              placeholder="Entrez votre réponse ici..."
              className="fillBlankInput"
            />
          </div>
        )}

        {(currentQuestion.type === 'short-answer') && (
          <div className="shortAnswerContainer">
            <textarea
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => setAnswers(prev => ({
                ...prev,
                [currentQuestion.id]: e.target.value
              }))}
              placeholder="Entrez votre réponse ici..."
              rows={4}
              className="textInput"
            />
          </div>
        )}
      </div>

      <div className="evaluationActions">
        <button
          onClick={goToPrev}
          disabled={currentQuestionIndex === 0}
          className="actionButton prevButton"
        >
          <ArrowLeft size={18} />
          Précédent
        </button>

        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={goToNext}
            className="actionButton nextButton"
          >
            Suivant
            <ArrowRight size={18} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="actionButton submitButton"
          >
            <CheckCircle size={18} />
            Soumettre
          </button>
        )}
      </div>
    </div>
  );
};

export default EnhancedEvaluation;