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
    color: 'black',
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
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
    height: 50,
    border:'none',
    background:'#FFFF99',
  },

}))

export default function CustomLayout({children}){
  const classes = useStyles();
  const [modal, toggleModal] = useState(false)
  const showModal = () => {
    toggleModal(true);
  }
  const hideModal = () =>{
    toggleModal(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const postObject={
      feed_time: event.target.elements.time.value,
      location: event.target.elements.location.value,
      food_type: event.target.elements.food_type.value,
      food_quantity: event.target.elements.food_quantity.value,
      number_of_ducks: event.target.elements.num_ducks.value,
    }

    if((postObject.location || postObject.food_type
      || postObject.food_quantity || postObject.number_of_ducks) === ""){
        return(alert("Some fields are missing data"))
      }
    toggleModal(false);

    console.log(postObject)
    axios.post('http://127.0.0.1:8000/api/core/',postObject);
    window.location.reload(true);
  }

  return(
    <div className={classes.root}>
    <AppBar position="sticky" style={{ background: '#FFFF99' }}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}>

          <Grid item xs={2} spacing={9}>
            <Typography variant="h5" color='textPrimary'>
                Feed The Ducks
            </Typography>
          </Grid>

          {/*add additional buttons here*/}
          <Grid item xs={9}/>

          <Grid item xs={1}>
            <Button onClick={showModal} className={classes.logButton} >
              Log Data
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <main>
      <Container maxWidth="lg">
        {children}
        <LogModal show={modal} handleClose={hideModal}>
        <form onSubmit={handleSubmit} className={classes.textfields} autoComplete="off">
          <TextField type="time" defaultValue="12:00" name="time" label="Time" />
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
