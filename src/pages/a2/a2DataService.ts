export interface A2Section {
    id: string;
    title: string;
    text?: string;
    activities?: string[];
}

export interface A2PartContent {
    title: string;
    sections: A2Section[];
}

const A2_CONTENT: Record<string, A2PartContent> = {
    '1': {
        title: 'Partie 1 – Expériences personnelles',
        sections: [
            {
                id: 'text-1',
                title: 'Compréhension',
                text:
                    'À ce niveau, l’apprenant peut parler de ses expériences passées et donner son opinion.',
            },
            {
                id: 'activity-1',
                title: 'Activité',
                activities: [
                    'Parle d’un souvenir important.',
                    'Explique pourquoi il est important pour toi.',
                ],
            },
        ],
    },

    '2': {
        title: 'Partie 2 – La vie quotidienne',
        sections: [],
    },

    '3': {
        title: 'Partie 3 – Projets et intentions',
        sections: [],
    },

    '4': {
        title: 'Partie 4 – Opinions et préférences',
        sections: [],
    },
};

export function getA2PartContent(partId: string) {
    return A2_CONTENT[partId];
}
