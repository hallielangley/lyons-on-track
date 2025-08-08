import React, { useEffect, useRef, useState } from 'react';

import {
  Box,
  Paper,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const SwipeableTabs = ({ sections, renderSection }) => {
  const [value, setValue] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    scrollToSection(newValue);
  };

  const scrollToSection = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sectionWidth = container.offsetWidth;
      container.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (!isScrolling && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sectionWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / sectionWidth);

      if (newIndex !== value) {
        setValue(newIndex);
      }
    }
  };

  const handlePrev = () => {
    if (value > 0) {
      handleChange(null, value - 1);
    }
  };

  const handleNext = () => {
    if (value < sections.length - 1) {
      handleChange(null, value + 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Sticky Tabs Header */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          bgcolor: 'background.default',
          py: 2,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            mx: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons={false}
            allowScrollButtonsMobile={false}
            centered={!isMobile}
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                minWidth: isMobile ? 'auto' : 120,
                flexShrink: 0,
              },
              '& .MuiTabs-indicator': {
                height: 3,
              },
              '& .MuiTabs-scrollButtons': {
                '&.Mui-disabled': {
                  opacity: 0.3,
                },
              },
            }}
          >
            {sections.map((section, index) => (
              <Tab
                key={section.id}
                label={
                  <Box sx={{ textAlign: 'center', lineHeight: 1.2 }}>
                    {(() => {
                      const title = section.title;
                      if (title === 'Mayoral Election Materials') {
                        return (
                          <>
                            Mayoral
                            <br />
                            Election Materials
                          </>
                        );
                      } else if (
                        title === 'Borough Council Election Materials'
                      ) {
                        return (
                          <>
                            Borough Council
                            <br />
                            Election Materials
                          </>
                        );
                      } else if (title === 'In the News') {
                        return (
                          <>
                            In the
                            <br />
                            News
                          </>
                        );
                      }
                      return title;
                    })()}
                  </Box>
                }
                sx={{
                  '&.Mui-selected': {
                    color: 'primary.main',
                  },
                  minHeight: 80,
                  py: 1,
                }}
              />
            ))}
          </Tabs>
        </Paper>
      </Box>

      {/* Content Area */}
      <Box sx={{ position: 'relative' }}>
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none', // Firefox
            '&::-webkit-scrollbar': {
              display: 'none', // Chrome, Safari, Edge
            },
            '& > *': {
              flexShrink: 0,
              width: '100%',
              scrollSnapAlign: 'start',
            },
          }}
        >
          {sections.map((section, index) => (
            <Box
              key={section.id}
              role="tabpanel"
              sx={{
                minHeight: '400px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {renderSection(section)}
            </Box>
          ))}
        </Box>

        {/* Dots Indicator */}
        {sections.length > 1 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 3,
              gap: 1,
            }}
          >
            {sections.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleChange(null, index)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: index === value ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    bgcolor: index === value ? 'primary.main' : 'grey.400',
                  },
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SwipeableTabs;
