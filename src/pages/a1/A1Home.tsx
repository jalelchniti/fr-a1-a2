import {
  BookOpen,
  ArrowRight,
  User,
  Home,
  ShoppingBag,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Utensils,
  Lock
} from 'lucide-react';
import './LevelHome.css';

const themes = [
  {
    title: 'Se presenter',
    description: 'Apprendre a se presenter et a poser des questions personnelles',
    icon: User,
    lessons: 5,
    status: 'available'
  },
  {
    title: 'La vie quotidienne',
    description: 'Decrire ses habitudes et activites de tous les jours',
    icon: Home,
    lessons: 6,
    status: 'available'
  },
  {
    title: 'Faire des achats',
    description: 'Vocabulaire et expressions pour faire des courses',
    icon: ShoppingBag,
    lessons: 4,
    status: 'coming'
  },
  {
    title: 'Les loisirs',
    description: 'Parler de ses passe-temps et activites preferees',
    icon: Calendar,
    lessons: 5,
    status: 'coming'
  },
  {
    title: "L'heure et la date",
    description: 'Dire et demander l\'heure, parler des horaires',
    icon: Clock,
    lessons: 3,
    status: 'coming'
  },
  {
    title: 'Se deplacer',
    description: 'Demander son chemin et indiquer une direction',
    icon: MapPin,
    lessons: 4,
    status: 'locked'
  },
  {
    title: 'Conversations simples',
    description: 'Participer a des echanges basiques',
    icon: MessageCircle,
    lessons: 5,
    status: 'locked'
  },
  {
    title: 'Au restaurant',
    description: 'Commander et comprendre un menu',
    icon: Utensils,
    lessons: 4,
    status: 'locked'
  }
];

export default function A1Home() {
  return (
    <div className="level-page">
      {/* Header */}
      <section className="level-header level-header-a1">
        <div className="page-container">
          <div className="level-header-content">
            <div className="level-badge-large">
              <BookOpen size={32} />
            </div>
            <div className="level-info">
              <span className="level-label">Niveau debutant</span>
              <h1>Niveau A1</h1>
              <p>
                Maitriser les bases du francais : se presenter, parler de soi,
                comprendre et utiliser des expressions familieres et quotidiennes.
              </p>
            </div>
          </div>
          <div className="level-progress-card">
            <div className="progress-header">
              <span>Progression globale</span>
              <span className="progress-percent">0%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '0%' }}></div>
            </div>
            <div className="progress-stats">
              <span>0 / 36 lecons completees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="level-skills section">
        <div className="page-container">
          <div className="section-title">
            <h2>Competences a acquerir</h2>
            <p>A la fin de ce niveau, vous pourrez...</p>
          </div>
          <div className="skills-overview">
            <div className="skill-item">
              <div className="skill-check">1</div>
              <span>Comprendre des mots familiers et expressions courantes</span>
            </div>
            <div className="skill-item">
              <div className="skill-check">2</div>
              <span>Se presenter et presenter quelqu'un</span>
            </div>
            <div className="skill-item">
              <div className="skill-check">3</div>
              <span>Poser des questions simples sur des sujets familiers</span>
            </div>
            <div className="skill-item">
              <div className="skill-check">4</div>
              <span>Communiquer de facon simple si l'interlocuteur parle lentement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="level-themes section">
        <div className="page-container">
          <div className="section-title">
            <h2>Themes d'apprentissage</h2>
            <p>Progressez a travers differents themes de la vie quotidienne</p>
          </div>
          <div className="themes-grid">
            {themes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <div
                  key={index}
                  className={`theme-card ${theme.status === 'locked' ? 'theme-locked' : ''}`}
                >
                  <div className="theme-icon">
                    <Icon size={24} />
                  </div>
                  <div className="theme-content">
                    <h3>{theme.title}</h3>
                    <p>{theme.description}</p>
                    <div className="theme-meta">
                      <span className="theme-lessons">{theme.lessons} lecons</span>
                      {theme.status === 'available' && (
                        <span className="theme-status status-available">Disponible</span>
                      )}
                      {theme.status === 'coming' && (
                        <span className="theme-status status-coming">Bientot</span>
                      )}
                      {theme.status === 'locked' && (
                        <span className="theme-status status-locked">
                          <Lock size={12} />
                          Verrouille
                        </span>
                      )}
                    </div>
                  </div>
                  {theme.status !== 'locked' && (
                    <div className="theme-action">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="level-cta">
        <div className="page-container">
          <div className="cta-box">
            <div className="cta-content">
              <h3>Pret a commencer ?</h3>
              <p>
                Commencez votre apprentissage du francais avec les bases essentielles.
              </p>
            </div>
            <button className="btn btn-primary" disabled>
              Commencer le niveau A1
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
