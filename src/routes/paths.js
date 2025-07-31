// Centralized path constants for the application
export const PATHS = {
  HOME: '/',
  CANDIDATES: '/candidates',
  CONTACT: '/contact',
  HOW_TO_VOTE: '/vote',
  SOLUTIONS: '/solutions',
  CAMPAIGN_MEDIA: '/media',
  ERROR_TEST: '/error-test',
};

// Navigation items configuration
export const NAV_ITEMS = [
  {
    path: PATHS.HOME,
    text: 'Home',

  },
  {
    path: PATHS.HOW_TO_VOTE,
    text: 'How to Vote',
  },
  {
    path: PATHS.SOLUTIONS,
    text: 'Our Solutions',
  },
  {
    path: PATHS.CANDIDATES,
    text: 'Our Candidates',
  },
  {
    path: PATHS.CAMPAIGN_MEDIA,
    text: 'Campaign Media',
  },
  {
    path: PATHS.CONTACT,
    text: 'Contact Us',
  },
];

// Router basename for deployment
export const ROUTER_BASENAME = '/'; 