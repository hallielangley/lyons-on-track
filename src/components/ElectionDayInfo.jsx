import { Card, CardContent, Typography } from '@mui/material'
import { useResponsive } from '../hooks/useResponsive'
import { responsiveStyles, getResponsiveValue } from '../utils/responsiveStyles'
import CandidateItem from './CandidateItem'

function ElectionDayInfo() {
    const { isMobile, getTypographyVariant, getSpacing } = useResponsive()

    const candidates = [
        { name: 'Alexander Darlington', position: 'Mayor' },
        { name: 'Tracey Sutton', position: 'Borough Council' }
    ]

    const writeInCandidates = [
        { name: 'Hallie Langley', position: 'Borough Council' },
        { name: 'Janet Mossie-Lance', position: 'Borough Council' }
    ]

    return (
        <Card sx={{ mb: getSpacing(3, 4) }}>
            <CardContent sx={{ 
                p: getResponsiveValue(responsiveStyles.padding.card, isMobile),
                textAlign: 'center'
            }}>
                <Typography variant={getTypographyVariant('h5', 'h4')} component="h2" sx={{ fontWeight: 'bold' }}>
                    VOTE
                </Typography>
                {candidates.map((candidate, index) => (
                    <CandidateItem 
                        key={index}
                        name={candidate.name}
                        position={candidate.position}
                        variant="h6"
                    />
                ))}
                
                <Typography variant={getTypographyVariant('h5', 'h4')} component="h2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    WRITE IN
                </Typography>
                <Typography fontStyle="italic" color='text.secondary' sx={{ mb: 1 }}>
                    Please spell exactly.
                </Typography>
                {writeInCandidates.map((candidate, index) => (
                    <CandidateItem 
                        key={index}
                        name={candidate.name}
                        position={candidate.position}
                        variant="h6"
                    />
                ))}

                <Typography variant={getTypographyVariant('h6', 'h5')} sx={{ mt: 3, fontWeight: 'bold' }}>
                    ON NOVEMBER 4
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Lyons Borough Hall
                </Typography>
                <Typography variant="body1" gutterBottom>
                    316 Kemp St
                </Typography>
                <Typography variant="body1" sx={{ fontSize: getResponsiveValue(responsiveStyles.fontSize.normal, isMobile) }}>
                    Polls are open from 7 a.m. to 8 p.m. on Election Day. Remember, if you are in line by 8 p.m., you can vote.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ElectionDayInfo