import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  // Ensure full image URL
  const imageUrl = blog.image
    ? `https://myblog-x5a0.onrender.com${blog.image}`
    : "https://via.placeholder.com/400x200?text=No+Image";

  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 3, boxShadow: 5 }}>
      <CardMedia
        component="img"
        height="200",
        width=""400,
        image={imageUrl}
        alt={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{blog.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.content.slice(0, 100)}...
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, background: "linear-gradient(45deg, #f5084f, #ff6a00)" }}
          onClick={() => navigate(`/blog/${blog.id}`)}
        >
          View More
        </Button>
      </CardContent>
    </Card>
  );
}
