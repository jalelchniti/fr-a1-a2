import React from 'react';
import styles from './ResultsVisualization.module.css';

interface EvaluationResult {
  questionId: string;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  category: string;
}

interface ResultsVisualizationProps {
  results: EvaluationResult[];
  overallScore: number;
  totalQuestions: number;
}

const ResultsVisualization: React.FC<ResultsVisualizationProps> = ({
  results,
  overallScore,
  totalQuestions
}) => {
  // Calculate score by category
  const categoryScores = results.reduce((acc: Record<string, { correct: number, total: number }>, result) => {
    if (!acc[result.category]) {
      acc[result.category] = { correct: 0, total: 0 };
    }
    acc[result.category].total++;
    if (result.isCorrect) {
      acc[result.category].correct++;
    }
    return acc;
  }, {});

  // Format data for bar chart
  const barChartData = Object.entries(categoryScores).map(([category, { correct, total }]) => ({
    category,
    correct,
    incorrect: total - correct,
    percentage: Math.round((correct / total) * 100)
  }));

  // Format data for pie chart
  const pieChartData = [
    { name: 'Correct', value: results.filter(r => r.isCorrect).length },
    { name: 'Incorrect', value: results.filter(r => !r.isCorrect).length }
  ];

  return (
    <div className={styles['results-visualization']}>
      <div className={styles['results-summary']}>
        <div className={styles['overall-score']}>
          <h3>Score Global</h3>
          <div className={styles['score-value']}>{overallScore}%</div>
          <p>({Math.round((overallScore / 100) * totalQuestions)}/{totalQuestions} réponses correctes)</p>
        </div>
      </div>

      <div className={styles['charts-container']}>
        <div className={styles['chart-section']}>
          <h4>Répartition des réponses</h4>
          <div className={styles['chart-wrapper']}>
            <div className={styles['simple-pie-chart']}>
              <div className={styles['pie-slice'] + ' ' + styles['correct']} style={{ width: `${(pieChartData[0].value / results.length) * 100}%` }}>
                <span>Correct: {pieChartData[0].value}</span>
              </div>
              <div className={styles['pie-slice'] + ' ' + styles['incorrect']} style={{ width: `${(pieChartData[1].value / results.length) * 100}%` }}>
                <span>Incorrect: {pieChartData[1].value}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['chart-section']}>
          <h4>Performance par catégorie</h4>
          <div className={styles['chart-wrapper']}>
            <div className={styles['simple-bar-chart']}>
              {barChartData.map((data, index) => (
                <div key={index} className={styles['bar-group']}>
                  <div className={styles['bar-label']}>{data.category}</div>
                  <div className={styles['bar-container']}>
                    <div
                      className={styles['bar'] + ' ' + styles['correct']}
                      style={{ width: `${data.percentage}%` }}
                    >
                      <span>{data.correct}</span>
                    </div>
                    <div
                      className={styles['bar'] + ' ' + styles['incorrect']}
                      style={{ width: `${data.incorrect > 0 ? (data.incorrect / (data.correct + data.incorrect)) * 100 : 0}%` }}
                    >
                      <span>{data.incorrect}</span>
                    </div>
                  </div>
                  <div className={styles['bar-percentage']}>{data.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles['detailed-results']}>
        <h4>Détail des réponses</h4>
        <div className={styles['results-table']}>
          {results.map((result, index) => (
            <div key={result.questionId} className={`${styles['result-row']} ${result.isCorrect ? styles['correct'] : styles['incorrect']}`}>
              <div className={styles['question-number']}>Q{index + 1}</div>
              <div className={styles['question-text']}>{result.questionText}</div>
              <div className={styles['user-answer']}>
                <span className={styles['label']}>Votre réponse:</span> {result.userAnswer}
              </div>
              {!result.isCorrect && (
                <div className={styles['correct-answer']}>
                  <span className={styles['label']}>Réponse correcte:</span> {result.correctAnswer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsVisualization;