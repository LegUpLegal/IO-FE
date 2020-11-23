import React from 'react'
import { ItemCard } from "./components";
import { Grid } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useStyles } from "./hooks";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        alignItems="center"
        justify="center"
        container
        spacing={3}
        className={classes.gridContainer}
      >
        <ItemCard />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
