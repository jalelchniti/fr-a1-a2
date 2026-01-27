// A1-1 Reading Data: Compréhension Écrite
// This file contains presentations, activities, and quiz data for A1-1 reading level

// --- Interfaces ---
export interface VocabularyItem {
  french: string;
  english: string;
  example?: string;
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
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'ordering';
  text?: string;
  instruction: string;
  question: string;
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'comprehension' | 'vocabulary' | 'inference' | 'detail';
  questions: ActivityQuestion[];
}

export interface QuizQuestion {
  id: number;
  text: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// --- A1-1 Presentations ---
export const presentations: Presentation[] = [
  {
    id: 'presentation-1',
    title: 'Se présenter par écrit',
    description: 'Apprenez à lire et comprendre des présentations personnelles simples',
    objectives: [
      'Identifier les informations personnelles (nom, âge, nationalité)',
      'Comprendre les phrases simples au présent',
      'Repérer les mots-clés dans un texte court'
    ],
    readingTexts: [
      {
        id: 'text-1',
        title: 'Présentation de Marie',
        text: "Bonjour ! Je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau. J'aime le cinéma et la musique.",
        vocabulary: [
          { french: "Je m'appelle", english: 'My name is', example: "Je m'appelle Sophie." },
          { french: "J'ai ... ans", english: 'I am ... years old', example: "J'ai vingt ans." },
          { french: 'Je suis', english: 'I am', example: 'Je suis étudiant.' },
          { french: "J'habite à", english: 'I live in', example: "J'habite à Lyon." },
          { french: 'Je travaille', english: 'I work', example: 'Je travaille dans un hôpital.' },
          { french: "J'aime", english: 'I like/love', example: "J'aime le chocolat." }
        ],
        comprehensionTips: [
          'Cherchez le verbe "être" (suis) pour la nationalité et la profession',
          'Cherchez le verbe "avoir" (ai) pour l\'âge',
          'Les noms de villes commencent par une majuscule'
        ]
      },
      {
        id: 'text-2',
        title: 'Présentation de Thomas',
        text: "Salut ! Moi, c'est Thomas. Je suis belge. J'ai 30 ans. J'habite à Bruxelles avec ma femme. Je suis professeur de mathématiques. Le week-end, je fais du sport.",
        vocabulary: [
          { french: "Moi, c'est", english: "I'm / My name is (informal)", example: "Moi, c'est Pierre." },
          { french: 'avec', english: 'with', example: "J'habite avec ma famille." },
          { french: 'ma femme', english: 'my wife', example: 'Ma femme est médecin.' },
          { french: 'le week-end', english: 'on weekends', example: 'Le week-end, je dors.' },
          { french: 'je fais du sport', english: 'I do sports', example: 'Je fais du sport le matin.' }
        ],
        comprehensionTips: [
          '"Moi, c\'est" est une façon informelle de se présenter',
          'Repérez la structure "avec + personne" pour les relations',
          'Les activités de loisirs suivent souvent "le week-end"'
        ]
      }
    ],
    strategies: [
      'Lisez le texte une première fois pour comprendre le sens général',
      'Soulignez les mots que vous connaissez',
      'Cherchez les informations demandées (qui, où, quoi)',
      'Ne vous arrêtez pas sur les mots inconnus'
    ]
  },
  {
    id: 'presentation-2',
    title: 'La famille et les relations',
    description: 'Comprendre des textes sur la famille et les proches',
    objectives: [
      'Identifier les membres de la famille',
      'Comprendre les relations familiales',
      'Reconnaître le vocabulaire des activités familiales'
    ],
    readingTexts: [
      {
        id: 'text-3',
        title: 'La famille de Paul',
        text: "Je m'appelle Paul. J'ai une grande famille. Mon père s'appelle Jacques et ma mère s'appelle Hélène. J'ai deux sœurs : Sophie et Emma. Sophie a 20 ans et Emma a 15 ans. Nous habitons tous ensemble dans une maison à Lyon.",
        vocabulary: [
          { french: 'le père', english: 'father', example: 'Mon père est gentil.' },
          { french: 'la mère', english: 'mother', example: 'Ma mère cuisine bien.' },
          { french: 'la sœur', english: 'sister', example: "J'ai une sœur." },
          { french: 'le frère', english: 'brother', example: 'Mon frère est grand.' },
          { french: 'ensemble', english: 'together', example: 'Nous mangeons ensemble.' },
          { french: 'une maison', english: 'a house', example: "J'habite dans une maison." }
        ],
        comprehensionTips: [
          'Les possessifs (mon, ma, mes) indiquent les relations familiales',
          'Comptez les personnes mentionnées pour comprendre la taille de la famille',
          'Les âges sont souvent donnés avec "avoir + nombre + ans"'
        ]
      },
      {
        id: 'text-4',
        title: 'Le dimanche en famille',
        text: "Le dimanche, notre famille se réunit chez mes grands-parents. Ma grand-mère prépare le déjeuner. Mon grand-père joue avec les enfants dans le jardin. Mes cousins et cousines viennent aussi. C'est toujours une journée agréable.",
        vocabulary: [
          { french: 'les grands-parents', english: 'grandparents', example: 'Mes grands-parents sont gentils.' },
          { french: 'la grand-mère', english: 'grandmother', example: 'Ma grand-mère fait des gâteaux.' },
          { french: 'le grand-père', english: 'grandfather', example: 'Mon grand-père raconte des histoires.' },
          { french: 'le cousin / la cousine', english: 'cousin', example: 'Mon cousin habite à Paris.' },
          { french: 'le déjeuner', english: 'lunch', example: 'Le déjeuner est à midi.' },
          { french: 'le jardin', english: 'garden', example: 'Je joue dans le jardin.' }
        ],
        comprehensionTips: [
          '"Chez" + personne signifie "à la maison de"',
          'Les verbes au présent décrivent des habitudes',
          'Repérez les mots comme "toujours", "souvent" pour les routines'
        ]
      }
    ],
    strategies: [
      'Identifiez d\'abord les personnes mentionnées',
      'Faites un arbre généalogique mental pour comprendre les relations',
      'Cherchez les indicateurs de temps (le dimanche, toujours...)',
      'Associez les actions aux personnes qui les font'
    ]
  },
  {
    id: 'presentation-3',
    title: 'La vie quotidienne',
    description: 'Lire des textes sur les activités de tous les jours',
    objectives: [
      'Comprendre la description d\'une journée typique',
      'Identifier les horaires et les moments de la journée',
      'Reconnaître le vocabulaire des activités quotidiennes'
    ],
    readingTexts: [
      {
        id: 'text-5',
        title: 'Ma journée',
        text: "Je me lève à 7 heures. Je prends mon petit-déjeuner : un café et des tartines. Je pars au travail à 8 heures. Je travaille de 9 heures à 17 heures. Le soir, je rentre à la maison. Je dîne avec ma famille à 19 heures. Je me couche à 22 heures.",
        vocabulary: [
          { french: 'se lever', english: 'to get up', example: 'Je me lève tôt.' },
          { french: 'le petit-déjeuner', english: 'breakfast', example: 'Je prends mon petit-déjeuner.' },
          { french: 'partir', english: 'to leave', example: 'Je pars à 8 heures.' },
          { french: 'rentrer', english: 'to come back home', example: 'Je rentre le soir.' },
          { french: 'dîner', english: 'to have dinner', example: 'Je dîne à 20 heures.' },
          { french: 'se coucher', english: 'to go to bed', example: 'Je me couche tard.' }
        ],
        comprehensionTips: [
          'Les heures structurent le texte chronologiquement',
          'Les verbes pronominaux (se lever, se coucher) décrivent des actions personnelles',
          'Repérez les moments de la journée : matin, midi, soir'
        ]
      },
      {
        id: 'text-6',
        title: 'Le week-end de Claire',
        text: "Le samedi matin, Claire fait les courses au supermarché. L'après-midi, elle va à la piscine avec ses amis. Le soir, elle regarde un film à la maison. Le dimanche, elle rend visite à ses parents. Elle déjeune chez eux et rentre le soir.",
        vocabulary: [
          { french: 'faire les courses', english: 'to do shopping', example: 'Je fais les courses le samedi.' },
          { french: 'la piscine', english: 'swimming pool', example: 'Je vais à la piscine.' },
          { french: 'regarder un film', english: 'to watch a movie', example: 'Je regarde un film.' },
          { french: 'rendre visite à', english: 'to visit (someone)', example: 'Je rends visite à ma grand-mère.' },
          { french: 'chez eux', english: 'at their place', example: 'Je mange chez eux.' }
        ],
        comprehensionTips: [
          'Le texte est organisé par jours (samedi, dimanche)',
          'Chaque partie de la journée a une activité spécifique',
          '"Elle" reprend le nom "Claire" - c\'est un pronom sujet'
        ]
      }
    ],
    strategies: [
      'Repérez les indicateurs de temps pour suivre la chronologie',
      'Notez les heures mentionnées pour comprendre l\'emploi du temps',
      'Identifiez le sujet de chaque phrase (qui fait quoi)',
      'Les activités quotidiennes utilisent souvent le présent de l\'indicatif'
    ]
  }
];

// --- A1-1 Activities ---
export const activities: Activity[] = [
  {
    id: 'activity-1',
    title: 'Compréhension : Les présentations',
    description: 'Lisez le texte et répondez aux questions',
    type: 'comprehension',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        text: "Bonjour ! Je m'appelle Sophie. J'ai 28 ans. Je suis belge. J'habite à Liège. Je suis infirmière à l'hôpital.",
        instruction: 'Lisez le texte et répondez',
        question: 'Quelle est la profession de Sophie ?',
        options: ['Professeur', 'Médecin', 'Infirmière', 'Secrétaire'],
        correctAnswer: 2,
        explanation: 'Le texte dit "Je suis infirmière à l\'hôpital".'
      },
      {
        id: 2,
        type: 'multiple-choice',
        text: "Bonjour ! Je m'appelle Sophie. J'ai 28 ans. Je suis belge. J'habite à Liège. Je suis infirmière à l'hôpital.",
        instruction: 'Lisez le texte et répondez',
        question: 'Où habite Sophie ?',
        options: ['À Paris', 'À Bruxelles', 'À Liège', 'À Lyon'],
        correctAnswer: 2,
        explanation: 'Le texte dit "J\'habite à Liège".'
      },
      {
        id: 3,
        type: 'multiple-choice',
        text: "Bonjour ! Je m'appelle Sophie. J'ai 28 ans. Je suis belge. J'habite à Liège. Je suis infirmière à l'hôpital.",
        instruction: 'Lisez le texte et répondez',
        question: 'Quelle est la nationalité de Sophie ?',
        options: ['Française', 'Belge', 'Suisse', 'Canadienne'],
        correctAnswer: 1,
        explanation: 'Le texte dit "Je suis belge".'
      },
      {
        id: 4,
        type: 'multiple-choice',
        text: "Bonjour ! Je m'appelle Sophie. J'ai 28 ans. Je suis belge. J'habite à Liège. Je suis infirmière à l'hôpital.",
        instruction: 'Lisez le texte et répondez',
        question: 'Quel âge a Sophie ?',
        options: ['25 ans', '26 ans', '27 ans', '28 ans'],
        correctAnswer: 3,
        explanation: 'Le texte dit "J\'ai 28 ans".'
      }
    ]
  },
  {
    id: 'activity-2',
    title: 'Vrai ou Faux : La famille',
    description: 'Déterminez si les affirmations sont vraies ou fausses',
    type: 'comprehension',
    questions: [
      {
        id: 1,
        type: 'true-false',
        text: "Marc habite avec sa famille à Toulouse. Il a une femme, Marie, et deux enfants : Lucas et Léa. Lucas a 10 ans et Léa a 7 ans. Le week-end, ils vont au parc.",
        instruction: 'Vrai ou Faux ?',
        question: 'Marc habite à Paris.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'Marc habite à Toulouse, pas à Paris.'
      },
      {
        id: 2,
        type: 'true-false',
        text: "Marc habite avec sa famille à Toulouse. Il a une femme, Marie, et deux enfants : Lucas et Léa. Lucas a 10 ans et Léa a 7 ans. Le week-end, ils vont au parc.",
        instruction: 'Vrai ou Faux ?',
        question: 'Marc a deux enfants.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 0,
        explanation: 'Oui, il a deux enfants : Lucas et Léa.'
      },
      {
        id: 3,
        type: 'true-false',
        text: "Marc habite avec sa famille à Toulouse. Il a une femme, Marie, et deux enfants : Lucas et Léa. Lucas a 10 ans et Léa a 7 ans. Le week-end, ils vont au parc.",
        instruction: 'Vrai ou Faux ?',
        question: 'Léa est plus âgée que Lucas.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'Non, Lucas a 10 ans et Léa a 7 ans. Lucas est plus âgé.'
      },
      {
        id: 4,
        type: 'true-false',
        text: "Marc habite avec sa famille à Toulouse. Il a une femme, Marie, et deux enfants : Lucas et Léa. Lucas a 10 ans et Léa a 7 ans. Le week-end, ils vont au parc.",
        instruction: 'Vrai ou Faux ?',
        question: 'La famille va au parc le week-end.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 0,
        explanation: 'Oui, le texte dit "Le week-end, ils vont au parc".'
      },
      {
        id: 5,
        type: 'true-false',
        text: "Marc habite avec sa famille à Toulouse. Il a une femme, Marie, et deux enfants : Lucas et Léa. Lucas a 10 ans et Léa a 7 ans. Le week-end, ils vont au parc.",
        instruction: 'Vrai ou Faux ?',
        question: 'La femme de Marc s\'appelle Marie.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 0,
        explanation: 'Oui, le texte dit "Il a une femme, Marie".'
      }
    ]
  },
  {
    id: 'activity-3',
    title: 'Compléter : La journée',
    description: 'Complétez les phrases avec les mots corrects',
    type: 'detail',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        text: "Pierre se lève à 6 heures. Il prend son petit-déjeuner à 6h30. Il part au travail à 7 heures.",
        instruction: 'Complétez avec l\'information du texte',
        question: 'Pierre se lève à ______ heures.',
        correctAnswer: '6',
        explanation: 'Le texte dit "Pierre se lève à 6 heures".'
      },
      {
        id: 2,
        type: 'fill-blank',
        text: "Pierre se lève à 6 heures. Il prend son petit-déjeuner à 6h30. Il part au travail à 7 heures.",
        instruction: 'Complétez avec l\'information du texte',
        question: 'Il prend son ______ à 6h30.',
        correctAnswer: 'petit-déjeuner',
        explanation: 'Le texte dit "Il prend son petit-déjeuner à 6h30".'
      },
      {
        id: 3,
        type: 'fill-blank',
        text: "Pierre se lève à 6 heures. Il prend son petit-déjeuner à 6h30. Il part au travail à 7 heures.",
        instruction: 'Complétez avec l\'information du texte',
        question: 'Il part au ______ à 7 heures.',
        correctAnswer: 'travail',
        explanation: 'Le texte dit "Il part au travail à 7 heures".'
      },
      {
        id: 4,
        type: 'fill-blank',
        text: "Le soir, Emma rentre à la maison à 18 heures. Elle dîne avec sa famille. Elle se couche à 22 heures.",
        instruction: 'Complétez avec l\'information du texte',
        question: 'Emma rentre à la ______ à 18 heures.',
        correctAnswer: 'maison',
        explanation: 'Le texte dit "Emma rentre à la maison à 18 heures".'
      },
      {
        id: 5,
        type: 'fill-blank',
        text: "Le soir, Emma rentre à la maison à 18 heures. Elle dîne avec sa famille. Elle se couche à 22 heures.",
        instruction: 'Complétez avec l\'information du texte',
        question: 'Elle se couche à ______ heures.',
        correctAnswer: '22',
        explanation: 'Le texte dit "Elle se couche à 22 heures".'
      }
    ]
  }
];

// --- A1-1 Quiz Questions ---
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "Bonjour ! Je m'appelle Julie. J'ai 22 ans. Je suis étudiante à l'université. J'habite à Bordeaux.",
    question: 'Quel âge a Julie ?',
    options: ['20 ans', '21 ans', '22 ans', '23 ans'],
    correctAnswer: 2,
    explanation: 'Le texte dit "J\'ai 22 ans".'
  },
  {
    id: 2,
    text: "Bonjour ! Je m'appelle Julie. J'ai 22 ans. Je suis étudiante à l'université. J'habite à Bordeaux.",
    question: 'Que fait Julie ?',
    options: ['Elle travaille', 'Elle est étudiante', 'Elle est professeur', 'Elle est médecin'],
    correctAnswer: 1,
    explanation: 'Le texte dit "Je suis étudiante".'
  },
  {
    id: 3,
    text: "Jean habite à Marseille avec sa femme Lucie. Ils ont un fils, Antoine, qui a 5 ans. Jean travaille dans un restaurant.",
    question: 'Où habite Jean ?',
    options: ['À Paris', 'À Lyon', 'À Marseille', 'À Nice'],
    correctAnswer: 2,
    explanation: 'Le texte dit "Jean habite à Marseille".'
  },
  {
    id: 4,
    text: "Jean habite à Marseille avec sa femme Lucie. Ils ont un fils, Antoine, qui a 5 ans. Jean travaille dans un restaurant.",
    question: 'Comment s\'appelle le fils de Jean ?',
    options: ['Lucas', 'Pierre', 'Thomas', 'Antoine'],
    correctAnswer: 3,
    explanation: 'Le texte dit "Ils ont un fils, Antoine".'
  },
  {
    id: 5,
    text: "Le matin, Claire se lève à 7 heures. Elle prend son petit-déjeuner et part au travail à 8 heures. Elle travaille dans un bureau.",
    question: 'À quelle heure Claire se lève-t-elle ?',
    options: ['À 6 heures', 'À 7 heures', 'À 8 heures', 'À 9 heures'],
    correctAnswer: 1,
    explanation: 'Le texte dit "Claire se lève à 7 heures".'
  },
  {
    id: 6,
    text: "Le matin, Claire se lève à 7 heures. Elle prend son petit-déjeuner et part au travail à 8 heures. Elle travaille dans un bureau.",
    question: 'Où travaille Claire ?',
    options: ['Dans un hôpital', 'Dans un restaurant', 'Dans un bureau', 'Dans une école'],
    correctAnswer: 2,
    explanation: 'Le texte dit "Elle travaille dans un bureau".'
  },
  {
    id: 7,
    text: "Ma grand-mère s'appelle Françoise. Elle a 75 ans. Elle habite dans une petite maison avec son chat. Elle aime jardiner.",
    question: 'Avec qui habite Françoise ?',
    options: ['Avec son mari', 'Avec son fils', 'Avec son chat', 'Avec sa fille'],
    correctAnswer: 2,
    explanation: 'Le texte dit "Elle habite dans une petite maison avec son chat".'
  },
  {
    id: 8,
    text: "Ma grand-mère s'appelle Françoise. Elle a 75 ans. Elle habite dans une petite maison avec son chat. Elle aime jardiner.",
    question: 'Qu\'aime faire Françoise ?',
    options: ['Cuisiner', 'Jardiner', 'Lire', 'Voyager'],
    correctAnswer: 1,
    explanation: 'Le texte dit "Elle aime jardiner".'
  },
  {
    id: 9,
    text: "Le dimanche, notre famille déjeune ensemble. Ma mère prépare le repas. Mon père met la table. Mes frères et moi, nous aidons après le repas.",
    question: 'Qui prépare le repas ?',
    options: ['Le père', 'La mère', 'Les frères', 'Le narrateur'],
    correctAnswer: 1,
    explanation: 'Le texte dit "Ma mère prépare le repas".'
  },
  {
    id: 10,
    text: "Le dimanche, notre famille déjeune ensemble. Ma mère prépare le repas. Mon père met la table. Mes frères et moi, nous aidons après le repas.",
    question: 'Que fait le père ?',
    options: ['Il prépare le repas', 'Il met la table', 'Il fait la vaisselle', 'Il regarde la télévision'],
    correctAnswer: 1,
    explanation: 'Le texte dit "Mon père met la table".'
  }
];

// Helper function to convert quiz questions to EnhancedEvaluation format
export const getEnhancedQuizQuestions = () => {
  return quizQuestions.map(q => ({
    id: String(q.id),
    type: 'multiple-choice' as const,
    question: q.question,
    instruction: 'Lisez le texte et choisissez la bonne réponse',
    // Include the text as context above the question
    transcript: q.text,
    options: q.options.map((option, index) => ({
      id: index.toString(),
      text: option,
      isCorrect: index === q.correctAnswer
    })),
    correctAnswer: q.correctAnswer.toString()
  }));
};
