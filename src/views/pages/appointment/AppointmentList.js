import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../../redux/slices/appointmentSlice";
import SingleAPPList from "./SingleAPPList";

const AppointmentList = ({ date }) => {
  // const [appointments, setappointments] = useState([]);
  const dispatch = useDispatch();
  const appointments = useSelector(
    (state) => state?.appointments?.appointmentsList
  );
  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);
  // useEffect(() => {
  //   axios
  //     .get("https://health-server.vercel.app/appointments")
  //     .then((res) => {
  //       setappointments(res.data);
  //     });
  // }, []);
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
