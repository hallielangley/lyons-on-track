import { useMediaQuery, useTheme } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();

  // Breakpoint queries - these are useful and MUI doesn't provide them as easily
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px - 1200px
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // >= 1200px
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

  return {
    // Breakpoint flags - useful for conditional logic
    isMobile,
    isTablet,
    isDesktop,
    isSmallScreen,
  };
};
