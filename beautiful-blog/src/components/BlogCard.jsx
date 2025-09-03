import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  // Full image URL with fallback
  const imageUrl = blog.image
    ? `https://myblog-x5a0.onrender.com/media/${blog.image}`
    : "https://dummyimage.com/400x200/f0f0f0/000000.png&text=No+Image";

  return (
    <Card sx={{ maxWidth: 600, m: 2, borderRadius: 3, boxShadow: 5 }}>
      <CardMedia
        component="img"
        height="300"
        width= "300"
        image={imageUrl}
        alt={blog.title}
        sx={{ objectFit: "cover" }}
        onError={(e) => {
          // Fallback if image fails to load
          e.target.onerror = null;
          e.target.src = "https://dummyimage.com/400x200/f0f0f0/000000.png&text=No+Image";
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {blog.title}
        </Typography>
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
