// A2 Language Data: Grammar, Vocabulary, and Syntax
// This file contains presentations, activities, and quiz data for A2 level

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
  type: 'fill-blank' | 'matching' | 'multiple-choice' | 'reorder' | 'true-false'; // Added true-false for consistency
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
  type: 'vocabulary' | 'grammar' | 'conjugation' | 'speaking' | 'writing'; // Added speaking and writing for consistency
  questions: ActivityQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// --- A2 Presentations ---

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

      { french: 'hier', english: 'yesterday', example: 'Hier, j\'ai visité le musée.' },

      { french: 'la semaine dernière', english: 'last week', example: 'La semaine dernière, nous sommes allés au cinéma.' },

      { french: 'déjà', english: 'already', example: 'Tu as déjà mangé ?' },

      { french: 'j\'ai mangé', english: 'I ate / I have eaten' },

      { french: 'je suis allé(e)', english: 'I went / I have gone' }

    ],

    grammar: [

      {

        title: 'Formation avec AVOIR',

        explanation: 'La plupart des verbes utilisent l\'auxiliaire "avoir" au présent + le participe passé du verbe.',

        examples: [

          { french: 'J\'ai parlé', english: 'I spoke' },

          { french: 'Tu as fini', english: 'You finished' },

          { french: 'Il a vendu', english: 'He sold' }

        ]

      },

      {

        title: 'Formation avec ÊTRE',

        explanation: 'Les verbes de mouvement et les verbes pronominaux utilisent "être". Le participe passé s\'accorde avec le sujet.',

        examples: [

          { french: 'Je suis allé(e)', english: 'I went' },

          { french: 'Elle est partie', english: 'She left' },

          { french: 'Nous nous sommes levés', english: 'We got up' }

        ]

      }

    ],

    tips: [

      'Le choix entre "avoir" et "être" est crucial. Mémorisez la liste des verbes avec "être" (la maison d\'être).',

      'N\'oubliez pas d\'accorder le participe passé en genre et en nombre avec "être".'

    ]

  },

  // {

  //   id: 'presentation-a2-2',

  //   title: 'L\'Imparfait',

  //   description: 'Apprenez à décrire des situations passées et des habitudes avec l\'imparfait.',

  //   objectives: [

  //     'Savoir quand utiliser l\'imparfait',

  //     'Former l\'imparfait pour tous les groupes de verbes',

  //     'Différencier l\'imparfait et le passé composé'

  //   ],

  //   vocabulary: [

  //     { french: 'avant', english: 'before', example: 'Avant, j\'habitais à la campagne.' },

  //     { french: 'tous les jours', english: 'every day', example: 'Tous les jours, il lisait le journal.' },

  //     { french: 'd\'habitude', english: 'usually', example: 'D\'habitude, nous mangions à 19h.' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'Formation de l\'Imparfait',

  //       explanation: 'On prend le radical de la première personne du pluriel (nous) au présent et on ajoute les terminaisons: -ais, -ais, -ait, -ions, -iez, -aient.',

  //       examples: [

  //         { french: 'Je parlais (nous parlons)', english: 'I was speaking' },

  //         { french: 'Tu finissais (nous finissons)', english: 'You were finishing' },

  //         { french: 'Il faisait (nous faisons)', english: 'He was doing' }

  //       ]

  //     },

  //     {

  //       title: 'Usage de l\'Imparfait',

  //       explanation: 'L\'imparfait est utilisé pour la description dans le passé, les habitudes, les actions en cours dans le passé.',

  //       examples: [

  //         { french: 'Le soleil brillait et les oiseaux chantaient.', english: 'The sun was shining and the birds were singing.' },

  //         { french: 'Quand j\'étais petit, j\'aimais les dessins animés.', english: 'When I was young, I liked cartoons.' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'Pensez à l\'imparfait comme à une "photo" de fond dans le passé, et le passé composé comme à une "action" ponctuelle.',

  //     'Le verbe "être" est le seul verbe irrégulier à l\'imparfait: j\'étais, tu étais, il était...' 

  //   ]

  // },

  {

    id: 'presentation-a2-3',

    title: 'Les pronoms personnels COI',

    description: 'Apprenez à utiliser les pronoms objets indirects pour éviter les répétitions.',

    objectives: [

      'Identifier le complément d\'objet indirect (COI)',

      'Placer correctement les pronoms COI (me, te, lui, nous, vous, leur)',

      'Éviter les répétitions dans la phrase'

    ],

    vocabulary: [

      { french: 'parler à', english: 'to talk to' },

      { french: 'téléphoner à', english: 'to call' },

      { french: 'rendre visite à', english: 'to visit (a person)' }

    ],

    grammar: [

      {

        title: 'Place des pronoms COI',

        explanation: 'Les pronoms COI se placent devant le verbe conjugué (ou l\'auxiliaire au passé composé). À l\'impératif affirmatif, ils se placent après le verbe et sont liés par un trait d\'union.',

        examples: [

          { french: 'Je parle à Marie. -> Je lui parle.', english: 'I talk to Marie. -> I talk to her.' },

          { french: 'Nous téléphonons à nos parents. -> Nous leur téléphonons.', english: 'We call our parents. -> We call them.' },

          { french: 'Parlez-lui !', english: 'Talk to him/her!' }

        ]

      }

    ],

    tips: [

      'Les pronoms COI répondent à la question "à qui ?" ou "à quoi ?".',

      'Ne confondez pas "lui" (COI singulier) et "leur" (COI pluriel).'

    ]

  },

  // {

  //   id: 'presentation-a2-4',

  //   title: 'Les pronoms EN et Y',

  //   description: 'Maîtrisez l\'utilisation des pronoms EN (de lieu, de quantité) et Y (de lieu, à/chez/dans).',

  //   objectives: [

  //     'Distinguer les usages de EN et Y',

  //     'Utiliser correctement EN pour la quantité et le complément de lieu introduit par "de"',

  //     'Utiliser correctement Y pour le complément de lieu introduit par "à", "chez", "dans"'

  //   ],

  //   vocabulary: [

  //     { french: 'du pain', english: 'some bread' },

  //     { french: 'du lait', english: 'some milk' },

  //     { french: 'à Paris', english: 'in Paris' },

  //     { french: 'à la maison', english: 'at home' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'Usage du pronom EN',

  //       explanation: 'EN remplace un complément introduit par "de" (de lieu ou de quantité).',

  //       examples: [

  //         { french: 'Je viens de Paris. -> J\'en viens.', english: 'I come from Paris. -> I come from there.' },

  //         { french: 'J\'ai trois stylos. -> J\'en ai trois.', english: 'I have three pens. -> I have three of them.' },

  //         { french: 'Je mange du pain. -> J\'en mange.', english: 'I eat some bread. -> I eat some.' }

  //       ]

  //     },

  //     {

  //       title: 'Usage du pronom Y',

  //       explanation: 'Y remplace un complément de lieu introduit par "à", "en", "dans", "chez", "sur", "sous", etc.',

  //       examples: [

  //         { french: 'Je vais à Paris. -> J\'y vais.', english: 'I go to Paris. -> I go there.' },

  //         { french: 'Il pense à ses vacances. -> Il y pense.', english: 'He thinks about his vacation. -> He thinks about it.' },

  //         { french: 'Je suis dans la cuisine. -> J\'y suis.', english: 'I am in the kitchen. -> I am there.' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'La place de EN et Y est la même que celle des pronoms COI : devant le verbe.',

  //     'Attention à ne pas confondre EN et Y avec les pronoms personnels ou les articles.'

  //   ]

  // },

  // {

  //   id: 'presentation-a2-5',

  //   title: 'Les pronoms relatifs (QUI/QUE/OÙ)',

  //   description: 'Connectez des phrases et évitez les répétitions avec les pronoms relatifs simples.',

  //   objectives: [

  //     'Utiliser QUI comme sujet',

  //     'Utiliser QUE comme COD',

  //     'Utiliser OÙ pour le lieu ou le temps'

  //   ],

  //   vocabulary: [

  //     { french: 'la personne', english: 'the person' },

  //     { french: 'le livre', english: 'the book' },

  //     { french: 'le moment', english: 'the moment' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'QUI (sujet)',

  //       explanation: 'QUI remplace une personne ou une chose qui est le sujet du verbe de la proposition subordonnée.',

  //       examples: [

  //         { french: 'Je connais un homme. Il parle français. -> Je connais un homme qui parle français.', english: 'I know a man. He speaks French. -> I know a man who speaks French.' }

  //       ]

  //     },

  //     {

  //       title: 'QUE (complément d\'objet direct - COD)',

  //       explanation: 'QUE remplace une personne ou une chose qui est le COD du verbe de la proposition subordonnée.',

  //       examples: [

  //         { french: 'C\'est le livre. Je l\'ai lu. -> C\'est le livre que j\'ai lu.', english: 'It\'s the book. I read it. -> It\'s the book that I read.' }

  //       ]

  //     },

  //     {

  //       title: 'OÙ (lieu ou temps)',

  //       explanation: 'OÙ remplace un complément de lieu ou de temps.',

  //       examples: [

  //         { french: 'C\'est la ville. J\'y suis né. -> C\'est la ville où je suis né.', english: 'It\'s the city. I was born there. -> It\'s the city where I was born.' },

  //         { french: 'C\'est le jour. Nous nous sommes rencontrés ce jour-là. -> C\'est le jour où nous nous sommes rencontrés.', english: 'It\'s the day. We met that day. -> It\'s the day when we met.' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'QUI est toujours suivi d\'un verbe.',

  //     'QUE est toujours suivi d\'un sujet puis d\'un verbe (sauf inversion).',

  //     'OÙ peut être remplacé par "dans lequel", "à laquelle", "pendant lequel" etc.'

  //   ]

  // },

  // {

  //   id: 'presentation-a2-6',

  //   title: 'Le Futur Simple',

  //   description: 'Exprimez des actions futures, des projets et des prédictions.',

  //   objectives: [

  //     'Former le futur simple des verbes réguliers',

  //     'Connaître les verbes irréguliers du futur simple',

  //     'Utiliser le futur simple pour parler de l\'avenir'

  //   ],

  //   vocabulary: [

  //     { french: 'demain', english: 'tomorrow' },

  //     { french: 'la semaine prochaine', english: 'next week' },

  //     { french: 'plus tard', english: 'later' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'Formation du Futur Simple',

  //       explanation: 'Pour les verbes réguliers, on ajoute les terminaisons (-ai, -as, -a, -ons, -ez, -ont) à l\'infinitif du verbe.',

  //       examples: [

  //         { french: 'Je parlerai', english: 'I will speak' },

  //         { french: 'Tu finiras', english: 'You will finish' },

  //         { french: 'Il vendra', english: 'He will sell' }

  //       ]

  //     },

  //     {

  //       title: 'Verbes irréguliers courants',

  //       explanation: 'Certains verbes ont un radical irrégulier au futur simple (être -> ser-, avoir -> aur-, aller -> ir-, faire -> fer-, etc.).',

  //       examples: [

  //         { french: 'Je serai', english: 'I will be' },

  //         { french: 'Tu auras', english: 'You will have' },

  //         { french: 'Il fera', english: 'He will do' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'Le futur simple est utilisé pour des actions qui se produiront avec certitude.',

  //     'Ne confondez pas le futur simple avec le futur proche (aller + infinitif).'

  //   ]

  // },

  // {

  //   id: 'presentation-a2-7',

  //   title: 'Les comparatifs',

  //   description: 'Comparez des personnes, des choses ou des actions en français.',

  //   objectives: [

  //     'Utiliser "plus... que" pour la supériorité',

  //     'Utiliser "moins... que" pour l\'infériorité',

  //     'Utiliser "aussi... que" pour l\'égalité'

  //   ],

  //   vocabulary: [

  //     { french: 'grand', english: 'tall' },

  //     { french: 'petit', english: 'small' },

  //     { french: 'intéressant', english: 'interesting' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'Comparatif de supériorité',

  //       explanation: 'plus + adjectif/adverbe + que',

  //       examples: [

  //         { french: 'Marie est plus grande que Sophie.', english: 'Marie is taller than Sophie.' },

  //         { french: 'Il travaille plus vite que moi.', english: 'He works faster than me.' }

  //       ]

  //     },

  //     {

  //       title: 'Comparatif d\'infériorité',

  //       explanation: 'moins + adjectif/adverbe + que',

  //       examples: [

  //         { french: 'Ce film est moins intéressant que l\'autre.', english: 'This movie is less interesting than the other one.' }

  //       ]

  //     },

  //     {

  //       title: 'Comparatif d\'égalité',

  //       explanation: 'aussi + adjectif/adverbe + que',

  //       examples: [

  //         { french: 'Il est aussi intelligent que sa sœur.', english: 'He is as intelligent as his sister.' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'Les comparatifs peuvent être utilisés avec des adjectifs, des adverbes, des noms (plus de... que) ou des verbes (travailler plus que...).',

  //     'Attention aux formes irrégulières : bon -> meilleur, bien -> mieux, mauvais -> pire.'

  //   ]

  // },

  // {

  //   id: 'presentation-a2-8',

  //   title: 'Le pronom adverbial Y (lieu)',

  //   description: 'Utilisez le pronom Y pour remplacer un complément de lieu.',

  //   objectives: [

  //     'Identifier le complément de lieu remplaçable par Y',

  //     'Placer correctement le pronom Y dans la phrase',

  //     'Éviter les répétitions de compléments de lieu'

  //   ],

  //   vocabulary: [

  //     { french: 'à la campagne', english: 'in the countryside' },

  //     { french: 'à Paris', english: 'in Paris' },

  //     { french: 'dans la cuisine', english: 'in the kitchen' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'Usage du pronom Y',

  //       explanation: 'Y remplace un complément de lieu introduit par les prépositions "à", "en", "dans", "chez", "sur", "sous", etc.',

  //       examples: [

  //         { french: 'Je vais à Paris. -> J\'y vais.', english: 'I go to Paris. -> I go there.' },

  //         { french: 'Il travaille dans ce bureau. -> Il y travaille.', english: 'He works in this office. -> He works there.' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'Le pronom Y se place devant le verbe conjugué (ou l\'auxiliaire au passé composé).',

  //     'Y peut aussi remplacer un complément d\'objet indirect introduit par "à" pour une chose (Je pense à mes vacances. -> J\'y pense.).'

  //   ]

  // },

  // {

  //   id: 'presentation-a2-9',

  //   title: 'Le Conditionnel Présent',

  //   description: 'Exprimez le souhait, le conseil, la politesse ou une hypothèse en français.',

  //   objectives: [

  //     'Former le conditionnel présent des verbes réguliers et irréguliers',

  //     'Utiliser le conditionnel présent pour le souhait, le conseil, la politesse',

  //     'Exprimer une hypothèse avec "si" + imparfait'

  //   ],

  //   vocabulary: [

  //     { french: 'j\'aimerais', english: 'I would like' },

  //     { french: 'tu devrais', english: 'you should' },

  //     { french: 'ce serait bien', english: 'it would be good' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'Formation du Conditionnel Présent',

  //       explanation: 'On prend le radical du futur simple (infinitif pour les réguliers, radical spécial pour les irréguliers) et on ajoute les terminaisons de l\'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).',

  //       examples: [

  //         { french: 'Je parlerais', english: 'I would speak' },

  //         { french: 'Tu finirais', english: 'You would finish' },

  //         { french: 'Il vendrait', english: 'He would sell' },

  //         { french: 'J\'aurais', english: 'I would have (avoir)' },

  //         { french: 'Il serait', english: 'He would be (être)' }

  //       ]

  //     },

  //     {

  //       title: 'Usages du Conditionnel Présent',

  //       explanation: 'Souhait (j\'aimerais), conseil (tu devrais), politesse (pourriez-vous), hypothèse (si j\'étais riche, j\'achèterais).',

  //       examples: [

  //         { french: 'Je voudrais un café.', english: 'I would like a coffee.' },

  //         { french: 'Vous devriez faire du sport.', english: 'You should do some sport.' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'Le conditionnel présent est souvent utilisé pour adoucir une demande ou exprimer une suggestion.',

  //     'Il est souvent utilisé avec la structure "si + imparfait" pour exprimer une hypothèse non réalisée dans le présent.'

  //   ]

  // },

  // {

  //   id: 'presentation-a2-10',

  //   title: 'Le Subjonctif (Introduction)',

  //   description: 'Découvrez les bases du subjonctif pour exprimer le doute, le sentiment, la volonté.',

  //   objectives: [

  //     'Reconnaître les contextes d\'utilisation du subjonctif (introduction)',

  //     'Former le subjonctif présent des verbes réguliers (introduction)',

  //     'Exprimer un jugement ou une obligation avec "il faut que"'

  //   ],

  //   vocabulary: [

  //     { french: 'il faut que', english: 'it is necessary that' },

  //     { french: 'je souhaite que', english: 'I wish that' },

  //     { french: 'je doute que', english: 'I doubt that' }

  //   ],

  //   grammar: [

  //     {

  //       title: 'Formation du Subjonctif Présent (réguliers)',

  //       explanation: 'On prend le radical de la 3ème personne du pluriel (ils) du présent de l\'indicatif et on ajoute les terminaisons -e, -es, -e, -ions, -iez, -ent.',

  //       examples: [

  //         { french: 'Que je parle', english: 'That I speak' },

  //         { french: 'Que tu finisses', english: 'That you finish' },

  //         { french: 'Qu\'il vende', english: 'That he sell' }

  //       ]

  //     },

  //     {

  //       title: 'Usages courants (introduction)',

  //       explanation: 'Utilisé après des verbes exprimant la volonté, le doute, le sentiment, l\'obligation (ex: il faut que).',

  //       examples: [

  //         { french: 'Il faut que je parte.', english: 'I have to leave.' },

  //         { french: 'Je doute qu\'il vienne.', english: 'I doubt he will come.' }

  //       ]

  //     }

  //   ],

  //   tips: [

  //     'Le subjonctif est souvent introduit par la conjonction "que".',

  //     'C\'est un mode verbal de l\'incertitude, du désir, du jugement, de l\'émotion.'

  //   ]

  // }

];

// --- A2 Activities ---
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
  },
  {
    id: 'activity-a2-3',
    title: 'Pronoms COI : Exercices de remplacement',
    description: 'Remplacez le COI par le pronom approprié (lui/leur).',
    type: 'grammar',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Remplacez le COI par le pronom adéquat. "Je parle à mon ami. -> Je ______ parle.",',
        question: 'Je parle à mon ami. -> Je ______ parle.',
        correctAnswer: 'lui',
        hint: 'Le COI singulier.'
      },
      {
        id: 2,
        type: 'fill-blank',
        instruction: 'Remplacez le COI par le pronom adéquat. "Elle téléphone à ses parents. -> Elle ______ téléphone.",',
        question: 'Elle téléphone à ses parents. -> Elle ______ téléphone.',
        correctAnswer: 'leur',
        hint: 'Le COI pluriel.'
      }
    ]
  },
  {
    id: 'activity-a2-4',
    title: 'Pronoms EN et Y : Phrases à trous',
    description: 'Complétez les phrases avec le pronom EN ou Y.',
    type: 'grammar',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Choisissez le pronom correct (EN ou Y). "Je viens de France. J\'______ viens.",',
        question: 'Je viens de France. J\'______ viens.',
        options: ['en', 'y'],
        correctAnswer: 0,
        hint: 'Remplacement d\'un complément introduit par "de".'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Choisissez le pronom correct (EN ou Y). "Je vais à Paris. J\'______ vais.",',
        question: 'Je vais à Paris. J\'______ vais.',
        options: ['en', 'y'],
        correctAnswer: 1,
        hint: 'Remplacement d\'un complément de lieu introduit par "à".'
      }
    ]
  },
  {
    id: 'activity-a2-5',
    title: 'Pronoms relatifs : Relier les phrases',
    description: 'Reliez deux phrases simples en utilisant le pronom relatif QUI, QUE ou OÙ.',
    type: 'grammar',
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Reliez les phrases : "Je connais une fille. Elle parle espagnol." -> "Je connais une fille ______ parle espagnol.",',
        question: 'Je connais une fille. Elle parle espagnol. -> Je connais une fille ______ parle espagnol.',
        correctAnswer: 'qui',
        hint: 'Le pronom remplace un sujet.'
      },
      {
        id: 2,
        type: 'fill-blank',
        instruction: 'Reliez les phrases : "C\'est le film. J\'ai vu ce film." -> "C\'est le film ______ j\'ai vu.",',
        question: 'C\'est le film. J\'ai vu ce film. -> C\'est le film ______ j\'ai vu.',
        correctAnswer: 'que',
        hint: 'Le pronom remplace un COD.'
      },
      {
        id: 3,
        type: 'fill-blank',
        instruction: 'Reliez les phrases : "C\'est la maison. J\'habite dans cette maison." -> "C\'est la maison ______ j\'habite.",',
        question: 'C\'est la maison. J\'habite dans cette maison. -> C\'est la maison ______ j\'habite.',
        correctAnswer: 'où',
        hint: 'Le pronom remplace un complément de lieu.'
      }
    ]
  }
];

// --- A2 Quiz Questions ---
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
    question: 'Remplacez le complément par le pronom COI correct : "Je parle à mes amis.",',
    options: ['Je les parle', 'Je leur parle', 'Je lui parle'],
    correctAnswer: 1,
    explanation: '"Mes amis" est un COI pluriel, donc on utilise "leur".'
  },
  {
    id: 6,
    question: 'Quel pronom convient : "Je vais au supermarché. J\'______ vais.",',
    options: ['en', 'y', 'le'],
    correctAnswer: 1,
    explanation: '"Au supermarché" est un complément de lieu, remplacé par "y".'
  },
  {
    id: 7,
    question: 'Quel pronom relatif est correct : "C\'est la voiture ______ est rapide.",',
    options: ['qui', 'que', 'où'],
    correctAnswer: 0,
    explanation: '"Est rapide" est le verbe, donc il faut un pronom sujet : "qui".'
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