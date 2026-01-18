import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="flag-mini">
              <span className="flag-blue"></span>
              <span className="flag-white"></span>
              <span className="flag-red"></span>
            </span>
            Francais Langue Etrangere
          </div>
          <h1 className="hero-title">
            Bienvenue dans votre parcours
            <span className="highlight"> A1 vers A2</span>
          </h1>
          <p className="hero-description">
            Une plateforme complete pour evaluer et ameliorer vos competences
            en francais. Progressez a votre rythme avec des exercices adaptes
            a votre niveau.
          </p>
          <div className="hero-actions">
            <Link to="/evaluation" className="btn btn-primary">
              <ClipboardCheck size={20} />
              Commencer l'evaluation
            </Link>
            <Link to="/a1" className="btn btn-secondary">
              Explorer les niveaux
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="page-container">
          <div className="section-title">
            <h2>Comment ca marche ?</h2>
            <p>Un parcours structure pour votre reussite</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Target size={28} />
              </div>
              <h3>Evaluez votre niveau</h3>
              <p>
                Commencez par une evaluation complete de vos competences
                en lecture, ecoute, grammaire et vocabulaire.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-secondary">
                <TrendingUp size={28} />
              </div>
              <h3>Progressez a votre rythme</h3>
              <p>
                Suivez des lecons adaptees a votre niveau actuel
                et avancez progressivement vers le niveau A2.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-accent">
                <Award size={28} />
              </div>
              <h3>Atteignez vos objectifs</h3>
              <p>
                Validez vos acquis avec des exercices pratiques
                et preparez-vous pour les examens officiels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="sections-overview section">
        <div className="page-container">
          <div className="section-title">
            <h2>Explorez les sections</h2>
            <p>Trois espaces dedies a votre apprentissage</p>
          </div>

          <div className="sections-grid">
            {/* Evaluation Card */}
            <Link to="/evaluation" className="section-card evaluation-card">
              <div className="section-card-icon">
                <ClipboardCheck size={32} />
              </div>
              <div className="section-card-content">
                <h3>Evaluation</h3>
                <p>
                  Testez vos competences en comprehension ecrite, orale,
                  grammaire et vocabulaire pour determiner votre niveau actuel.
                </p>
                <ul className="section-features-list">
                  <li>Comprehension ecrite</li>
                  <li>Comprehension orale</li>
                  <li>Grammaire & Vocabulaire</li>
                </ul>
              </div>
              <div className="section-card-arrow">
                <ArrowRight size={24} />
              </div>
            </Link>

            {/* A1 Card */}
            <Link to="/a1" className="section-card a1-card">
              <div className="section-card-icon">
                <BookOpen size={32} />
              </div>
              <div className="section-card-content">
                <h3>Niveau A1</h3>
                <p>
                  Consolider les bases du francais : presentations, vie quotidienne,
                  expressions courantes et structures grammaticales essentielles.
                </p>
                <div className="level-badge">Debutant</div>
              </div>
              <div className="section-card-arrow">
                <ArrowRight size={24} />
              </div>
            </Link>

            {/* A2 Card */}
            <Link to="/a2" className="section-card a2-card">
              <div className="section-card-icon">
                <GraduationCap size={32} />
              </div>
              <div className="section-card-content">
                <h3>Niveau A2</h3>
                <p>
                  Developper vos competences : conversations plus complexes,
                  textes varies et structures grammaticales avancees.
                </p>
                <div className="level-badge level-intermediate">Elementaire</div>
              </div>
              <div className="section-card-arrow">
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Pret a commencer ?</h2>
          <p>Evaluez votre niveau et commencez votre apprentissage des aujourd'hui.</p>
          <Link to="/evaluation" className="btn btn-accent">
            Demarrer l'evaluation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
