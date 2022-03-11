import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import bg2 from "../../../assests/icons/bg.png";
import { makeStyles } from "@mui/styles";
import SingleBlog from "./SingleBlog";
import axios from "axios";

const useStyle = makeStyles({
  blog: {
    background: `linear-gradient(to right, #19d3b1, #0fcfe9) !important`,
    padding: "4.1rem 0",
  },
});

const Blog = () => {
  const classes = useStyle();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <div id="blogs">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#1CC7C1",
            mb: 2,
          }}
        >
          Our Blogs
        </Typography>
        <Typography variant="h4">From Our Blog News</Typography>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            my: 4,
            px: 8,
          }}
        >
          <Grid item lg={4}>
            <Paper className={`  ${classes.blog}`} style={{}}>
              <Box
                sx={{
                  color: "black",
                  pl: 4,
                  backgroundImage: `url(${bg2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right 3% top 20%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                  }}
                >
                  Dr. Enamul Haque
                </Typography>
                <Typography>23 Dec 2021</Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    mt: 3,
                  }}
                >
                  Morning walk can be a good solution.
                </Typography>
                <ArrowRightAltSharpIcon sx={{ color: "black", mt: 2 }} />
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={8}>
            <Grid container spacing={2}>
              {blogs.map((blog) => (
                <SingleBlog key={blog.id} blog={blog} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Blog;
