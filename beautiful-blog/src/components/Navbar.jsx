import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import "../App.css";

const drawerWidth = 250;

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Fetch categories from Django API
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories/")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  const sidebarContent = (
    <List
      sx={{ width: drawerWidth, background: "#111", color: "#fff", height: "100%" }}
    >
      <Typography variant="h6" sx={{ m: 2, color: "#f5084f", fontWeight: "bold" }}>
        Categories
      </Typography>
      {categories.map((category) => (
        <ListItem button key={category.id}>
          <ListItemText primary={category.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#000",
            color: "#fff",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#f5084f" }}>
            Daily Blog
          </Typography>
          <div className="desktop-menu">
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </div>
          <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(!drawerOpen)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant={isDesktop ? "persistent" : "temporary"}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#111",
            color: "#fff",
            borderRight: "1px solid #333",
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      <main
        style={{
          marginLeft: isDesktop && drawerOpen ? drawerWidth : 0,
          padding: "20px",
          transition: "margin 0.3s ease",
        }}
      ></main>
    </>
  );
}
