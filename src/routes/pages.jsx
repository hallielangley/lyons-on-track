import { lazy } from 'react';

// Lazy load components for better performance
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

export const pages = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];
