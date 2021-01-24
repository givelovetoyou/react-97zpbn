import React from "react";
import SearchBox from "./search";
import SideBar from "./sidebar";
import MainPage from "./mainpage";
import Grid from "@material-ui/core/Grid";
import { Route, Switch } from "react-router-dom";


export default function App() {
  return (
    <div class="main">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <div>
            <Switch>
              <Route path="/word/:id" component={SearchBox} />
              {/* <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} /> */}
              <Route path="/" component={MainPage}/>
            </Switch>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
