import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenText,
  ArrowLeft,
  Clock,
  FileText,
  Lightbulb,
  Lock
} from 'lucide-react';
import './SkillPage.css';
import { levels, questionSets, type Level, type Question } from './readingData';
import EnhancedEvaluation from '../../components/EnhancedEvaluation';

// --- Main Page Component ---
export default function Reading() {
  const [activeTest, setActiveTest] = useState<Level | null>(null);

  // Convert reading questions to the format expected by EnhancedEvaluation
  const getEnhancedQuestions = (level: Level) => {
    return questionSets[level].map((q: Question) => ({
      id: String(q.id),
      type: 'multiple-choice' as const,
      question: q.question,
      instruction: "Lisez le texte suivant et répondez à la question",
      options: q.options.map((option, index) => ({
        id: index.toString(),
        text: option,
        isCorrect: index === q.correctAnswer
      })),
      correctAnswer: q.correctAnswer.toString()
    }));
  };

  if (activeTest) {
    const questions = getEnhancedQuestions(activeTest);

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
            <EnhancedEvaluation
              title={`Test de Compréhension Écrite - Niveau ${activeTest}`}
              subtitle="Lisez le texte et répondez aux questions"
              questions={questions}
              timeLimit={15} // 15 minutes
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="skill-page">
      <section className="skill-header-section skill-header-primary">
        <div className="page-container">
          <Link to="/" className="back-link"><ArrowLeft size={20} />Retour à l'accueil</Link>
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
                      {levels.map((level) => {
                          const isUnlocked = localStorage.getItem(`${level}_unlocked`) === 'true' || level === 'A1-1';
                          return (
                            <div key={level} className={`level-card ${!isUnlocked ? 'locked' : ''}`} onClick={isUnlocked ? () => setActiveTest(level) : undefined}>
                                {!isUnlocked && <div className="lock-overlay"><Lock size={24} /></div>}
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