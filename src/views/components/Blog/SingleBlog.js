import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleBlog = ({ blog }) => {
  const { name, img, title, description, date } = blog;
  return (
    <Grid item lg={6} sm={6} md={6}>
      <Paper
        sx={{
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 4,
            paddingY: 2,
          }}
        >
          <Box>
            <img width="80" src={img} alt="" />
          </Box>
          <Box
            sx={{
              ml: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
            >
              {" "}
              {date}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            pl: 3,
            pr: 1,
          }}
        >
          <Typography
            sx={{
              mt: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              mt: 2,
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            pl: 3,
            mt: 1,
          }}
        >
          <Button
            variant="string"
            sx={{
              background:
                "linear-gradient(to right, #19d3b1, #0fcfe9) !important",
              color: "white",
              borderRadius: "0",
            }}
          >
            Read Blogs
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SingleBlog;
