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
    transcript: "Bonjour, je m'appelle Sophie. J'ai vingt-trois ans et je suis étudiante.",
    question: "Comment s'appelle la personne ?",
    options: ["Marie", "Sophie", "Claire", "Julie"],
    correctAnswer: 1
  },
  {
    id: 2,
    transcript: "Salut ! Moi, c'est Thomas. Je suis français et j'habite à Lyon.",
    question: "Où habite Thomas ?",
    options: ["Paris", "Marseille", "Lyon", "Nice"],
    correctAnswer: 2
  },
  {
    id: 3,
    transcript: "Je m'appelle Anna. Je suis italienne mais j'habite en France depuis deux ans.",
    question: "Quelle est la nationalité d'Anna ?",
    options: ["Française", "Espagnole", "Italienne", "Allemande"],
    correctAnswer: 2
  },
  {
    id: 4,
    transcript: "Bonjour ! Je suis Pierre. J'ai trente-cinq ans. Je suis professeur de mathématiques.",
    question: "Quel est le métier de Pierre ?",
    options: ["Médecin", "Professeur", "Avocat", "Ingénieur"],
    correctAnswer: 1
  },
  {
    id: 5,
    transcript: "Je m'appelle Léa. J'ai une sœur et deux frères. Ma famille est grande !",
    question: "Combien de frères a Léa ?",
    options: ["Un", "Deux", "Trois", "Quatre"],
    correctAnswer: 1
  },
  {
    id: 6,
    transcript: "Bonjour, je voudrais un café, s'il vous plaît.",
    question: "Que demande la personne ?",
    options: ["Un thé", "Un café", "Un jus d'orange", "De l'eau"],
    correctAnswer: 1
  },
  {
    id: 7,
    transcript: "Excusez-moi, quelle heure est-il ? Il est trois heures et demie.",
    question: "Quelle heure est-il ?",
    options: ["2h30", "3h00", "3h30", "4h00"],
    correctAnswer: 2
  },
  {
    id: 8,
    transcript: "Aujourd'hui, c'est lundi. Demain, c'est mardi.",
    question: "Quel jour sommes-nous ?",
    options: ["Dimanche", "Lundi", "Mardi", "Mercredi"],
    correctAnswer: 1
  },
  {
    id: 9,
    transcript: "J'aime beaucoup le chocolat, mais je n'aime pas le fromage.",
    question: "Qu'est-ce que la personne aime ?",
    options: ["Le fromage", "Le chocolat", "Le pain", "La viande"],
    correctAnswer: 1
  },
  {
    id: 10,
    transcript: "Mon numéro de téléphone est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.",
    question: "Quel est le début du numéro ?",
    options: ["07", "06", "05", "08"],
    correctAnswer: 1
  }
];

const listeningQuestions_A1_2: Question[] = [
  {
    id: 11,
    transcript: "Ce matin, je me suis levé à sept heures. J'ai pris mon petit-déjeuner et je suis parti au travail.",
    question: "À quelle heure s'est-il levé ?",
    options: ["6 heures", "7 heures", "8 heures", "9 heures"],
    correctAnswer: 1
  },
  {
    id: 12,
    transcript: "J'habite dans un appartement au troisième étage. Il y a deux chambres et un salon.",
    question: "À quel étage habite la personne ?",
    options: ["Premier", "Deuxième", "Troisième", "Quatrième"],
    correctAnswer: 2
  },
  {
    id: 13,
    transcript: "Le supermarché est ouvert du lundi au samedi, de neuf heures à vingt heures.",
    question: "Quand le supermarché est-il fermé ?",
    options: ["Le lundi", "Le samedi", "Le dimanche", "Le vendredi"],
    correctAnswer: 2
  },
  {
    id: 14,
    transcript: "Pour aller à la gare, prenez la première rue à gauche, puis continuez tout droit.",
    question: "Dans quelle direction faut-il tourner ?",
    options: ["À droite", "À gauche", "Tout droit", "En arrière"],
    correctAnswer: 1
  },
  {
    id: 15,
    transcript: "Je voudrais réserver une table pour quatre personnes, pour ce soir à vingt heures.",
    question: "Pour combien de personnes est la réservation ?",
    options: ["Deux", "Trois", "Quatre", "Cinq"],
    correctAnswer: 2
  },
  {
    id: 16,
    transcript: "Il fait beau aujourd'hui ! Le soleil brille et il fait vingt-cinq degrés.",
    question: "Quel temps fait-il ?",
    options: ["Il pleut", "Il neige", "Il fait beau", "Il fait froid"],
    correctAnswer: 2
  },
  {
    id: 17,
    transcript: "Au marché, j'ai acheté des pommes, des oranges et des bananes.",
    question: "Qu'a acheté la personne ?",
    options: ["Des légumes", "Des fruits", "Du pain", "De la viande"],
    correctAnswer: 1
  },
  {
    id: 18,
    transcript: "Le train pour Marseille part à quatorze heures quinze, voie numéro trois.",
    question: "À quelle heure part le train ?",
    options: ["13h15", "14h15", "15h15", "16h15"],
    correctAnswer: 1
  },
  {
    id: 19,
    transcript: "Je travaille du lundi au vendredi. Le week-end, je me repose.",
    question: "Quand la personne travaille-t-elle ?",
    options: ["Le week-end", "Du lundi au vendredi", "Tous les jours", "Le mercredi seulement"],
    correctAnswer: 1
  },
  {
    id: 20,
    transcript: "Ce pull coûte quarante-cinq euros. C'est un peu cher, mais il est très joli.",
    question: "Combien coûte le pull ?",
    options: ["35 euros", "45 euros", "55 euros", "65 euros"],
    correctAnswer: 1
  }
];

const listeningQuestions_A1_3: Question[] = [
  {
    id: 21,
    transcript: "Bonjour, je voudrais un aller-retour Paris-Lyon pour demain matin, s'il vous plaît.",
    question: "Quel type de billet veut la personne ?",
    options: ["Un aller simple", "Un aller-retour", "Un abonnement", "Une carte de réduction"],
    correctAnswer: 1
  },
  {
    id: 22,
    transcript: "Le restaurant est complet ce soir, mais nous avons une table disponible demain à midi.",
    question: "Quand y a-t-il une table disponible ?",
    options: ["Ce soir", "Demain soir", "Demain à midi", "Après-demain"],
    correctAnswer: 2
  },
  {
    id: 23,
    transcript: "La pharmacie se trouve juste après la boulangerie, sur votre droite.",
    question: "Où est la pharmacie ?",
    options: ["Avant la boulangerie", "Après la boulangerie", "En face de la boulangerie", "Loin de la boulangerie"],
    correctAnswer: 1
  },
  {
    id: 24,
    transcript: "Attention, le magasin ferme dans quinze minutes. Merci de vous diriger vers les caisses.",
    question: "Que doivent faire les clients ?",
    options: ["Continuer leurs achats", "Aller aux caisses", "Revenir demain", "Attendre l'ouverture"],
    correctAnswer: 1
  },
  {
    id: 25,
    transcript: "Pour votre rendez-vous médical, n'oubliez pas d'apporter votre carte vitale et une pièce d'identité.",
    question: "Que faut-il apporter ?",
    options: ["De l'argent", "Une carte vitale", "Un livre", "Des médicaments"],
    correctAnswer: 1
  },
  {
    id: 26,
    transcript: "Le film commence à vingt heures trente. Je vous conseille d'arriver un peu avant.",
    question: "À quelle heure commence le film ?",
    options: ["20h00", "20h15", "20h30", "21h00"],
    correctAnswer: 2
  },
  {
    id: 27,
    transcript: "La chambre d'hôtel coûte quatre-vingt-dix euros par nuit, petit-déjeuner inclus.",
    question: "Qu'est-ce qui est inclus dans le prix ?",
    options: ["Le déjeuner", "Le dîner", "Le petit-déjeuner", "Rien"],
    correctAnswer: 2
  },
  {
    id: 28,
    transcript: "En cas d'urgence, appelez le quinze pour le SAMU ou le dix-huit pour les pompiers.",
    question: "Quel numéro faut-il appeler pour le SAMU ?",
    options: ["17", "15", "18", "112"],
    correctAnswer: 1
  },
  {
    id: 29,
    transcript: "La bibliothèque est fermée le lundi, mais elle est ouverte du mardi au samedi de dix heures à dix-huit heures.",
    question: "Quand la bibliothèque est-elle fermée ?",
    options: ["Le dimanche", "Le lundi", "Le samedi", "Le mardi"],
    correctAnswer: 1
  },
  {
    id: 30,
    transcript: "Votre colis sera livré entre quatorze heures et dix-huit heures. Merci de rester disponible.",
    question: "Pendant combien d'heures faut-il attendre ?",
    options: ["2 heures", "3 heures", "4 heures", "5 heures"],
    correctAnswer: 2
  }
];

const listeningQuestions_A1_4: Question[] = [
  {
    id: 31,
    transcript: "Bienvenue à bord du vol AF 234 à destination de Nice. La durée du vol sera d'environ une heure trente.",
    question: "Quelle est la destination du vol ?",
    options: ["Paris", "Lyon", "Nice", "Marseille"],
    correctAnswer: 2
  },
  {
    id: 32,
    transcript: "Le prochain bus pour le centre-ville arrive dans dix minutes. Vous pouvez acheter votre ticket au distributeur.",
    question: "Dans combien de temps arrive le bus ?",
    options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
    correctAnswer: 1
  },
  {
    id: 33,
    transcript: "Bonjour, j'ai réservé une voiture au nom de Martin pour trois jours.",
    question: "Pour combien de temps est la réservation ?",
    options: ["Un jour", "Deux jours", "Trois jours", "Une semaine"],
    correctAnswer: 2
  },
  {
    id: 34,
    transcript: "Les soldes commencent mercredi prochain et durent trois semaines.",
    question: "Combien de temps durent les soldes ?",
    options: ["Une semaine", "Deux semaines", "Trois semaines", "Un mois"],
    correctAnswer: 2
  },
  {
    id: 35,
    transcript: "Pour ce poste, nous cherchons quelqu'un qui parle français et anglais couramment.",
    question: "Quelles langues faut-il parler ?",
    options: ["Français et espagnol", "Français et allemand", "Français et anglais", "Anglais et espagnol"],
    correctAnswer: 2
  },
  {
    id: 36,
    transcript: "Le musée est gratuit le premier dimanche de chaque mois.",
    question: "Quand le musée est-il gratuit ?",
    options: ["Tous les dimanches", "Le premier dimanche du mois", "Le dernier dimanche du mois", "Jamais"],
    correctAnswer: 1
  },
  {
    id: 37,
    transcript: "Je voudrais changer mon billet. Mon train est annulé à cause de la grève.",
    question: "Pourquoi veut-il changer son billet ?",
    options: ["Il est malade", "Le train est annulé", "Il a changé d'avis", "Il a perdu son billet"],
    correctAnswer: 1
  },
  {
    id: 38,
    transcript: "La piscine municipale est ouverte de huit heures à vingt et une heures en semaine.",
    question: "À quelle heure ferme la piscine ?",
    options: ["19h", "20h", "21h", "22h"],
    correctAnswer: 2
  },
  {
    id: 39,
    transcript: "N'oubliez pas : la réunion de demain est avancée à neuf heures au lieu de dix heures.",
    question: "À quelle heure est la réunion maintenant ?",
    options: ["8 heures", "9 heures", "10 heures", "11 heures"],
    correctAnswer: 1
  },
  {
    id: 40,
    transcript: "Le parking est payant du lundi au samedi, de huit heures à dix-neuf heures. Le dimanche, il est gratuit.",
    question: "Quand le parking est-il gratuit ?",
    options: ["Le samedi", "Le dimanche", "En semaine", "Jamais"],
    correctAnswer: 1
  }
];

export const questionSets = {
  'A1-1': listeningQuestions_A1_1,
  'A1-2': listeningQuestions_A1_2,
  'A1-3': listeningQuestions_A1_3,
  'A1-4': listeningQuestions_A1_4
};

export type Level = keyof typeof questionSets;
export const levels: Level[] = ['A1-1', 'A1-2', 'A1-3', 'A1-4'];
