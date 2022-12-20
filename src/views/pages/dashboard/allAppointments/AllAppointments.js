import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllAppointments = () => {
  const [allappointments, setAllappointments] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://health-services-server-production.up.railway.app/userAppointments"
      )
      .then((res) => {
        setAllappointments(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://health-services-server-production.up.railway.app/appointment/${id}`
      )
      .then((res) => {
        if (res.data.deletedCount) {
          alert("successfully appointment deleted");
          const remainingAppointments = allappointments.filter(
            (allapp) => allapp._id !== id
          );
          setAllappointments(remainingAppointments);
        }
      });
  };
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          color: "#0FCFE9",
          mb: 3,
        }}
      >
        All Appointments
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  p: 2,
                }}
              >
                Name
              </TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Scedule</TableCell>
              <TableCell align="left">Service Name</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allappointments.map((appointment) => (
              <TableRow
                key={appointment._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {appointment.patientName}
                </TableCell>
                <TableCell align="left">{appointment.patientEmail}</TableCell>
                <TableCell align="left">{appointment.time}</TableCell>
                <TableCell align="left">{appointment.serviceName}</TableCell>
                <TableCell align="left">
                  <button
                    onClick={() => handleDelete(appointment._id)}
                    style={{
                      background: "#0FCFE9",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: "5px 10px",
                      borderRadius: "3px",
                    }}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllAppointments;
