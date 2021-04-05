import React, { useState } from 'react';
import axios from 'axios';

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
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
    //  Authorization: `Token ${token}`,
    };

  const showModal = () => {
    toggleModal(true);
  }

  const hideModal = () =>{
    toggleModal(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    toggleModal(false);
    const postObject={
      feed_time: event.target.elements.time.value,
      location: event.target.elements.location.value,
      food_type: event.target.elements.food_type.value,
      food_quantity: event.target.elements.food_quantity.value,
      number_of_ducks: event.target.elements.num_ducks.value,
    }

    console.log(postObject)
    axios.post('http://127.0.0.1:8000/api/core/',postObject);
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

          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
    <main>
      <Container maxWidth="lg">
        <LogModal show={modal} handleClose={hideModal}>
        <form onSubmit={handleSubmit} className={classes.textfields} noValidate autoComplete="off">
          <TextField type="time" name="time" label="Time" />
          <TextField name="location" label="Location" />
          <TextField name="food_type" label="Food Type" />
          <TextField name="food_quantity" label="Quantity of Food" />
          <TextField type="number" name="num_ducks" label="Number of Ducks" />
          <button htmlType="submit" className={classes.submitButton}>
            Submit Data
            </button>
          </form>
        </LogModal>
      </Container>
    </main>
    </div>
  )
}
