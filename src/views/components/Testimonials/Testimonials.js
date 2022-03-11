import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import bg from "../../../assests/icons/bg.png";
import Testimonial from "./Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios
      .get("https://health-services-server.herokuapp.com/reviews")
      .then((res) => {
        setTestimonials(res.data);
      });
  }, []);
  return (
    <div id="review">
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              paddingX: { xs: 1, sm: 3, md: 6 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px", lg: "20px" },
                color: "#1CC7C1",
              }}
            >
              TESTIMONIAL
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "36px", lg: "36px" },
                fontWeight: "700",
              }}
            >
              What's our Patients Says
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              paddingRight: "10px",
            }}
          >
            <img width="35%" src={bg} alt="" />
          </Box>
        </Box>
        {/* testimonilas */}
        <Grid
          container
          spacing={2}
          sx={{
            marginY: 4,
            paddingX: { xs: 2, sm: 4, md: 8, lg: 8 },
          }}
        >
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial._id}
              testimonial={testimonial}
            ></Testimonial>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Testimonials;
