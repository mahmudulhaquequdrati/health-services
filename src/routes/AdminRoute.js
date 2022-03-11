import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, isLoading, isAdmin } = useAuth();
  // const [admin, setAdmin] = useState(false);
  const location = useLocation();

  if (isLoading || isAdmin === false) {
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

  return user?.email && isAdmin ? (
    children
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} />
  );
};

export default AdminRoute;
