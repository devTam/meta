import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as HeroSvg } from "../assets/hero.svg";

export default function Hero() {
  return (
    <Box my={15}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            mb={2}
            sx={{ fontWeight: "bold"}}
            component="h1"
            gutterBottom
          >
            Bloomberg in the cryptocurrency world
          </Typography>
          <Typography
            variant="subtitle1"
            mb={2}
            sx={{ fontWeight: "semibold"}}
            gutterBottom
            component="p"
          >
            By using Blockchain technology, we aim to get making service faster
            and cheaper, For more information, you can read the whitepaper
          </Typography>
          <Button size="large" variant="contained">
            Get Whitepaper
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <HeroSvg />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
