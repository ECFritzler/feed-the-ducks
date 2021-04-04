import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import LogModal from '../components/LogModal.js'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logButton: {
    marginRight: theme.spacing(2),
  },

  textfields:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submitButton:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

}))

export default function CustomLayout(){
  const classes = useStyles();
  const [modal, toggleModal] = useState(false);
  const [data, setData] = useState([]);


  const showModal = () => {
    toggleModal(true);
  }

  const hideModal = () =>{
    toggleModal(false);
  }

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
            <Button onClick={showModal} className={classes.logButton} color="inherit" >
              Log Data
            </Button>
            {console.log(modal)}
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
    <main>
      <Container maxWidth="lg">
        <LogModal show={modal} handleClose={hideModal}>
        <form className={classes.textfields} noValidate autoComplete="off">
          <TextField type="time" id="time" label="Time" />
          <TextField id="location" label="Location" />
          <TextField id="food-type" label="Food Type" />
          <TextField id="food-quantity" label="Quantity of Food" />
          <TextField type="number" id="number-of-ducks" label="Number of Ducks" />
          <Button className={classes.submitButton}>
            Submit Data
            </Button>
          </form>
        </LogModal>
      </Container>
    </main>
    </div>
  )
}
