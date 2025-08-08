import { Helmet } from 'react-helmet-async';

import { Box, Container, Typography } from '@mui/material';

import CampaignSection from '../components/CampaignSection';
import ExternalLinkSection from '../components/ExternalLinkSection';
import ExternalLinksSection from '../components/ExternalLinksSection';
import StructuredData from '../components/StructuredData';
import SwipeableTabs from '../components/SwipeableTabs';
import { campaignSections } from '../data/campaignMedia';
import { PATHS } from '../routes/paths';
import { useAppNavigation } from '../routes/utils';

const CampaignMedia = () => {
  const { goTo } = useAppNavigation();

  const handleDownload = (downloadUrl, filename) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderSection = (section) => {
    switch (section.type) {
      case 'downloads':
        return (
          <CampaignSection
            title={section.title}
            palmCardFront={section.images.palmCardFront}
            palmCardBack={section.images.palmCardBack}
            yardSign={section.images.yardSign}
            downloadItems={section.downloadItems}
            onDownload={handleDownload}
          />
        );
      case 'external-link':
        return (
          <ExternalLinkSection
            title={section.title}
            description={section.description}
            url={section.url}
            buttonText={section.buttonText}
            image={section.image}
          />
        );
      case 'external-links':
        return <ExternalLinksSection links={section.links} />;
      default:
        return null;
    }
  };

  // SEO metadata
  const pageTitle = 'Campaign Materials - Lyons on Track';
  const pageDescription =
    "Download and share campaign materials for Alexander Darlington's mayoral campaign and Borough Council candidates. Get palm cards, yard signs, and stay updated with media coverage in Lyons, PA.";
  const pageKeywords =
    'Lyons PA campaign materials, Alexander Darlington mayor, Borough Council election, Lyons election 2024, campaign palm cards, yard signs, Berks Weekly coverage';
  const pageUrl = 'https://lyonsontrack.com/media';

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      name: 'Campaign Materials',
      description:
        'Campaign materials and media coverage for Lyons Borough election',
      itemListElement: campaignSections.map((section, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: section.title,
        description:
          section.type === 'external-links'
            ? 'Media coverage and news articles about the campaign'
            : 'Downloadable campaign materials including palm cards and yard signs',
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lyonsontrack.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Campaign Materials',
          item: pageUrl,
        },
      ],
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
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

      {/* Structured Data */}
      <StructuredData data={structuredData} />

      <Container>
        <Box textAlign="center" maxWidth={800} mx="auto" component="header">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
            Campaign Materials
          </Typography>
        </Box>

        <Box component="main">
          <SwipeableTabs
            sections={campaignSections}
            renderSection={renderSection}
          />
        </Box>

        <Box
          textAlign="center"
          maxWidth={800}
          mx="auto"
          sx={{ mt: 4 }}
          component="footer"
        >
          <Typography
            variant="h6"
            color="text.secondary"
            gutterBottom
            component="p"
          >
            Download and share our campaign materials with friends, family, and
            neighbors to help spread awareness about our campaign for positive
            change in Lyons.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="p">
            Want physical materials?{' '}
            <a
              onClick={() => goTo(PATHS.CONTACT)}
              style={{
                color: 'primary.main',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              aria-label="Contact us for physical campaign materials"
            >
              Contact us
            </a>{' '}
            to arrange pickup or delivery.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default CampaignMedia;
