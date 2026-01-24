import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import A1Home from './pages/a1/A1Home';
import EvaluationHome from './pages/evaluation/EvaluationHome';
import Reading from './pages/evaluation/Reading';
import Listening from './pages/evaluation/Listening';
import Language from './pages/evaluation/Language';
import LanguageSummary from './pages/evaluation/LanguageSummary';
import LanguageChapter from './pages/a1/language/LanguageChapter';
import A2Home from './pages/a2/A2Home';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
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
        element: <LanguageChapter />,
      },
      {
        path: 'a2',
        element: <A2Home />,
      },
      {
        path: 'evaluation',
        element: <EvaluationHome />,
        children: [
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
    ],
  },
], {
  basename: '/fr-a1-a2/'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
