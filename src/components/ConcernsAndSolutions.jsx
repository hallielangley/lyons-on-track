import { Typography, Box, Container } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import FlipCard from './FlipCard'

function ConcernsAndSolutions() {
    const { isMobile, getTypographyVariant, getSpacing } = useResponsive()

    const concernsAndSolutions = [
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Online Sewer Payments
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We'll create a modern, user-friendly website where residents can easily pay their sewer bills online. Traditional in-person payments will remain available for those who prefer them.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Traffic Safety
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We'll implement tree-lined sidewalks and traffic calming measures that naturally slow down vehicles while making our town more walkable and visually appealing.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Stray Cat Management
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We'll partner with local animal welfare organizations to establish a humane trap-neuter-return program that addresses the stray cat population responsibly.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Infrastructure & Weather
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We'll collaborate with neighboring municipalities to share costs for snow removal and road maintenance, while investing in improved stormwater systems to prevent flooding.
                </Typography>
            )
        },
        {
            concern: (
                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ color: 'white', textAlign: 'center' }}>
                    Property Revitalization
                </Typography>
            ),
            solution: (
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    We'll introduce a new ordinance to address neglected properties and explore transitioning to a land value tax system that could lower taxes for most residents while encouraging productive land use.
                </Typography>
            )
        }
    ]

    return (
        <Container maxWidth="lg" sx={{ 
            px: isMobile ? 2 : 3, 
            textAlign: 'center'
        }}>
            {/* Fixed Header Section */}
            <Box sx={{ flexShrink: 0, pt: 1 }}>
                <Typography
                    variant='h1'
                    sx={{
                        fontSize: isMobile ? '1.3rem' : '1.8rem',
                        fontWeight: 'bold',
                        mb: 1
                    }}
                >
                    Your Concerns, Our Solutions
                </Typography>

                <Typography sx={{ mb: 1, fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                    After listening to Lyons residents, we've identified the top priorities and developed practical solutions for each.
                </Typography>

                <Typography sx={{ mb: 1, fontSize: isMobile ? '0.7rem' : '0.8rem', fontStyle: 'italic' }}>
                    Tap each concern to see our proposed solution
                </Typography>
            </Box>

            {/* Cards Section - Only takes space it needs */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: isMobile ? 1 : 3,
                py: 1,
                overflowY: 'auto'
            }}>
                {/* First row - 3 cards */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 1 : 3,
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
                    gap: isMobile ? 1 : 3,
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

            {/* Fixed Footer Section */}
            <Box sx={{ flexShrink: 0, pb: 1 }}>
                <Typography sx={{ fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: 500 }}>
                    We're committed to working together to make Lyons an even better place to live.
                </Typography>
            </Box>
        </Container>
    )
}

export default ConcernsAndSolutions 