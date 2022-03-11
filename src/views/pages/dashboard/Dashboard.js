import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 220;

function Dashboard(props) {
  const { isAdmin, logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      className="HeaderLink"
      style={{
        paddingLeft: "35px",
        height: "100vh",
        background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          gap: 1,
        }}
      >
        <DashboardIcon />
        <Link to={`/dashboard`}>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              lineHeight: "3rem",
            }}
          >
            Dashboard
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          gap: 1,
        }}
      >
        <BookmarkBorderIcon />
        <Link to={`/dashboard/appointment`}>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              lineHeight: "3rem",
            }}
          >
            Appointment
          </Typography>
        </Link>
      </Box>
      {isAdmin && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            gap: 1,
          }}
        >
          <BookmarkBorderIcon />
          <Link to={`/dashboard/makeAdmin`}>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                lineHeight: "3rem",
              }}
            >
              Make Admin
            </Typography>
          </Link>
        </Box>
      )}
      {isAdmin && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            gap: 1,
          }}
        >
          <DashboardIcon />
          <Link to={`/dashboard/allPatients`}>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                lineHeight: "3rem",
              }}
            >
              All Patients
            </Typography>
          </Link>
        </Box>
      )}
      {isAdmin && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            gap: 1,
          }}
        >
          <BookmarkBorderIcon />
          <Link to={`/dashboard/allAppointments`}>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                lineHeight: "3rem",
              }}
            >
              All Appointments
            </Typography>
          </Link>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          gap: 1,
        }}
      >
        <HomeIcon />
        <Link to="/appointment">
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              lineHeight: "3rem",
            }}
          >
            Book More
          </Typography>
        </Link>
      </Box>

      <button
        onClick={logOut}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          fontSize: "18px",
          background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
          border: "none",
          color: "white",
          cursor: "pointer",
          padding: "2px 7px",
          borderRadius: "3px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoutIcon />
          <Typography>Logout</Typography>
        </Box>
      </button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          elevation={0}
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            color: "black",
            background: "rgba(246, 231, 216, 0.5)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Appointments
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 3,
            px: { xs: 3, sm: 3, md: 1, lg: 3 },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* main content will be provided here! */}
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
