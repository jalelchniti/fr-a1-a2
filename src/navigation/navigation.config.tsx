import { BookOpen, Headphones, PenTool, Layers } from 'lucide-react';
import type { SidebarNavItem } from '../components/SidebarNav';

export interface SectionNavigation {
    title: string;
    items: SidebarNavItem[];
}

/* =======================
   A1 Navigation
======================= */
export const A1_NAVIGATION: SectionNavigation = {
    title: 'Niveau A1',
    items: [
        { title: 'Vue d’ensemble', path: '/a1' },
        { title: 'Partie 1', path: '/a1/part/1' },
        { title: 'Partie 2', path: '/a1/part/2' },
        { title: 'Partie 3', path: '/a1/part/3' },
        { title: 'Partie 4', path: '/a1/part/4' },
    ],
};

/* =======================
   A2 Navigation
======================= */
export const A2_NAVIGATION: SectionNavigation = {
    title: 'Niveau A2',
    items: [
        { title: 'Vue d’ensemble', path: '/a2' },
        { title: 'Partie 1', path: '/a2/part/1' },
        { title: 'Partie 2', path: '/a2/part/2' },
        { title: 'Partie 3', path: '/a2/part/3' },
        { title: 'Partie 4', path: '/a2/part/4' },
        { title: 'Langue', path: '/a2/language', icon: <PenTool size={16} /> },
        { title: 'Lecture', path: '/a2/reading', icon: <BookOpen size={16} /> },
        { title: 'Écoute', path: '/a2/listening', icon: <Headphones size={16} /> },
    ],
};

/* =======================
   Evaluation Navigation
======================= */
export const EVALUATION_NAVIGATION: SectionNavigation = {
    title: 'Évaluation',
    items: [
        { title: 'Langue', path: '/language', icon: <PenTool size={16} /> },
        { title: 'Lecture', path: '/reading', icon: <BookOpen size={16} /> },
        { title: 'Écoute', path: '/listening', icon: <Headphones size={16} /> },
        {
            title: 'Synthèse',
            path: '/language/summary',
            icon: <Layers size={16} />,
        },
    ],
};
