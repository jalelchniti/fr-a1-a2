import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import A1Home from './pages/a1/A1Home';
import EvaluationHome from './pages/evaluation/EvaluationHome';
import Reading from './pages/evaluation/Reading';
import Listening from './pages/evaluation/Listening';
import Language from './pages/evaluation/Language';
import LanguageSummary from './pages/evaluation/LanguageSummary';

import A2Home from './pages/a2/A2Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'a1',
        element: <A1Home />,
      },
      {
        path: 'a2',
        element: <A2Home />,
      },
      {
        path: 'evaluation',
        element: <EvaluationHome />,
      },
      {
        path: 'evaluation/reading',
        element: <Reading />,
      },
      {
        path: 'evaluation/listening',
        element: <Listening />,
      },
      {
        path: 'evaluation/language',
        element: <Language />,
      },
      {
        path: 'evaluation/language/summary',
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
