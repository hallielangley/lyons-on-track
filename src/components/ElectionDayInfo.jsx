import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Paper,
} from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import {
  responsiveStyles,
  getResponsiveValue,
} from "../utils/responsiveStyles";
import CandidateItem from "./CandidateItem";
import { candidates, writeInCandidates } from "../data/candidates";
import boroughHallImage from "../assets/borough-hall.jpg";

function ElectionDayInfo() {
  const { isMobile, getTypographyVariant, getSpacing } = useResponsive();

  return (
    <Card>
      <CardContent
        sx={{
          p: getResponsiveValue(responsiveStyles.padding.card, isMobile),
          textAlign: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          gap={2}
          width="100%"
        ></Box>
        <Paper>
          <Typography
            variant={getTypographyVariant("h5", "h4")}
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
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
        </Paper>

        <Typography
          variant={getTypographyVariant("h5", "h4")}
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          WRITE IN
        </Typography>
        <Typography fontStyle="italic" color="text.secondary" sx={{ mb: 1 }}>
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

        <Typography
          variant={getTypographyVariant("h6", "h5")}
          sx={{ mt: 3, fontWeight: "bold" }}
        >
          NOVEMBER 4
        </Typography>
        <Typography>Lyons Borough Hall</Typography>
        <Typography gutterBottom>316 Kemp St</Typography>
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={boroughHallImage}
            alt="Lyons Borough Hall"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: getResponsiveValue(
              responsiveStyles.fontSize.normal,
              isMobile,
            ),
          }}
        >
          Polls are open from 7 a.m. to 8 p.m. on Election Day. Remember, if you
          are in line by 8 p.m., you can vote.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ElectionDayInfo;
