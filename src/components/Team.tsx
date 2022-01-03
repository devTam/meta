import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TeamProfile from "./TeamProfile";

export default function Team() {
  return (
    <Box my={15}>
      <Typography
        mb={3}
        textAlign="center"
        variant="h4"
        sx={{ fontWeight: "semibold" }}
        component="h2"
        gutterBottom
      >
        OUR{" "}
        <Typography variant="h4" component="span" color="primary">
          TEAM
        </Typography>
      </Typography>
      <Grid container spacing={2}>
        {Array.from({ length: 4 }).map((_, i) => (
          <TeamProfile key={i} />
        ))}
      </Grid>
    </Box>
  );
}
