import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";
import avatar from "../../../../assests/icons/avatar.jpg";
import { Box } from "@mui/system";
import axios from "axios";
const DashboardHome = () => {
  const [userAppointments, setUserAppointments] = useState([]);
  const [totalAppointments, setTotalUserAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [todaysAppointment, settodaysAppointment] = useState([]);
  const { user } = useAuth();
  const date = new Date();
  useEffect(() => {
    axios
      .get(
        `https://health-services.vercel.app/userTotalAppointment?email=${user.email}`
      )
      .then((res) => {
        setUserAppointments(res.data);
      });
  }, [user.email]);
  useEffect(() => {
    axios.get(`https://health-services.vercel.app/patients`).then((res) => {
      setPatients(res.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`https://health-services.vercel.app/userAppointments`)
      .then((res) => {
        setTotalUserAppointments(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://health-services.vercel.app/todaysAppointment?date=${date.toLocaleDateString()}`
      )
      .then((res) => {
        settodaysAppointment(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper
            sx={{
              backgroundColor: "#F1536E",
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "space-around",
              px: 4,
              py: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "28px", sm: "36px", md: "38px", lg: "44px" },
              }}
            >
              09
            </Typography>
            <Typography
              sx={{
                color: "white",
                lineHeight: "1.5rem",
                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Pending Appointments
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper
            sx={{
              backgroundColor: "#3DA5F4",
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "space-around",
              px: 4,
              py: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "28px", sm: "36px", md: "38px", lg: "44px" },
              }}
            >
              {todaysAppointment?.length < 10
                ? "0" + todaysAppointment.length
                : todaysAppointment.length}
            </Typography>
            <Typography
              sx={{
                color: "white",
                lineHeight: "1.5rem",

                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Today's Appointments
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper
            sx={{
              backgroundColor: "#2ACF9C",
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "space-around",
              px: 4,
              py: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "28px", sm: "36px", md: "38px", lg: "44px" },
              }}
            >
              {totalAppointments?.length < 10
                ? "0" + totalAppointments.length
                : totalAppointments.length}
            </Typography>
            <Typography
              sx={{
                color: "white",
                lineHeight: "1.5rem",

                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Total Appointment
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Paper
            sx={{
              backgroundColor: "#FDA006",
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "space-around",
              px: 4,
              py: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "28px", sm: "36px", md: "38px", lg: "44px" },
              }}
            >
              {patients?.length < 10 ? "0" + patients.length : patients.length}
            </Typography>
            <Typography
              sx={{
                color: "white",
                lineHeight: "1.5rem",

                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Total Patients
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <h2>Welcome to the Dashboard!</h2>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box>
          {user?.photoURL ? (
            <img
              width="100px"
              style={{
                borderRadius: "50%",
              }}
              src={user.photoURL}
              alt=""
            />
          ) : (
            <img
              width="100px"
              style={{
                borderRadius: "50%",
              }}
              src={avatar}
              alt=""
            />
          )}
        </Box>
        <Box>
          <Typography variant="h6">Name: {user.displayName}</Typography>
          <Typography variant=""> Email: {user.email}</Typography>
        </Box>
      </Box>
      <Box>
        <h2>You have Total Appointments: {userAppointments.length}</h2>
      </Box>
    </div>
  );
};

export default DashboardHome;
