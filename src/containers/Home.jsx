import { Helmet } from 'react-helmet-async';

import { useEffect } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import boroughHallImage from '../assets/borough-hall.jpg';
import oldFirehouseImage from '../assets/old-firehouse.jpg';
import StructuredData from '../components/StructuredData';
import { campaignSections } from '../data/campaignMedia';
import { PATHS } from '../routes/paths';
import { useAppNavigation } from '../routes/utils';
import { getCachedLinkPreview } from '../utils/linkPreview';

function Home() {
  const { goTo } = useAppNavigation();

  // Preload link previews in the background
  useEffect(() => {
    const preloadLinkPreviews = async () => {
      try {
        // Find external links sections and preload their previews
        const externalLinksSections = campaignSections.filter(
          (section) => section.type === 'external-links'
        );

        for (const section of externalLinksSections) {
          if (section.links) {
            for (const link of section.links) {
              // Preload each link preview (this will cache it)
              await getCachedLinkPreview(link.url);
            }
          }
        }
      } catch (error) {
        // Silently fail - this is just preloading, not critical
        console.log('Link preview preloading failed:', error);
      }
    };

    // Start preloading after a short delay to not block initial page load
    const timer = setTimeout(preloadLinkPreviews, 1000);

    return () => clearTimeout(timer);
  }, []);

  // SEO metadata
  const pageTitle = 'Lyons on Track - Campaign for Positive Change';
  const pageDescription =
    'Join Alexander Darlington and our Borough Council candidates in building a better Lyons, PA. Learn about our vision, meet our candidates, and get involved in the campaign for positive change.';
  const pageUrl = 'https://lyonsontrack.com';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lyons on Track',
    description:
      'Campaign for positive change in Lyons, PA through transparency, communication, and community collaboration',
    url: 'https://www.lyonsontrack.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lyons',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    sameAs: ['https://www.lyonsontrack.org'],
    foundingDate: '2025',
    areaServed: {
      '@type': 'City',
      name: 'Lyons, Pennsylvania',
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Lyons PA election, Alexander Darlington mayor, Borough Council candidates, Lyons campaign 2024, positive change Lyons"
        />
        <meta name="author" content="Lyons on Track Campaign" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://lyonsontrack.com/borough-hall.jpg"
        />
        <meta property="og:site_name" content="Lyons on Track" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta
          property="twitter:image"
          content="https://lyonsontrack.com/borough-hall.jpg"
        />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Lyons, Pennsylvania" />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <StructuredData data={structuredData} />
      <Container>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            textAlign: 'center',
          }}
        >
          Lyons on Track
        </Typography>
        <Card
          sx={{
            mb: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: '100%', md: 300 },
              height: { xs: 200, md: 'auto' },
              objectFit: 'cover',
              objectPosition: '70% center', // You can adjust this - try 'center top', 'center bottom', 'left center', 'right center', etc.
            }}
            image={oldFirehouseImage}
            alt="Historic Old Firehouse Building in Lyons - A symbol of our community's heritage"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardHeader
              title="Our Vision for Lyons, Pennsylvania"
              sx={{ pb: 0 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We are not running to push our own agenda - we're running to
                carry yours. We want to listen to what the citizens of Lyons
                have to say and work to fix those concerns. A part of that is
                increasing transparency and communication between the borough
                government and residents.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We believe Lyons, PA has tremendous potential and we can tap
                into it together. Our town's history illustrates a place that
                used to be bustling and lively. We have the opportunity to
                revive Lyons Borough together through community engagement and
                effective local government!
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                Our Key Priorities:
              </Typography>
              <Typography
                component="div"
                variant="body2"
                sx={{ textAlign: 'left', pl: 2 }}
              >
                • Online Sewer Payments
                <br />
                • Traffic Safety
                <br />
                • Stray Cat Management
                <br />
                • Infrastructure & Weather
                <br />• Property Revitalization
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Card
          sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardHeader
              title="2025 Municipal Election Information"
              sx={{ pb: 0 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography
                sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.1rem' }}
              >
                📅 Election Day: November 4, 2025
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <strong>Key Election Dates:</strong>
                <br />
                • Voter Registration Deadline: October 20, 2025
                <br />
                • Mail-in Ballot Request Deadline: October 28, 2025
                <br />• Election Day Polls: 7 A.M. - 8 P.M.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                📋 Want to vote our slate on election day? Check out our{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(PATHS.HOW_TO_VOTE);
                  }}
                  style={{
                    color: 'inherit',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  How to Vote guide
                </a>{' '}
                for an election day cheat sheet with everything you need to
                know.
              </Typography>
              <Typography>
                For complete Pennsylvania election information, including voter
                registration and voting procedures, visit the{' '}
                <a
                  href="https://www.pa.gov/agencies/vote/elections/upcoming-elections"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                >
                  official PA elections page
                </a>
                .
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: { xs: '100%', md: 300 },
              height: { xs: 200, md: 'auto' },
              objectFit: 'cover',
              objectPosition: '65% center', // You can adjust this - try 'center top', 'center bottom', 'left center', 'right center', etc.
            }}
            image={boroughHallImage}
            alt="Lyons Borough Hall - The heart of our community where democracy happens"
          />
        </Card>

        {/* Quick Links Section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}
          >
            Get to Know Our Campaign
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: 'flex', width: '100%' }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 200,
                  flex: '1 1 0%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  👥 Meet Our Candidates
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 3, flex: 1, lineHeight: 1.6 }}
                >
                  Learn about Alexander Darlington and our Borough Council
                  candidates: <br />
                  • Tracey Sutton
                  <br />
                  • Hallie Langley (Write-in)
                  <br />• Janet Mossie-Lance (Write-in)
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => goTo(PATHS.CANDIDATES)}
                  sx={{ mt: 'auto' }}
                >
                  View Candidates
                </Button>
              </Card>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: 'flex', width: '100%' }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 200,
                  flex: '1 1 0%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  📋 Our Solutions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 3, flex: 1, lineHeight: 1.6 }}
                >
                  See how we'll address key issues and improve Lyons
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => goTo(PATHS.SOLUTIONS)}
                  sx={{ mt: 'auto' }}
                >
                  View Platform
                </Button>
              </Card>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: 'flex', width: '100%' }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 200,
                  flex: '1 1 0%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  📰 Campaign Materials
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 3, flex: 1, lineHeight: 1.6 }}
                >
                  Download palm cards, yard signs, and see media coverage
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => goTo(PATHS.MEDIA)}
                  sx={{ mt: 'auto' }}
                >
                  Get Materials
                </Button>
              </Card>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: 'flex', width: '100%' }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 200,
                  flex: '1 1 0%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  📞 Get Involved
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 3, flex: 1, lineHeight: 1.6 }}
                >
                  Don't hesitate to reach out with any questions about our
                  platform, the election process, or how you can get involved in
                  making Lyons a better place to live.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => goTo(PATHS.CONTACT)}
                  sx={{ mt: 'auto' }}
                >
                  Contact Us
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Home;
