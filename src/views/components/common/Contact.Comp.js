import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../assests/images/appointment-bg.png";
const useStyle = makeStyles({
  contactBg: {
    backgroundImage: `url(${bg})`,
    backgroundColor: "#3e435c ",
    backgroundBlendMode: "multiply",
    padding: "20px 0",
  },
  input: {
    width: "60%",
    height: "30px",
    marginBottom: "10px",
    outline: "1px solid blue",
    borderRadius: "5px",
  },
  textarea: {
    width: "60%",
    height: "90px",
    marginBottom: "10px",
    borderRadius: "5px",
    outline: "1px solid blue",
    p: 0,
    m: 0,
  },
});
const ContactComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.contactBg}>
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          pb: 3,
          pt: 4,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#0FCFE9",
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="h4">ALways contact with us</Typography>
        <Box
          sx={{
            // width: "70%",
            marginX: "auto",
            color: "white",
            mt: 4,
          }}
        >
          <input
            style={{
              padding: "10px",
            }}
            className={classes.input}
            type="text"
            placeholder="email"
          />
          <br />
          <input
            style={{
              padding: "10px",
            }}
            className={classes.input}
            type="text"
            placeholder="subject"
          />
          <br />
          <textarea
            style={{
              padding: "10px",
            }}
            className={classes.textarea}
            type="text"
            placeholder="message"
          />
          <br />
          <Button
            variant="string"
            sx={{
              mt: 1,
              borderRadius: 0,
              width: "20%",
              background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ContactComponent;
