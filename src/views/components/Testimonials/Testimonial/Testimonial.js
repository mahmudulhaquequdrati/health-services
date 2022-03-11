import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

/* 



*/
const Testimonial = ({ testimonial }) => {
  const { name, description, img, address } = testimonial;
  return (
    <Grid item lg={4}>
      <Paper>
        <Typography
          sx={{
            fontSize: "16px",
            paddingX: 3,
            paddingY: 4,
            textAlign: "center",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 8,
            pb: 4,
          }}
        >
          <img width="100" src={img} alt="" />
          <Box
            sx={{
              ml: 3,
            }}
          >
            <Typography>{name}</Typography>
            <Typography>{address}</Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Testimonial;
