import { Grid, Typography, Box } from '@mui/material';
import justin from "../assets/justin.jpg";


const TeamProfile = () => {
    return (
        <Grid item xs={12} md={3}>
        <Box>
          <Box
            component="img"
            mb={2}
            src={justin}
            sx={{
              filter: "grayscale(1)",
              width: "100%",
              height: "auto",
              objectFit: "cover",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: "1px",
              transform: "scale(1)",
              "&:hover": {
                filter: "grayscale(0)",
                borderRadius: "5px",
                transform: "scale(1.02)",
              },
            }}
          />
        </Box>
        <Typography textAlign="center" variant="subtitle1" component="h5">
          <Typography
            color="primary"
          >
            Alwin Dhakur
          </Typography>
        </Typography>
        <Typography
          sx={{ color: "#595b67", textAlign: "center" }}
          variant="subtitle2"
          component="h5"
        >
          UI/UX Designer
        </Typography>
      </Grid>
    )
}

export default TeamProfile
