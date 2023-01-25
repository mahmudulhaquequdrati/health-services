import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../../../assests/images/about.png";

const AboutServices = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <Box
      sx={{
        marginY: { xs: "3rem", sm: "3rem", md: "5rem", lg: "10rem" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              paddingLeft: { xs: "2rem", sm: "3rem", md: "5rem", lg: "5rem" },
              width: "75%",
              marginX: { xs: "auto", sm: "auto", md: "0", lg: "0" },
            }}
          >
            <img
              style={{
                width: "100%",
              }}
              src={aboutImg}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "36px", md: "36px", lg: "42px" },
                mb: 3,
                fontWeight: "500",
                mt: { lg: 3, md: 1 },
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              Exceptional Dental <br /> Care, on Your Terms
            </Typography>
            <Typography
              sx={{
                width: "80%",
                fontSize: { md: "16px", lg: "20px" },
                color: "darkgray",
                lineHeight: { md: "1.5rem", lg: "2.3rem" },
                marginX: { xs: "auto", sm: "auto", md: "0" },
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              The need for speed is a major reason why the government chose to
              work with retail clinics that are more accessible than most
              primary care offices. However, the American Medical Association
              (AMA), the National Community Pharmacists Association (NCPA), and
              the American Pharmacists Association (APhA) have criticized the
              administration's approach.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "center", md: "start" },
              }}
            >
              {" "}
              <Button
                variant="string"
                sx={{
                  color: "white",
                  mt: { xs: 4, sm: 4, md: 2, lg: 4 },
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                  paddingY: "10px",
                  paddingX: "30px",
                }}
                onClick={handleNavigate}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutServices;
