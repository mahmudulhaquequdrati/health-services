import { Box } from "@mui/system";
import React from "react";
import ContactComponent from "../../components/common/Contact.Comp";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";

const Contact = () => {
  return (
    <div className="appointmentheader">
      <NavBar />
      <Box
        sx={{
          mt: 4,
        }}
      >
        <ContactComponent />
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;
