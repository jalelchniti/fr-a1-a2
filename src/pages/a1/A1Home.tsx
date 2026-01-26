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
  Languages,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import a1Styles from './A1Home.module.css';
import levelStyles from './LevelHome.module.css';
import Breadcrumb from '../../components/Breadcrumb';
import ProgressTracker from '../../components/ProgressTracker';
import SidebarNav from '../../components/SidebarNav';
import ContentManagement from '../../components/ContentManagement';

const themes = [
  {
    title: 'Langue francaise',
    description: 'Apprendre les bases de la grammaire et du vocabulaire',
    icon: Languages,
    lessons: 10,
    status: 'available',
    path: '/a1/language'
  },
  {
    title: 'Se presenter',
    description: 'Apprendre a se presenter et a poser des questions personnelles',
    icon: User,
    lessons: 5,
    status: 'available',
    path: null
  },
  {
    title: 'La vie quotidienne',
    description: 'Decrire ses habitudes et activites de tous les jours',
    icon: Home,
    lessons: 6,
    status: 'available',
    path: null
  },
  {
    title: 'Faire des achats',
    description: 'Vocabulaire et expressions pour faire des courses',
    icon: ShoppingBag,
    lessons: 4,
    status: 'coming',
    path: null
  },
  {
    title: 'Les loisirs',
    description: 'Parler de ses passe-temps et activites preferees',
    icon: Calendar,
    lessons: 5,
    status: 'coming',
    path: null
  },
  {
    title: "L'heure et la date",
    description: 'Dire et demander l\'heure, parler des horaires',
    icon: Clock,
    lessons: 3,
    status: 'coming',
    path: null
  },
  {
    title: 'Se deplacer',
    description: 'Demander son chemin et indiquer une direction',
    icon: MapPin,
    lessons: 4,
    status: 'locked',
    path: null
  },
  {
    title: 'Conversations simples',
    description: 'Participer a des echanges basiques',
    icon: MessageCircle,
    lessons: 5,
    status: 'locked',
    path: null
  },
  {
    title: 'Au restaurant',
    description: 'Commander et comprendre un menu',
    icon: Utensils,
    lessons: 4,
    status: 'locked',
    path: null
  }
];

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Niveau A1', href: '/a1' },
  { label: 'Thèmes' }
];

const progressSteps = [
  { id: '1', title: 'A1.1', completed: true, locked: false, path: '/a1/1' },
  { id: '2', title: 'A1.2', completed: true, locked: false, path: '/a1/2' },
  { id: '3', title: 'A1.3', completed: false, locked: false, path: '/a1/3' },
  { id: '4', title: 'A1.4', completed: false, locked: true, path: '/a1/4' },
];

const sidebarItems = [
  { title: 'Langue française', path: '/a1/language', active: true },
  { title: 'Se présenter', path: '/a1/introductions' },
  { title: 'La vie quotidienne', path: '/a1/daily-life' },
  { title: 'Faire des achats', path: '/a1/shopping' },
  { title: 'Les loisirs', path: '/a1/hobbies' },
  { title: 'L\'heure et la date', path: '/a1/time-date' },
  { title: 'Se déplacer', path: '/a1/travel' },
  { title: 'Conversations simples', path: '/a1/conversations' },
  { title: 'Au restaurant', path: '/a1/restaurant' },
];

export default function A1Home() {
  return (
    <div className={a1Styles['a1HomeEnhanced']}>
      <Breadcrumb items={breadcrumbItems} />
      <ProgressTracker steps={progressSteps} currentStepId="3" />

      <div style={{ display: 'flex', gap: '2rem' }}>
        <SidebarNav title="Thèmes A1" items={sidebarItems} />

        <div style={{ flex: 1 }}>
          {/* Header */}
          <section className={`${levelStyles['levelHeaderEnhanced']} ${levelStyles['levelHeaderA1Enhanced']}`}>
            <div className={`${levelStyles['container']}`}>
              <div className={levelStyles['levelHeaderContentEnhanced']}>
                <div className={levelStyles['levelBadgeLargeEnhanced']}>
                  <BookOpen size={32} />
                </div>
                <div className={levelStyles['levelInfoEnhanced']}>
                  <span className={levelStyles['levelLabelEnhanced']}>Niveau debutant</span>
                  <h1>Niveau A1</h1>
                  <p>
                    Maitriser les bases du francais : se presenter, parler de soi,
                    comprendre et utiliser des expressions familieres et quotidiennes.
                  </p>
                </div>
              </div>
              <div className={levelStyles['levelProgressCardEnhanced']}>
                <div className={levelStyles['progressHeaderEnhanced']}>
                  <span>Progression globale</span>
                  <span className={levelStyles['progressPercentEnhanced']}>42%</span>
                </div>
                <div className={levelStyles['progressBarEnhanced']}>
                  <div className={levelStyles['progressFillEnhanced']} style={{ width: '42%' }}></div>
                </div>
                <div className={levelStyles['progressStatsEnhanced']}>
                  <span>15 / 36 lecons completees</span>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Overview */}
          <section className={`${levelStyles['levelSkillsEnhanced']} section`}>
            <div className={`${levelStyles['container']}`}>
              <div className="sectionTitle">
                <h2>Competences a acquerir</h2>
                <p>A la fin de ce niveau, vous pourrez...</p>
              </div>
              <div className={levelStyles['skillsOverviewEnhanced']}>
                <div className={levelStyles['skillItemEnhanced']}>
                  <div className={levelStyles['skillCheckEnhanced']}>1</div>
                  <span>Comprendre des mots familiers et expressions courantes</span>
                </div>
                <div className={levelStyles['skillItemEnhanced']}>
                  <div className={levelStyles['skillCheckEnhanced']}>2</div>
                  <span>Se presenter et presenter quelqu'un</span>
                </div>
                <div className={levelStyles['skillItemEnhanced']}>
                  <div className={levelStyles['skillCheckEnhanced']}>3</div>
                  <span>Poser des questions simples sur des sujets familiers</span>
                </div>
                <div className={levelStyles['skillItemEnhanced']}>
                  <div className={levelStyles['skillCheckEnhanced']}>4</div>
                  <span>Communiquer de facon simple si l'interlocuteur parle lentement</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content Management Section */}
          <section className="section">
            <div className={`${levelStyles['container']}`}>
              <div className="sectionTitle">
                <h2>Contenu d'apprentissage</h2>
                <p>Explorez nos ressources pédagogiques organisées par thème et niveau</p>
              </div>
              <ContentManagement level="A1" />
            </div>
          </section>

          {/* Themes */}
          <section className={`${levelStyles['levelThemesEnhanced']} section`}>
            <div className={`${levelStyles['container']}`}>
              <div className="sectionTitle">
                <h2>Themes d'apprentissage</h2>
                <p>Progressez a travers differents themes de la vie quotidienne</p>
              </div>
              <div className={levelStyles['themesGridEnhanced']}>
                {themes.map((theme, index) => {
                  const Icon = theme.icon;
                  const isClickable = theme.path && (theme.status !== 'locked');

                  const themeCardElement = (
                    <div
                      key={index}
                      className={`${levelStyles['themeCardEnhanced']} ${theme.status === 'locked' ? levelStyles['themeLockedEnhanced'] : ''}`}
                    >
                      <div className={levelStyles['themeIconEnhanced']}>
                        <Icon size={24} />
                      </div>
                      <div className={levelStyles['themeContentEnhanced']}>
                        <h3>{theme.title}</h3>
                        <p>{theme.description}</p>
                        <div className={levelStyles['themeMetaEnhanced']}>
                          <span className={levelStyles['themeLessonsEnhanced']}>{theme.lessons} lecons</span>
                          {theme.status === 'available' && (
                            <span className={`${levelStyles['themeStatusEnhanced']} ${levelStyles['statusAvailableEnhanced']}`}>Disponible</span>
                          )}
                          {theme.status === 'coming' && (
                            <span className={`${levelStyles['themeStatusEnhanced']} ${levelStyles['statusComingEnhanced']}`}>Bientot</span>
                          )}
                          {theme.status === 'locked' && (
                            <span className={`${levelStyles['themeStatusEnhanced']} ${levelStyles['statusLockedEnhanced']}`}>
                              <Lock size={12} />
                              Verrouille
                            </span>
                          )}
                        </div>
                      </div>
                      {theme.status !== 'locked' && (
                        <div className={levelStyles['themeActionEnhanced']}>
                          <ArrowRight size={20} />
                        </div>
                      )}
                    </div>
                  );

                  return isClickable ? (
                    <Link to={theme.path} key={index} style={{ textDecoration: 'none' }}>
                      {themeCardElement}
                    </Link>
                  ) : (
                    themeCardElement
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className={levelStyles['levelCtaEnhanced']}>
            <div className={`${levelStyles['container']}`}>
              <div className={levelStyles['ctaBoxEnhanced']}>
                <div className={levelStyles['ctaContentEnhanced']}>
                  <h3>Pret a commencer ?</h3>
                  <p>
                    Commencez votre apprentissage du francais avec les bases essentielles.
                  </p>
                </div>
                <Link to="/a1/language">
                  <button className="btn btn-primary">
                    Commencer le niveau A1
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
