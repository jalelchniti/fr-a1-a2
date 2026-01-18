// --- Data Structures ---
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const languageQuestions_A1_1: Question[] = [
  { id: 1, question: "Je ______ un étudiant français.", options: ["suis", "ai", "vais", "fais"], correctAnswer: 0 },
  { id: 2, question: "Tu ______ un stylo ?", options: ["es", "as", "vas", "fais"], correctAnswer: 1 },
  { id: 3, question: "Il ______ à Paris.", options: ["habite", "habites", "habitent", "habiter"], correctAnswer: 0 },
  { id: 4, question: "Nous avons ______ belle maison.", options: ["un", "le", "une", "des"], correctAnswer: 2 },
  { id: 5, question: "C'est ______ livre de Marie.", options: ["un", "le", "la", "les"], correctAnswer: 1 },
  { id: 6, question: "Les étudiants ______ sympathiques.", options: ["est", "sont", "ont", "vont"], correctAnswer: 1 },
  { id: 7, question: "Vous ______ français ?", options: ["parle", "parlez", "parlent", "parles"], correctAnswer: 1 },
  { id: 8, question: "Elle n'______ pas le chocolat.", options: ["aime", "aimes", "aiment", "aimer"], correctAnswer: 0 },
  { id: 9, question: "______ tu t'appelles ?", options: ["Comment", "Quel", "Où", "Qui"], correctAnswer: 0 },
  { id: 10, question: "La table est ______.", options: ["grand", "grands", "grande", "grandes"], correctAnswer: 2 }
];
const languageQuestions_A1_2: Question[] = [
    { id: 11, question: "Hier, j'______ un film au cinéma.", options: ["ai vu", "vois", "vais voir", "voyais"], correctAnswer: 0 },
    { id: 12, question: "Je voudrais ______ café, s'il vous plaît.", options: ["le", "de", "du", "un"], correctAnswer: 2 },
    { id: 13, question: "Qu'est-ce que vous ______ ce week-end ?", options: ["faites", "font", "faisons", "fait"], correctAnswer: 0 },
    { id: 14, question: "Ce soir, nous ______ manger au restaurant.", options: ["allons", "avons", "sommes", "faisons"], correctAnswer: 0 },
    { id: 15, question: "Le livre est ______ la table.", options: ["sous", "dans", "sur", "à"], correctAnswer: 2 },
    { id: 16, question: "Elle n'______ pas fini ses devoirs.", options: ["a", "est", "as", "ont"], correctAnswer: 0 },
    { id: 17, question: "Les voitures sont ______.", options: ["bleu", "bleus", "bleue", "bleues"], correctAnswer: 3 },
    { id: 18, question: "Tu ______ un croissant ?", options: ["veux", "veut", "voulons", "veulent"], correctAnswer: 0 },
    { id: 19, question: "C'est ______ chien. Il s'appelle Médor.", options: ["mon", "ma", "mes", "notre"], correctAnswer: 0 },
    { id: 20, question: "Je ne ______ pas venir demain.", options: ["peux", "peut", "peuvent", "pouvons"], correctAnswer: 0 }
];
const languageQuestions_A1_3: Question[] = [
    { id: 21, question: "Hier, elle ______ au cinéma.", options: ["est allée", "a allé", "va", "allait"], correctAnswer: 0 },
    { id: 22, question: "Le matin, je ______ à 7 heures.", options: ["me lève", "lève", "me lever", "se lève"], correctAnswer: 0 },
    { id: 23, question: "Tu vois le livre ? Oui, je ______ vois.", options: ["le", "la", "lui", "leur"], correctAnswer: 0 },
    { id: 24, question: "______ la porte, s'il te plaît !", options: ["Ferme", "Fermes", "Fermez", "Fermer"], correctAnswer: 0 },
    { id: 25, question: "J'habite ______ France.", options: ["à", "en", "au", "aux"], correctAnswer: 1 },
    { id: 26, question: "Tu parles à tes parents ? Oui, je ______ parle tous les jours.", options: ["les", "le", "lui", "leur"], correctAnswer: 3 },
    { id: 27, question: "Nous n'______ pas regardé la télévision hier.", options: ["avons", "sommes", "êtes", "ont"], correctAnswer: 0 },
    { id: 28, question: "Vous ______ à quelle heure le soir ?", options: ["vous couchez", "couchez", "se couchent", "te couches"], correctAnswer: 0 },
    { id: 29, question: "Le TGV est plus ______ que la voiture.", options: ["rapide", "lentement", "rapides", "rapide"], correctAnswer: 0 },
    { id: 30, question: "Elles ______ au parc pour une promenade.", options: ["sont sorties", "ont sorti", "sortent", "sortiront"], correctAnswer: 0 }
];
const languageQuestions_A1_4: Question[] = [
    { id: 31, question: "Quand j'étais petit, je ______ beaucoup de livres.", options: ["lisais", "ai lu", "lis", "lirai"], correctAnswer: 0 },
    { id: 32, question: "Elle ne ______ pas coiffée ce matin.", options: ["s'est", "est", "a", "s'a"], correctAnswer: 0 },
    { id: 33, question: "Tu vas à la piscine ? Oui, j'______ vais.", options: ["y", "en", "le", "la"], correctAnswer: 0 },
    { id: 34, question: "Vous voulez du pain ? Oui, j'______ veux un peu.", options: ["y", "en", "le", "la"], correctAnswer: 1 },
    { id: 35, question: "J'aime beaucoup ______ robe.", options: ["ce", "cet", "cette", "ces"], correctAnswer: 2 },
    { id: 36, question: "Nous ______ de l'eau car nous avons soif.", options: ["buvons", "buvez", "boivent", "bois"], correctAnswer: 0 },
    { id: 37, question: "Il faisait beau quand soudain, il ______ à pleuvoir.", options: ["a commencé", "commençait", "commence", "commencera"], correctAnswer: 0 },
    { id: 38, question: "Tu ______ faire tes devoirs avant de sortir.", options: ["dois", "doit", "devez", "doivent"], correctAnswer: 0 },
    { id: 39, question: "J'étudie le français ______ deux ans.", options: ["depuis", "il y a", "pendant", "pour"], correctAnswer: 0 },
    { id: 40, question: "______ avion est très rapide.", options: ["Ce", "Cet", "Cette", "Ces"], correctAnswer: 1 }
];

export const questionSets = { 'A1-1': languageQuestions_A1_1, 'A1-2': languageQuestions_A1_2, 'A1-3': languageQuestions_A1_3, 'A1-4': languageQuestions_A1_4 };
export type Level = keyof typeof questionSets;
export const levels: Level[] = ['A1-1', 'A1-2', 'A1-3', 'A1-4'];
