import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

/* =======================
   A1 Pages
======================= */
import A1Home from './pages/a1/A1Home';
import A1OverviewPage from './pages/a1/A1OverviewPage';
import A1PartPage from './pages/a1/A1PartPage';

/* =======================
   A2 Pages
======================= */
import A2Home from './pages/a2/A2Home';
import A2PartPage from './pages/a2/A2PartPage';
import A2Language from './pages/a2/language/Language';
import A2Reading from './pages/a2/reading/Reading';
import A2Listening from './pages/a2/listening/Listening';

/* =======================
   Evaluation Pages
======================= */
import EvaluationHome from './pages/evaluation/EvaluationHome';
import Reading from './pages/evaluation/Reading';
import Listening from './pages/evaluation/Listening';
import Language from './pages/evaluation/Language';
import LanguageSummary from './pages/evaluation/LanguageSummary';

/* =======================
   Router configuration
======================= */
const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <EvaluationHome />,
            },

            /* ---------- A1 ---------- */
            {
                path: 'a1',
                element: <A1Home />,
                children: [
                    { index: true, element: <A1OverviewPage /> },
                    { path: 'part/:partId', element: <A1PartPage /> },
                ],
            },

            /* ---------- A2 ---------- */
            {
                path: 'a2',
                element: <A2Home />,
                children: [
                    { index: true, element: <A2Home /> },
                    { path: 'part/:partId', element: <A2PartPage /> },
                    { path: 'language', element: <A2Language /> },
                    { path: 'reading', element: <A2Reading /> },
                    { path: 'listening', element: <A2Listening /> },
                ],
            },

            /* ---------- Evaluation ---------- */
            { path: 'reading', element: <Reading /> },
            { path: 'listening', element: <Listening /> },
            { path: 'language', element: <Language /> },
            { path: 'language/summary', element: <LanguageSummary /> },
        ],
    },
]);

/* =======================
   App bootstrap
======================= */
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </StrictMode>
);
