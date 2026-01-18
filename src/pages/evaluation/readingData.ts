// --- Data Structures ---
export interface Question {
  id: number;
  text: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const readingQuestions_A1_1: Question[] = [
  {
    id: 1,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie habite à ______.",
    options: [
      "Lyon",
      "Marseille",
      "Paris",
      "Nice"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie est ______.",
    options: [
      "canadienne",
      "belge",
      "allemande",
      "française"
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie travaille ______.",
    options: [
      "à l'hôpital",
      "dans un bureau",
      "à l'école",
      "dans un magasin"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie a ______ ans.",
    options: [
      "20",
      "25",
      "30",
      "35"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Combien de personnes sont mentionnées dans le texte ?",
    options: [
      "Une",
      "Deux",
      "Trois",
      "Quatre"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie est ______.",
    options: [
      "un homme",
      "une femme",
      "un enfant",
      "un animal"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Où travaille Marie ?",
    options: [
      "Dans un hôpital",
      "Dans un bureau",
      "Dans une école",
      "Dans un restaurant"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie est ______.",
    options: [
      "étudiante",
      "enseignante",
      "employée",
      "médecin"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie est ______.",
    options: [
      "jeune",
      "âgée",
      "vieille",
      "adolescente"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    text: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Marie est ______.",
    options: [
      "canadienne",
      "française",
      "belge",
      "espagnole"
    ],
    correctAnswer: 1
  }
];

const readingQuestions_A1_2: Question[] = [
  {
    id: 11,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Paul habite à ______.",
    options: [
      "Paris",
      "Lyon",
      "Marseille",
      "Toulouse"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "La femme de Paul s'appelle ______.",
    options: [
      "Emma",
      "Marie",
      "Sophie",
      "Claire"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Paul a ______ enfants.",
    options: [
      "un",
      "deux",
      "trois",
      "quatre"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Qu'est-ce que la famille aime faire le week-end ?",
    options: [
      "aller au cinéma",
      "faire du vélo",
      "aller au restaurant",
      "jouer aux cartes"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Combien de personnes composent la famille de Paul ?",
    options: [
      "Trois",
      "Quatre",
      "Cinq",
      "Six"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Thomas est ______.",
    options: [
      "la fille de Paul",
      "le fils de Paul",
      "le frère de Paul",
      "l'oncle de Paul"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Emma est ______.",
    options: [
      "la femme de Paul",
      "la sœur de Paul",
      "la fille de Paul",
      "la cousine de Paul"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Où vivent Paul et sa famille ?",
    options: [
      "À Paris",
      "À Lyon",
      "À Marseille",
      "À Nice"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Quel sport la famille pratique-t-elle le week-end ?",
    options: [
      "la natation",
      "le football",
      "le tennis",
      "le vélo"
    ],
    correctAnswer: 3
  },
  {
    id: 20,
    text: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Quelle est la profession de Paul ?",
    options: [
      "professeur",
      "médecin",
      "informaticien",
      "Information non disponible"
    ],
    correctAnswer: 3
  }
];

const readingQuestions_A1_3: Question[] = [
  {
    id: 21,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Quand sont-ils allés au marché ?",
    options: [
      "Aujourd'hui",
      "Hier",
      "Demain",
      "La semaine prochaine"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Avec qui est-il allé au marché ?",
    options: [
      "Son père",
      "Sa sœur",
      "Sa mère",
      "Son frère"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Qu'a-t-il choisi ?",
    options: [
      "Des carottes et des tomates",
      "Des pommes rouges et des bananes jaunes",
      "Des oranges et des poires",
      "Du pain et du fromage"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Qu'a acheté la mère ?",
    options: [
      "Des pommes et des bananes",
      "Des carottes et des tomates",
      "Des oranges et des poires",
      "Du pain et du fromage"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Quel type de produits ont-ils acheté ?",
    options: [
      "Des vêtements",
      "Des jouets",
      "Des fruits et des légumes",
      "Des livres"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Quelle couleur avaient les pommes ?",
    options: [
      "Jaunes",
      "Vertes",
      "Rouges",
      "Bleues"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Quelle couleur avaient les bananes ?",
    options: [
      "Rouges",
      "Bleues",
      "Vertes",
      "Jaunes"
    ],
    correctAnswer: 3
  },
  {
    id: 28,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Quel genre de légumes a achetés la mère ?",
    options: [
      "Des pommes et des bananes",
      "Des carottes et des tomates",
      "Des oranges et des poires",
      "Du pain et du fromage"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Quel genre de fruits a choisi le narrateur ?",
    options: [
      "Des carottes et des tomates",
      "Des pommes et des bananes",
      "Des oranges et des poires",
      "Du pain et du fromage"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    text: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
    question: "Où se déroule cette scène ?",
    options: [
      "À l'école",
      "Au bureau",
      "Au marché",
      "À l'hôpital"
    ],
    correctAnswer: 2
  }
];

const readingQuestions_A1_4: Question[] = [
  {
    id: 31,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Camille a ______ ans.",
    options: [
      "15",
      "16",
      "17",
      "18"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Où va Camille ?",
    options: [
      "À l'université",
      "Au collège",
      "Au lycée",
      "À l'école primaire"
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quel est le nom du professeur de français ?",
    options: [
      "Madame Martin",
      "Madame Dubois",
      "Madame Dupont",
      "Madame Petit"
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quelles qualités a Madame Dupont selon Camille ?",
    options: [
      "Stricte et sérieuse",
      "Gentille et patiente",
      "Fatigante et ennuyeuse",
      "Drôle et bizarre"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Pourquoi Camille aime-t-elle les cours de français ?",
    options: [
      "Parce que le professeur est strict",
      "Parce qu'elle raconte des histoires intéressantes",
      "Parce que les devoirs sont faciles",
      "Parce que les examens sont simples"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quelles matières Camille étudie-t-elle ?",
    options: [
      "Le français et les mathématiques seulement",
      "Le français, les mathématiques, l'histoire et les sciences",
      "L'histoire et les sciences seulement",
      "Le français et l'histoire seulement"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quel est le niveau scolaire de Camille ?",
    options: [
      "École primaire",
      "Collège",
      "Lycée",
      "Université"
    ],
    correctAnswer: 2
  },
  {
    id: 38,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quel est le prénom de Camille ?",
    options: [
      "Marie",
      "Sophie",
      "Camille",
      "Emma"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quel est l'opinion de Camille sur ses cours de français ?",
    options: [
      "Ils sont ennuyeux",
      "Ils sont difficiles",
      "Elle les aime beaucoup",
      "Ils sont inutiles"
    ],
    correctAnswer: 2
  },
  {
    id: 40,
    text: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quel genre d'histoires raconte Madame Dupont ?",
    options: [
      "Des histoires ennuyeuses",
      "Des histoires intéressantes",
      "Des histoires tristes",
      "Des histoires effrayantes"
    ],
    correctAnswer: 1
  }
];

export const questionSets = { 'A1-1': readingQuestions_A1_1, 'A1-2': readingQuestions_A1_2, 'A1-3': readingQuestions_A1_3, 'A1-4': readingQuestions_A1_4 };
export type Level = keyof typeof questionSets;
export const levels: Level[] = ['A1-1', 'A1-2', 'A1-3', 'A1-4'];