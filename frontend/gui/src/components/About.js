import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root:{
    padding:'20px',

  },
  title:{
    padding:'15px',
  },
  points:{
    padding:'15px'
  },
});

export default function About(){
  const classes = useStyles();
  return(
      <div className={classes.root}>
          <Typography className={classes.title} variant="h3" >
              Welcome to the Feed The Ducks Project
          </Typography>
          <Typography variant="body1">
              We are a team of scientists looking to better understand the life
              of ducks in our neighbourhoods. After developing rigorous scientific
              methodologies we determined that the best way to understand our feathery
              friends would be to ask you for your help. Over the course of this study
              we ask that anytime you find yourself at the park or down by the river
              feeding the ducks that you please log the following:
          </Typography>


          <Typography className={classes.points} variant="body1">
            <Box> - What time you fed the ducks </Box>
            <Box> - Where you fed the ducks </Box>
            <Box> - What you fed the ducks</Box>
            <Box> - How much you fed the ducks</Box>
            <Box> - How many ducks you fed</Box>
          </Typography>
          <Typography variant="body1">
              On behalf of our team and scientists everywhere we would like to
              thank you for your contributions to ongoing duck research. Please come back
              anytime to log your data or see what fellow duck-lovers around the world are
              feeding the ducks!
          </Typography>

      </div>
  )
}
