import { Link } from 'react-router-dom';
import {
  BookOpenText,
  Headphones,
  Languages,
  ArrowRight,
  Clock,
  Target,
  BarChart3
} from 'lucide-react';
import './EvaluationHome.css';

const skillCards = [
  {
    path: '/evaluation/reading',
    title: 'Comprehension Ecrite',
    subtitle: 'Reading',
    description: 'Evaluez votre capacite a comprendre des textes ecrits en francais, des messages simples aux articles plus complexes.',
    icon: BookOpenText,
    color: 'primary',
    duration: '15-20 min',
    questions: '10-15 questions'
  },
  {
    path: '/evaluation/listening',
    title: 'Comprehension Orale',
    subtitle: 'Listening',
    description: 'Testez votre comprehension des dialogues et enregistrements audio en francais courant.',
    icon: Headphones,
    color: 'secondary',
    duration: '15-20 min',
    questions: '10-15 questions'
  },
  {
    path: '/evaluation/language',
    title: 'Grammaire & Vocabulaire',
    subtitle: 'Language',
    description: 'Verifiez votre maitrise des structures grammaticales et de votre richesse lexicale.',
    icon: Languages,
    color: 'accent',
    duration: '20-25 min',
    questions: '20-25 questions'
  }
];

export default function EvaluationHome() {
  return (
    <div className="evaluation-page">
      {/* Header Section */}
      <section className="eval-header">
        <div className="page-container">
          <div className="eval-header-content">
            <div className="eval-badge">
              <Target size={16} />
              Evaluation diagnostique
            </div>
            <h1>Evaluez vos competences</h1>
            <p>
              Decouvrez votre niveau actuel en francais grace a notre evaluation complete.
              Cette evaluation vous permettra d'identifier vos points forts et les domaines
              a ameliorer pour progresser efficacement.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="eval-info section">
        <div className="page-container">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-content">
                <h4>Duree totale</h4>
                <p>50-65 minutes</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <Target size={24} />
              </div>
              <div className="info-content">
                <h4>3 Competences</h4>
                <p>Lecture, Ecoute, Langue</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <BarChart3 size={24} />
              </div>
              <div className="info-content">
                <h4>Resultats detailles</h4>
                <p>Par competence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="eval-skills section">
        <div className="page-container">
          <div className="section-title">
            <h2>Choisissez une competence</h2>
            <p>Vous pouvez evaluer chaque competence separement ou toutes a la suite</p>
          </div>

          <div className="skills-grid">
            {skillCards.map((skill) => {
              const Icon = skill.icon;
              return (
                <Link to={skill.path} key={skill.path} className={`skill-card skill-${skill.color}`}>
                  <div className="skill-header">
                    <div className={`skill-icon icon-${skill.color}`}>
                      <Icon size={28} />
                    </div>
                    <span className="skill-subtitle">{skill.subtitle}</span>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="skill-meta">
                    <span>
                      <Clock size={14} />
                      {skill.duration}
                    </span>
                    <span>
                      <Target size={14} />
                      {skill.questions}
                    </span>
                  </div>
                  <div className="skill-action">
                    <span>Commencer</span>
                    <ArrowRight size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="eval-cta">
        <div className="page-container">
          <div className="cta-box">
            <div className="cta-content">
              <h3>Evaluation complete</h3>
              <p>
                Passez les trois tests a la suite pour obtenir une evaluation
                complete de votre niveau en francais.
              </p>
            </div>
            <Link to="/evaluation/reading" className="btn btn-primary">
              Demarrer l'evaluation complete
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
