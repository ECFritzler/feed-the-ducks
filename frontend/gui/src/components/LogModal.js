import React from 'react';
import './LogModal.css'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const LogModal = ({handleClose, show, children}) => {
  const modalDisplayClass = show ? "modal display-modal" : "modal display-none";
  return(
      <Box component="div" className={modalDisplayClass}>
        <Box className="modal-main">
          <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
            <Button onClick={handleClose}> x </Button>
            </Box>
          <Box p={1} m={1}>
            {children}
          </Box>
        </Box>
      </Box>
  );
};

export default LogModal
