import React from 'react';
import Creator from "../../components/Creator";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    position: "fixed",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Creator />
    </main>
  );
};

export default Home;
