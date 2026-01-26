import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import A1Home from './pages/a1/A1Home';
import EvaluationHome from './pages/evaluation/EvaluationHome';
import Reading from './pages/evaluation/Reading';
import Listening from './pages/evaluation/Listening';
import Language from './pages/evaluation/Language';
import LanguageSummary from './pages/evaluation/LanguageSummary';
import A1Language from './pages/a1/language/Language';
import A1Reading from './pages/a1/reading/Reading';
import A1Listening from './pages/a1/listening/Listening';
import A2Home from './pages/a2/A2Home';
import A2Language from './pages/a2/language/Language';
import A2Reading from './pages/a2/reading/Reading';
import A2Listening from './pages/a2/listening/Listening';
import ErrorBoundary from './components/ErrorBoundary';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <EvaluationHome />,
      },
      {
        path: 'a1',
        element: <A1Home />,
      },
      {
        path: 'a1/language',
        element: <A1Language />,
      },
      {
        path: 'a1/reading',
        element: <A1Reading />,
      },
      {
        path: 'a1/listening',
        element: <A1Listening />,
      },
      {
        path: 'a2',
        element: <A2Home />,
      },
      {
        path: 'a2/language',
        element: <A2Language />,
      },
      {
        path: 'a2/reading',
        element: <A2Reading />,
      },
      {
        path: 'a2/listening',
        element: <A2Listening />,
      },
      {
        path: 'reading',
        element: <Reading />,
      },
      {
        path: 'listening',
        element: <Listening />,
      },
      {
        path: 'language',
        element: <Language />,
      },
      {
        path: 'language/summary',
        element: <LanguageSummary />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
