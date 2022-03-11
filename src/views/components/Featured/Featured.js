import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../../assests/images/doctor.png";
import bg from "../../../assests/images/bg.png";

const Featured = () => {
  return (
    <Box
      sx={{
        mt: { lg: 4, xs: "150px" },
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundColor: "#464A5D",
        // paddingY: 3,
      }}
    >
      <Grid container sx={{}}>
        <Grid item lg={5} md={6}>
          <Box
            sx={{
              width: { lg: "80%", sm: "80%" },
              marginX: "auto",
              marginTop: "-120px",
            }}
          >
            <img width="100%" src={doctor} alt="" />
          </Box>
        </Grid>
        <Grid item lg={7} md={6}>
          <Box
            sx={{
              paddingTop: 4,
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#1CC7C1",
              }}
            >
              APPOINTMENT
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "700",
              }}
            >
              Make an appointment Today
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                width: "80%",
                marginX: {
                  xs: "auto",
                  sm: "auto",
                  md: "0",
                  lg: "0",
                },
                mt: 2,
                color: "lightgray",
              }}
            >
              It is a long established fact that a reader will be distructed by
              the readable content of ta page when looking at its
            </Typography>
            <Button
              variant="string"
              sx={{
                // border: "2px solid red",
                color: "white",
                borderRadius: "0",
                paddingY: "10px",
                mt: 4,
                mb: { lg: 0, sm: 4, xs: 4, md: 0 },
                // p: 2,
                background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                paddingX: "30px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Featured;
