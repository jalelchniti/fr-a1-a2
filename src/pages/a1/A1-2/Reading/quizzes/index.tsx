
import styles from '../A1PartPage.module.css'; // Adjusted path
import { getPartData, type PartData } from '../a1DataService'; // Adjusted path
import PresentationView from '../language/components/PresentationView'; // Adjusted path
import ActivityView from '../language/components/ActivityView'; // Adjusted path

export default function A12PartPage() { // Renamed component and removed useParams
  const partId = '2'; // Hardcoded partId

  // Use the new data service to get data for the current partId
  const currentPartData: PartData = getPartData(partId);
  const languageLessonData = currentPartData.language;

  return (
    <div className={styles.partPage}>
      <header>
        <h2>Niveau A1 - Partie {partId}: {languageLessonData.presentations.length > 0 ? languageLessonData.presentations[0].title : "Contenu non disponible"}</h2>
      </header>
      
      {languageLessonData.presentations.map((presentation, index) => (
        <PresentationView key={index} presentation={presentation} />
      ))}

      {languageLessonData.activities.map((activity, index) => (
        <ActivityView key={index} activity={activity} />
      ))}

      {/* If there's no specific content for this partId beyond what's dynamically loaded */}
      {languageLessonData.presentations.length === 0 && languageLessonData.activities.length === 0 && (
        <div className={styles.card}>
          <h2>Niveau A1 - Partie {partId}</h2>
          <p>Le contenu detaille pour cette partie sera bientot disponible. En attendant, explorez les autres sections !</p>
        </div>
      )}
    </div>
  );
}



