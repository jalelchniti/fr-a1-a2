import {
  BookOpen,
  ArrowRight,
  Languages,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import a2Styles from './A2Home.module.css';
import levelStyles from '../a1/LevelHome.module.css';

const skills = [
  {
    title: 'Langue française',
    description: 'Approfondir la grammaire et le vocabulaire',
    icon: Languages,
    path: '/a2/language'
  },
  {
    title: 'Compréhension orale',
    description: 'Exercices d\'écoute pour niveau intermédiaire',
    icon: Volume2,
    path: '/a2/listening'
  },
  {
    title: 'Compréhension écrite',
    description: 'Exercices de lecture pour niveau intermédiaire',
    icon: BookOpen,
    path: '/a2/reading'
  }
];

export default function A2Home() {
  return (
    <div className={a2Styles['a2HomeSimplified']}>
      <div className={a2Styles['a2CenteredWrapper']}>
        <section className={`${levelStyles['levelThemesEnhanced']} section`}>
          <div className={`${levelStyles['container']}`}>
            <div className="sectionTitle">
              <h2>Choisissez une compétence</h2>
              <p>Sélectionnez une compétence pour continuer votre apprentissage</p>
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