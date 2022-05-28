import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useNavigate } from "react-router";
import { Paper } from "@mui/material";
import Navbar from "./Navbar";


interface LayoutProps{
  children:JSX.Element[]|JSX.Element,
  title?:string
}

const Layout = (props: LayoutProps) => {
  const navigate = useNavigate();
  const { children,title="Fallback Title" } = props;

  const menus = [
    { path: "dashboard", name: "Dashboard" },
    { path: "developer", name: "Developer" },
    { path: "dashboard", name: "Dashboard" },
  ];

  const handleRoute = (path: string) => {
    navigate("/projectManager/" + path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h5" sx={{mx:2,my:1,fontWeight:700}}>
          {title}
        </Typography>
        <Paper>
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default Layout;
