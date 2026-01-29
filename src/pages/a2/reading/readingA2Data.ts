// A2 Reading Data: Comprehension exercises and text resources
// This file contains presentations, activities, and quiz data for A2 level reading skills

// --- Interfaces (reused from languageA2Data.ts for consistency) ---
export interface VocabularyItem {
  french: string;
  english: string;
  example?: string;
  audio?: string;
}

export interface GrammarRule {
  title: string;
  explanation: string;
  examples: { french: string; english: string }[];
}

export interface ReadingText {
    id: string;
    title: string;
    text: string;
    vocabulary: VocabularyItem[];
    comprehensionTips: string[];
}

export interface Presentation {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  readingTexts: ReadingText[];
  strategies: string[];
}

export interface ActivityQuestion {
  id: number;
  type: 'fill-blank' | 'matching' | 'multiple-choice' | 'reorder' | 'true-false' | 'text-comprehension'; // Added text-comprehension
  instruction: string;
  question: string;
  options?: string[];
  correctAnswer: string | number | boolean;
  hint?: string;
  text?: string; // Specific for reading activities
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'vocabulary' | 'grammar' | 'conjugation' | 'listening' | 'speaking' | 'reading'; // Added reading
  questions: ActivityQuestion[];
  text?: string; // For activities that are entirely text-based
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  text?: string; // For quiz questions that are text-based
}

// --- A2 Reading Presentations ---
export const presentations: Presentation[] = [
  {
    id: 'a2-reading-intro',
    title: 'Améliorer sa compréhension écrite A2',
    description: 'Stratégies pour comprendre différents types de textes au niveau A2.',
    objectives: [
      'Comprendre le sens global de textes courts et simples',
      'Repérer des informations essentielles dans des écrits du quotidien',
      'Identifier la structure d\'un récit simple'
    ],
    readingTexts: [
        {
            id: 'a2-reading-1',
            title: 'Ma journée typique',
            text: 'Bonjour, je m\'appelle Sophie et je suis étudiante à Paris. Tous les jours, je me lève à 7h, je prends mon petit-déjeuner et je pars à l\'université. J\'étudie l\'histoire. Le soir, je rentre chez moi, je fais mes devoirs et je regarde un film. Le week-end, j\'aime aller au cinéma avec mes amis ou visiter des musées.',
            vocabulary: [
                { french: 'étudiante', english: 'student (female)' },
                { french: 'je me lève', english: 'I get up' },
                { french: 'je prends mon petit-déjeuner', english: 'I have my breakfast' },
                { french: 'je pars', english: 'I leave' },
                { french: 'je rentre', english: 'I come back home' }
            ],
            comprehensionTips: [
                'Identifiez les verbes d\'action pour suivre la routine.',
                'Notez les indicateurs de temps (tous les jours, le soir, le week-end).',
            ]
        }
    ],
    strategies: [
      'Lisez le texte une première fois pour une compréhension globale.',
      'Soulignez les mots clés et les phrases importantes.',
      'Relisez les questions avant de chercher les réponses dans le texte.',
      'Utilisez le contexte pour deviner le sens des mots inconnus.'
    ]
  }
];

// --- A2 Reading Activities ---
export const activities: Activity[] = [
  {
    id: 'a2-reading-activity-1',
    title: 'Lecture guidée : Textes courts A2',
    description: 'Lire et comprendre des textes courts adaptés au niveau A2.',
    type: 'reading',
    text: 'Bonjour, je m\'appelle Sophie et je suis étudiante à Paris. Tous les jours, je me lève à 7h, je prends mon petit-déjeuner et je pars à l\'université. J\'étudie l\'histoire. Le soir, je rentre chez moi, je fais mes devoirs et je regarde un film. Le week-end, j\'aime aller au cinéma avec mes amis ou visiter des musées.', // Example text
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Selon le texte, que fait Sophie le week-end ?',
        question: 'Que fait Sophie le week-end ?',
        options: ['Elle étudie', 'Elle va au cinéma ou visite des musées', 'Elle travaille'],
        correctAnswer: 1,
        hint: 'Cherchez la partie du texte qui parle du week-end.'
      },
      {
        id: 2,
        type: 'true-false',
        instruction: 'Sophie étudie-t-elle la géographie ?',
        question: 'Sophie étudie la géographie.',
        options: ['Vrai', 'Faux'],
        correctAnswer: false,
        hint: 'Vérifiez la matière qu\'elle étudie.'
      }
    ]
  },
  {
    id: 'a2-reading-activity-2',
    title: 'Repérage des mots-clés : Annonces et dialogues écrits',
    description: 'Identifier des informations spécifiques dans des annonces et des dialogues.',
    type: 'reading',
    text: `
      Annonce immobilière:
      À louer: Appartement T3, 60m², 2 chambres, salon, cuisine équipée. Balcon. Loyer: 850€/mois. Proche transports. Contact: 0612345678.

      Dialogue:
      Marie: Salut Pierre, tu es libre ce soir ?
      Pierre: Salut Marie, non désolé, je dois travailler. Et toi ?
      Marie: Je vais au concert de jazz. Tu devrais venir une autre fois !
    `,
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Quel est le prix du loyer de l\'appartement ?',
        question: 'Loyer : ______ €/mois',
        correctAnswer: '850',
        hint: 'L\'information se trouve dans l\'annonce immobilière.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Pourquoi Pierre n\'est-il pas libre ce soir ?',
        question: 'Pourquoi Pierre n\'est-il pas libre ce soir ?',
        options: ['Il est malade', 'Il doit travailler', 'Il va au cinéma'],
        correctAnswer: 1,
        hint: 'La raison est donnée dans le dialogue.'
      }
    ]
  },
  {
    id: 'a2-reading-activity-3',
    title: 'Comprendre et analyser un texte : Structure d\'un récit',
    description: 'Lire un récit simple et identifier sa structure (début, milieu, fin).',
    type: 'reading',
    text: `
      Un jour, un petit chat gris nommé Pixel se promenait dans le jardin. Il a vu un papillon bleu et a commencé à le suivre. Le papillon s'est posé sur une fleur rouge. Pixel a sauté pour l'attraper, mais il est tombé dans une flaque d'eau ! Tout mouillé, il est rentré à la maison où sa maîtresse l'a séché avec une serviette douce. Le soir, Pixel dormait paisiblement près de la cheminée.
    `,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Quelle est la situation initiale du récit ?',
        question: 'Quelle est la situation initiale du récit ?',
        options: [
          'Pixel est tombé dans une flaque d\'eau.',
          'Pixel se promenait dans le jardin.',
          'Pixel dormait près de la cheminée.'
        ],
        correctAnswer: 1,
        hint: 'Le début de l\'histoire.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Quel est l\'élément déclencheur de l\'aventure de Pixel ?',
        question: 'Quel est l\'élément déclencheur de l\'aventure de Pixel ?',
        options: [
          'Il a vu un papillon bleu.',
          'Il est rentré à la maison.',
          'Sa maîtresse l\'a séché.'
        ],
        correctAnswer: 0,
        hint: 'Ce qui a lancé l\'action.'
      }
    ]
  }
];

// --- A2 Reading Quiz Questions ---
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Lisez le texte et choisissez la bonne réponse. \'Je cherche un appartement avec 2 chambres. Je travaille à Lyon. Je veux un balcon.\'',
    text: 'Je cherche un appartement avec 2 chambres. Je travaille à Lyon. Je veux un balcon.',
    options: [
      'La personne cherche une maison.',
      'La personne travaille à Paris.',
      'La personne veut un balcon.'
    ],
    correctAnswer: 2,
    explanation: 'Le texte indique clairement \'Je veux un balcon\'.'
  },
  {
    id: 2,
    question: 'Lisez le court message. \'Salut ! Je suis en retard. Le bus est bloqué. Je serai là dans 15 minutes.\'',
    text: 'Salut ! Je suis en retard. Le bus est bloqué. Je serai là dans 15 minutes.',
    options: [
      'La personne est déjà arrivée.',
      'La personne sera en retard.',
      'La personne ne viendra pas.'
    ],
    correctAnswer: 1,
    explanation: 'Le message dit \'Je suis en retard\'.'
  }
];

// Helper function to convert quiz questions to EnhancedEvaluation format
export const getEnhancedQuizQuestions = () => {
  return quizQuestions.map(q => ({
    id: String(q.id),
    type: 'multiple-choice' as const,
    question: q.question,
    instruction: 'Choisissez la bonne réponse',
    text: q.text, // Pass the text property
    options: q.options.map((option, index) => ({
      id: index.toString(),
      text: option,
      isCorrect: index === q.correctAnswer
    })),
    correctAnswer: q.correctAnswer.toString(),
    explanation: q.explanation
  }));
};
