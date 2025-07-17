import { Container, Grid, Typography } from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';
import {
  getResponsiveValue,
  responsiveStyles,
} from '../utils/responsiveStyles';
import CandidateCard from './CandidateCard';

function About() {
  const {
    isMobile,
    getTypographyVariant,
    getSpacing,
    getGridSpacing,
    getContainerPadding,
  } = useResponsive();

  const candidates = [
    {
      name: 'Alexander Darlington',
      position: 'Mayoral Candidate',
      initials: 'AD',
      imageNote:
        'The image reference shows "Alex.jpg" which would be displayed here.',
      bio: [
        "Alexander Darlington is a student from Kutztown University currently obtaining their Master's in Public Administration and plans to have a lifelong career in public service. His community involvement has been diverse, being an active citizen in university as well as local Kutztown, Mataxawny, and Lyons politics. In Alex's free time, he likes to read, go hiking, or hit up the thrift store to see if he can find anything good.",
        'Darlington sees the pathway to helping the citizens through cooperation with other municipalities and tapping into available funding such as grants.',
      ],
    },
    {
      name: 'Tracey Sutton',
      position: 'Borough Council Candidate',
      initials: 'TS',
      imageNote:
        'The image reference shows "Photo of Tracey" which would be displayed here.',
      bio: [
        'Tracey (Hagerman) Sutton is a longtime educator and proud Lyons resident since 2014. A graduate of Kutztown Area High School and Juniata College, Tracey has spent her career in service, working first as a Brethren Volunteer working with immigrant communities and then as a public school teacher in Los Angeles and Phoenix.',
        'She later taught adult education and worked as a Program Coordinator in behavioral health, gaining experience in teamwork, grant writing, and needs assessment. Since 2011, she has been a high school teacher in the Perkiomen Valley School District and has led multiple student trips abroad.',
        'Tracey is passionate about the Lyons community and believes its people, location, and charm make it a special place to live. She is eager to listen, collaborate, and help Lyons reach its full potential as a member of Borough Council.',
      ],
    },
    {
      name: 'Hallie Langley',
      position: 'Borough Council Candidate',
      initials: 'HL',
      imageNote:
        'The image reference shows "Photo of Hallie" which would be displayed here.',
      bio: ['Enter text here'],
    },
    {
      name: 'Janet Mossie-Lance',
      position: 'Borough Council Candidate',
      initials: 'JM',
      imageNote:
        'The image reference shows "Photo of Janet" which would be displayed here.',
      bio: [
        "Janet Mossie-Lance is an Associate Broker for Tosco Real Estate Services, LLC and has been licensed for over 30 years with a diverse background in the industry. In addition, Janet also works part time at St. Luke's Care Now in Kutztown where she takes pride in playing a part in helping the surrounding area residents receive top medical care. She also holds degrees in both Communication and Criminal Justice. When Janet is not at work, she can be found teaching Sunday school, bible school, and spending time with her family.",
        'Janet is eager for the opportunity to work with each and every resident to revitalize the charming borough of Lyons. She is dedicated to benefiting the community through action items such as increasing home values.',
      ],
    },
  ];

  return (
    <Container sx={{ px: getContainerPadding() }}>
      <Typography
        variant={getTypographyVariant('h4', 'h3')}
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: getSpacing(3, 4),
          fontSize: getResponsiveValue(
            responsiveStyles.fontSize.heading,
            isMobile
          ),
        }}
      >
        About Our Candidates
      </Typography>

      <Grid container spacing={getGridSpacing(2, 4)}>
        {candidates.map((candidate, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CandidateCard candidate={candidate} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About;
