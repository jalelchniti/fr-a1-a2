import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ClipboardCheck,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import './Navigation.css';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  children?: { path: string; label: string }[];
}

const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Évaluation',
    icon: <ClipboardCheck size={20} />,
    children: [
      { path: '/', label: 'Vue d\'ensemble' },
      { path: '/reading', label: 'Compréhension écrite' },
      { path: '/listening', label: 'Compréhension orale' },
      { path: '/language', label: 'Grammaire & Vocabulaire' },
    ]
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    // Normalize paths to remove any trailing slashes
    const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    const normalizedLocation = location.pathname.endsWith('/') && location.pathname.length > 1 ? location.pathname.slice(0, -1) : location.pathname;

    // Check for exact match
    if (normalizedPath === normalizedLocation) {
      return true;
    }

    // For parent paths, check if the current location starts with the parent path
    // and is followed by a slash for nested routes.
    if (location.pathname.startsWith(normalizedPath + '/')) {
      return true;
    }
    
    return false;
  };

  const toggleDropdown = (path: string) => {
    setOpenDropdown(openDropdown === path ? null : path);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">
            <span className="flag-blue"></span>
            <span className="flag-white"></span>
            <span className="flag-red"></span>
          </span>
          <span className="logo-text">
            <span className="logo-title">FLE</span>
            <span className="logo-subtitle">A1 - A2</span>
          </span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              {item.children ? (
                <div className="nav-dropdown">
                  <button
                    className={`nav-link nav-dropdown-trigger ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => toggleDropdown(item.path)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`dropdown-arrow ${openDropdown === item.path ? 'rotated' : ''}`}
                    />
                  </button>
                  <ul className={`dropdown-menu ${openDropdown === item.path ? 'show' : ''}`}>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className={`dropdown-link ${location.pathname === child.path ? 'active' : ''}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
