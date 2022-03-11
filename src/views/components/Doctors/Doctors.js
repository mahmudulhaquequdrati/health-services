import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../../assests/images/doctor-small.png";

const Doctors = () => {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mt: 8,
          mb: 4,
          color: "#1CC7C1",
        }}
      >
        Our Doctor's
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          paddingX: 16,
          textAlign: "center",
          mb: 8,
        }}
      >
        <Grid item lg={4}>
          <Box>
            <Box>
              <img width="100%" src={doctor} alt="" />
            </Box>
            <Typography
              sx={{
                fontWeight: "700",
                mt: 2,
              }}
            >
              Dr. Enamul Haque
            </Typography>
            <Typography>+88096374773</Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <Box>
              <img width="100%" src={doctor} alt="" />
            </Box>
            <Typography
              sx={{
                fontWeight: "700",
                mt: 2,
              }}
            >
              Dr. Enamul Haque
            </Typography>
            <Typography>+88096374773</Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <Box>
              <img width="100%" src={doctor} alt="" />
            </Box>
            <Typography
              sx={{
                fontWeight: "700",
                mt: 2,
              }}
            >
              Dr. Enamul Haque
            </Typography>
            <Typography>+88096374773</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Doctors;
