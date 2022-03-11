import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import clockImg from "../../../assests/icons/clock.png";
import locationImg from "../../../assests/icons/map.png";
import telephoneImg from "../../../assests/icons/telephone.png";

const ExtraFacility = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          // textAlign: "center",
          paddingX: { lg: "80px", md: "40px", sm: "30px", xs: "30px" },
        }}
      >
        <Grid item xs={12} md={4} sm={6}>
          <Paper
            sx={{
              backgroundColor: "#1CC7C1",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "30px",
            }}
          >
            <img width="17%" src={clockImg} alt="" />

            <Box
              sx={{
                width: "70%",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  width: { md: "80%", lg: "60%" },
                  marginX: "auto",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                Opening Hours
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: { md: "80%", lg: "60%" },
                  marginX: "auto",
                }}
              >
                10:00 am to 8:00 pm
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <Paper
            sx={{
              backgroundColor: "#3A4256",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "30px",
            }}
          >
            <img width="17%" src={locationImg} alt="" />

            <Box
              sx={{
                width: "60%",
                // marginX: "auto",
                marginLeft: "20px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  // width: "60%",
                  marginX: "auto",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Visit our location
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  // width: "60%",
                  marginX: "auto",
                }}
              >
                Shaistaganj, Habiganj
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sm={6}
          sx={{
            zIndex: "13",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1CC7C1",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "30px",
            }}
          >
            <img width="17%" src={telephoneImg} alt="" />

            <Box
              sx={{
                width: "60%",
                // marginX: "auto",
                // marginLeft: "20px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  width: { md: "80%", lg: "70%" },
                  marginX: "auto",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Contact Us Now
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: { md: "80%", lg: "70%" },
                  marginX: "auto",
                }}
              >
                +88019922999219
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExtraFacility;
