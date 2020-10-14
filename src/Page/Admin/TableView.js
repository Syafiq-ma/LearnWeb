import React, {Component} from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link as RouterLink} from 'react-router-dom';
import Link  from '@material-ui/core/Link';

const styles = theme => ({
  table: {
    minWidth: 650,
  },
});



class TableView extends Component {

    render() {

        const {rows, coloumns} = this.props;
        return(
            <div>
                <Paper>
                
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                { coloumns ?
                                    coloumns.map((col,i) => {
                                        return (
                                            <TableCell key={i}>{col.label}</TableCell>
                                        )
                                    })
                                :
                                null
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows ? 
                                rows.map((row,i) => {
                                    return (
                                        <TableRow>
                                            {
                                        coloumns.map((col,colIndex) => {
                                        return(
                                            <TableCell component="th" scope="row">
                                                {col.name === 'id' ?
                                                    <Link to={`/admin/posts/edit/${row[col.name]}`} component={RouterLink}>{row[col.name]}</Link>
                                                    : row[col.name]
                                                }
                                                
                                            </TableCell>
                                        )
                                    })
                                }</TableRow>
                                )})
                                :
                                null
                            }
                        </TableBody>
                    </Table>
                
                </Paper>
            </div>
        )
    }
}

export default TableView;