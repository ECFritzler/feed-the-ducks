import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Logs(props){

  return(
    <TableBody>
      {console.log(props)}
      {props.data.map(feed_log => {
        return(
            <TableRow>
              <TableCell>{feed_log.feed_time}</TableCell>
              <TableCell>{feed_log.location}</TableCell>
              <TableCell>{feed_log.food_type}</TableCell>
              <TableCell>{feed_log.food_quantity}</TableCell>
              <TableCell>{feed_log.number_of_ducks}</TableCell>
            </TableRow>
        )
      })}
      </TableBody>
  )
}
