// A1-1 Listening Data - Compréhension Orale

export interface VocabularyItem {
  french: string;
  english: string;
  phonetic?: string;
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
  type: 'multiple-choice' | 'true-false' | 'fill-blank';
  instruction: string;
  transcript: string;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: string;
  questions: ActivityQuestion[];
}

export interface QuizQuestion {
  id: number;
  transcript: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

// Presentations Data
export const presentations: Presentation[] = [
  {
    id: 'salutations-presentations',
    title: 'Salutations et Présentations',
    description: 'Comprendre les dialogues de salutation et de présentation',
    objectives: [
      'Reconnaître les formules de salutation',
      'Comprendre les présentations simples',
      'Identifier les informations personnelles (nom, âge, nationalité)',
      'Distinguer le registre formel et informel'
    ],
    listeningTexts: [
      {
        id: 'dialogue-1',
        title: 'Dialogue 1 : Rencontre informelle',
        context: 'Deux étudiants se rencontrent à l\'université',
        transcript: 'Lucas : Salut ! Moi, c\'est Lucas. Et toi, tu t\'appelles comment ?\nMarie : Salut Lucas ! Je m\'appelle Marie. Tu es étudiant ici ?\nLucas : Oui, j\'étudie l\'informatique. Et toi ?\nMarie : Moi, j\'étudie le français. Je suis espagnole.\nLucas : Ah, c\'est super ! Tu habites où ?\nMarie : J\'habite près de l\'université, dans le quartier Saint-Michel.',
        vocabulary: [
          { french: 'Salut', english: 'Hi / Hello (informal)', phonetic: 'sa-ly' },
          { french: 'Tu t\'appelles comment ?', english: 'What\'s your name?', phonetic: 'ty ta-pel ko-mɑ̃' },
          { french: 'J\'étudie', english: 'I study', phonetic: 'ʒe-ty-di' },
          { french: 'Tu habites où ?', english: 'Where do you live?', phonetic: 'ty a-bit u' },
          { french: 'près de', english: 'near', phonetic: 'prɛ də' }
        ],
        listeningTips: [
          'Écoutez l\'intonation montante pour les questions',
          'Repérez les mots clés : nom, nationalité, études, lieu',
          'Notez le tutoiement (tu) qui indique une conversation informelle'
        ]
      },
      {
        id: 'dialogue-2',
        title: 'Dialogue 2 : Rencontre formelle',
        context: 'Un entretien professionnel',
        transcript: 'Réceptionniste : Bonjour Monsieur. Comment vous appelez-vous ?\nM. Dupont : Bonjour. Je m\'appelle Pierre Dupont.\nRéceptionniste : Enchanté, Monsieur Dupont. D\'où venez-vous ?\nM. Dupont : Je viens de Lyon. Je suis français.\nRéceptionniste : Quelle est votre profession ?\nM. Dupont : Je suis ingénieur.',
        vocabulary: [
          { french: 'Bonjour', english: 'Good morning / Hello (formal)', phonetic: 'bɔ̃-ʒur' },
          { french: 'Comment vous appelez-vous ?', english: 'What is your name? (formal)', phonetic: 'ko-mɑ̃ vu za-ple vu' },
          { french: 'Enchanté', english: 'Nice to meet you', phonetic: 'ɑ̃-ʃɑ̃-te' },
          { french: 'D\'où venez-vous ?', english: 'Where do you come from?', phonetic: 'du və-ne vu' },
          { french: 'Quelle est votre profession ?', english: 'What is your job?', phonetic: 'kɛl ɛ vɔtr prɔ-fɛ-sjɔ̃' }
        ],
        listeningTips: [
          'Le vouvoiement (vous) indique une situation formelle',
          'Monsieur/Madame sont utilisés dans les contextes professionnels',
          'Les questions formelles utilisent l\'inversion sujet-verbe'
        ]
      }
    ],
    strategies: [
      'Écouter d\'abord pour comprendre le contexte général',
      'Se concentrer sur les mots clés lors de la deuxième écoute',
      'Identifier le registre (formel/informel) par le tu/vous',
      'Repérer les indices sonores : intonation, pauses',
      'Ne pas s\'arrêter sur les mots inconnus'
    ]
  },
  {
    id: 'vie-quotidienne',
    title: 'La Vie Quotidienne',
    description: 'Comprendre les conversations sur les activités quotidiennes',
    objectives: [
      'Comprendre les horaires et les heures',
      'Identifier les activités quotidiennes',
      'Reconnaître les expressions de fréquence',
      'Suivre une description de routine'
    ],
    listeningTexts: [
      {
        id: 'routine-1',
        title: 'Ma journée typique',
        context: 'Sophie décrit sa routine quotidienne',
        transcript: 'Je me lève à sept heures du matin. D\'abord, je prends mon petit-déjeuner : un café et des tartines. Ensuite, je me douche et je m\'habille. Je quitte la maison à huit heures. Je travaille de neuf heures à midi. À midi, je déjeune à la cantine. L\'après-midi, je travaille jusqu\'à dix-huit heures. Le soir, je rentre chez moi, je dîne et je regarde la télévision. Je me couche vers vingt-trois heures.',
        vocabulary: [
          { french: 'Je me lève', english: 'I wake up / get up', phonetic: 'ʒə mə lɛv' },
          { french: 'le petit-déjeuner', english: 'breakfast', phonetic: 'pə-ti de-ʒœ-ne' },
          { french: 'Je me douche', english: 'I shower', phonetic: 'ʒə mə duʃ' },
          { french: 'Je quitte', english: 'I leave', phonetic: 'ʒə kit' },
          { french: 'la cantine', english: 'the canteen', phonetic: 'la kɑ̃-tin' },
          { french: 'Je me couche', english: 'I go to bed', phonetic: 'ʒə mə kuʃ' }
        ],
        listeningTips: [
          'Repérez les indicateurs temporels : d\'abord, ensuite, le soir',
          'Notez les heures mentionnées',
          'Identifiez les verbes pronominaux (se lever, se doucher, se coucher)'
        ]
      },
      {
        id: 'weekend-1',
        title: 'Le week-end',
        context: 'Marc parle de son week-end',
        transcript: 'Le week-end, je ne travaille pas. Le samedi matin, je fais les courses au marché. L\'après-midi, je fais du sport : je joue au football avec mes amis. Le samedi soir, je sors souvent au restaurant ou au cinéma. Le dimanche, je me repose. Je lis, j\'écoute de la musique ou je regarde des films. Parfois, je rends visite à ma famille.',
        vocabulary: [
          { french: 'faire les courses', english: 'to do the shopping', phonetic: 'fɛr le kurs' },
          { french: 'faire du sport', english: 'to do sports', phonetic: 'fɛr dy spɔr' },
          { french: 'je sors', english: 'I go out', phonetic: 'ʒə sɔr' },
          { french: 'souvent', english: 'often', phonetic: 'su-vɑ̃' },
          { french: 'parfois', english: 'sometimes', phonetic: 'par-fwa' },
          { french: 'rendre visite à', english: 'to visit (someone)', phonetic: 'rɑ̃dr vi-zit a' }
        ],
        listeningTips: [
          'Distinguez les activités du samedi et du dimanche',
          'Repérez les expressions de fréquence : souvent, parfois',
          'Notez les loisirs mentionnés'
        ]
      }
    ],
    strategies: [
      'Créer une timeline mentale des événements',
      'Associer les heures aux activités',
      'Repérer les marqueurs de temps',
      'Distinguer les actions habituelles des actions ponctuelles',
      'Faire attention aux expressions de fréquence'
    ]
  },
  {
    id: 'directions-lieux',
    title: 'Directions et Lieux',
    description: 'Comprendre les indications de direction et les descriptions de lieux',
    objectives: [
      'Comprendre les directions simples',
      'Identifier les lieux dans une ville',
      'Suivre un itinéraire',
      'Reconnaître les prépositions de lieu'
    ],
    listeningTexts: [
      {
        id: 'direction-1',
        title: 'Demander son chemin',
        context: 'Un touriste demande son chemin dans la rue',
        transcript: 'Touriste : Excusez-moi, je cherche la gare. C\'est loin d\'ici ?\nPassant : Non, ce n\'est pas loin. Allez tout droit pendant cinq minutes. Puis, tournez à gauche au feu rouge. La gare est sur votre droite, en face de la poste.\nTouriste : Merci beaucoup ! Et il y a un arrêt de bus près de la gare ?\nPassant : Oui, il y a un arrêt juste devant la gare.',
        vocabulary: [
          { french: 'Excusez-moi', english: 'Excuse me', phonetic: 'ɛk-sky-ze mwa' },
          { french: 'tout droit', english: 'straight ahead', phonetic: 'tu drwa' },
          { french: 'tournez à gauche', english: 'turn left', phonetic: 'tur-ne a goʃ' },
          { french: 'à droite', english: 'on the right', phonetic: 'a drwat' },
          { french: 'en face de', english: 'opposite / in front of', phonetic: 'ɑ̃ fas də' },
          { french: 'devant', english: 'in front of', phonetic: 'də-vɑ̃' }
        ],
        listeningTips: [
          'Visualisez le trajet mentalement',
          'Repérez les verbes d\'action : allez, tournez',
          'Notez les points de repère : feu rouge, poste'
        ]
      },
      {
        id: 'quartier-1',
        title: 'Mon quartier',
        context: 'Julie décrit son quartier',
        transcript: 'J\'habite dans un quartier très agréable. Il y a beaucoup de commerces. À côté de chez moi, il y a une boulangerie. En face, il y a un petit supermarché. Au coin de la rue, il y a un café où je prends mon petit-déjeuner le dimanche. Derrière mon immeuble, il y a un joli parc avec des arbres et des bancs. C\'est très calme.',
        vocabulary: [
          { french: 'le quartier', english: 'the neighborhood', phonetic: 'kar-tje' },
          { french: 'à côté de', english: 'next to', phonetic: 'a ko-te də' },
          { french: 'au coin de', english: 'at the corner of', phonetic: 'o kwɛ̃ də' },
          { french: 'derrière', english: 'behind', phonetic: 'dɛ-rjɛr' },
          { french: 'l\'immeuble', english: 'the building', phonetic: 'li-mœbl' },
          { french: 'calme', english: 'quiet / calm', phonetic: 'kalm' }
        ],
        listeningTips: [
          'Notez les prépositions de lieu utilisées',
          'Identifiez les différents commerces et lieux',
          'Repérez les adjectifs qui décrivent le quartier'
        ]
      }
    ],
    strategies: [
      'Dessiner un plan mental ou sur papier',
      'Mémoriser les prépositions de lieu clés',
      'Associer les lieux à leur position relative',
      'Repérer les points de repère importants',
      'Écouter les distances et durées mentionnées'
    ]
  }
];

// Activities Data
export const activities: Activity[] = [
  {
    id: 'comprehension-dialogues',
    title: 'Compréhension de dialogues',
    description: 'Écoutez les dialogues et répondez aux questions',
    type: 'compréhension',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Écoutez et choisissez la bonne réponse',
        transcript: 'Bonjour, je m\'appelle Sophie. Je suis française. J\'ai vingt-cinq ans et j\'habite à Paris. Je suis professeur de français.',
        question: 'Quelle est la profession de Sophie ?',
        options: ['Étudiante', 'Professeur', 'Médecin', 'Secrétaire'],
        correctAnswer: 1,
        explanation: 'Sophie dit : "Je suis professeur de français."'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Écoutez et choisissez la bonne réponse',
        transcript: 'Je me lève à six heures et demie. Je prends le bus à sept heures quinze. J\'arrive au travail à huit heures.',
        question: 'À quelle heure la personne arrive-t-elle au travail ?',
        options: ['À six heures et demie', 'À sept heures quinze', 'À huit heures', 'À neuf heures'],
        correctAnswer: 2,
        explanation: 'La personne dit : "J\'arrive au travail à huit heures."'
      },
      {
        id: 3,
        type: 'true-false',
        instruction: 'Écoutez et dites si c\'est vrai ou faux',
        transcript: 'Le samedi, je fais les courses le matin. L\'après-midi, je reste à la maison. Je ne sors pas le samedi soir.',
        question: 'La personne sort le samedi soir.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'La personne dit : "Je ne sors pas le samedi soir."'
      },
      {
        id: 4,
        type: 'multiple-choice',
        instruction: 'Écoutez et choisissez la bonne réponse',
        transcript: 'Pour aller à la pharmacie, continuez tout droit. Puis, tournez à droite après la banque. La pharmacie est à côté du restaurant italien.',
        question: 'Où se trouve la pharmacie ?',
        options: ['En face de la banque', 'À côté du restaurant italien', 'Derrière la banque', 'Dans le restaurant'],
        correctAnswer: 1,
        explanation: 'On dit : "La pharmacie est à côté du restaurant italien."'
      },
      {
        id: 5,
        type: 'fill-blank',
        instruction: 'Écoutez et complétez',
        transcript: 'Mon frère s\'appelle Thomas. Il a trente ans. Il est médecin à Lyon.',
        question: 'Thomas travaille comme _______ à Lyon.',
        correctAnswer: 'médecin',
        explanation: 'On dit : "Il est médecin à Lyon."'
      }
    ]
  },
  {
    id: 'vrai-faux',
    title: 'Vrai ou Faux',
    description: 'Écoutez et déterminez si les affirmations sont vraies ou fausses',
    type: 'vrai-faux',
    questions: [
      {
        id: 1,
        type: 'true-false',
        instruction: 'Écoutez et dites si c\'est vrai ou faux',
        transcript: 'Salut ! Je m\'appelle Julie. Je suis belge mais j\'habite en France, à Nice. J\'aime beaucoup cette ville.',
        question: 'Julie est française.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'Julie dit : "Je suis belge", donc elle n\'est pas française.'
      },
      {
        id: 2,
        type: 'true-false',
        instruction: 'Écoutez et dites si c\'est vrai ou faux',
        transcript: 'Le matin, je bois un café et je mange un croissant. Je ne prends jamais de thé.',
        question: 'La personne boit du thé le matin.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'La personne dit : "Je ne prends jamais de thé."'
      },
      {
        id: 3,
        type: 'true-false',
        instruction: 'Écoutez et dites si c\'est vrai ou faux',
        transcript: 'La bibliothèque est ouverte du lundi au samedi, de neuf heures à dix-huit heures. Elle est fermée le dimanche.',
        question: 'La bibliothèque est ouverte le dimanche.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'On dit : "Elle est fermée le dimanche."'
      },
      {
        id: 4,
        type: 'true-false',
        instruction: 'Écoutez et dites si c\'est vrai ou faux',
        transcript: 'Dans mon quartier, il y a un grand parc. Les enfants jouent là tous les jours. C\'est un endroit très populaire.',
        question: 'Le parc dans le quartier est petit.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'On dit : "il y a un grand parc", pas un petit parc.'
      },
      {
        id: 5,
        type: 'true-false',
        instruction: 'Écoutez et dites si c\'est vrai ou faux',
        transcript: 'Je travaille du lundi au vendredi. Le week-end, je me repose. J\'adore le dimanche !',
        question: 'La personne travaille le week-end.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'La personne dit : "Je travaille du lundi au vendredi", donc elle ne travaille pas le week-end.'
      }
    ]
  },
  {
    id: 'details-specifiques',
    title: 'Détails spécifiques',
    description: 'Écoutez attentivement et repérez les informations précises',
    type: 'détails',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        instruction: 'Écoutez et notez l\'information demandée',
        transcript: 'Mon numéro de téléphone est le zéro six, quarante-cinq, vingt-trois, quatre-vingt-sept, soixante-douze.',
        question: 'Quel est le numéro de téléphone ?',
        options: ['06 45 23 87 72', '06 45 32 78 72', '06 54 23 87 27', '06 45 23 78 72'],
        correctAnswer: 0,
        explanation: 'Le numéro dicté est : 06 45 23 87 72'
      },
      {
        id: 2,
        type: 'multiple-choice',
        instruction: 'Écoutez et choisissez l\'heure correcte',
        transcript: 'Le train pour Marseille part à quatorze heures trente-cinq, voie numéro sept.',
        question: 'À quelle heure part le train ?',
        options: ['13h35', '14h35', '15h35', '14h25'],
        correctAnswer: 1,
        explanation: 'Le train part à quatorze heures trente-cinq (14h35).'
      },
      {
        id: 3,
        type: 'fill-blank',
        instruction: 'Écoutez et complétez avec le nombre entendu',
        transcript: 'L\'appartement a trois chambres, une grande cuisine et deux salles de bains. Il coûte huit cent cinquante euros par mois.',
        question: 'L\'appartement coûte _______ euros par mois.',
        correctAnswer: '850',
        explanation: 'On dit : "huit cent cinquante euros" = 850 euros.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        instruction: 'Écoutez et identifiez le jour',
        transcript: 'Le cours de français est le mardi et le jeudi. Il commence à dix heures et finit à midi.',
        question: 'Quels jours a lieu le cours de français ?',
        options: ['Lundi et mercredi', 'Mardi et jeudi', 'Mercredi et vendredi', 'Lundi et jeudi'],
        correctAnswer: 1,
        explanation: 'Le cours est "le mardi et le jeudi".'
      },
      {
        id: 5,
        type: 'fill-blank',
        instruction: 'Écoutez et complétez',
        transcript: 'Mon adresse est quinze, rue Victor Hugo. Mon code postal est soixante-quinze mille douze.',
        question: 'Le code postal est _______.',
        correctAnswer: '75012',
        explanation: 'Soixante-quinze mille douze = 75012.'
      }
    ]
  }
];

// Quiz Questions
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    transcript: 'Bonjour ! Je m\'appelle Claire. J\'ai vingt-huit ans. Je suis canadienne et j\'habite à Montréal. Je suis infirmière.',
    question: 'Quelle est la nationalité de Claire ?',
    options: ['Française', 'Canadienne', 'Belge', 'Suisse'],
    correctAnswer: 1
  },
  {
    id: 2,
    transcript: 'Je me réveille à six heures mais je me lève à six heures et quart. Je prends ma douche et je m\'habille. Je quitte la maison à sept heures.',
    question: 'À quelle heure la personne se lève-t-elle ?',
    options: ['À six heures', 'À six heures et quart', 'À six heures et demie', 'À sept heures'],
    correctAnswer: 1
  },
  {
    id: 3,
    transcript: 'Pour aller à la banque, prenez la première rue à droite. Continuez tout droit pendant deux minutes. La banque est entre la pharmacie et le café.',
    question: 'Où se trouve la banque ?',
    options: ['À côté de la poste', 'En face du café', 'Entre la pharmacie et le café', 'Derrière la pharmacie'],
    correctAnswer: 2
  },
  {
    id: 4,
    transcript: 'Le dimanche, je ne travaille pas. Le matin, je fais la grasse matinée. L\'après-midi, je rends visite à mes parents. Le soir, je prépare la semaine.',
    question: 'Que fait la personne le dimanche après-midi ?',
    options: ['Elle travaille', 'Elle dort', 'Elle visite ses parents', 'Elle prépare la semaine'],
    correctAnswer: 2
  },
  {
    id: 5,
    transcript: 'J\'adore mon appartement. Il est petit mais confortable. Il y a une chambre, un salon et une cuisine. Il n\'y a pas de balcon.',
    question: 'L\'appartement a-t-il un balcon ?',
    options: ['Oui, un grand balcon', 'Oui, un petit balcon', 'Non, il n\'y a pas de balcon', 'On ne sait pas'],
    correctAnswer: 2
  },
  {
    id: 6,
    transcript: 'Le restaurant est ouvert du mardi au dimanche. Il est fermé le lundi. Les horaires sont de douze heures à quatorze heures et de dix-neuf heures à vingt-deux heures.',
    question: 'Quel jour le restaurant est-il fermé ?',
    options: ['Le dimanche', 'Le samedi', 'Le lundi', 'Le mardi'],
    correctAnswer: 2
  },
  {
    id: 7,
    transcript: 'Ma sœur s\'appelle Émilie. Elle a trente-deux ans. Elle est mariée et elle a deux enfants. Elle travaille comme avocate.',
    question: 'Combien d\'enfants a Émilie ?',
    options: ['Un enfant', 'Deux enfants', 'Trois enfants', 'Elle n\'a pas d\'enfants'],
    correctAnswer: 1
  },
  {
    id: 8,
    transcript: 'Tous les matins, je prends le métro pour aller au travail. Le trajet dure environ trente minutes. Je lis un livre pendant le voyage.',
    question: 'Combien de temps dure le trajet en métro ?',
    options: ['Quinze minutes', 'Vingt minutes', 'Trente minutes', 'Quarante-cinq minutes'],
    correctAnswer: 2
  },
  {
    id: 9,
    transcript: 'La boulangerie est à côté de chez moi. J\'y vais chaque matin pour acheter du pain et des croissants. Le boulanger est très gentil.',
    question: 'Où se trouve la boulangerie ?',
    options: ['Loin de chez la personne', 'À côté de chez la personne', 'En face de chez la personne', 'Derrière chez la personne'],
    correctAnswer: 1
  },
  {
    id: 10,
    transcript: 'Ce soir, je vais au cinéma avec mes amis. Le film commence à vingt heures trente. Après le film, nous allons manger au restaurant.',
    question: 'À quelle heure commence le film ?',
    options: ['À vingt heures', 'À vingt heures quinze', 'À vingt heures trente', 'À vingt et une heures'],
    correctAnswer: 2
  }
];

// Helper function to convert quiz questions to EnhancedEvaluation format
export function getEnhancedQuizQuestions() {
  return quizQuestions.map(q => ({
    id: String(q.id),
    type: 'multiple-choice' as const,
    question: q.question,
    transcript: q.transcript,
    instruction: 'Écoutez l\'audio et choisissez la bonne réponse',
    options: q.options.map((opt, idx) => ({
      id: String(idx),
      text: opt,
      isCorrect: idx === q.correctAnswer
    })),
    correctAnswer: String(q.correctAnswer)
  }));
}
