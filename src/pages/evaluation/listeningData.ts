// --- Data Structures ---
export interface Question {
  id: number;
  transcript: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const listeningQuestions_A1_1: Question[] = [
  {
    id: 1,
    transcript: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Quel est le prénom de la personne ?",
    options: [
      "Paul",
      "Sophie", 
      "Marie",
      "Emma"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    transcript: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Où habite Marie ?",
    options: [
      "Lyon",
      "Marseille", 
      "Paris",
      "Nice"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    transcript: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Quelle est la nationalité de Marie ?",
    options: [
      "Allemande",
      "Belge", 
      "Canadienne",
      "Française"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    transcript: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Quel âge a Marie ?",
    options: [
      "20 ans",
      "25 ans", 
      "30 ans",
      "35 ans"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    transcript: "Bonjour, je m'appelle Marie. J'ai 25 ans. Je suis française. J'habite à Paris. Je travaille dans un bureau.",
    question: "Où travaille Marie ?",
    options: [
      "À l'hôpital",
      "Dans un magasin", 
      "Dans un bureau",
      "À l'école"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    transcript: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Où habite Paul ?",
    options: [
      "Paris",
      "Lyon", 
      "Marseille",
      "Toulouse"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    transcript: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Comment s'appelle la femme de Paul ?",
    options: [
      "Emma",
      "Marie", 
      "Sophie",
      "Claire"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    transcript: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Combien d'enfants a Paul ?",
    options: [
      "Un",
      "Deux", 
      "Trois",
      "Quatre"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    transcript: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Qu'est-ce que la famille fait le week-end ?",
    options: [
      "Va au cinéma",
      "Fait du vélo", 
      "Va au restaurant",
      "Joue aux cartes"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    transcript: "Bonjour, je suis Paul. J'habite à Lyon avec ma famille. Ma femme s'appelle Sophie et mes enfants s'appellent Thomas et Emma. Nous aimons faire du vélo le week-end.",
    question: "Combien de personnes composent la famille de Paul ?",
    options: [
      "Trois",
      "Quatre", 
      "Cinq",
      "Six"
    ],
    correctAnswer: 1
  }
];

const listeningQuestions_A1_2: Question[] = [
  {
    id: 11,
    transcript: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
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
    id: 12,
    transcript: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
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
    id: 13,
    transcript: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
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
    id: 14,
    transcript: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
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
    id: 15,
    transcript: "Hier, je suis allé au marché avec ma mère. Nous avons acheté des fruits et des légumes. J'ai choisi des pommes rouges et des bananes jaunes. Ma mère a acheté des carottes et des tomates.",
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
    id: 16,
    transcript: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quel âge a Camille ?",
    options: [
      "15 ans",
      "16 ans", 
      "17 ans",
      "18 ans"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    transcript: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
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
    id: 18,
    transcript: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Comment s'appelle le professeur de français ?",
    options: [
      "Madame Martin",
      "Madame Dubois", 
      "Madame Dupont",
      "Madame Petit"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    transcript: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Quelles qualités a Madame Dupont ?",
    options: [
      "Stricte et sérieuse",
      "Gentille et patiente", 
      "Fatigante et ennuyeuse",
      "Drôle et bizarre"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    transcript: "Je m'appelle Camille. J'ai 16 ans et je suis au lycée. J'étudie le français, les mathématiques, l'histoire et les sciences. Mon professeur de français s'appelle Madame Dupont. Elle est gentille et patiente. J'aime beaucoup ses cours parce qu'elle raconte des histoires intéressantes.",
    question: "Pourquoi Camille aime-t-elle les cours de français ?",
    options: [
      "Parce que le professeur est strict",
      "Parce qu'elle raconte des histoires intéressantes", 
      "Parce que les devoirs sont faciles",
      "Parce que les examens sont simples"
    ],
    correctAnswer: 1
  }
];

const listeningQuestions_A1_3: Question[] = [
  {
    id: 21,
    transcript: "Bonjour, je voudrais un billet de train pour Lyon, s'il vous plaît. Le prochain départ est à quelle heure ?",
    question: "Où veut aller la personne ?",
    options: [
      "À la boulangerie",
      "À la gare", 
      "À Lyon",
      "À la pharmacie"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    transcript: "L'horloge de la place sonne dix heures et demie.",
    question: "Quelle heure est-il ?",
    options: [
      "8h30",
      "9h30", 
      "10h30",
      "11h30"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    transcript: "Attention voyageurs, le train en provenance de Marseille et à destination de Paris aura un retard d'environ 30 minutes. Nous nous excusons pour ce désagrément.",
    question: "Quel est le problème ?",
    options: [
      "Le train est en retard",
      "Le magasin est fermé", 
      "Il a perdu son portefeuille",
      "Il pleut"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    transcript: "Météo France : Prévisions pour le week-end\nSamedi : Nuageux avec des averses l'après-midi. Températures : 15°C - 20°C.\nDimanche : Grand soleil sur toute la France. Températures en hausse : 18°C - 25°C.",
    question: "Quel temps fera-t-il dimanche ?",
    options: [
      "Il va pleuvoir",
      "Il y aura des nuages", 
      "Il fera beau et ensoleillé",
      "Il va neiger"
    ],
    correctAnswer: 2
  },
  {
    id: 25,
    transcript: "Recette du gâteau au chocolat\n1. Préchauffez le four à 180°C.\n2. Faites fondre 200g de chocolat avec 150g de beurre.\n3. Dans un saladier, mélangez 3 œufs et 100g de sucre.\n4. Ajoutez le chocolat fondu, puis 50g de farine.\n5. Versez dans un moule et faites cuire 20 minutes.",
    question: "Quelle est la première étape de la recette ?",
    options: [
      "Faire fondre le chocolat",
      "Mélanger les œufs et le sucre", 
      "Préchauffer le four",
      "Ajouter la farine"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    transcript: "De : Jean-Paul\nÀ : Marianne\nObjet : Soirée cinéma\n\nSalut Marianne,\nJ'espère que tu vas bien. Est-ce que tu es libre samedi soir ? Je te propose d'aller voir le nouveau film de science-fiction au cinéma Le Rex. La séance est à 20h00. Dis-moi si ça t'intéresse !\n\nÀ bientôt,\nJean-Paul",
    question: "Quelle est la proposition de Jean-Paul ?",
    options: [
      "Aller au restaurant",
      "Aller au cinéma", 
      "Faire une promenade",
      "Visiter un musée"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    transcript: "Bonjour, je suis en retard, désolé. J'ai raté le bus ce matin. Je prendrai un café et je commencerai la réunion dans 5 minutes.",
    question: "Pourquoi est-il en retard ?",
    options: [
      "Il a dormi trop longtemps",
      "Il a raté le bus", 
      "Il a eu un accident",
      "Il a oublié la réunion"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    transcript: "Bonjour madame, je voudrais acheter une baguette et deux croissants, s'il vous plaît. Combien ça fait ?",
    question: "Où se trouve la personne ?",
    options: [
      "À la boulangerie",
      "Au supermarché", 
      "Au café",
      "À la poste"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    transcript: "Excusez-moi, où se trouve la gare ? Je dois prendre le train dans une heure.",
    question: "Que cherche la personne ?",
    options: [
      "Un hôtel",
      "Un restaurant", 
      "La gare",
      "Un hôpital"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    transcript: "Le spectacle commence à 20h30 précises. Merci d'être à l'heure et de couper vos téléphones portables.",
    question: "À quelle heure commence le spectacle ?",
    options: [
      "20h00",
      "20h15", 
      "20h30",
      "21h00"
    ],
    correctAnswer: 2
  }
];

const listeningQuestions_A1_4: Question[] = [
  {
    id: 31,
    transcript: "Bonjour, je viens d'arriver dans votre ville. Pouvez-vous me dire où se trouvent les principales attractions touristiques ?",
    question: "Pourquoi la personne parle-t-elle à l'autre personne ?",
    options: [
      "Pour commander à manger",
      "Pour demander des informations touristiques", 
      "Pour acheter un billet",
      "Pour poser une plainte"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    transcript: "Le médecin m'a dit de prendre ce médicament trois fois par jour après les repas. Cela devrait m'aider à aller mieux.",
    question: "Quand doit-on prendre le médicament ?",
    options: [
      "Avant les repas",
      "Pendant les repas", 
      "Après les repas",
      "N'importe quand"
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    transcript: "Chers clients, suite à des travaux, le rayon des fruits et légumes sera temporairement déplacé au sous-sol. Merci de votre compréhension.",
    question: "Qu'est-ce qui change dans le magasin ?",
    options: [
      "Le magasin ferme",
      "Le rayon fruits et légumes change de place", 
      "Les prix augmentent",
      "Le personnel change"
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    transcript: "Mon anniversaire est le 15 mars. Cette année, je vais avoir 30 ans. Je prévois de faire une grande fête avec tous mes amis.",
    question: "Quel âge aura la personne ?",
    options: [
      "29 ans",
      "30 ans", 
      "31 ans",
      "35 ans"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    transcript: "Le professeur a distribué les résultats du dernier examen. Malheureusement, je n'ai obtenu que 8 sur 20. Je devrai étudier davantage pour le prochain.",
    question: "Quelle note a obtenu l'étudiant ?",
    options: [
      "8 sur 20",
      "12 sur 20", 
      "15 sur 20",
      "18 sur 20"
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    transcript: "Notre vol pour Londres est annoncé avec un retard de 2 heures. Les passagers du vol FR2023 sont priés de se rendre à la porte d'embarquement numéro 15.",
    question: "Quel est le numéro du vol ?",
    options: [
      "FR2032",
      "FR2302", 
      "FR2023",
      "FR3202"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    transcript: "Le restaurant propose une nouvelle formule à emporter. Désormais, vous pouvez commander en ligne et récupérer votre repas sans attendre.",
    question: "Quelle est la nouveauté du restaurant ?",
    options: [
      "Des nouveaux plats",
      "Un service de livraison", 
      "Une formule à emporter avec commande en ligne",
      "Des prix réduits"
    ],
    correctAnswer: 2
  },
  {
    id: 38,
    transcript: "Je pars en vacances en Espagne la semaine prochaine. J'ai réservé un hôtel près de la plage et je compte faire du tourisme et me reposer.",
    question: "Où part la personne en vacances ?",
    options: [
      "En Italie",
      "En France", 
      "En Espagne",
      "En Allemagne"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    transcript: "La réunion hebdomadaire aura lieu dans la salle de conférence principale à 14h00. Tous les membres de l'équipe doivent y participer.",
    question: "À quelle heure a lieu la réunion ?",
    options: [
      "12h00",
      "13h00", 
      "14h00",
      "15h00"
    ],
    correctAnswer: 2
  },
  {
    id: 40,
    transcript: "Le musée sera exceptionnellement fermé ce dimanche pour cause de maintenance. Nous vous prions de nous excuser pour la gêne occasionnée.",
    question: "Pourquoi le musée est-il fermé ?",
    options: [
      "Faute de personnel",
      "Pour cause de maintenance", 
      "Faute de visiteurs",
      "Fête nationale"
    ],
    correctAnswer: 1
  }
];

export const questionSets = { 'A1-1': listeningQuestions_A1_1, 'A1-2': listeningQuestions_A1_2, 'A1-3': listeningQuestions_A1_3, 'A1-4': listeningQuestions_A1_4 };
export type Level = keyof typeof questionSets;
export const levels: Level[] = ['A1-1', 'A1-2', 'A1-3', 'A1-4'];