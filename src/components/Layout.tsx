import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>FLE A1-A2 Learning Platform</p>
          <p className="footer-credits">
            Apprendre le francais avec plaisir
          </p>
        </div>
      </footer>
    </div>
  );
}
