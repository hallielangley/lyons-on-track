import { useState, useRef } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'

function FlipCard({ front, back, height = 200, width = '100%' }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const { isMobile } = useResponsive()
  const cardRef = useRef(null)

  const handleClick = () => {
    const newFlippedState = !isFlipped
    setIsFlipped(newFlippedState)
    
    // Scroll to center the card when expanding on mobile
    if (isMobile && newFlippedState && cardRef.current) {
      setTimeout(() => {
        cardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        })
      }, 150) // Small delay to allow height transition to start
    }
  }

  // Calculate dynamic height for mobile
  const getDynamicHeight = () => {
    if (isMobile) {
      return isFlipped ? '25vh' : height
    }
    return height
  }

  return (
    <Box
      ref={cardRef}
      sx={{
        width: '100%',
        height: getDynamicHeight(),
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        transition: 'height 0.3s ease'
      }}
      onClick={handleClick}
    >
      <Card
        sx={{
          width: width,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isFlipped ? 'secondary.main' : 'primary.main',
          color: 'white',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: isFlipped ? 'secondary.dark' : 'primary.dark',
          },
          // Force fixed dimensions
          minWidth: width,
          maxWidth: width,
          minHeight: getDynamicHeight(),
          maxHeight: getDynamicHeight()
        }}
      >
        <CardContent sx={{ 
          width: '100%', 
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2
        }}>
          {isFlipped ? back : front}
        </CardContent>
      </Card>
    </Box>
  )
}

export default FlipCard 