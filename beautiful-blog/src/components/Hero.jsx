import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../App.css"

export default function Hero() {
  return (
    <Box
      sx={{
        height: "80vh",
        backgroundImage: `url('https://i0.wp.com/cosnderm.in/wp-content/uploads/revslider/slider-hardware/black-electronics-s-1-bg.jpg?ssl=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <Box sx={{ backgroundColor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 2 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Welcome to Daily Blog
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Explore the latest posts and share your thoughts with our community!
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #f5084f, #ff6a00)",
            color: "#fff",
          }}
        >
          Explore Blogs
        </Button>
      </Box>
    </Box>
  );
}
