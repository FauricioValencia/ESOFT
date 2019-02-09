import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//  IMPORT PAGES
import All from './Pages/All/All';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container>
              <Grid sm={2} xs={6}>
                <Link to="/Home">
                  <Typography variant="h6" color="inherit" className={classes.grow} style={{ color: 'white', textDecoration: 'none' }}>
                    Home
                  </Typography>
                </Link>
              </Grid>
              <Grid sm={2} xs={6}>
                <Link to="/Todos">
                  <Typography variant="h6" color="inherit" className={classes.grow} style={{ color: 'white', textDecoration: 'none' }}>
                    Todos
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <Grid style={{ margin: '2%' }}>
        <Switch>
          {/* <Route  path='/Home' exact component={Home} /> */}
          <Route  path='/' exact component={Home} />
          <Route  path='/Todos' exact component={All} />
          <Route path='/Detail' exact component={Details} />
          <Route component={Home} />
        </Switch>
      </Grid>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
