import {
  BookOpen,
  ArrowRight,
  Languages,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import a1Styles from './A1Home.module.css';
import levelStyles from './LevelHome.module.css';

const skills = [
  {
    title: 'Langue française',
    description: 'Grammaire et vocabulaire',
    icon: Languages,
    path: '/a1/language'
  },
  {
    title: 'Compréhension orale',
    description: 'Exercices d\'écoute',
    icon: Volume2,
    path: '/a1/listening'
  },
  {
    title: 'Compréhension écrite',
    description: 'Exercices de lecture',
    icon: BookOpen,
    path: '/a1/reading'
  }
];

export default function A1Home() {
  return (
    <div className={a1Styles['a1HomeSimplified']}>
      <div className={a1Styles['a1CenteredWrapper']}>
        <section className={`${levelStyles['levelThemesEnhanced']} section`}>
          <div className={`${levelStyles['container']}`}>
            <div className="sectionTitle">
              <h2>Choisissez une compétence</h2>
              <p>Sélectionnez une compétence pour commencer votre apprentissage</p>
            </div>
            <div className={levelStyles['themesGridEnhanced']}>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Link to={skill.path} key={index} style={{ textDecoration: 'none' }}>
                    <div
                      className={`${levelStyles['themeCardEnhanced']}`}
                    >
                      <div className={levelStyles['themeIconEnhanced']}>
                        <Icon size={24} />
                      </div>
                      <div className={levelStyles['themeContentEnhanced']}>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                      </div>
                      <div className={levelStyles['themeActionEnhanced']}>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
