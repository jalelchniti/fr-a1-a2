import { useState } from 'react';
import { ArrowLeft, BookOpen, Play, CheckCircle, Lock, Volume2, RotateCcw } from 'lucide-react';
import './LanguageChapter.module.css'; // Import the CSS module

interface Lesson {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
}

const LanguageChapter = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  // Define 10 lessons for the Language chapter
  const lessons: Lesson[] = [
    {
      id: 1,
      title: "Introduction au français",
      description: "Apprendre les salutations de base et se présenter",
      completed: false,
      locked: false
    },
    {
      id: 2,
      title: "Les chiffres et les nombres",
      description: "Apprendre à compter de 0 à 100",
      completed: false,
      locked: false
    },
    {
      id: 3,
      title: "L'alphabet et la prononciation",
      description: "Maîtriser les sons et lettres du français",
      completed: false,
      locked: false
    },
    {
      id: 4,
      title: "Les articles définis et indéfinis",
      description: "Utiliser les articles 'le', 'la', 'les', 'un', 'une'",
      completed: false,
      locked: false
    },
    {
      id: 5,
      title: "Les verbes être et avoir",
      description: "Conjugaison et utilisation des verbes principaux",
      completed: false,
      locked: false
    },
    {
      id: 6,
      title: "Les adjectifs possessifs",
      description: "Exprimer la possession avec 'mon', 'ton', 'son', etc.",
      completed: false,
      locked: false
    },
    {
      id: 7,
      title: "Les couleurs et les formes",
      description: "Identifier et décrire les objets du quotidien",
      completed: false,
      locked: false
    },
    {
      id: 8,
      title: "Les jours de la semaine",
      description: "Exprimer le temps et organiser son emploi du temps",
      completed: false,
      locked: false
    },
    {
      id: 9,
      title: "Les prépositions de lieu",
      description: "Indiquer la position avec 'dans', 'sur', 'sous', etc.",
      completed: false,
      locked: false
    },
    {
      id: 10,
      title: "Révision générale",
      description: "Consolider toutes les notions apprises",
      completed: false,
      locked: false
    }
  ];

  const handleLessonSelect = (lessonId: number) => {
    if (!lessons[lessonId - 1].locked) {
      setActiveLesson(lessonId);
    }
  };

  const handleBackToChapter = () => {
    setActiveLesson(null);
  };

  // Render lesson content based on active lesson
  const renderLessonContent = () => {
    if (activeLesson === null) return null;

    const lesson = lessons[activeLesson - 1];

    return (
      <div className="chapter-content">
        <div className="lesson-header">
          <button onClick={handleBackToChapter} className="btn btn-secondary">
            <ArrowLeft size={18} /> Retour au chapitre
          </button>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
        </div>

        <div className="lesson-body">
          <div className="lesson-section">
            <h2>Objectifs de la leçon</h2>
            <ul className="lesson-objectives">
              <li>Comprendre les concepts clés</li>
              <li>Pratiquer avec des exemples concrets</li>
              <li>Appliquer dans des contextes réels</li>
            </ul>
          </div>

          <div className="lesson-section">
            <h2>Contenu de la leçon</h2>
            <p className="lesson-intro">Ce contenu vous aidera à maîtriser les fondamentaux de la langue française.</p>

            {activeLesson === 1 && (
              <div className="lesson-content-detail">
                <div className="lesson-topic">
                  <h3>Salutations de base</h3>
                  <p>Voici quelques expressions de base pour se présenter :</p>
                  <div className="vocabulary-grid">
                    <div className="vocabulary-item">
                      <div className="vocabulary-word">Bonjour</div>
                      <div className="vocabulary-translation">Good morning</div>
                      <button className="pronunciation-btn">
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <div className="vocabulary-item">
                      <div className="vocabulary-word">Bonsoir</div>
                      <div className="vocabulary-translation">Good evening</div>
                      <button className="pronunciation-btn">
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <div className="vocabulary-item">
                      <div className="vocabulary-word">Salut</div>
                      <div className="vocabulary-translation">Hi/Bye (informal)</div>
                      <button className="pronunciation-btn">
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <div className="vocabulary-item">
                      <div className="vocabulary-word">Au revoir</div>
                      <div className="vocabulary-translation">Goodbye</div>
                      <button className="pronunciation-btn">
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <div className="vocabulary-item">
                      <div className="vocabulary-word">Enchanté(e)</div>
                      <div className="vocabulary-translation">Nice to meet you</div>
                      <button className="pronunciation-btn">
                        <Volume2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lesson-topic">
                  <h3>Se présenter</h3>
                  <p>Voici comment se présenter en français :</p>
                  <div className="grammar-section">
                    <div className="grammar-rule">
                      <div className="grammar-form">Je m'appelle...</div>
                      <div className="grammar-meaning">My name is...</div>
                    </div>
                    <div className="grammar-rule">
                      <div className="grammar-form">Je suis...</div>
                      <div className="grammar-meaning">I am...</div>
                    </div>
                    <div className="grammar-rule">
                      <div className="grammar-form">J'ai... ans</div>
                      <div className="grammar-meaning">I am ... years old</div>
                    </div>
                    <div className="grammar-rule">
                      <div className="grammar-form">Je viens de...</div>
                      <div className="grammar-meaning">I come from...</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLesson === 2 && (
              <div className="lesson-content-detail">
                <div className="lesson-topic">
                  <h3>Les chiffres de 0 à 20</h3>
                  <div className="numbers-grid">
                    <div className="number-item">
                      <div className="number-value">0</div>
                      <div className="number-word">zéro</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">1</div>
                      <div className="number-word">un</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">2</div>
                      <div className="number-word">deux</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">3</div>
                      <div className="number-word">trois</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">4</div>
                      <div className="number-word">quatre</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">5</div>
                      <div className="number-word">cinq</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">6</div>
                      <div className="number-word">six</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">7</div>
                      <div className="number-word">sept</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">8</div>
                      <div className="number-word">huit</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">9</div>
                      <div className="number-word">neuf</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">10</div>
                      <div className="number-word">dix</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">11</div>
                      <div className="number-word">onze</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">12</div>
                      <div className="number-word">douze</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">13</div>
                      <div className="number-word">treize</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">14</div>
                      <div className="number-word">quatorze</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">15</div>
                      <div className="number-word">quinze</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">16</div>
                      <div className="number-word">seize</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">17</div>
                      <div className="number-word">dix-sept</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">18</div>
                      <div className="number-word">dix-huit</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">19</div>
                      <div className="number-word">dix-neuf</div>
                    </div>
                    <div className="number-item">
                      <div className="number-value">20</div>
                      <div className="number-word">vingt</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLesson === 5 && (
              <div className="lesson-content-detail">
                <div className="lesson-topic">
                  <h3>Verbe ÊTRE</h3>
                  <div className="verb-conjugation">
                    <div className="conjugation-row">
                      <div className="pronoun">Je</div>
                      <div className="conjugated">suis</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Tu</div>
                      <div className="conjugated">es</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Il/Elle/On</div>
                      <div className="conjugated">est</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Nous</div>
                      <div className="conjugated">sommes</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Vous</div>
                      <div className="conjugated">êtes</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Ils/Elles</div>
                      <div className="conjugated">sont</div>
                    </div>
                  </div>
                </div>

                <div className="lesson-topic">
                  <h3>Verbe AVOIR</h3>
                  <div className="verb-conjugation">
                    <div className="conjugation-row">
                      <div className="pronoun">J'</div>
                      <div className="conjugated">ai</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Tu</div>
                      <div className="conjugated">as</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Il/Elle/On</div>
                      <div className="conjugated">a</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Nous</div>
                      <div className="conjugated">avons</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Vous</div>
                      <div className="conjugated">avez</div>
                    </div>
                    <div className="conjugation-row">
                      <div className="pronoun">Ils/Elles</div>
                      <div className="conjugated">ont</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lesson-actions">
            <button className="btn btn-primary">
              <Play size={18} /> Commencer l'exercice
            </button>
            <button className="btn btn-secondary">
              <CheckCircle size={18} /> Marquer comme terminé
            </button>
            <button className="btn btn-outline">
              <RotateCcw size={18} /> Recommencer
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="chapter-page">
      <section className="chapter-header">
        <div className="page-container">
          <div className="chapter-header-content">
            <div className="chapter-badge">
              <BookOpen size={32} />
            </div>
            <div className="chapter-info">
              <span className="chapter-label">Chapitre 1</span>
              <h1>Langue française - Niveau A1</h1>
              <p>Apprenez les bases de la langue française avec des leçons progressives</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-content section">
        <div className="page-container">
          {activeLesson === null ? (
            <div className="lessons-grid">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`lesson-card ${lesson.locked ? 'lesson-locked' : ''} ${lesson.completed ? 'lesson-completed' : ''}`}
                  onClick={() => handleLessonSelect(lesson.id)}
                >
                  {lesson.locked ? (
                    <div className="lesson-lock">
                      <Lock size={24} />
                    </div>
                  ) : lesson.completed ? (
                    <div className="lesson-completed-icon">
                      <CheckCircle size={24} className="text-success" />
                    </div>
                  ) : (
                    <div className="lesson-number">
                      {lesson.id}
                    </div>
                  )}

                  <div className="lesson-content">
                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>
                    <div className="lesson-meta">
                      <span className="lesson-status">
                        {lesson.completed ? 'Terminé' : lesson.locked ? 'Verrouillé' : 'Non commencé'}
                      </span>
                    </div>
                  </div>

                  {!lesson.locked && (
                    <div className="lesson-action">
                      <Play size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            renderLessonContent()
          )}
        </div>
      </section>
    </div>
  );
};

export default LanguageChapter;