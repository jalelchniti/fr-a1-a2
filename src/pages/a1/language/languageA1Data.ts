// A1-1 Language Data: Grammar, Vocabulary, and Syntax
// This file contains presentations, activities, and quiz data for A1-1 level

// --- Interfaces ---
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

export interface Presentation {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  vocabulary: VocabularyItem[];
  grammar: GrammarRule[];
  tips: string[];
}

export interface ActivityQuestion {
  id: number;
  type: 'fill-blank' | 'matching' | 'multiple-choice' | 'reorder';
  instruction: string;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  hint?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'vocabulary' | 'grammar' | 'conjugation' | 'listening';
  questions: ActivityQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// --- A1-1 Presentations ---
export const presentations: Presentation[] = [
  {
    id: 'presentation-1',
    title: 'Les salutations et les présentations',
    description: 'Apprenez à saluer et à vous présenter en français',
    objectives: [
      'Savoir dire bonjour et au revoir',
      'Se présenter (nom, âge, nationalité)',
      'Poser des questions simples sur l\'identité'
    ],
    vocabulary: [
      { french: 'Bonjour', english: 'Hello / Good morning', example: 'Bonjour, comment allez-vous ?' },
      { french: 'Bonsoir', english: 'Good evening', example: 'Bonsoir madame.' },
      { french: 'Salut', english: 'Hi / Bye (informal)', example: 'Salut, ça va ?' },
      { french: 'Au revoir', english: 'Goodbye', example: 'Au revoir, à demain !' },
      { french: 'Enchanté(e)', english: 'Nice to meet you', example: 'Enchanté, je suis Marie.' },
      { french: 'Comment vous appelez-vous ?', english: 'What is your name? (formal)', example: 'Comment vous appelez-vous ? - Je m\'appelle Pierre.' },
      { french: 'Je m\'appelle...', english: 'My name is...', example: 'Je m\'appelle Sophie.' },
      { french: 'J\'ai ... ans', english: 'I am ... years old', example: 'J\'ai vingt-cinq ans.' },
      { french: 'Je suis...', english: 'I am...', example: 'Je suis français.' },
      { french: 'J\'habite à...', english: 'I live in...', example: 'J\'habite à Paris.' }
    ],
    grammar: [
      {
        title: 'Le verbe ÊTRE au présent',
        explanation: 'Le verbe être est un verbe essentiel en français. Il sert à décrire l\'identité, la nationalité, la profession, etc.',
        examples: [
          { french: 'Je suis étudiant.', english: 'I am a student.' },
          { french: 'Tu es français ?', english: 'Are you French?' },
          { french: 'Il est professeur.', english: 'He is a teacher.' },
          { french: 'Nous sommes contents.', english: 'We are happy.' }
        ]
      },
      {
        title: 'Le verbe AVOIR au présent',
        explanation: 'Le verbe avoir est utilisé pour exprimer la possession et l\'âge.',
        examples: [
          { french: 'J\'ai un livre.', english: 'I have a book.' },
          { french: 'Tu as quel âge ?', english: 'How old are you?' },
          { french: 'Elle a vingt ans.', english: 'She is twenty years old.' },
          { french: 'Nous avons une voiture.', english: 'We have a car.' }
        ]
      }
    ],
    tips: [
      'Utilisez "tu" avec les amis et la famille, "vous" avec les inconnus et en situation formelle.',
      'En français, on dit "J\'ai 20 ans" (j\'ai) et non "Je suis 20 ans".',
      '"Enchanté" s\'accorde avec le genre : "Enchantée" pour une femme.'
    ]
  },
  {
    id: 'presentation-2',
    title: 'Les articles définis et indéfinis',
    description: 'Maîtrisez l\'utilisation des articles en français',
    objectives: [
      'Différencier les articles définis et indéfinis',
      'Utiliser le bon article selon le genre et le nombre',
      'Comprendre quand utiliser chaque type d\'article'
    ],
    vocabulary: [
      { french: 'le', english: 'the (masculine singular)', example: 'le livre (the book)' },
      { french: 'la', english: 'the (feminine singular)', example: 'la table (the table)' },
      { french: 'l\'', english: 'the (before vowel)', example: 'l\'école (the school)' },
      { french: 'les', english: 'the (plural)', example: 'les enfants (the children)' },
      { french: 'un', english: 'a/an (masculine)', example: 'un chat (a cat)' },
      { french: 'une', english: 'a/an (feminine)', example: 'une maison (a house)' },
      { french: 'des', english: 'some (plural)', example: 'des amis (some friends)' }
    ],
    grammar: [
      {
        title: 'Les articles définis (le, la, l\', les)',
        explanation: 'On utilise les articles définis pour parler de quelque chose de spécifique ou connu.',
        examples: [
          { french: 'Le soleil brille.', english: 'The sun is shining.' },
          { french: 'La France est belle.', english: 'France is beautiful.' },
          { french: 'J\'aime les chats.', english: 'I like cats.' }
        ]
      },
      {
        title: 'Les articles indéfinis (un, une, des)',
        explanation: 'On utilise les articles indéfinis pour parler de quelque chose de non spécifique.',
        examples: [
          { french: 'J\'ai un chien.', english: 'I have a dog.' },
          { french: 'C\'est une bonne idée.', english: 'It\'s a good idea.' },
          { french: 'Il y a des problèmes.', english: 'There are some problems.' }
        ]
      }
    ],
    tips: [
      'Le genre des noms doit être mémorisé car il n\'y a pas toujours de règle logique.',
      'Devant une voyelle ou un h muet, "le" et "la" deviennent "l\'".',
      'En français, on utilise souvent l\'article défini pour parler en général : "J\'aime le chocolat."'
    ]
  },
  {
    id: 'presentation-3',
    title: 'Les chiffres de 0 à 100',
    description: 'Apprenez à compter en français',
    objectives: [
      'Compter de 0 à 20',
      'Comprendre les dizaines (20, 30, 40...)',
      'Former les nombres composés'
    ],
    vocabulary: [
      { french: 'zéro', english: '0' },
      { french: 'un', english: '1' },
      { french: 'deux', english: '2' },
      { french: 'trois', english: '3' },
      { french: 'quatre', english: '4' },
      { french: 'cinq', english: '5' },
      { french: 'six', english: '6' },
      { french: 'sept', english: '7' },
      { french: 'huit', english: '8' },
      { french: 'neuf', english: '9' },
      { french: 'dix', english: '10' },
      { french: 'onze', english: '11' },
      { french: 'douze', english: '12' },
      { french: 'treize', english: '13' },
      { french: 'quatorze', english: '14' },
      { french: 'quinze', english: '15' },
      { french: 'seize', english: '16' },
      { french: 'dix-sept', english: '17' },
      { french: 'dix-huit', english: '18' },
      { french: 'dix-neuf', english: '19' },
      { french: 'vingt', english: '20' },
      { french: 'trente', english: '30' },
      { french: 'quarante', english: '40' },
      { french: 'cinquante', english: '50' },
      { french: 'soixante', english: '60' },
      { french: 'soixante-dix', english: '70' },
      { french: 'quatre-vingts', english: '80' },
      { french: 'quatre-vingt-dix', english: '90' },
      { french: 'cent', english: '100' }
    ],
    grammar: [
      {
        title: 'Formation des nombres',
        explanation: 'Les nombres de 17 à 19 sont formés avec dix + unité. À partir de 21, on ajoute "et un" ou un trait d\'union.',
        examples: [
          { french: 'vingt et un', english: '21' },
          { french: 'vingt-deux', english: '22' },
          { french: 'trente-trois', english: '33' },
          { french: 'soixante-quinze', english: '75' }
        ]
      }
    ],
    tips: [
      '70 = soixante-dix (60+10), 80 = quatre-vingts (4×20), 90 = quatre-vingt-dix (4×20+10)',
      'Quatre-vingts prend un "s" sauf quand il est suivi d\'un autre nombre : quatre-vingts mais quatre-vingt-un.',
      'On utilise "et" seulement pour 21, 31, 41, 51, 61, 71 : vingt et un, mais vingt-deux.'
    ]
  }
];

// --- A1-1 Activities ---
export const activities: Activity[] = [
  {
    id: 'activity-1',
    title: 'Conjugaison : Être et Avoir',
    description: 'Pratiquez la conjugaison des verbes être et avoir au présent',
    type: 'conjugation',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe ÊTRE',
        question: 'Je ______ français.',
        correctAnswer: 'suis',
        hint: 'Première personne du singulier'
      },
      {
        id: 2,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe ÊTRE',
        question: 'Tu ______ étudiant ?',
        correctAnswer: 'es',
        hint: 'Deuxième personne du singulier'
      },
      {
        id: 3,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe ÊTRE',
        question: 'Elle ______ médecin.',
        correctAnswer: 'est',
        hint: 'Troisième personne du singulier'
      },
      {
        id: 4,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe ÊTRE',
        question: 'Nous ______ contents.',
        correctAnswer: 'sommes',
        hint: 'Première personne du pluriel'
      },
      {
        id: 5,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe AVOIR',
        question: 'J\'______ vingt ans.',
        correctAnswer: 'ai',
        hint: 'Première personne du singulier'
      },
      {
        id: 6,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe AVOIR',
        question: 'Tu ______ un frère ?',
        correctAnswer: 'as',
        hint: 'Deuxième personne du singulier'
      },
      {
        id: 7,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe AVOIR',
        question: 'Il ______ une voiture.',
        correctAnswer: 'a',
        hint: 'Troisième personne du singulier'
      },
      {
        id: 8,
        type: 'fill-blank',
        instruction: 'Complétez avec la forme correcte du verbe AVOIR',
        question: 'Vous ______ faim ?',
        correctAnswer: 'avez',
        hint: 'Deuxième personne du pluriel'
      }
    ]
  },
  {
    id: 'activity-2',
    title: 'Les articles : Définis ou Indéfinis ?',
    description: 'Choisissez le bon article pour chaque phrase',
    type: 'grammar',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Choisissez le bon article',
        question: '______ soleil brille aujourd\'hui.',
        options: ['Le', 'Un', 'La', 'Une'],
        correctAnswer: 0,
        hint: 'Le soleil est unique, on le connaît'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Choisissez le bon article',
        question: 'J\'ai ______ chat à la maison.',
        options: ['le', 'un', 'la', 'une'],
        correctAnswer: 1,
        hint: 'On introduit le chat pour la première fois'
      },
      {
        id: 3,
        type: 'multiple-choice',
        instruction: 'Choisissez le bon article',
        question: '______ école est fermée le dimanche.',
        options: ['Le', 'Un', 'L\'', 'Une'],
        correctAnswer: 2,
        hint: 'Devant une voyelle, on utilise l\''
      },
      {
        id: 4,
        type: 'multiple-choice',
        instruction: 'Choisissez le bon article',
        question: 'C\'est ______ bonne idée !',
        options: ['la', 'un', 'le', 'une'],
        correctAnswer: 3,
        hint: '"Idée" est féminin'
      },
      {
        id: 5,
        type: 'multiple-choice',
        instruction: 'Choisissez le bon article',
        question: '______ enfants jouent dans le parc.',
        options: ['Le', 'Des', 'Les', 'Un'],
        correctAnswer: 2,
        hint: 'On parle d\'enfants spécifiques, connus'
      },
      {
        id: 6,
        type: 'multiple-choice',
        instruction: 'Choisissez le bon article',
        question: 'J\'achète ______ livres.',
        options: ['les', 'des', 'un', 'une'],
        correctAnswer: 1,
        hint: 'On ne sait pas quels livres exactement'
      }
    ]
  },
  {
    id: 'activity-3',
    title: 'Les nombres : Écrivez en lettres',
    description: 'Écrivez les nombres en toutes lettres',
    type: 'vocabulary',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Écrivez le nombre en lettres',
        question: '15 = ______',
        correctAnswer: 'quinze'
      },
      {
        id: 2,
        type: 'fill-blank',
        instruction: 'Écrivez le nombre en lettres',
        question: '21 = ______',
        correctAnswer: 'vingt et un'
      },
      {
        id: 3,
        type: 'fill-blank',
        instruction: 'Écrivez le nombre en lettres',
        question: '45 = ______',
        correctAnswer: 'quarante-cinq'
      },
      {
        id: 4,
        type: 'fill-blank',
        instruction: 'Écrivez le nombre en lettres',
        question: '70 = ______',
        correctAnswer: 'soixante-dix'
      },
      {
        id: 5,
        type: 'fill-blank',
        instruction: 'Écrivez le nombre en lettres',
        question: '83 = ______',
        correctAnswer: 'quatre-vingt-trois'
      },
      {
        id: 6,
        type: 'fill-blank',
        instruction: 'Écrivez le nombre en lettres',
        question: '99 = ______',
        correctAnswer: 'quatre-vingt-dix-neuf'
      }
    ]
  }
];

// --- A1-1 Quiz Questions ---
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Vous rencontrez le directeur de votre école pour la première fois. Que dites-vous ?',
    options: ['Salut', 'Bonjour', 'Coucou', 'Hé'],
    correctAnswer: 1,
    explanation: '"Bonjour" est la salutation formelle standard en français.'
  },
  {
    id: 2,
    question: 'Complétez : Je ______ étudiant.',
    options: ['ai', 'suis', 'as', 'est'],
    correctAnswer: 1,
    explanation: 'On utilise le verbe "être" pour décrire une profession ou un statut.'
  },
  {
    id: 3,
    question: 'Quel est l\'article correct ? ______ maison',
    options: ['Le', 'La', 'Les', 'Un'],
    correctAnswer: 1,
    explanation: '"Maison" est un nom féminin, donc on utilise "la".'
  },
  {
    id: 4,
    question: 'Comment écrit-on le nombre 21 en lettres ?',
    options: ['Vingt-un', 'Vingt et un', 'Vingt-et-un', 'Vingte un'],
    correctAnswer: 1,
    explanation: 'On dit "vingt et un" avec "et" (sans trait d\'union).'
  },
  {
    id: 5,
    question: 'Complétez : Tu ______ quel âge ?',
    options: ['es', 'as', 'suis', 'a'],
    correctAnswer: 1,
    explanation: 'En français, on utilise "avoir" pour l\'âge : "Tu as quel âge ?"'
  },
  {
    id: 6,
    question: 'Quel article utilise-t-on devant une voyelle ?',
    options: ['Le', 'La', 'L\'', 'Les'],
    correctAnswer: 2,
    explanation: 'Devant une voyelle ou un h muet, "le" et "la" deviennent "l\'".'
  },
  {
    id: 7,
    question: 'Comment écrit-on le nombre 70 en lettres ?',
    options: ['Septante', 'Soixante-dix', 'Soixante et dix', 'Sept-dix'],
    correctAnswer: 1,
    explanation: 'En France, 70 se dit "soixante-dix" (60+10).'
  },
  {
    id: 8,
    question: 'Complétez : Nous ______ français.',
    options: ['sont', 'êtes', 'sommes', 'suis'],
    correctAnswer: 2,
    explanation: '"Nous sommes" est la conjugaison du verbe être à la première personne du pluriel.'
  },
  {
    id: 9,
    question: 'Quel est le pluriel de "un livre" ?',
    options: ['les livres', 'des livres', 'uns livres', 'livre'],
    correctAnswer: 1,
    explanation: 'Le pluriel de "un/une" est "des".'
  },
  {
    id: 10,
    question: 'Vous rencontrez un nouvel ami. Après les présentations, vous dites :',
    options: ['Bonjour', 'Au revoir', 'Enchanté', 'Merci'],
    correctAnswer: 2,
    explanation: '"Enchanté" ou "Enchantée" signifie "Nice to meet you".'
  }
];

// Helper function to convert quiz questions to EnhancedEvaluation format
export const getEnhancedQuizQuestions = () => {
  return quizQuestions.map(q => ({
    id: String(q.id),
    type: 'multiple-choice' as const,
    question: q.question,
    instruction: 'Choisissez la bonne réponse',
    options: q.options.map((option, index) => ({
      id: index.toString(),
      text: option,
      isCorrect: index === q.correctAnswer
    })),
    correctAnswer: q.correctAnswer.toString()
  }));
};
