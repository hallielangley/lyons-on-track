import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import HowToVote from '../components/HowToVote'
import ConcernsAndSolutions from '../components/ConcernsAndSolutions'
import ErrorBoundary from '../components/ErrorBoundary'
import ScrollableSectionTest from '../components/ScrollableSectionTest'

export const router = createBrowserRouter([
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
], {
  basename: '/lyons-on-track/',
}) 