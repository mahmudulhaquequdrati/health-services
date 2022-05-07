import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import bg from "../../../assests/icons/bg.png";
import Testimonial from "./Testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonials } from "../../../redux/slices/testimonialSlice";

const Testimonials = () => {
  // const [testimonials, setTestimonials] = useState([]);

  // ? redux initials
  const dispatch = useDispatch();
  // ? data from redux
  const testimonials = useSelector(
    (state) => state?.testimonials?.testimonialsList
  );
  // console.log(testimonials2);
  // ? api calling function for redux
  useEffect(() => {
    // * don't forget to dispatch always to make an action for redux
    dispatch(getTestimonials());
  }, [dispatch]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/reviews")
  //     .then((res) => {
  //       setTestimonials(res.data);
  //     });
  // }, []);
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
