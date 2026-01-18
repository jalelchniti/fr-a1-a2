import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Award, CheckCircle2, XCircle } from 'lucide-react';
import { levels, questionSets, type Level } from './languageData';
import './LanguageSummary.css';

interface Results {
    level: Level;
    answers: (number | null)[];
    score: number;
}

export default function LanguageSummary() {
    const allResults: Results[] = (() => {
        const loadedResults: Results[] = [];
        levels.forEach(level => {
            const savedAnswers = localStorage.getItem(`language_test_results_${level}`);
            if (savedAnswers) {
                const answers = JSON.parse(savedAnswers) as (number | null)[];
                const questions = questionSets[level];
                const score = answers.reduce((acc: number, answer, index) => (answer === questions[index].correctAnswer ? acc + 1 : acc), 0);
                loadedResults.push({ level, answers, score });
            }
        });
        return loadedResults;
    })();

    const totalScore = allResults.reduce((acc, res) => acc + res.score, 0);
    const totalQuestions = allResults.reduce((acc, res) => acc + res.answers.length, 0);
    const totalPercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

    return (
        <div className="summary-page">
            <div className="page-container">
                <header className="summary-header">
                    <div>
                        <Link to="/evaluation/language" className="back-link no-print">
                            <ArrowLeft size={20} />
                            Retour à la sélection des tests
                        </Link>
                        <h1>Résumé des résultats</h1>
                        <p>Voici un résumé de tous les tests de grammaire et vocabulaire que vous avez complétés.</p>
                    </div>
                    <button onClick={() => window.print()} className="btn btn-primary no-print">
                        <Printer size={18} />
                        Imprimer ou Enregistrer en PDF
                    </button>
                </header>

                <div className="content-card overall-summary">
                    <div className="card-header">
                        <Award size={24} className="text-accent"/>
                        <h2>Score Global</h2>
                    </div>
                    <div className="score-display">
                        Score Total : <strong>{totalScore} / {totalQuestions}</strong> ({totalPercentage}%)
                    </div>
                    <p>Ceci est le score combiné de tous les niveaux complétés.</p>
                </div>

                {allResults.map(({ level, answers, score }) => {
                    const questions = questionSets[level];
                    return (
                        <div key={level} className="content-card level-summary">
                             <div className="card-header">
                                <h3>Résultats pour le niveau {level} (Score: {score}/{questions.length})</h3>
                            </div>
                             <div className="results-details">
                                {questions.map((q, index) => {
                                    const userAnswer = answers[index];
                                    const isCorrect = userAnswer === q.correctAnswer;
                                    return (
                                        <div key={q.id} className="result-item">
                                            <div className="result-question">
                                                {isCorrect ? <CheckCircle2 size={20} className="text-success" /> : <XCircle size={20} className="text-danger" />}
                                                <p>Question {q.id}: {q.question.replace('______', `...`)}</p>
                                            </div>
                                            <div className="result-answer">Votre réponse: <span className={isCorrect ? "correct" : "incorrect"}>{userAnswer !== null ? q.options[userAnswer] : "Pas de réponse"}</span></div>
                                            {!isCorrect && <div className="result-correct-answer">Réponse correcte: <span className="correct">{q.options[q.correctAnswer]}</span></div>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                })}

                {allResults.length === 0 && (
                    <div className="content-card">
                        <p>Aucun résultat de test n'a été trouvé. Veuillez compléter au moins un niveau de test pour voir le résumé.</p>
                    </div>
                )}
            </div>
        </div>
    );
}