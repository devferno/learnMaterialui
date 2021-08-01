import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Drawer,
  IconButton,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Avatar,
  ListItemText,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ArrowLeftOutlined, EmailOutlined } from "@material-ui/icons";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    padding: theme.spacing(0, 1),
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawTitle: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  appBar: {},
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  hide: {
    display: "none",
  },
  content: {
    padding: theme.spacing(3),
    flexGrow: 1,
    marginLeft: -drawerWidth,
  },
  contentShift: {
    marginLeft: 0,
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const menuItem = [
    "Email",
    "Dashboard",
    "statistiques",
    "employee",
    "trades",
    "settings",
  ];
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className={classes.root}>
      <AppBar
        className={open ? classes.appBarShift : classes.appBar}
        color="white"
        elevation={1}
      >
        <Toolbar>
          <IconButton
            button
            className={open ? classes.hide : null}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.drawTitle}>
            My Dashboard
          </Typography>
          <IconButton color="primary">
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar>A</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={open}
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton button onClick={handleClose}>
            <ArrowLeftOutlined />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItem.map((n, i) => (
            <ListItem key={i} button>
              <ListItemIcon>
                <EmailOutlined />
              </ListItemIcon>
              <ListItemText primary={n}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={open ? classes.contentShift : classes.content}>
        <div className={classes.drawerHeader}></div>
        {children}
      </div>
    </div>
  );
};
export default Layout;
