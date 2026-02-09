import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import SidebarNav from './SidebarNav';
import Breadcrumb from './Breadcrumb';

import {
    A1_NAVIGATION,
    A2_NAVIGATION,
    EVALUATION_NAVIGATION,
} from '../navigation/navigation.config';

import styles from './Layout.module.css';

export default function Layout() {
    const location = useLocation();
    const path = location.pathname;

    let navigation = null;

    if (path.startsWith('/a1')) {
        navigation = A1_NAVIGATION;
    } else if (path.startsWith('/a2')) {
        navigation = A2_NAVIGATION;
    } else if (
        path.startsWith('/language') ||
        path.startsWith('/reading') ||
        path.startsWith('/listening')
    ) {
        navigation = EVALUATION_NAVIGATION;
    }

    return (
        <div className={styles.layout}>
            <Navigation />

            <div className={styles.mainContent}>
                {navigation && (
                    <SidebarNav
                        title={navigation.title}
                        items={navigation.items}
                    />
                )}

                <div className={styles.pageContent}>
                    <Breadcrumb />
                    <Outlet />
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>FLE A1-A2 Learning Platform</p>
                    <p className={styles.footerCredits}>
                        Apprendre le français avec plaisir
                    </p>
                </div>
            </footer>
        </div>
    );
}
