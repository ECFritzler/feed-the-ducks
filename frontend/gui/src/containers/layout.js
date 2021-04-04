import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logButton: {
    marginRight: theme.spacing(2),
  },

}))

export default function CustomLayout(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}>

          <Grid item xs={2} spacing={9}>
            <Typography>
                Feed The Ducks
            </Typography>
          </Grid>

          {/*add additional buttons here*/}
          <Grid item xs={9}/>

          <Grid item xs={1}>
            <Button className={classes.logButton} color="inherit">Log Data</Button>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
    <main>
      <Container maxWidth="lg">
        Hello World
      </Container>
    </main>
    </div>
  )
}
