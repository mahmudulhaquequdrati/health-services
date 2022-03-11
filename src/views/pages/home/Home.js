import { Box } from "@mui/system";
import React from "react";
import Blog from "../../components/Blog/Blog";
import AboutServices from "../../components/common/About.Services";
import ContactComponent from "../../components/common/Contact.Comp";
import Footer from "../../components/common/Footer";
import Doctors from "../../components/Doctors/Doctors";
import Featured from "../../components/Featured/Featured";
import ExtraFacility from "../../components/Header/ExtraFacility";
import Header from "../../components/Header/Header";
import Services from "../../components/services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        <ExtraFacility />
      </Box>
      <Services />
      <AboutServices />
      <Featured />
      <Testimonials />
      <Blog />
      <Doctors />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Home;
