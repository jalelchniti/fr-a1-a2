export interface VocabularyItem {
  french: string;
  example?: string;
  audio?: string;
}

export interface GrammarRule {
  title: string;
  explanation: string;
  examples: { french: string }[];
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
  type: 'fill-blank' | 'matching' | 'multiple-choice' | 'reorder' | 'true-false';
  instruction: string;
  question: string;
  options?: string[];
  correctAnswer: string | number | boolean;
  hint?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'vocabulary' | 'grammar' | 'conjugation' | 'speaking' | 'writing';
  questions: ActivityQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}



export const presentations: Presentation[] = [

  {

    id: 'presentation-a2-1',

    title: 'Le Passé Composé',

    description: 'Apprenez à parler d\'événements passés avec le passé composé.',

    objectives: [

      'Savoir quand utiliser le passé composé',

      'Former le passé composé avec "avoir" et "être"',

      'Connaître les participes passés des verbes courants',

      'Accorder le participe passé avec "être"'

    ],

    vocabulary: [

            { french: 'hier', example: 'Hier, j\'ai visité le musée.' },

            { french: 'la semaine dernière', example: 'La semaine dernière, nous sommes allés au cinéma.' },

            { french: 'déjà', example: 'Tu as déjà mangé ?' },

            { french: 'j\'ai mangé' },

            { french: 'je suis allé(e)' }

    ],

    grammar: [

      {

        title: 'Formation avec AVOIR',

        explanation: 'La plupart des verbes utilisent l\'auxiliaire "avoir" au présent + le participe passé du verbe.',

        examples: [

                    { french: 'J\'ai parlé' },

                    { french: 'Tu as fini' },

                    { french: 'Il a vendu' }

        ]

      },

      {

        title: 'Formation avec ÊTRE',

        explanation: 'Les verbes de mouvement et les verbes pronominaux utilisent "être". Le participe passé s\'accorde avec le sujet.',

        examples: [

                    { french: 'Je suis allé(e)' },

                    { french: 'Elle est partie' },

                    { french: 'Nous nous sommes levés' }

        ]

      }

    ],

    tips: [

      'Le choix entre "avoir" et "être" est crucial. Mémorisez la liste des verbes avec "être" (la maison d\'être).',

      'N\'oubliez pas d\'accorder le participe passé en genre et en nombre avec "être".'

    ]
  },
  {
    id: 'presentation-a2-2',
    title: 'L\'imparfait',
    description: 'Apprenez à décrire des situations passées, des habitudes et des souvenirs avec l\'imparfait.',
    objectives: [
      'Savoir quand utiliser l\'imparfait',
      'Connaître les terminaisons de l\'imparfait pour tous les groupes de verbes',
      'Distinguer l\'usage de l\'imparfait de celui du passé composé'
    ],
    vocabulary: [
      { french: 'autrefois', example: 'Autrefois, on n\'avait pas de téléphone portable.' },
      { french: 'd\'habitude', example: 'D\'habitude, il pleuvait en automne.' },
      { french: 'tous les jours', example: 'Je jouais au parc tous les jours.' },
      { french: 'chaque année', example: 'Nous allions à la mer chaque année.' }
    ],
    grammar: [
      {
        title: 'Formation de l\'imparfait',
        explanation: 'On forme l\'imparfait à partir de la première personne du pluriel (nous) du présent de l\'indicatif. On enlève la terminaison -ons et on ajoute les terminaisons de l\'imparfait : -ais, -ais, -ait, -ions, -iez, -aient.',
        examples: [
          { french: 'Parler -> Nous parlons -> Je parlais' },
          { french: 'Finir -> Nous finissons -> Tu finissais' },
          { french: 'Prendre -> Nous prenons -> Il prenait' },
          { french: 'Être -> j\'étais, tu étais, il était, nous étions, vous étiez, ils étaient (irrégulier)' }
        ]
      }
    ],
    tips: [
      'L\'imparfait est le temps de la description et de l\'habitude dans le passé.',
      'Utilisez l\'imparfait pour le décor d\'une histoire, et le passé composé pour les actions principales.',
      'Faites attention au verbe "être", qui est la seule exception notable à la règle de formation.'
    ]
  }
];


export const activities: Activity[] = [
  {
    id: 'activity-a2-1',
    title: 'Passé Composé : Avoir ou Être ?',
    description: 'Choisissez le bon auxiliaire pour former le passé composé.',
    type: 'grammar',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Choisissez l\'auxiliaire correct.',
        question: 'Hier, je ______ allé au marché.',
        options: ['suis', 'ai', 'as', 'est'],
        correctAnswer: 0,
        hint: '"Aller" est un verbe de mouvement qui utilise "être".'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Choisissez l\'auxiliaire correct.',
        question: 'Nous ______ bien mangé au restaurant.',
        options: ['sommes', 'avez', 'avons', 'sont'],
        correctAnswer: 2,
        hint: '"Manger" utilise "avoir" comme auxiliaire.'
      },
      {
        id: 3,
        type: 'fill-blank',
        instruction: 'Complétez avec le participe passé correct : "Elles sont ______ (partir) à 10h.",',
        question: 'Elles sont ______ (partir) à 10h.',
        correctAnswer: 'parties',
        hint: 'N\'oubliez pas l\'accord du participe passé avec "être".'
      }
    ]
  },
  {
    id: 'activity-a2-2',
    title: 'Imparfait : Terminaisons',
    description: 'Complétez les verbes avec la bonne terminaison de l\'imparfait.',
    type: 'conjugation',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Mettez la bonne terminaison.',
        question: 'Quand j\'étais jeune, je jou______ beaucoup dehors.',
        correctAnswer: 'ais',
        hint: 'Première personne du singulier (je).'
      },
      {
        id: 2,
        type: 'fill-blank',
        instruction: 'Mettez la bonne terminaison.',
        question: 'Vous regard______ la télévision tous les soirs.',
        correctAnswer: 'iez',
        hint: 'Deuxième personne du pluriel (vous).'
      }
    ]
  }
];


export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Quel auxiliaire utilise le verbe "arriver" au passé composé ?',
    options: ['avoir', 'être'],
    correctAnswer: 1,
    explanation: '"Arriver" est un verbe de mouvement, il utilise donc l\'auxiliaire "être".'
  },
  {
    id: 2,
    question: 'Complétez la phrase : "La semaine dernière, elles ______ parties en vacances.",',
    options: ['ont', 'sont', 'avez', 'êtes'],
    correctAnswer: 1,
    explanation: 'Le verbe "partir" se conjugue avec "être" et le participe passé s\'accorde avec le sujet "elles".'
  },
  {
    id: 3,
    question: 'Quelle est la terminaison de l\'imparfait pour "nous" ?',
    options: ['-ons', '-ions', '-ais', '-aient'],
    correctAnswer: 1,
    explanation: 'La terminaison de l\'imparfait pour la première personne du pluriel (nous) est "-ions".'
  },
  {
    id: 4,
    question: 'L\'imparfait est utilisé pour...', 
    options: ['une action ponctuelle et terminée', 'décrire une habitude dans le passé', 'parler du futur'],
    correctAnswer: 1,
    explanation: 'L\'imparfait est idéal pour décrire des habitudes, des décors ou des situations en cours dans le passé.'
  },
  {
    id: 5,
    question: 'Le participe passé du verbe "faire" est :',
    options: ['faisé', 'fait', 'faîte', 'faisit'],
    correctAnswer: 1,
    explanation: 'Le participe passé du verbe "faire" est "fait".'
  },
  {
    id: 6,
    question: 'Choisissez la bonne forme du Passé Composé : "Hier, tu ______ (voir) un film."',
    options: ['as vu', 'avais vu', 'es vu', 'as voit'],
    correctAnswer: 0,
    explanation: 'Le verbe "voir" se conjugue avec "avoir" et son participe passé est "vu".'
  },
  {
    id: 7,
    question: 'L\'imparfait est souvent utilisé pour :',
    options: ['une action soudaine', 'une action ponctuelle', 'une description ou une habitude', 'une action future'],
    correctAnswer: 2,
    explanation: 'L\'imparfait sert à décrire des états, des habitudes ou des actions en cours dans le passé.'
  },
  {
    id: 8,
    question: 'Complétez avec l\'Imparfait : "Quand j\'étais enfant, je ______ (jouer) tous les jours."',
    options: ['jouais', 'ai joué', 'jouerai', 'joue'],
    correctAnswer: 0,
    explanation: 'Le verbe "jouer" à l\'imparfait avec "je" est "jouais".'
  },
  {
    id: 9,
    question: 'Quel verbe utilise l\'auxiliaire "être" au Passé Composé ?',
    options: ['manger', 'dormir', 'partir', 'finir'],
    correctAnswer: 2,
    explanation: '"Partir" est un verbe de mouvement et utilise l\'auxiliaire "être".'
  },
  {
    id: 10,
    question: 'Accordez le participe passé : "Elles sont ______ (venir) tard."',
    options: ['venu', 'venus', 'venue', 'venues'],
    correctAnswer: 3,
    explanation: 'Avec "être", le participe passé s\'accorde avec le sujet. "Elles" est féminin pluriel, donc "venues".'
  },
  {
    id: 11,
    question: 'Dans la phrase "Il lisait quand le téléphone a sonné.", "lisait" est à l\'imparfait car il exprime :',
    options: ['une action principale', 'une description ou une action en cours', 'une action future', 'une action habituelle'],
    correctAnswer: 1,
    explanation: 'L\'imparfait "lisait" décrit une action en cours interrompue par "le téléphone a sonné" (Passé Composé, action ponctuelle).'
  },
  {
    id: 12,
    question: 'La terminaison correcte de l\'imparfait pour "vous" du verbe "finir" est :',
    options: ['finissiez', 'finissais', 'finissaient', 'finissez'],
    correctAnswer: 0,
    explanation: 'La forme de l\'imparfait pour "vous" du verbe "finir" est "finissiez".'
  },
  {
    id: 13,
    question: 'Choisissez la phrase correcte : "Quand j\'étais jeune, j\'______ (aller) souvent à la plage."',
    options: ['suis allé', 'allais', 'ai allé', 'étais allé'],
    correctAnswer: 1,
    explanation: '"Allais" est l\'imparfait, utilisé pour exprimer une habitude dans le passé.'
  },
  {
    id: 14,
    question: 'Quel est l\'auxiliaire du verbe "courir" au Passé Composé ?',
    options: ['être', 'avoir', 'aller', 'faire'],
    correctAnswer: 1,
    explanation: '"Courir" utilise l\'auxiliaire "avoir".'
  },
  {
    id: 15,
    question: 'Complétez : "Chaque été, nous ______ (partir) en vacances."',
    options: ['sommes partis', 'partions', 'avons parti', 'partirons'],
    correctAnswer: 1,
    explanation: '"Partions" est l\'imparfait, utilisé pour une action répétée/habituelle dans le passé ("Chaque été").'
  }
];


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