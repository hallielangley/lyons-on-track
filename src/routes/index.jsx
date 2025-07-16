import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import HowToVote from '../components/HowToVote'
import Solutions from '../components/Solutions'
import ErrorBoundary from '../components/ErrorBoundary'

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
        element: <Solutions />,
      },
    ],
  },
], {
  basename: '/lyons-on-track/',
}) 