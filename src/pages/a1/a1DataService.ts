export interface A1Section {
    id: string;
    title: string;
    dialogue?: {
        speaker: 'A' | 'B';
        text: string;
    }[];
    activities?: string[];
}

export interface A1PartContent {
    title: string;
    sections: A1Section[];
}

const A1_CONTENT: Record<string, A1PartContent> = {
    '1': {
        title: 'Partie 1 - Se presenter',
        sections: [
            {
                id: 'dialogue-1',
                title: 'Dialogue',
                dialogue: [
                    { speaker: 'A', text: 'Bonjour, comment tu t\'appelles ?' },
                    { speaker: 'B', text: 'Je m\'appelle Lina.' },
                ],
            },
            {
                id: 'activity-1',
                title: 'Activite',
                activities: [
                    'Presente-toi a l\'oral.',
                    'Complete avec ton prenom.',
                ],
            },
        ],
    },

    '2': {
        title: 'Partie 2 - La famille',
        sections: [],
    },

    '3': {
        title: 'Partie 3 - Les activites',
        sections: [],
    },

    '4': {
        title: 'Partie 4 - La routine',
        sections: [],
    },
};

export function getA1PartContent(partId: string) {
    return A1_CONTENT[partId];
}


