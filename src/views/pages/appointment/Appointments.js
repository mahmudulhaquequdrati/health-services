import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";
import bg from "../../../assests/images/bg.png";
import appointmentImg from "../../../assests/images/chair.png";
import Calendar from "../../components/common/Calendar";
import AppointmentList from "./AppointmentList";

const Appointments = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="appointmentheader">
      <Box>
        <NavBar />
      </Box>
      <Box
        sx={{
          mt: 6,
          py: 6,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          // backgroundColor: "darkgray",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            lg={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "700",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                Appointment
              </Typography>
              <Calendar date={date} setDate={setDate} />
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                mx: "auto",
              }}
            >
              <img width="100%" src={appointmentImg} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            textAlign: "center",
            color: "#0fcfe9",
          }}
        >
          Available appointments on {date.toDateString()}
        </Typography>
      </Box>
      <Box>
        <AppointmentList date={date} />
      </Box>
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Appointments;
