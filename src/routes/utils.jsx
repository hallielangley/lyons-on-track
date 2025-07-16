import { useNavigate, useLocation } from 'react-router-dom'

// Custom hook for navigation with additional features
export const useAppNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const goTo = (path, options = {}) => {
    navigate(path, options)
  }

  const goBack = () => {
    navigate(-1)
  }

  const goHome = () => {
    navigate('/')
  }

  const isActiveRoute = (path) => {
    return location.pathname === path
  }

  return {
    goTo,
    goBack,
    goHome,
    isActiveRoute,
    currentPath: location.pathname,
  }
}

// Route constants for better maintainability
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} 

// Route metadata for additional information
export const ROUTE_METADATA = {
  [ROUTES.HOME]: {
    title: 'Home',
    description: 'Welcome to Lyons on Track',
  },
  [ROUTES.ABOUT]: {
    title: 'About',
    description: 'Learn more about us',
  },
  [ROUTES.CONTACT]: {
    title: 'Contact',
    description: 'Get in touch with us',
  },
} 