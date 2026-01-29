// A2 Listening Data: Comprehension exercises and audio resources
// This file contains presentations, activities, and quiz data for A2 level listening skills

// --- Interfaces (reused from languageA2Data.ts for consistency) ---
export interface VocabularyItem {
  french: string;
  english: string;
  example?: string;
  phonetic?: string;
  audio?: string;
}

export interface ListeningText {
  id: string;
  title: string;
  context: string;
  transcript: string;
  vocabulary: VocabularyItem[];
  listeningTips: string[];
}

export interface Presentation {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  listeningTexts: ListeningText[];
  strategies: string[];
}

export interface ActivityQuestion {
  id: number;
  type: 'fill-blank' | 'matching' | 'multiple-choice' | 'reorder' | 'true-false';
  instruction: string;
  question: string;
  transcript: string;
  options?: string[];
  correctAnswer: string | number | boolean;
  hint?: string;
  audioFile?: string;
  explanation?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'vocabulary' | 'grammar' | 'conjugation' | 'listening' | 'speaking';
  questions: ActivityQuestion[];
  audioFile?: string; // For activities that are entirely audio-based
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  audioFile?: string; // For quiz questions that are audio-based
}

// --- A2 Listening Presentations ---
export const presentations: Presentation[] = [
  {
    id: 'situations-quotidiennes',
    title: 'Situations Quotidiennes et Dialogues',
    description: 'Comprendre des conversations sur la vie de tous les jours (travail, loisirs, projets).',
    objectives: [
      'Identifier le sujet principal et les points importants des dialogues.',
      'Repérer les informations factuelles (qui, quoi, où, quand, comment).',
      'Comprendre les sentiments et intentions des interlocuteurs.',
      'Suivre le déroulement d\'un événement ou d\'un projet.'
    ],
    listeningTexts: [
      {
        id: 'dialogue-cafe',
        title: 'Dialogue au café : Commander et discuter',
        context: 'Deux amis discutent de leurs projets pour le week-end en commandant au café.',
        transcript: `Serveur : Bonjour ! Vous désirez ?
Sophie : Bonjour, je voudrais un café crème, s'il vous plaît.
Marc : Et pour moi, un thé vert et une part de tarte aux pommes.
Serveur : Très bien. Et avec ceci ?
Sophie : C'est tout pour l'instant, merci.
Marc : Alors Sophie, tu fais quoi ce week-end ?
Sophie : Je pense aller visiter le nouveau musée d'art contemporain. Ça t'intéresse ?
Marc : Ah oui, bonne idée ! On pourrait y aller samedi après-midi ensemble ?
Sophie : Super ! Je t'envoie un message pour l'heure exacte.
Marc : Parfait !`,
        vocabulary: [
          { french: 'Je voudrais', english: 'I would like' },
          { french: 'un café crème', english: 'a coffee with cream' },
          { french: 'une part de tarte', english: 'a slice of pie' },
          { french: 'Ça t\'intéresse ?', english: 'Are you interested?' },
          { french: 'On pourrait', english: 'We could' },
          { french: 'l\'heure exacte', english: 'the exact time' }
        ],
        listeningTips: [
          'Prêtez attention aux formules de politesse pour commander.',
          'Notez les verbes au conditionnel ("pourrais") pour les suggestions.',
          'Identifiez les marqueurs de temps ("ce week-end", "samedi après-midi").'
        ]
      },
      {
        id: 'discussion-travail',
        title: 'Discussion au travail : Un nouveau projet',
        context: 'Deux collègues parlent d\'un nouveau projet et des tâches à répartir.',
        transcript: `Léa : Bonjour Thomas. Tu as quelques minutes ?
Thomas : Oui Léa, bien sûr. Qu'est-ce qui se passe ?
Léa : La direction nous a confié un nouveau projet très intéressant sur le développement durable.
Thomas : Ah oui, j'en ai entendu parler ! C'est une excellente nouvelle. Quelles sont les premières étapes ?
Léa : On doit d'abord faire une étude de faisabilité et ensuite présenter nos conclusions. Je pensais que tu pourrais t'occuper de la partie recherche.
Thomas : D'accord, je peux m'en charger. Et toi, tu feras quoi ?
Léa : Je vais coordonner l'équipe et préparer la présentation finale. Il faut qu'on se voie la semaine prochaine pour faire le point.
Thomas : Ça me va. Je bloque un créneau dans mon agenda.`,
        vocabulary: [
          { french: 'la direction', english: 'the management' },
          { french: 'confier un projet', english: 'to entrust a project' },
          { french: 'le développement durable', english: 'sustainable development' },
          { french: 'une étude de faisabilité', english: 'a feasibility study' },
          { french: 's\'occuper de', english: 'to take care of' },
          { french: 'faire le point', english: 'to review / to assess the situation' },
          { french: 'bloquer un créneau', english: 'to book a slot' }
        ],
        listeningTips: [
          'Repérez le vocabulaire lié au monde du travail et aux projets.',
          'Identifiez les expressions pour la répartition des tâches ("s\'occuper de").',
          'Notez l\'utilisation du subjonctif après "il faut que" pour les obligations.'
        ]
      }
    ],
    strategies: [
      'Anticiper le contenu en lisant le titre et le contexte.',
      'Identifier les mots clés et les expressions idiomatiques.',
      'Relever les informations importantes lors de la première écoute.',
      'Inférer le sens des mots inconnus à partir du contexte.',
      'Vérifier la compréhension globale avec des questions simples.'
    ]
  },
  {
    id: 'voyage-loisirs',
    title: 'Voyage et Loisirs : Planifier et raconter',
    description: 'Comprendre des conversations sur les préparatifs de voyage, les activités de loisirs et les expériences passées.',
    objectives: [
      'Saisir les détails d\'un itinéraire ou d\'un programme de voyage.',
      'Reconnaître les expressions liées aux préférences et aux choix.',
      'Comprendre le récit d\'événements passés (passé composé, imparfait).',
      'Identifier les conseils et recommandations.'
    ],
    listeningTexts: [
      {
        id: 'prep-voyage',
        title: 'Préparatifs de voyage : Choisir une destination',
        context: 'Un couple discute de sa prochaine destination de vacances et des activités à faire.',
        transcript: `Chloé : Alors, pour nos vacances d'été, tu as une idée ?
David : J'hésite entre la Corse et la Bretagne. La Corse, c'est le soleil, la mer, la randonnée...
Chloé : Oui, mais la Bretagne a aussi son charme : des paysages magnifiques, des villes historiques, et la gastronomie !
David : C'est vrai. Et il y a moins de monde en général. Qu'est-ce que tu préfères faire en vacances ?
Chloé : Moi, j'aime bien alterner entre la plage et les visites culturelles. Et toi, tu es plutôt farniente ou aventure ?
David : Un peu des deux ! Mais j'aimerais bien essayer la planche à voile cette année.
Chloé : Oh, excellente idée ! Il y a pas mal d'endroits pour ça en Bretagne.
David : Bon, alors on part en Bretagne ! Je m'occupe des réservations.`,
        vocabulary: [
          { french: 'hésiter entre', english: 'to hesitate between' },
          { french: 'la randonnée', english: 'hiking' },
          { french: 'le charme', english: 'charm' },
          { french: 'les paysages magnifiques', english: 'magnificent landscapes' },
          { french: 'la gastronomie', english: 'gastronomy' },
          { french: 'faire la planche à voile', english: 'to go windsurfing' },
          { french: 's\'occuper des réservations', english: 'to take care of the bookings' }
        ],
        listeningTips: [
          'Repérez les mots et expressions pour exprimer des préférences et des choix.',
          'Faites attention aux adjectifs pour décrire les lieux ("magnifiques", "historiques").',
          'Notez qui prend la décision finale et qui se charge de quoi.'
        ]
      },
      {
        id: 'raconter-weekend',
        title: 'Raconter son week-end : Activités et impressions',
        context: 'Deux amis racontent leur week-end, l\'un est allé à un concert, l\'autre s\'est reposé.',
        transcript: `Léa : Salut Max ! Comment s'est passé ton week-end ?
Max : Super ! Je suis allé voir le concert de "Les Yeux Noirs" samedi soir. C'était incroyable ! Et toi, tu as fait quoi ?
Léa : Moi, j'ai eu un week-end plus calme. Je me suis reposée, j'ai lu un peu, et j'ai fait de la cuisine.
Max : Ah, sympa aussi ! Tu as bien profité ?
Léa : Oui, ça fait du bien de ne rien faire parfois.
Max : La prochaine fois, on ira ensemble !`,
        vocabulary: [
          { french: 'un concert', english: 'a concert' },
          { french: 'incroyable', english: 'incredible' },
          { french: 'calme', english: 'calm' },
          { french: 'se reposer', english: 'to rest' },
          { french: 'profiter', english: 'to enjoy' },
          { french: 'l\'ambiance', english: 'the atmosphere' },
          { french: 'regretter', english: 'to regret' }
        ],
        listeningTips: [
          'Notez l\'utilisation du passé composé pour raconter des événements passés.',
          'Identifiez les mots pour exprimer des émotions et des jugements ("incroyable", "génial").',
          'Distinguez les questions pour obtenir des détails ("où exactement ?").'
        ]
      }
    ],
    strategies: [
      'Reconnaître les temps du passé pour situer les actions dans le temps.',
      'Identifier les connecteurs logiques pour suivre le fil du récit.',
      'Prêter attention aux mots indiquant des préférences ou des désaccords.',
      'Visualiser la situation pour mieux comprendre le contexte.'
    ]
  }
];

// --- A2 Listening Activities ---
export const activities: Activity[] = [
  {
    id: 'a2-listening-activity-1',
    title: 'Échauffement oral : Chiffres et infos pratiques',
    description: 'Comprendre et noter des informations chiffrées (numéros de téléphone, prix, dates).',
    type: 'listening',
    audioFile: 'audio/a2/seance1_echauffement_oral.mp3', // Placeholder for an audio file
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Écoutez le numéro de téléphone et écrivez-le.',
        question: 'Numéro de téléphone : ______',
        transcript: 'Le numéro de téléphone est le 06 21 45 89 03',
        correctAnswer: '0621458903', // Example from PDF
        hint: 'N\'oubliez pas l\'indicatif régional.',
        explanation: 'Le numéro de téléphone était 06 21 45 89 03.'
      },
      {
        id: 2,
        type: 'fill-blank',
        instruction: 'Écoutez le prix et écrivez-le en chiffres.',
        question: 'Prix : ______ €',
        transcript: 'Le prix est de 25 euros.',
        correctAnswer: '25', // Example from PDF
        hint: 'C\'est le prix d\'un article.',
        explanation: 'Le prix était de 25 euros.'
      },
      {
        id: 3,
        type: 'fill-blank',
        instruction: 'Écoutez la date et écrivez-la.',
        question: 'Date : ______',
        transcript: 'La date est le 14 juillet 2026.',
        correctAnswer: '14 juillet 2026', // Example from PDF
        hint: 'Une date importante.',
        explanation: 'La date était le 14 juillet 2026.'
      }
    ]
  },
  {
    id: 'a2-listening-activity-2',
    title: 'Mini-dialogues guidés : Compléter',
    description: 'Compléter des mini-dialogues avec les mots manquants suite à une écoute.',
    type: 'listening',
    audioFile: 'audio/a2/seance1_mini_dialogues.mp3', // Placeholder for an audio file
    questions: [
      {
        id: 1,
        type: 'fill-blank',
        instruction: 'Complétez le dialogue : "Bonjour, je voudrais ______ un billet."',
        question: 'Bonjour, je voudrais ______ un billet.',
        transcript: 'Bonjour, je voudrais acheter un billet.',
        correctAnswer: 'acheter', // Assumed from context
        hint: 'Le verbe qui exprime l\'action d\'obtenir un billet.',
        explanation: 'Le verbe manquant était "acheter".'
      },
      {
        id: 2,
        type: 'fill-blank',
        instruction: 'Complétez le dialogue : "C\'est pour quelle ______ ?"',
        question: 'C\'est pour quelle ______ ?',
        transcript: 'C\'est pour quelle date ?',
        correctAnswer: 'date',
        hint: 'On demande une information de temps.',
        explanation: 'Le mot manquant était "date".'
      },
      {
        id: 3,
        type: 'fill-blank',
        instruction: 'Complétez le dialogue : "Pour le ______ janvier."',
        question: 'Pour le ______ janvier.',
        transcript: 'Pour le 25 janvier.',
        correctAnswer: '25', // Arbitrary example
        hint: 'Un numéro de jour.',
        explanation: 'Le jour manquant était "25".'
      }
    ]
  },
  {
    id: 'a2-listening-activity-3',
    title: 'Compréhension de l\'oral : Routine quotidienne',
    description: 'Écouter un dialogue et répondre à des questions de compréhension.',
    type: 'listening',
    audioFile: 'audio/a2/seance1_dialogue_quotidien.mp3', // Placeholder for an audio file
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Écoutez le dialogue et choisissez la bonne réponse.',
        question: 'À quelle heure la personne s\'est-elle levée ?',
        transcript: 'Hier, je me suis levé à 7h, puis je me suis préparé rapidement. Le soir, je me suis reposé.',
        options: ['À 6h', 'À 7h', 'À 8h'],
        correctAnswer: 1, // Based on "Hier, je me suis levé(e) à 7h."
        hint: 'L\'heure est mentionnée au début du dialogue.',
        explanation: 'La personne a dit : "Hier, je me suis levé à 7h".'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Écoutez le dialogue et choisissez la bonne réponse.',
        question: 'Qu\'a-t-elle fait le matin ?',
        transcript: 'Hier, je me suis levé à 7h, puis je me suis préparé rapidement. Le soir, je me suis reposé.',
        options: ['Elle a lu un livre', 'Elle s\'est préparée rapidement', 'Elle a regardé la télévision'],
        correctAnswer: 1, // Based on "Je me suis préparé(e) rapidement."
        hint: 'L\'action suivant le lever.',
        explanation: 'La personne a dit : "je me suis préparé rapidement".'
      },
      {
        id: 3,
        type: 'multiple-choice',
        instruction: 'Écoutez le dialogue et choisissez la bonne réponse.',
        question: 'Que fait-elle le soir ?',
        transcript: 'Hier, je me suis levé à 7h, puis je me suis préparé rapidement. Le soir, je me suis reposé.',
        options: ['Elle travaille', 'Elle se repose', 'Elle sort avec des amis'],
        correctAnswer: 1, // Based on "Le soir, je me suis reposé(e)."
        hint: 'L\'activité mentionnée pour la fin de journée.',
        explanation: 'La personne a dit : "Le soir, je me suis reposé".'
      }
    ]
  },
  {
    id: 'a2-listening-activity-4',
    title: 'Compréhension de l\'oral : Dialogues du quotidien (A2)',
    description: 'Comprendre des dialogues sur des sujets familiers et des activités quotidiennes.',
    type: 'listening',
    audioFile: 'audio/a2/dialogues_quotidiens_a2.mp3', // Placeholder
    questions: [
      {
        id: 1,
        type: 'true-false',
        instruction: 'Écoutez le dialogue. La personne parle-t-elle de ses vacances ?',
        question: 'La personne parle-t-elle de ses vacances ?',
        transcript: 'Salut, ça va ? Tu as fait quoi ce week-end ? J\'ai juste lu un livre.',
        options: ['Vrai', 'Faux'],
        correctAnswer: false, // Assuming general daily life dialogues
        hint: 'Écoutez bien le thème général de la conversation.',
        explanation: 'La personne parle de son week-end, pas de ses vacances.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Selon le dialogue, où se passe la scène ?',
        question: 'Où se passe la scène ?',
        transcript: 'Bonjour, je voudrais un café, s\'il vous plaît. Et un croissant.',
        options: ['Au supermarché', 'À la maison', 'Au café', 'Dans la rue'],
        correctAnswer: 2, // Example
        hint: 'Un lieu commun pour une conversation informelle.',
        explanation: 'On commande un café et un croissant, ce qui se passe généralement dans un café.'
      }
    ]
  }
];

// --- A2 Listening Quiz Questions ---
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Écoutez et choisissez le chiffre que vous entendez.',
    audioFile: 'audio/a2/quiz_chiffre_1.mp3', // Placeholder
    options: ['25', '52', '15', '50'],
    correctAnswer: 0, // Example
    explanation: 'Le chiffre 25.'
  },
  {
    id: 2,
    question: 'Écoutez le message. La personne est-elle en retard ?',
    audioFile: 'audio/a2/quiz_message_retard.mp3', // Placeholder
    options: ['Oui', 'Non'],
    correctAnswer: 0, // Example
    explanation: 'Le message indique un retard.'
  }
];

// Helper function to convert quiz questions to EnhancedEvaluation format
export const getEnhancedQuizQuestions = () => {
  return quizQuestions.map(q => ({
    id: String(q.id),
    type: q.options.length === 2 ? 'true-false' as const : 'multiple-choice' as const,
    question: q.question,
    instruction: 'Écoutez l\'audio et choisissez la bonne réponse',
    options: q.options.map((option, index) => ({
      id: index.toString(),
      text: option,
      isCorrect: index === q.correctAnswer
    })),
    correctAnswer: q.correctAnswer.toString(),
    explanation: q.explanation,
    audioFile: q.audioFile
  }));
};
