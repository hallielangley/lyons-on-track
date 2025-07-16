import { Typography, Box, Container } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import FlipCard from './FlipCard'

function ConcernsAndSolutions() {
    const { isMobile, getTypographyVariant, getSpacing } = useResponsive()

    const concernsAndSolutions = [
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Sewer Bill Online Payment
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We'll build a new, modern website where residents can pay their sewer bills online. In-person payments will still be available.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Speeding Issues
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We plan to add tree-lined sidewalks that naturally slow down traffic and make our town more walkable and beautiful.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Stray Cat Issue
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We want to partner with local nonprofits to start a humane catch-and-release program for stray cats.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Stormwater & Snow
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We'll work with nearby boroughs and townships to share costs and improve snow removal and salting. We will also invest in better stormwater systems to reduce flooding.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Blighted Properties
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We support a new ordinance to address neglected properties. We also want to shift from a property tax to a land value tax, which rewards productive use and could lower taxes on average for most residents.
                </Typography>
            )
        }
    ]

    return (
        <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3, textAlign: 'center' }}>
            <Typography
                variant='h1'
                sx={{
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    fontWeight: 'bold'
                }}
            >
                Top Concerns & Solutions
            </Typography>

            <Typography >From listening to the residents of Lyons, here is what we found to be the top 5 issues:</Typography>


            <Typography>
                Click on each concern to see our proposed solution
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: isMobile ? 2 : 4
            }}>
                {/* First row - 3 cards */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 2 : 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    {concernsAndSolutions.slice(0, 3).map((item, index) => (
                        <Box key={index} sx={{
                            width: isMobile ? '100%' : '280px',
                            maxWidth: isMobile ? '300px' : '280px',
                            flexShrink: 0
                        }}>
                            <FlipCard
                                front={item.concern}
                                back={item.solution}
                                height={isMobile ? 120 : 180}
                                width={isMobile ? '100%' : '280px'}
                            />
                        </Box>
                    ))}
                </Box>

                {/* Second row - 2 cards */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 2 : 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    {concernsAndSolutions.slice(3, 5).map((item, index) => (
                        <Box key={index + 3} sx={{
                            width: isMobile ? '100%' : '280px',
                            maxWidth: isMobile ? '300px' : '280px',
                            flexShrink: 0
                        }}>
                            <FlipCard
                                front={item.concern}
                                back={item.solution}
                                height={isMobile ? 120 : 180}
                                width={isMobile ? '100%' : '280px'}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Typography>We are dedicated as a slate to tackling these concerns. </Typography>
        </Container>
    )
}

export default ConcernsAndSolutions 