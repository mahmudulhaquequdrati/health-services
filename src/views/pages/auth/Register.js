import {
  Alert,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assests/images/loginPIC.png";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser, isLoading, error, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    registerUser(
      data.userEmail,
      data.userPassword,
      data.userName,
      data.userPhone,
      data.photoURL,
      navigate
    );
  };
  return (
    <Box
      sx={{
        mt: 8,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          px: 8,
          py: 4,
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Paper
            elevation={0}
            sx={{
              py: 6,
              boxShadow: "0px 0px 1px gray",
            }}
          >
            {user?.email ? (
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: "#0FCFE9",
                  fontWeight: "600",
                  mb: 4,
                }}
              >
                You have registered!
              </Typography>
            ) : (
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    mb: 4,
                  }}
                >
                  Register
                </Typography>

                {isLoading ? (
                  <Box
                    sx={{
                      my: 6,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress color="success" />
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                      sx={{
                        width: "60%",
                        mx: "auto",
                      }}
                    >
                      <TextField
                        {...register("userName")}
                        sx={{
                          width: "100%",
                        }}
                        label="Name"
                        variant="standard"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "60%",
                        mx: "auto",
                      }}
                    >
                      <TextField
                        {...register("userEmail")}
                        sx={{
                          width: "100%",
                          mt: 2,
                        }}
                        label="Email"
                        variant="standard"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "60%",
                        mx: "auto",
                      }}
                    >
                      <TextField
                        {...register("userPhone")}
                        sx={{
                          width: "100%",
                          mt: 2,
                        }}
                        label="Phone"
                        variant="standard"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "60%",
                        mx: "auto",
                      }}
                    >
                      <TextField
                        {...register("photoURL")}
                        sx={{
                          width: "100%",
                          mt: 2,
                        }}
                        label="IMG-URL"
                        variant="standard"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "60%",
                        mx: "auto",
                      }}
                    >
                      <TextField
                        {...register("userPassword")}
                        sx={{
                          width: "100%",
                          mt: 2,
                        }}
                        type="password"
                        label="Password"
                        variant="standard"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 4,
                      }}
                    >
                      <input
                        style={{
                          border: "none",
                          padding: "10px 0",
                          background:
                            "linear-gradient(to right, #19D3B1, #0FCFE9)",
                          color: "white",
                          width: "60%",
                          fontSize: "16px",
                          fontWeight: "500",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                        type="submit"
                        value="Register"
                      />
                    </Box>
                  </form>
                )}
                <Box
                  sx={{
                    textAlign: "center",
                    mt: 3,
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/login"
                  >
                    Already Registered? Login Here!
                  </Link>
                </Box>
              </Box>
            )}

            <Box
              sx={{
                textAlign: "center",
                px: { xs: 2, sm: 8, md: 4, lg: 8 },
                py: 1,
              }}
            >
              {error && <Alert severity="error">{error}</Alert>}
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img width="100%" src={img} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
