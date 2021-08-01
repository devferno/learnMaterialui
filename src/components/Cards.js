import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import { FolderOpenOutlined, MoreVertOutlined } from "@material-ui/icons";

import React from "react";
import { green, lightGreen, purple } from "@material-ui/core/colors";
import LineChart from "./LineChart";
import MyTable from "./Table";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
    boxShadow: "none",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  contentText: {
    flexGrow: 1,
  },
  warningCard: {
    backgroundColor: "#4671f4",
    boxShadow: "0 1px 20px 20px #b2d8ff",
    padding: theme.spacing(1),
    color: "white",
  },
  button: {
    backgroundColor: "#e57488",
  },
}));

const Cards = () => {
  const createArray = (length) => [...Array(length)];
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      {createArray(3).map((n, i) => (
        <Grid item xs={12} sm md={4} lg={4}>
          <Card className={i == 2 ? classes.warningCard : classes.card}>
            <CardHeader
              action={
                <IconButton>
                  <MoreVertOutlined />
                </IconButton>
              }
              title={<Typography variant="body2">Bitcoin Earning</Typography>}
            ></CardHeader>

            <CardContent className={classes.content}>
              <Typography variant="h3" className={classes.contentText}>
                213
              </Typography>
              <IconButton color={i != 2 ? "primary" : "inherit"}>
                <FolderOpenOutlined />
              </IconButton>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                className={i == 2 ? classes.button : null}
              >
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardHeader
            title={<Typography variant="h6">Total earning</Typography>}
          ></CardHeader>
          <LineChart />
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8}>
        <Card className={classes.card}>
          <MyTable />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Cards;
