import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navToolbar: {
    backgroundColor: "white",
    color: "gray",
    display: `flex`,
    justifyContent: `left`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `left`,
  },
  linkText: {
    textDecoration: `none`,
    color: `gray`,
  },
});

const navLinks = [
  { title: `Home`, path: `/home` },
  { title: `Current Projects`, path: `/project/me` },
  { title: `Create a project`, path: `/project/create` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.navToolbar}>
        <a href={'/'} className={classes.linkText}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
        </a>
        <Typography variant="h5" >PBRN Research Hub</Typography>
      </Toolbar>
      <Toolbar className={classes.navToolbar}>
        <Container maxWidth="xl">
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
