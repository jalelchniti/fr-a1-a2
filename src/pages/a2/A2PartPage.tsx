import React from 'react';

import a2Styles from './A2Home.module.css'; // Reusing some styles

interface A2PartPageProps {
  partId: string;
}

const A2PartPage: React.FC<A2PartPageProps> = ({ partId }) => {
  return (
    <div className={a2Styles['a2HomeSimplified']} style={{ flex: 1 }}>
      <section className={`${a2Styles['section']}`}>
        <div className={`${a2Styles['container']}`}>
          <div className="sectionTitle">
            <h2>Niveau A2 - Partie {partId}</h2>
            <p>Contenu spécifique pour la partie {partId} du niveau A2.</p>
            {/* Add more specific content here later */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default A2PartPage;
