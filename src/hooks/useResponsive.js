import { useTheme, useMediaQuery } from "@mui/material";

export const useResponsive = () => {
  const theme = useTheme();

  // Breakpoint queries
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // < 900px
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900px - 1200px
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // >= 1200px
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // < 600px

  // Responsive typography variants
  const getTypographyVariant = (mobileVariant, desktopVariant) => {
    return isMobile ? mobileVariant : desktopVariant;
  };

  // Responsive spacing
  const getSpacing = (mobileSpacing, desktopSpacing) => {
    return isMobile ? mobileSpacing : desktopSpacing;
  };

  // Responsive font sizes
  const getFontSize = (mobileSize, desktopSize) => {
    return isMobile ? mobileSize : desktopSize;
  };

  // Responsive padding
  const getPadding = (mobilePadding, desktopPadding) => {
    return isMobile ? mobilePadding : desktopPadding;
  };

  // Responsive grid spacing
  const getGridSpacing = (mobileSpacing, desktopSpacing) => {
    return isMobile ? mobileSpacing : desktopSpacing;
  };

  // Responsive container padding
  const getContainerPadding = () => {
    return isMobile ? 2 : 3;
  };

  // Responsive card padding
  const getCardPadding = () => {
    return isMobile ? 2 : 3;
  };

  // Responsive avatar size
  const getAvatarSize = (mobileSize, desktopSize) => {
    return isMobile ? mobileSize : desktopSize;
  };

  // Responsive icon size
  const getIconSize = (mobileSize, desktopSize) => {
    return isMobile ? mobileSize : desktopSize;
  };

  // Responsive button size
  const getButtonSize = () => {
    return isMobile ? "small" : "medium";
  };

  // Responsive navigation text
  const getNavText = (mobileText, desktopText) => {
    return isMobile ? mobileText : desktopText;
  };

  return {
    // Breakpoint flags
    isMobile,
    isTablet,
    isDesktop,
    isSmallScreen,

    // Utility functions
    getTypographyVariant,
    getSpacing,
    getFontSize,
    getPadding,
    getGridSpacing,
    getContainerPadding,
    getCardPadding,
    getAvatarSize,
    getIconSize,
    getButtonSize,
    getNavText,
  };
};
