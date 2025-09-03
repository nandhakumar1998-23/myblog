import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Container } from "@mui/material";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Use deployed backend URL
    axios.get("https://myblog-x5a0.onrender.com/api/blogs/")
      .then(res => {
        // Ensure data is an array
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        } else {
          console.error("Unexpected data format:", res.data);
        }
      })
      .catch(err => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <Box>
      <Hero />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <Grid item key={blog.id} xs={12} sm={6} md={4}>
                <BlogCard blog={blog} />
              </Grid>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
