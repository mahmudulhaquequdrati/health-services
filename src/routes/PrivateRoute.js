import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <Box
        sx={{
          my: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="success" />
      </Box>
    );
  }
  return user?.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
