import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ScienceIcon from "@mui/icons-material/Science";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { ReactComponent as Bitcoin } from "../assets/bitcoin.svg";

export default function About() {
  return (
    <Grid my={15} container spacing={5} direction={{ xs: "column-reverse", md: "row" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <Bitcoin style={{ maxWidth: "100%", maxHeight: "330px" }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          mb={2}
          sx={{ fontWeight: "semibold" }}
          component="h2"
          gutterBottom
        >
          What is Ico Ninja?
        </Typography>
        <Typography
          variant="subtitle1"
          mb={3}
          sx={{ fontWeight: "semibold" }}
          gutterBottom
          component="p"
        >
          The main objectives of the project are to meet the needs of
          cryptocurrency projects and users for traditional services, and to
          provide access to investment product.
        </Typography>
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "start", marginBottom: "50px" }}
          >
            <ScienceIcon fontSize="large" />
            <Box marginLeft={2}>
              <Typography
                variant="h6"
                mb={2}
                sx={{ fontWeight: "regular" }}
                component="h2"
                gutterBottom
              >
                Our Mission
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "light" }}
                component="p"
                gutterBottom
              >
                IcoNinja brings together best aspects of crypto-and real economy
                in order to get to a qualitatvely new level - composite economy.
                This means a simple integration of rules and customs of existing
                industries and segments of global and local economies.
              </Typography>
            </Box>
          </Box>
          <Box mb={3} sx={{ display: "flex", alignItems: "start" }}>
            <RemoveRedEyeIcon fontSize="large" />
            <Box marginLeft={2}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "regular", marginBottom: "20px" }}
                component="h2"
                gutterBottom
              >
                Our Vision
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "light" }}
                component="p"
                gutterBottom
              >
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You my see some for as
                low as $17 each. You may be saying to yourself, "Wow, what a
                deal!".
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "start", marginBottom: "50px" }}
          >
            <MenuBookIcon fontSize="large" />
            <Box marginLeft={2}>
              <Typography
                variant="h6"
                mb={2}
                sx={{ fontWeight: "regular" }}
                component="h2"
                gutterBottom
              >
                Our Background
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "light" }}
                component="p"
                gutterBottom
              >
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You my see some for as
                low as $17 each. You may be saying to yourself, "Wow, what a
                deal!".
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
