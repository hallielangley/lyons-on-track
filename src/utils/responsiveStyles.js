// Responsive style utilities
export const responsiveStyles = {
  // Typography variants
  heading: {
    mobile: "h4",
    desktop: "h3",
  },
  subheading: {
    mobile: "h5",
    desktop: "h4",
  },
  title: {
    mobile: "h6",
    desktop: "h5",
  },
  body: {
    mobile: "body1",
    desktop: "body1",
  },

  // Font sizes
  fontSize: {
    small: {
      mobile: "0.8rem",
      desktop: "0.875rem",
    },
    normal: {
      mobile: "0.9rem",
      desktop: "1rem",
    },
    large: {
      mobile: "1rem",
      desktop: "1.25rem",
    },
    heading: {
      mobile: "2rem",
      desktop: "3rem",
    },
    subheading: {
      mobile: "1.5rem",
      desktop: "2.125rem",
    },
  },

  // Spacing
  spacing: {
    small: {
      mobile: 2,
      desktop: 3,
    },
    medium: {
      mobile: 3,
      desktop: 4,
    },
    large: {
      mobile: 4,
      desktop: 6,
    },
  },

  // Padding
  padding: {
    container: {
      mobile: 2,
      desktop: 3,
    },
    card: {
      mobile: 2,
      desktop: 3,
    },
    paper: {
      mobile: 3,
      desktop: 4,
    },
  },

  // Grid spacing
  gridSpacing: {
    mobile: 2,
    desktop: 4,
  },

  // Avatar sizes
  avatar: {
    small: {
      mobile: 40,
      desktop: 60,
    },
    medium: {
      mobile: 60,
      desktop: 80,
    },
    large: {
      mobile: 80,
      desktop: 100,
    },
  },

  // Icon sizes
  icon: {
    small: {
      mobile: 24,
      desktop: 32,
    },
    medium: {
      mobile: 40,
      desktop: 60,
    },
    large: {
      mobile: 60,
      desktop: 80,
    },
  },

  // Button sizes
  button: {
    mobile: "small",
    desktop: "medium",
  },

  // Navigation text
  navText: {
    "how-to-vote": {
      mobile: "Vote",
      desktop: "How to Vote",
    },
  },
};

// Helper function to get responsive value
export const getResponsiveValue = (values, isMobile) => {
  if (typeof values === "object" && values.mobile !== undefined) {
    return isMobile ? values.mobile : values.desktop;
  }
  return values;
};

// Helper function to create responsive sx object
export const createResponsiveSx = (styles, isMobile) => {
  const sx = {};

  Object.entries(styles).forEach(([key, value]) => {
    if (
      typeof value === "object" &&
      (value.mobile !== undefined || value.desktop !== undefined)
    ) {
      sx[key] = getResponsiveValue(value, isMobile);
    } else {
      sx[key] = value;
    }
  });

  return sx;
};
