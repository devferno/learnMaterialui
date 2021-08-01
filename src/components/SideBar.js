import {
  Button,
  Drawer,
  ListItem,
  List,
  makeStyles,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { AccountCircleOutlined, PermIdentity } from "@material-ui/icons";
import ChevronLeftOutlined from "@material-ui/icons/ChevronLeftOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  ListItem: {
    padding: theme.spacing(4),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    borderBottom: `1px solid #e0e0e0`,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderBottom: `1px solid #e0e0e0`,
  },
  drawerHeader: {
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  hide: {
    display: "none",
  },
  titelBar: {
    flexGrow: 1,
  },
}));
const SideBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <AppBar
        className={open ? classes.appBarShift : classes.appBar}
        position="fixed"
        color="white"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            onClick={handleOpen}
            className={open ? classes.hide : null}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.titelBar}>
            Persistent Drawer
          </Typography>
          <IconButton>
            <AccountCircleOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleClose}>
            <ChevronLeftOutlined />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((item) => (
            <ListItem button key={item}>
              <ListItemIcon>
                <PermIdentity />
              </ListItemIcon>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
