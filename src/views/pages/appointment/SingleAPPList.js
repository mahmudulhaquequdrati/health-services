import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AppointmentModal from "../../components/common/AppointmentModal";

const SingleAPPList = ({ appointment, date }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { name, time, space, price } = appointment;
  return (
    <Grid item md={4} lg={4} sm={6} xs={12}>
      <Paper
        sx={{
          py: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#0fcfe9",
            mb: 0.5,
            fontWeight: "500",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          {time}
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "700",
            my: 0.5,
          }}
        >
          Price :${price}
        </Typography>
        <Typography variant="body2">space available {space}</Typography>
        <Button
          onClick={handleOpen}
          variant="string"
          sx={{
            color: "white",
            mt: 2,
            background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
          }}
        >
          Book Appointment
        </Button>
        <AppointmentModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          appointment={appointment}
          date={date}
        />
      </Paper>
    </Grid>
  );
};

export default SingleAPPList;
