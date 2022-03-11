import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assests/images/404.jpg";
import Footer from "../../components/common/Footer";

const NotFound404 = () => {
  return (
    <div className="">
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button className="HeaderLink" variant="outlined">
          <Link to="/">Go To Home</Link>
        </Button>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="100%" src={bg} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound404;
