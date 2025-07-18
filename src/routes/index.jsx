import { createBrowserRouter } from 'react-router-dom';

import ContactUs from '../containers/Contact';
import ErrorBoundary from '../components/ErrorBoundary';
import Home from '../containers/Home';
import HowToVote from '../containers/HowToVote';
import Layout from '../components/Layout';
import OurCandidates from '../containers/OurCandidates';
import OurSolutions from '../containers/OurSolutions';
import { PATHS, ROUTER_BASENAME } from './paths';

export const router = createBrowserRouter(
  [
    {
      path: PATHS.HOME,
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: PATHS.CANDIDATES,
          element: <OurCandidates />,
        },
        {
          path: PATHS.CONTACT,
          element: <ContactUs />,
        },
        {
          path: PATHS.HOW_TO_VOTE,
          element: <HowToVote />,
        },
        {
          path: PATHS.SOLUTIONS,
          element: <OurSolutions />,
        },
      ],
    },
  ],
  {
    basename: ROUTER_BASENAME,
  }
);
