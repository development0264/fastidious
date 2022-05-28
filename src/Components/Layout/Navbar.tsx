import {useEffect,useState} from "react";
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

const Navbar = () => {
  const drawerWidth = 250;
  const navigate = useNavigate();
  const [menus,setMenus]=useState<any>([]);
  const [pathName,setPathName]=useState("");
  useEffect(()=>{
    const isAdmin=window.location.pathname.split('/')[1]
    setPathName(isAdmin)
    console.log("isAdmin",isAdmin)
    if(isAdmin==="projectManager"){
        setMenus([
            { path: "dashboard", name: "Dashboard" },
            { path: "developer", name: "Developer" },
            { path: "project", name: "Project" },
          ])
    }else{
        setMenus([
            { path: "dashboard", name: "Dashboard" },
            { path: "project", name: "Project" },
            { path: "issues", name: "Issues" },
          ])
    }
  },[])
  const handleRoute = (path: string) => {
    navigate("/"+pathName+"/" + path);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ fontFamily: "pacifico" }}
            noWrap
            component="div"
          >
            Fastidious
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menus.length!==0 && menus.map((item:any,index:number) => {
              return (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      onClick={() => handleRoute(item.path)}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
