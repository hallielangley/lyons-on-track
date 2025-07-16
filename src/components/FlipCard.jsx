import { useState } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'

function FlipCard({ front, back, height = 200, width = '100%' }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const { isMobile } = useResponsive()

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: height,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center'
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
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: isFlipped ? 'secondary.dark' : 'primary.dark',
          },
          // Force fixed dimensions
          minWidth: width,
          maxWidth: width,
          minHeight: height,
          maxHeight: height
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