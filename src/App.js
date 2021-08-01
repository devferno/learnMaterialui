import { CssBaseline, Drawer } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import {
  lightBlue,
  deepPurple,
  blueGrey,
  grey,
} from "@material-ui/core/colors";
import Cards from "./components/Cards";
import MyTable from "./components/Table";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0277bd",
    },
    secondary: {
      main: "#ffa000",
    },
    background: {
      default: "#dde9f5",
    },
  },
});
const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route component={MyTable} path="/setting" />
            <Route component={Cards} path="/" />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};
export default App;
