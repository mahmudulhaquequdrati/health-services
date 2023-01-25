import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
const useStyle = makeStyles({
  services: {
    textAlign: "center",
    color: "#1CC7C1",
  },
  servicesProvide: {
    textAlign: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Btn: {
    color: "white",
    background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
  },
});

const Services = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/appointment");
  };
  const classes = useStyle();
  return (
    <Box
      sx={{
        marginTop: "3rem",
      }}
    >
      <Typography variant="h6" className={classes.services}>
        our services
      </Typography>
      <Typography
        variant="h4"
        className={classes.servicesProvide}
        sx={{
          fontWeight: "500",
        }}
      >
        What you are looking for!
      </Typography>
      {/* services */}
      <Box
        sx={{
          marginY: "3rem",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            paddingX: { xs: "1rem", lg: "10rem" },
          }}
        >
          <Grid item lg={4} xs={6} md={4}>
            <Paper
              elevation={0}
              className={classes.center}
              sx={{
                paddingY: "3rem",
                backgroundImage: `url("https://img.freepik.com/free-vector/tablet-pharmacy-online-concept_1284-16210.jpg?w=740")`,
                backgroundSize: "cover",
              }}
            >
              <Box className={classes.itemCenter} sx={{}}>
                <Typography variant="h6">Find A Pharmacy</Typography>
                <Button
                  variant="string"
                  className={classes.Btn}
                  sx={{
                    color: "white",
                    marginX: "auto",
                  }}
                  onClick={handleNavigate}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={6} md={4}>
            <Paper
              className={classes.center}
              elevation={0}
              sx={{
                paddingY: "3rem",
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/world-science-day-arrangement-with-microscope_23-2149112668.jpg?w=900')",
                backgroundSize: "cover",
              }}
            >
              <Box className={classes.itemCenter}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                  }}
                >
                  Find Lab
                </Typography>
                <Button
                  variant="string"
                  className={classes.Btn}
                  sx={{
                    color: "white",
                  }}
                  onClick={handleNavigate}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={6} md={4}>
            <Paper
              className={classes.center}
              elevation={0}
              sx={{
                paddingY: "3rem",
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/front-view-doctor-with-medical-mask-posing-with-crossed-arms_23-2148445082.jpg?w=900')",
                backgroundSize: "cover",
              }}
            >
              <Box className={classes.itemCenter}>
                <Typography variant="h6">Visit Doctor</Typography>
                <Button
                  variant="string"
                  className={classes.Btn}
                  sx={{
                    color: "white",
                  }}
                  onClick={handleNavigate}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
