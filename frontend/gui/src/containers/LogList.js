import React from 'react';
import Log from '../components/Log.js'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class LogList extends React.Component {
  render(){
    return(
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Date Fed </TableCell>
              <TableCell> Time Fed </TableCell>
              <TableCell> Location </TableCell>
              <TableCell> Food Type </TableCell>
              <TableCell> Food Quantity </TableCell>
              <TableCell> Number of Ducks </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          </TableBody>


        </Table>
      </TableContainer>
    )
  }
}

export default LogList;
