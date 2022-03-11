import React from "react";
import NavBar from "../common/NavBar";
import backgroundImage from "../../../assests/images/bg.png";
import { makeStyles } from "@mui/styles";
import "../../../styles/global.css";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import headerImg from "../../../assests/images/chair.png";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#FBFCFC",
    padding: "20px 0 ",
    backgroundSize: "cover",
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.header} header`}>
      <NavBar />
      <Grid container>
        <Grid item lg={6} sm={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              marginLeft: { xs: "5%", sm: "20px", md: "30px", lg: "90px" },
              backgroundColor: "transparent",
              height: { xs: "70vh", sm: "70vh", md: "85vh" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  fontSize: "44px",
                  color: "#203047",
                  mb: 2,
                  letterSpacing: "1px",
                  lineHeight: "60px",
                }}
              >
                Your New Smile <br />
                Starts Here!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "darkgray",
                  width: { sm: "90%", md: "70%" },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                rerum, sed pariatur nesciunt eum deserunt doloribus iusto
                exercitationem fugiat
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/appointment"
              >
                <Button
                  variant="string"
                  sx={{
                    color: "white",
                    mt: 2,
                    background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                    paddingY: "10px",
                    paddingX: "30px",
                  }}
                >
                  Get Appointment
                </Button>
              </Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={6} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              width: { sm: "70%", md: "100%" },
              height: { sm: "auto", md: "85vh" },
              justifyContent: {
                sx: "center",
                sm: "center",
                md: "center",
                lg: "left",
              },
              paddingBottom: { xs: "30px", sm: "30px", md: "0", lg: "0" },
              marginX: "auto",
              alignItems: "center",
            }}
          >
            <img
              sx={{}}
              style={{
                zIndex: "11",
                width: "90%",
                margin: "0 auto ",
              }}
              src={headerImg}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
