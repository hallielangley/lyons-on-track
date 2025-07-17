import { Typography, Box } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import {
  responsiveStyles,
  getResponsiveValue,
} from "../utils/responsiveStyles";

function CandidateItem({ name, position, variant = "h6" }) {
  const { isMobile, getTypographyVariant } = useResponsive();

  return (
    <Box sx={{ mb: 0.5 }}>
      <Typography
        variant={getTypographyVariant(variant, variant === "h6" ? "h5" : "h6")}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontStyle: "italic",
          mb: 0.5,
          fontSize: getResponsiveValue(
            responsiveStyles.fontSize.small,
            isMobile,
          ),
        }}
      >
        {position}
      </Typography>
    </Box>
  );
}

export default CandidateItem;
