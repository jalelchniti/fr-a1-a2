import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import '../styles/navigation-enhancements.css';

export interface SidebarNavItem {
    title: string;
    path: string;
    icon?: React.ReactNode;
}

interface SidebarNavProps {
    title?: string;
    items?: SidebarNavItem[];
    defaultOpen?: boolean;
}

export default function SidebarNav({
    title,
    items = [],
    defaultOpen = true,
}: SidebarNavProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    if (!items.length) {
        return null;
    }

    return (
        <>
            {/* Mobile toggle */}
            <button
                className="navToggleBtn"
                onClick={() => setIsOpen((open) => !open)}
                aria-label="Afficher ou masquer la navigation"
            >
                <Menu size={20} />
            </button>

            {/* Sidebar */}
            <aside className={`navSidebar ${isOpen ? '' : 'hidden'}`}>
                {title && <h3 className="navSidebarTitle">{title}</h3>}

                <ul>
                    {items.map((item) => (
                        <li key={item.path} className="navSidebarItem">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `navSidebarLink ${isActive ? 'active' : ''}`
                                }
                            >
                                {item.icon && <span>{item.icon}</span>}
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
