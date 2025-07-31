// import AlexPalmCardPdf from '../assets/AlexPalmCard.pdf';
import AlexPalmCardBack from '../assets/AlexPalmCardBack.jpg';
import AlexPalmCardFront from '../assets/AlexPalmCardFront.jpg';
import AlexYardSign from '../assets/AlexYardSign.jpg';
import BoroughCouncilPalmCardPdf from '../assets/BoroughCouncilPalmCard.pdf';
import BoroughCouncilPalmCardBack from '../assets/BoroughCouncilPalmCardBack.jpg';
import BoroughCouncilPalmCardFront from '../assets/BoroughCouncilPalmCardFront.jpg';
import BoroughCouncilYardSign from '../assets/BoroughCouncilYardSign.jpg';
import BoroughCouncilYardSignPdf from '../assets/BoroughCouncilYardSign.pdf';

// import AlexYardSignPdf from '../assets/AlexYardSign.pdf';

export const campaignSections = [
  {
    id: 'mayor',
    title: 'Mayoral Election Materials',
    images: {
      palmCardFront: AlexPalmCardFront,
      palmCardBack: AlexPalmCardBack,
      yardSign: AlexYardSign,
    },
    // downloadItems: [
    //   {
    //     title: 'Palm Card',
    //     description:
    //       'Campaign palm card featuring Alex\'s key message and candidate information. Download includes both front and back sides.',
    //     downloadUrl: AlexPalmCardPdf,
    //     filename: 'AlexPalmCard.pdf',
    //   },
    //   {
    //     title: 'Yard Sign',
    //     description:
    //       'Campaign yard sign design for supporters to display in their yards.',
    //     downloadUrl: AlexYardSignPdf,
    //     filename: 'AlexYardSign.pdf',
    //   },
    // ],
  },
  {
    id: 'borough-council',
    title: 'Borough Council Election Materials',
    images: {
      palmCardFront: BoroughCouncilPalmCardFront,
      palmCardBack: BoroughCouncilPalmCardBack,
      yardSign: BoroughCouncilYardSign,
    },
    // downloadItems: [
    //   {
    //     title: 'Palm Card',
    //     description:
    //       'Campaign palm card featuring our key message and candidate information. Download includes both front and back sides.',
    //     downloadUrl: BoroughCouncilPalmCardPdf,
    //     filename: 'BoroughCouncilPalmCard.pdf',
    //   },
    //   {
    //     title: 'Yard Sign',
    //     description:
    //       'Campaign yard sign design for supporters to display in their yards.',
    //     downloadUrl: BoroughCouncilYardSignPdf,
    //     filename: 'BoroughCouncilYardSign.pdf',
    //   },
    // ],
  },
];
