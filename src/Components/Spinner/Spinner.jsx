import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const Spinner = () => (
  <Grid container justify="center" alignItems="center">
    <CircularProgress disableShrink />
  </Grid>
);

export default Spinner;
