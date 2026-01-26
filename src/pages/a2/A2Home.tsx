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
import a2Styles from './A2Home.module.css';
import levelStyles from '../a1/LevelHome.module.css';
import Breadcrumb from '../../components/Breadcrumb';
import ProgressTracker from '../../components/ProgressTracker';
import SidebarNav from '../../components/SidebarNav';
import ContentManagement from '../../components/ContentManagement';

const themes = [
  {
    title: 'Langue francaise',
    description: 'Approfondir la grammaire et enrichir le vocabulaire',
    icon: Languages,
    lessons: 12,
    status: 'available',
    path: '/a2/language'
  },
  {
    title: 'Se presenter',
    description: 'Se presenter de façon plus détaillée et poser des questions complexes',
    icon: User,
    lessons: 6,
    status: 'available',
    path: null
  },
  {
    title: 'La vie quotidienne',
    description: 'Décrire ses habitudes et activités avec plus de précision',
    icon: Home,
    lessons: 7,
    status: 'available',
    path: null
  },
  {
    title: 'Faire des achats',
    description: 'Négocier, comparer des produits et exprimer ses préférences',
    icon: ShoppingBag,
    lessons: 5,
    status: 'coming',
    path: null
  },
  {
    title: 'Les loisirs',
    description: 'Exprimer ses opinions sur les centres d\'intérêt',
    icon: Calendar,
    lessons: 6,
    status: 'coming',
    path: null
  },
  {
    title: "L'heure et la date",
    description: 'Planifier des rendez-vous et exprimer des obligations',
    icon: Clock,
    lessons: 4,
    status: 'coming',
    path: null
  },
  {
    title: 'Se deplacer',
    description: 'Donner des indications précises et demander des renseignements',
    icon: MapPin,
    lessons: 5,
    status: 'locked',
    path: null
  },
  {
    title: 'Conversations simples',
    description: 'Tenir une conversation sur des sujets familiers',
    icon: MessageCircle,
    lessons: 6,
    status: 'locked',
    path: null
  },
  {
    title: 'Au restaurant',
    description: 'Passer commande et discuter de la nourriture',
    icon: Utensils,
    lessons: 5,
    status: 'locked',
    path: null
  }
];

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Niveau A2', href: '/a2' },
  { label: 'Thèmes' }
];

const progressSteps = [
  { id: '1', title: 'A2.1', completed: false, locked: true, path: '/a2/1' },
  { id: '2', title: 'A2.2', completed: false, locked: true, path: '/a2/2' },
  { id: '3', title: 'A2.3', completed: false, locked: true, path: '/a2/3' },
  { id: '4', title: 'A2.4', completed: false, locked: true, path: '/a2/4' },
];

const sidebarItems = [
  { title: 'Langue française', path: '/a2/language', active: true },
  { title: 'Se présenter', path: '/a2/introductions' },
  { title: 'La vie quotidienne', path: '/a2/daily-life' },
  { title: 'Faire des achats', path: '/a2/shopping' },
  { title: 'Les loisirs', path: '/a2/hobbies' },
  { title: 'L\'heure et la date', path: '/a2/time-date' },
  { title: 'Se déplacer', path: '/a2/travel' },
  { title: 'Conversations simples', path: '/a2/conversations' },
  { title: 'Au restaurant', path: '/a2/restaurant' },
];

export default function A2Home() {
  return (
    <div className={a2Styles['a2HomeEnhanced']}>
      <Breadcrumb items={breadcrumbItems} />
      <ProgressTracker steps={progressSteps} currentStepId="1" />

      <div style={{ display: 'flex', gap: '2rem' }}>
        <SidebarNav title="Thèmes A2" items={sidebarItems} />

        <div style={{ flex: 1 }}>
          {/* Header */}
          <section className={`${levelStyles['levelHeaderEnhanced']} ${levelStyles['levelHeaderA2Enhanced']}`}>
            <div className={`${levelStyles['container']}`}>
              <div className={levelStyles['levelHeaderContentEnhanced']}>
                <div className={levelStyles['levelBadgeLargeEnhanced']}>
                  <BookOpen size={32} />
                </div>
                <div className={levelStyles['levelInfoEnhanced']}>
                  <span className={levelStyles['levelLabelEnhanced']}>Niveau intermédiaire</span>
                  <h1>Niveau A2</h1>
                  <p>
                    Approfondir votre compréhension du français : tenir une conversation simple,
                    raconter des expériences passées, exprimer ses opinions sur des sujets familiers.
                  </p>
                </div>
              </div>
              <div className={levelStyles['levelProgressCardEnhanced']}>
                <div className={levelStyles['progressHeaderEnhanced']}>
                  <span>Progression globale</span>
                  <span className={levelStyles['progressPercentEnhanced']}>0%</span>
                </div>
                <div className={levelStyles['progressBarEnhanced']}>
                  <div className={levelStyles['progressFillEnhanced']} style={{ width: '0%' }}></div>
                </div>
                <div className={levelStyles['progressStatsEnhanced']}>
                  <span>0 / 42 lecons completees</span>
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
                  <span>Comprendre des phrases et expressions fréquemment utilisées</span>
                </div>
                <div className={levelStyles['skillItemEnhanced']}>
                  <div className={levelStyles['skillCheckEnhanced']}>2</div>
                  <span>Communiquer dans des situations simples et habituelles</span>
                </div>
                <div className={levelStyles['skillItemEnhanced']}>
                  <div className={levelStyles['skillCheckEnhanced']}>3</div>
                  <span>Décrire votre passé et vos rêves futurs</span>
                </div>
                <div className={levelStyles['skillItemEnhanced']}>
                  <div className={levelStyles['skillCheckEnhanced']}>4</div>
                  <span>Exprimer des raisons et des intentions</span>
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
              <ContentManagement level="A2" />
            </div>
          </section>

          {/* Themes */}
          <section className={`${levelStyles['levelThemesEnhanced']} section`}>
            <div className={`${levelStyles['container']}`}>
              <div className="sectionTitle">
                <h2>Themes d'apprentissage</h2>
                <p>Approfondissez vos connaissances à travers différents thèmes</p>
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
                  <h3>Prêt à passer au niveau supérieur ?</h3>
                  <p>
                    Continuez votre apprentissage du français avec des contenus plus complexes.
                  </p>
                </div>
                <Link to="/a2/language">
                  <button className="btn btn-primary">
                    Commencer le niveau A2
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