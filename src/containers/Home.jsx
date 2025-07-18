import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';

function Home() {
  const { getSpacing, getContainerPadding, getPadding } = useResponsive();

  return (
    <Container>
      <Card sx={{ mb: 2 }}>
        <CardHeader title="Our Vision" />
        <CardContent>
          <Typography variant="body1">
            We are not running to push our own agenda - we're running to carry
            yours. We want to listen to what the citizens have to say and work
            to fix those concerns. A part of that is increasing transparency and
            communication of the borough with the residents. We believe Lyons
            has a lot of potential and we can tap into it together. Our town's
            history illustrates a place that used to be bustling and lively. We
            have the opportunity to revive it together!
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Campaign Information" />
        <CardContent>
          <Typography sx={{ mb: 1 }}>
            We are committed to transparency and open communication with the
            residents of Lyons. Your feedback and concerns are important to us
            as we work together to improve our community.
          </Typography>
          <Typography>
            Please don't hesitate to reach out with any questions about our
            platform, the election process, or how you can get involved in
            making Lyons a better place to live.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;
