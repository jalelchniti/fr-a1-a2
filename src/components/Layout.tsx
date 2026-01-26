import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={styles['layout']}>
      <Navigation />
      <main className={styles['mainContent']}>
        <Outlet />
      </main>
      <footer className={styles['footer']}>
        <div className={styles['footerContent']}>
          <p>FLE A1-A2 Learning Platform</p>
          <p className={styles['footerCredits']}>
            Apprendre le francais avec plaisir
          </p>
        </div>
      </footer>
    </div>
  );
}
