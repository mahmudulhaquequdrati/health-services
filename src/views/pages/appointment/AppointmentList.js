import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleAPPList from "./SingleAPPList";

const AppointmentList = ({ date }) => {
  const [appointments, setappointments] = useState([]);

  useEffect(() => {
    axios
      .get("https://health-services-server.herokuapp.com/appointments")
      .then((res) => {
        setappointments(res.data);
      });
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          px: { lg: 12, md: 8, sm: 8, xs: 8 },
          py: 8,
          textAlign: "center",
        }}
      >
        {appointments.map((appointment) => (
          <SingleAPPList
            key={appointment._id}
            appointment={appointment}
            date={date}
          />
        ))}
      </Grid>
    </div>
  );
};

export default AppointmentList;
