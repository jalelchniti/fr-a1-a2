import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import '../styles/navigation-enhancements.css';

/* ===================================
   French labels for route segments
=================================== */
const LABELS: Record<string, string> = {
    a1: 'Niveau A1',
    a2: 'Niveau A2',
    'part-1': 'Partie 1',
    'part-2': 'Partie 2',
    'part-3': 'Partie 3',
    'part-4': 'Partie 4',
    language: 'Langue',
    reading: 'Lecture',
    listening: 'Écoute',
    summary: 'Synthèse',
};

export default function Breadcrumb() {
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = segments.map((segment, index) => {
        const path = '/' + segments.slice(0, index + 1).join('/');
        return {
            label: LABELS[segment] ?? segment,
            path,
            isLast: index === segments.length - 1,
        };
    });

    if (!breadcrumbs.length) {
        return null;
    }

    return (
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
            <ol className="breadcrumbList">
                {breadcrumbs.map((item) => (
                    <li key={item.path} className="breadcrumbItem">
                        {item.isLast ? (
                            <span className="breadcrumbCurrent">{item.label}</span>
                        ) : (
                            <>
                                <Link to={item.path} className="breadcrumbLink">
                                    {item.label}
                                </Link>
                                <span className="breadcrumbSeparator">
                                    <ChevronRight size={14} />
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
