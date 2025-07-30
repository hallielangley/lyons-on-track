import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

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
        behavior: 'smooth'
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
            variant={isMobile ? "fullWidth" : "standard"}
            centered={!isMobile}
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
              },
              '& .MuiTabs-indicator': {
                height: 3,
              },
            }}
          >
            {sections.map((section, index) => (
              <Tab 
                key={section.id} 
                label={section.title}
                sx={{
                  '&.Mui-selected': {
                    color: 'primary.main',
                  },
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Swipe Indicator for Mobile */}
        {isMobile && sections.length > 1 && (
          <Box
            sx={{
              textAlign: 'center',
              mt: 2,
              color: 'text.secondary',
              fontSize: '0.875rem',
            }}
          >
            <Typography variant="caption">
              Swipe to view different materials
            </Typography>
          </Box>
        )}
      </Box>

      {/* Content Area */}
      <Box sx={{ position: 'relative' }}>
        {/* Navigation Arrows */}
        {!isMobile && sections.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              disabled={value === 0}
              sx={{
                position: 'absolute',
                left: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                bgcolor: 'background.paper',
                boxShadow: 2,
                '&:hover': {
                  bgcolor: 'background.paper',
                },
                '&.Mui-disabled': {
                  opacity: 0.3,
                },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={value === sections.length - 1}
              sx={{
                position: 'absolute',
                right: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                bgcolor: 'background.paper',
                boxShadow: 2,
                '&:hover': {
                  bgcolor: 'background.paper',
                },
                '&.Mui-disabled': {
                  opacity: 0.3,
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          </>
        )}

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