import { useLocation, Outlet } from 'react-router-dom'; // Import Outlet
import a2Styles from './A2Home.module.css';

import SidebarNav from '../../components/SidebarNav';

export default function A2Home() {
  const location = useLocation();
  const sidebarItems = [
    { title: 'Vue d\'ensemble', path: '/a2', active: location.pathname === '/a2' },
    { title: 'A2-1', path: '/a2/part-1', active: location.pathname === '/a2/part-1' },
    { title: 'A2-2', path: '/a2/part-2', active: location.pathname === '/a2/part-2' },
    { title: 'A2-3', path: '/a2/part-3', active: location.pathname === '/a2/part-3' },
    { title: 'A2-4', path: '/a2/part-4', active: location.pathname === '/a2/part-4' },
  ];

  return (
    <div className={a2Styles['a2HomeSimplified']} style={{ display: 'flex', gap: '2rem' }}>
      <SidebarNav title="Niveau A2" items={sidebarItems} />
      <div style={{ flex: 1 }}>
        <Outlet /> {/* Render child routes here */}
      </div>
    </div>
  );
}