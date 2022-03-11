import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Calendar from "../../components/common/Calendar";
import UserAppointments from "./userAppointments/UserAppointments";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <Paper>
            <Calendar
              date={date}
              setDate={setDate}
              style={{
                width: "70%",
              }}
            />
          </Paper>
        </Grid>
        <Grid item lg={7} md={12} sm={12} xs={12}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pb: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#0FCFE9",
                }}
              >
                Appointments
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                {date.toDateString()}
              </Typography>
            </Box>
            <UserAppointments date={date} setDate={setDate} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;
