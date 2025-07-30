import { createHashRouter } from 'react-router-dom';

import CampaignMedia from '../containers/CampaignMedia';
import ContactUs from '../containers/Contact';
import ErrorBoundary from '../components/ErrorBoundary';
import Home from '../containers/Home';
import HowToVote from '../containers/HowToVote';
import Layout from '../components/Layout';
import OurCandidates from '../containers/OurCandidates';
import OurSolutions from '../containers/OurSolutions';
import { PATHS } from './paths';

export const router = createHashRouter(
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
        {
          path: PATHS.CAMPAIGN_MEDIA,
          element: <CampaignMedia />,
        },
      ],
    },
  ]
);
