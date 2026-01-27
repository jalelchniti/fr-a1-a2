import type { ContentItem } from './ContentManagement';

export const contentData: ContentItem[] = [
  {
    id: '1',
    title: 'Présentations personnelles',
    description: 'Apprenez à vous présenter et à poser des questions simples sur votre identité',
    type: 'lesson',
    level: 'A1.1',
    difficulty: 'beginner',
    duration: 15,
    tags: ['grammaire', 'conversation', 'bases'],
    multimediaUrl: '/audio/presentations.mp3',
    isInteractive: true,
    rating: 4.5
  },
  {
    id: '2',
    title: 'Compréhension orale - Dialogue',
    description: 'Écoutez un dialogue entre deux personnes et répondez aux questions',
    type: 'audio',
    level: 'A1.2',
    difficulty: 'beginner',
    duration: 10,
    tags: ['écoute', 'dialogue', 'vocabulaire'],
    multimediaUrl: '/audio/dialogue.mp3',
    isInteractive: true,
    rating: 4.2
  },
  {
    id: '3',
    title: 'Vidéo - La famille',
    description: 'Découvrez le vocabulaire de la famille à travers une vidéo explicative',
    type: 'video',
    level: 'A1.1',
    difficulty: 'beginner',
    duration: 8,
    tags: ['vocabulaire', 'famille', 'vidéo'],
    multimediaUrl: '/videos/famille.mp4',
    isInteractive: false,
    rating: 4.7
  },
  {
    id: '4',
    title: 'Exercice de conjugaison',
    description: 'Conjuguez les verbes au présent de l\'indicatif',
    type: 'exercise',
    level: 'A1.3',
    difficulty: 'intermediate',
    duration: 20,
    tags: ['grammaire', 'verbes', 'exercice'],
    isInteractive: true,
    rating: 4.0
  },
  {
    id: '5',
    title: 'Quiz - Animaux domestiques',
    description: 'Testez vos connaissances sur le vocabulaire des animaux domestiques',
    type: 'quiz',
    level: 'A1.2',
    difficulty: 'beginner',
    duration: 12,
    tags: ['vocabulaire', 'animaux', 'quiz'],
    isInteractive: true,
    rating: 4.3
  },
  {
    id: '6',
    title: 'Grammaire - Articles définis',
    description: 'Apprenez l\'utilisation des articles définis en français',
    type: 'grammar',
    level: 'A1.2',
    difficulty: 'beginner',
    duration: 18,
    tags: ['grammaire', 'articles', 'leçon'],
    isInteractive: true,
    rating: 4.6
  },
  {
    id: '7',
    title: 'Vocabulaire - Couleurs',
    description: 'Mémorisez les couleurs en français avec des exercices interactifs',
    type: 'vocabulary',
    level: 'A1.1',
    difficulty: 'beginner',
    duration: 10,
    tags: ['vocabulaire', 'couleurs', 'exercice'],
    isInteractive: true,
    rating: 4.4
  },
  {
    id: '8',
    title: 'Conversation - Au restaurant',
    description: 'Simulez une conversation dans un restaurant français',
    type: 'lesson',
    level: 'A1.4',
    difficulty: 'intermediate',
    duration: 25,
    tags: ['conversation', 'restaurant', 'intermédiaire'],
    isInteractive: true,
    rating: 4.8
  }
];
