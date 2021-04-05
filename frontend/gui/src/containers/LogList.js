import React from 'react';
import axios from 'axios';

import Logs from '../components/Logs.js';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class LogList extends React.Component {

  state = {
    logs:[]
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/core/')
      .then(res =>{
          this.setState({
            logs: res.data
          });
      })
  }
  render(){
    return(
      <Grid
        container
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> Time Fed </TableCell>
                <TableCell> Location </TableCell>
                <TableCell> Food Type </TableCell>
                <TableCell> Food Quantity </TableCell>
                <TableCell> Number of Ducks </TableCell>
              </TableRow>
            </TableHead>
              <Logs data={this.state.logs} />
          </Table>
        </TableContainer>
      </Grid>
    )
  }
}

export default LogList;
