import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const BACKEND_URL = "https://myblog-x5a0.onrender.com";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();

  // Fetch single blog
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/blogs/${id}/`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Fetch related blogs
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/blogs/`)
      .then((res) => {
        const filtered = res.data.filter((b) => b.id !== parseInt(id));
        setRelatedBlogs(filtered.slice(0, 4)); // show 4 related
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) return <Typography>Loading...</Typography>;

  // Full image URLs
  const mainImage = blog.image
    ? `${BACKEND_URL}${blog.image}`
    : "https://via.placeholder.com/800x400?text=No+Image";

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {/* Main Blog Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h3" gutterBottom>
            {blog.title}
          </Typography>

          <Box
            component="img"
            src={mainImage}
            sx={{
              width: "100%",
              maxHeight: 400,
              width: 400,
              objectFit: "cover",
              mb: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
            alt={blog.title}
          />

          <Typography variant="body1">{blog.content}</Typography>
        </Grid>

        {/* Related Blogs Sidebar */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Related Blogs
          </Typography>
          {relatedBlogs.map((rel) => {
            const relImage = rel.image
              ? `${BACKEND_URL}${rel.image}`
              : "https://via.placeholder.com/400x200?text=No+Image";

            return (
              <Card
                key={rel.id}
                sx={{ mb: 2, cursor: "pointer" }}
                onClick={() => navigate(`/blog/${rel.id}`)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={relImage}
                  alt={rel.title}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {rel.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {rel.content}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
