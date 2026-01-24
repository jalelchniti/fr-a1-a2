import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import '../styles/navigation-enhancements.css';

interface NavItem {
  title: string;
  path: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface SidebarNavProps {
  title: string;
  items: NavItem[];
  isOpen?: boolean;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ title, items, isOpen = true }) => {
  const [sidebarOpen, setSidebarOpen] = useState(isOpen);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button className="navToggleBtn" onClick={toggleSidebar}>
        <Menu size={20} />
      </button>
      
      <aside className={`navSidebar ${sidebarOpen ? '' : 'hidden'}`}>
        <h3 className="navSidebarTitle">{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="navSidebarItem">
              <Link
                to={item.path}
                className={`navSidebarLink ${item.active ? 'active' : ''}`}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SidebarNav;