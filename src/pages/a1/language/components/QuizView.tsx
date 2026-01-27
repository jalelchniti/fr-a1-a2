import styles from '../Language.module.css';
import EnhancedEvaluation from '../../../../components/EnhancedEvaluation';
import { getEnhancedQuizQuestions } from '../languageA1Data';

export default function QuizView() {
  const questions = getEnhancedQuizQuestions();

  return (
    <div className={styles.quizContainer}>
      <EnhancedEvaluation
        title="Quiz A1-1 : Grammaire & Vocabulaire"
        subtitle="Testez vos connaissances sur les bases du français"
        questions={questions}
        timeLimit={15}
      />
    </div>
  );
}
