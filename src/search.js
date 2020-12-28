import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const SearchBox = props => {
  const classes = useStyles();
  const id = props.match.params.id;

  return (
    <div>
      <h1>{id}</h1>
      <SearchBar
        style={{
          margin: "15% auto",
          width: 50 + "%",
          minWidth: 330,
          maxWidth: 800
        }}
      />
    </div>
  );
};
export default SearchBox;
