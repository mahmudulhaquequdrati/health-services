import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
  },
  appbar: {
    display: "flex",
    justifyContent: "end",
    marginTop: "30px",
    zIndex: "10",
  },
  menuLg: {
    fontWeight: "700",
    color: "gray",
  },
  menuLg2: {
    fontWeight: "700",
    color: "white",
  },
}));

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [open, setopen] = useState(false);
  const classes = useStyle();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className={classes.toolbar}>
        {" "}
        <MenuIcon
          onClick={() => setopen(!open)}
          sx={{
            cursor: "pointer",
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
          }}
        />
        <Box
          className={`${classes.appbar} HeaderLink`}
          sx={{
            mr: { md: "10px", lg: "50px" },
            gap: { md: "20px", lg: "50px" },
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <Link to="/">
            <Typography className={classes.menuLg}>Home</Typography>
          </Link>
          <Link to="/about">
            <Typography className={classes.menuLg}>About</Typography>
          </Link>
          <Link to="/appointment">
            <Typography className={classes.menuLg}>Dental Services</Typography>
          </Link>

          {!user?.email && (
            <a href="/#review">
              <Typography className={`${classes.menuLg} reviewTxt`}>
                Review
              </Typography>
            </a>
          )}

          {!user?.email && (
            <a href="/#blogs">
              <Typography className={classes.menuLg2}>Blogs</Typography>
            </a>
          )}
          <Link to="/contact">
            <Typography className={classes.menuLg2}>Contact US</Typography>
          </Link>
          {user?.email && (
            <Link to="/dashboard">
              <Typography className={classes.menuLg2}>Dashboard</Typography>
            </Link>
          )}
          {user?.email ? (
            <Box>
              <button
                onClick={logOut}
                style={{
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "2px 7px",
                  borderRadius: "3px",
                }}
              >
                <LogoutIcon />
              </button>
            </Box>
          ) : (
            <Link to="/login">
              <Typography className={classes.menuLg2}>Login</Typography>
            </Link>
          )}
        </Box>
      </Toolbar>
      {/* 
      toolbar for mobile
      */}
      <Toolbar
        sx={{
          zIndex: "30",
        }}
        className={
          open ? "responsiveToolbar HeaderLink extraTool" : "responsiveToolbar"
        }
      >
        <Link to="/">
          <Typography
            sx={{
              paddingY: "5px",
            }}
            className={classes.menuLg}
          >
            Home
          </Typography>
        </Link>
        <Link to="/about">
          {" "}
          <Typography
            sx={{
              paddingY: "5px",
            }}
            className={classes.menuLg}
          >
            About
          </Typography>
        </Link>
        <Link to="/appointment">
          <Typography
            sx={{
              paddingY: "5px",
            }}
            className={classes.menuLg}
          >
            Dental Services
          </Typography>
        </Link>
        {!user?.email && (
          <a href="/#review">
            <Typography
              sx={{
                paddingY: "5px",
              }}
              className={classes.menuLg}
            >
              Review
            </Typography>
          </a>
        )}
        {!user?.email && (
          <a href="/#blogs">
            <Typography
              sx={{
                paddingY: "5px",
              }}
              className={classes.menuLg}
            >
              Blogs
            </Typography>
          </a>
        )}

        <Link to="/contact">
          <Typography
            sx={{
              paddingY: "5px",
            }}
            className={classes.menuLg}
          >
            Contact US
          </Typography>
        </Link>
        {user?.email && (
          <Link to="/dashboard">
            <Typography
              sx={{
                paddingY: "5px",
              }}
              className={classes.menuLg}
            >
              Dashboard
            </Typography>
          </Link>
        )}
        {user?.email ? (
          <Box>
            <button
              onClick={logOut}
              style={{
                background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "2px 7px",
                borderRadius: "3px",
              }}
            >
              <LogoutIcon />
            </button>
          </Box>
        ) : (
          <Link to="/login">
            <Typography
              sx={{
                paddingY: "5px",
              }}
              className={classes.menuLg}
            >
              Login
            </Typography>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
