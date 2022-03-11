import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../assests/images/footer-bg.png";

const Footer = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          py: 8,
          color: "gray",
          px: { lg: 8, md: 6, sm: 4, xs: 4 },
        }}
      >
        <Grid item lg={3} md={3}>
          <Typography sx={{ lineHeight: "2rem", mt: 4 }}>
            Emergency Dental care
          </Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Check Up</Typography>
          <Typography sx={{ lineHeight: "2rem" }}>
            Treatment for personal
          </Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Tooth Extraction</Typography>
        </Grid>
        <Grid item lg={3} md={3}>
          <Typography
            variant="h6"
            sx={{
              color: "#0fcfe9",
            }}
          >
            Services
          </Typography>
          <Typography sx={{ lineHeight: "2rem" }}>
            Emergency Dental care
          </Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Check Up</Typography>
          <Typography sx={{ lineHeight: "2rem" }}>
            Treatment for personal
          </Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Tooth Extraction</Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Check Treatment</Typography>
        </Grid>
        <Grid item lg={3} md={3}>
          <Typography
            variant="h6"
            sx={{
              color: "#0fcfe9",
            }}
          >
            Oral Health
          </Typography>

          <Typography sx={{ lineHeight: "2rem" }}>
            Emergency Dental care
          </Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Check Up</Typography>
          <Typography sx={{ lineHeight: "2rem" }}>
            Treatment for personal
          </Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Tooth Extraction</Typography>
          <Typography sx={{ lineHeight: "2rem" }}>Check Treatment</Typography>
        </Grid>
        <Grid item lg={3} md={3}>
          <Typography
            variant="h6"
            sx={{
              color: "#0fcfe9",
            }}
          >
            Our Address
          </Typography>
          <Typography>
            New York, 101001 Hudson,
            <br /> Hilton{" "}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        &copy; 2022 all right reserved by Qudrati.
      </Typography>
    </Box>
  );
};

export default Footer;
