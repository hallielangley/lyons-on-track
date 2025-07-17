import { createBrowserRouter } from 'react-router-dom';

import About from '../components/About';
import ConcernsAndSolutions from '../components/ConcernsAndSolutions';
import Contact from '../components/Contact';
import ErrorBoundary from '../components/ErrorBoundary';
import Home from '../components/Home';
import HowToVote from '../components/HowToVote';
import Layout from '../components/Layout';
import ScrollableSectionTest from '../components/ScrollableSectionTest';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'how-to-vote',
          element: <HowToVote />,
        },
        {
          path: 'solutions',
          element: <ConcernsAndSolutions />,
        },
      ],
    },
  ],
  {
    basename: '/lyons-on-track/',
  }
);
