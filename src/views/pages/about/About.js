import { Box } from "@mui/system";
import React from "react";
import AboutServices from "../../components/common/About.Services";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";

const About = () => {
  return (
    <div className="appointmentheader">
      <Box>
        <NavBar />
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { md: 4, xs: 0, sm: 0 },
          px: { lg: 0, xs: 6, sm: 4, md: 0 },
        }}
      >
        <img
          width="100%"
          src="https://img.freepik.com/free-photo/close-up-words-with-about-us-web-concept-idea_352439-1318.jpg?w=1060"
          alt=""
        />
      </Box> */}
      <Box
        sx={{
          mt: { md: -8, xs: 6, sm: 6 },
          ml: { xs: 2, sm: 2, md: -3, lg: -3 },
        }}
      >
        <AboutServices />
      </Box>
      <Footer />
    </div>
  );
};

export default About;
