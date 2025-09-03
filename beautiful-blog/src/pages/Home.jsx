import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Container } from "@mui/material";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs/")
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Box>
      <Hero />
      <Container sx={{ py: 5 }}>
        <Grid container justifyContent="center">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
