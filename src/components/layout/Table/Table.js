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

export default function CustomizedTables(props) {
  const classes = useStyles();
  const {tableHeads} = props
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              { tableHeads.map((title, index)=>{
                  return(
                    <StyledTableCell key={index}>{title}</StyledTableCell>
                  )
              }) }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell >{row.fat}</StyledTableCell>
              <StyledTableCell >{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell >{row.edit}</StyledTableCell>
              <StyledTableCell >{row.del}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
{/* <StyledTableCell >Dessert</StyledTableCell>
<StyledTableCell >Calories</StyledTableCell>
<StyledTableCell >Fat&nbsp;</StyledTableCell>
<StyledTableCell >Carbs&nbsp;</StyledTableCell>
<StyledTableCell >Protein&nbsp;</StyledTableCell>
<StyledTableCell >Edit&nbsp;</StyledTableCell>
<StyledTableCell >Delete&nbsp;</StyledTableCell> */}