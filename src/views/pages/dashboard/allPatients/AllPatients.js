import React, { useEffect, useState } from "react";
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

const AllPatients = () => {
  const [allpatients, setAllpatients] = useState([]);
  useEffect(() => {
    axios.get("https://health-server.vercel.app/patients").then((res) => {
      setAllpatients(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://health-server.vercel.app/patients/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          alert("successfully appointment deleted");
          const remainingPatients = allpatients.filter(
            (allapp) => allapp._id !== id
          );
          setAllpatients(remainingPatients);
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
        All Patients
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
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allpatients.map((appointment) => (
              <TableRow
                key={appointment._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {appointment.displayName}
                </TableCell>
                <TableCell align="left">{appointment.email}</TableCell>
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

export default AllPatients;
