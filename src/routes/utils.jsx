import { useLocation, useNavigate } from 'react-router-dom';

import { PATHS } from './paths';

// Custom hook for navigation with additional features
export const useAppNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path, options = {}) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate(PATHS.HOME);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return {
    goTo,
    goBack,
    goHome,
    isActiveRoute,
    currentPath: location.pathname,
  };
};
