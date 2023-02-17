import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const MakeAdmin = () => {
  const { token } = useAuth();
  const [email, setEmail] = useState("");

  const onBlurFunc = (e) => {
    setEmail(e.target.value);
  };
  const handleOnsubmit = (e) => {
    const user = { email: email };
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    axios
      .put(
        "https://health-services-server-iota.vercel.app/users/makeAdmin",
        user,
        {
          headers: headers,
        }
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          alert("successfully admin created!");
          setEmail((e.target.value = ""));
        }
        // else {
        //   alert("user is already in database or not found in the database!");
        // }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        Please enter email address
      </Typography>
      <form onSubmit={handleOnsubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            mt: 3,
            gap: 2,
          }}
        >
          <TextField
            onBlur={onBlurFunc}
            sx={{
              width: { xs: "60%", sm: "70%", md: "40%", lg: "30%" },
            }}
            label="Email"
            type="email"
            variant="standard"
          />
          <Button
            type="submit"
            svariant="string"
            sx={{
              color: "white",
              mt: 2,
              background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
              paddingY: "5px",
              paddingX: { xs: "15px", sm: "30px", md: "30px", lg: "30px" },
            }}
          >
            Make Admin
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default MakeAdmin;
