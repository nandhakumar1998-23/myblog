import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 3, boxShadow: 5 }}>
<CardMedia
  component="img"
  height="200"
  width="400"
  image={blog.image} 
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
