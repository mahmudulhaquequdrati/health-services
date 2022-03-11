import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import BasicModal from "./BookSuccess";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: { lg: "50%", md: "50%", xs: "80%", sm: "70%" },
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 8,
  borderRadius: "10px",
  p: 4,
};

function AppointmentModal({ open, appointment, handleClose, date }) {
  const [booksuccess, setBookSuccess] = React.useState(false);
  const handleSuccessOpen = () => setBookSuccess(true);
  const handleSuccessClose = () => setBookSuccess(false);
  const { name, time, price } = appointment;
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newData = {
      ...data,
      serviceName: name,
      time: time,
      price: price,
      date: date.toLocaleDateString(),
    };
    axios.post("http://localhost:5000/appointments", newData).then((res) => {
      if (res.data.insertedId) {
        // alert("successfully ordered! go to dashboard for payment!");
        handleClose();
      }
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            sx={{
              color: "#0fcfe9",
              textAlign: "center",
              mb: 1,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "#0fcfe9",
              fontSize: "15px",
              textAlign: "center",
              mb: 4,
            }}
          >
            Price :${price}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                mb: 1,
              }}
            >
              <TextField
                sx={{
                  width: { xs: "90%", sm: "80%", md: "75%", lg: "70%" },
                }}
                placeholder="type"
                disabled
                value={date.toDateString()}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
              }}
            >
              <TextField
                {...register("patientName")}
                sx={{
                  width: { xs: "90%", sm: "80%", md: "75%", lg: "70%" },
                }}
                placeholder="Type Your Name"
                defaultValue={user?.displayName}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
              }}
            >
              <TextField
                {...register("patientEmail")}
                sx={{
                  width: { xs: "90%", sm: "80%", md: "75%", lg: "70%" },
                }}
                placeholder="Email Address"
                defaultValue={user?.email}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
              }}
            >
              <TextField
                {...register("address")}
                sx={{
                  width: { xs: "90%", sm: "80%", md: "75%", lg: "70%" },
                }}
                placeholder="Type Your Address"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
              }}
            >
              <TextField
                sx={{
                  width: { xs: "90%", sm: "80%", md: "75%", lg: "70%" },
                }}
                disabled
                defaultValue={time}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <button
                onClick={handleSuccessOpen}
                style={{
                  border: "none",
                  padding: "10px 20px",
                  width: "40%",
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                Book Now
              </button>
            </Box>
          </form>
        </Box>
      </Modal>
      <BasicModal
        booksuccess={booksuccess}
        handleSuccessClose={handleSuccessClose}
      />
    </div>
  );
}
export default AppointmentModal;
