import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#060B26",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, edit, del) {
  return { name, calories, fat, carbs, protein, edit, del};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,<EditIcon />, <DeleteIcon />),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,<EditIcon />,<DeleteIcon />),
  createData('Eclair', 262, 16.0, 24, 6.0,<EditIcon />,<DeleteIcon />),
  createData('Cupcake', 305, 3.7, 67, 4.3,<EditIcon />,<DeleteIcon />),
  createData('Gingerbread', 356, 16.0, 49, 3.9,<EditIcon />,<DeleteIcon />),
];

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Edit&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.edit}</StyledTableCell>
              <StyledTableCell align="right">{row.del}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
