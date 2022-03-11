import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "70%", md: "60%", lg: 500 },
  bgcolor: "background.paper",
  boxShadow: 12,
  borderRadius: "10px",
  py: { xs: 4, sm: 9, md: 9, lg: 9 },
  px: { xs: 4, sm: 6, md: 4, lg: 4 },
};

function BasicModal({ handleSuccessClose, booksuccess }) {
  return (
    <div>
      <Modal
        open={booksuccess}
        onClose={handleSuccessClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "#0fcfe9",
            }}
          >
            successfully ordered! go to dashboard for payment!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Link to="/dashboard">
              <button
                onClick={handleSuccessClose}
                style={{
                  border: "none",
                  padding: "5px 15px",
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Dashboard
              </button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;
