import { useParams, Navigate } from 'react-router-dom';
import styles from './A1PartPage.module.css';
import { getA1PartContent } from './a1DataService';

export default function A1PartPage() {
    const { partId } = useParams<{ partId: string }>();

    if (!partId) {
        return <Navigate to="/a1" replace />;
    }

    const content = getA1PartContent(partId);

    if (!content) {
        return <Navigate to="/a1" replace />;
    }

    return (
        <section className={styles.partPage}>
            <h1>{content.title}</h1>

            {content.sections.map((section) => (
                <div key={section.id} className={styles.card}>
                    <h3>{section.title}</h3>

                    {section.dialogue && (
                        <div className={styles.dialogue}>
                            {section.dialogue.map((line, index) => (
                                <p
                                    key={index}
                                    className={
                                        line.speaker === 'A'
                                            ? styles.speakerA
                                            : styles.speakerB
                                    }
                                >
                                    {line.text}
                                </p>
                            ))}
                        </div>
                    )}

                    {section.activities && (
                        <div className={styles.activity}>
                            <ul>
                                {section.activities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}
