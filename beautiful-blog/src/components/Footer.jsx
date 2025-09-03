import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "../App.css";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#111", color: "#fff", p: 4, textAlign: "center" }}>
      <Typography>
        &copy; {new Date().getFullYear()} Daily Blog. All rights reserved.
      </Typography>

      <Typography sx={{ mt: 1 }}>
        Follow us on{" "}
        <Link href="#" sx={{ color: "#f5084f", textDecoration: "none" }}>
          Twitter
        </Link>
        ,{" "}
        <Link href="#" sx={{ color: "#f5084f", textDecoration: "none" }}>
          Facebook
        </Link>{" "}
        &{" "}
        <Link href="#" sx={{ color: "#f5084f", textDecoration: "none" }}>
          Instagram
        </Link>
      </Typography>

      {/* ✅ Contact Info */}
      <Typography sx={{ mt: 2 }}>
        📞 <Link href="tel:+917448516897" sx={{ color: "#f5084f", textDecoration: "none" }}>
          7448516897
        </Link>{" "}
        | ✉️{" "}
        <Link
          href="mailto:nandhakumarid023@gmail.com"
          sx={{ color: "#f5084f", textDecoration: "none" }}
        >
          nandhakumarid023@gmail.com
        </Link>
      </Typography>
    </Box>
  );
}
