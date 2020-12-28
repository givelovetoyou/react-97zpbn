import React from "react";
import SearchBox from "./search";
import SideBar from "./sidebar";
import Grid from "@material-ui/core/Grid";
import { Route, Switch } from "react-router-dom";
import "./tailwind-min.css";

export default function App() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <div>
            <Switch>
              <Route path="/word/:id" component={SearchBox} />
              <Route path="/about/" component={SearchBox} />
              <Route path="/post" component={SideBar} />
              <Route path="/project" component={SearchBox} />
              <Route path="/" />
            </Switch>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
