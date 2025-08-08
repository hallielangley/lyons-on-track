// Feature flag to easily toggle download functionality
export const ENABLE_DOWNLOADS = true;

// Import all assets (only the ones we need will be used based on ENABLE_DOWNLOADS)
import AlexPalmCardBack from '../assets/AlexPalmCardBack.jpg';
import AlexPalmCardFront from '../assets/AlexPalmCardFront.jpg';
import AlexYardSign from '../assets/AlexYardSign.jpg';
import BoroughCouncilPalmCardPdf from '../assets/BoroughCouncilPalmCard.pdf';
import BoroughCouncilPalmCardBack from '../assets/BoroughCouncilPalmCardBack.jpg';
import BoroughCouncilPalmCardFront from '../assets/BoroughCouncilPalmCardFront.jpg';
import BoroughCouncilYardSign from '../assets/BoroughCouncilYardSign.jpg';
import BoroughCouncilYardSignPdf from '../assets/BoroughCouncilYardSign.pdf';
// import BerksWeeklyImage from '../assets/berks-weekly-alex.jpg'; // Uncomment when you add the image

// Download items configuration
const downloadItems = {
  mayor: ENABLE_DOWNLOADS ? [
    {
      title: 'Palm Card',
      description: 'Campaign palm card featuring Alex\'s key message and candidate information. Download includes both front and back sides.',
      downloadUrl: BoroughCouncilPalmCardPdf, // Using available PDF for now
      filename: 'AlexPalmCard.pdf',
    },
    {
      title: 'Yard Sign',
      description: 'Campaign yard sign design for supporters to display in their yards.',
      downloadUrl: BoroughCouncilYardSignPdf, // Using available PDF for now
      filename: 'AlexYardSign.pdf',
    },
  ] : [],
  
  'borough-council': ENABLE_DOWNLOADS ? [
    {
      title: 'Palm Card',
      description: 'Campaign palm card featuring our key message and candidate information. Download includes both front and back sides.',
      downloadUrl: BoroughCouncilPalmCardPdf,
      filename: 'BoroughCouncilPalmCard.pdf',
    },
    {
      title: 'Yard Sign',
      description: 'Campaign yard sign design for supporters to display in their yards.',
      downloadUrl: BoroughCouncilYardSignPdf,
      filename: 'BoroughCouncilYardSign.pdf',
    },
  ] : [],
};

export const campaignSections = [
  {
    id: 'mayor',
    type: 'downloads',
    title: 'Mayoral Election Materials',
    images: {
      palmCardFront: AlexPalmCardFront,
      palmCardBack: AlexPalmCardBack,
      yardSign: AlexYardSign,
    },
    downloadItems: downloadItems.mayor,
  },
  {
    id: 'borough-council',
    type: 'downloads',
    title: 'Borough Council Election Materials',
    images: {
      palmCardFront: BoroughCouncilPalmCardFront,
      palmCardBack: BoroughCouncilPalmCardBack,
      yardSign: BoroughCouncilYardSign,
    },
    downloadItems: downloadItems['borough-council'],
  },
  {
    id: 'berks-weekly-news',
    type: 'external-links',
    title: 'In the News',
    links: [
      {
        url: 'https://berksweekly.com/news/politics/alexander-darlington-announces-campaign-for-mayor-of-lyons/',
      }
    ]
  }
];
