import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function UserAppointments({ date }) {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://health-server.vercel.app/userappointmentsED?email=${
          user.email
        }&date=${date.toLocaleDateString()}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setAppointments(res.data);
      });
  }, [user.email, date, token]);
  return (
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
            <TableCell align="left">Scedule</TableCell>
            <TableCell align="center">Service Name</TableCell>
            <TableCell align="center">Pay</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
              <TableCell align="left">{appointment.time}</TableCell>
              <TableCell align="right">{appointment.serviceName}</TableCell>
              <TableCell align="right">
                {appointment.payment ? (
                  <button
                    style={{
                      background: "#0FCFE9",
                      border: "none",
                      color: "white",
                      // cursor: "pointer",
                      padding: "5px 10px",
                      borderRadius: "3px",
                    }}
                  >
                    Paid
                  </button>
                ) : (
                  <Link to={`/dashboard/payment/${appointment._id}`}>
                    <button
                      style={{
                        background: "#0FCFE9",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        padding: "5px 10px",
                        borderRadius: "3px",
                      }}
                    >
                      Pay Now
                    </button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
