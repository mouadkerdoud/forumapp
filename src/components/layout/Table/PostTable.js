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


const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const {tableHeads, posts, deletePost, handleEditClick} = props
  
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
          {posts.reverse().map((post, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {post.postId}
              </StyledTableCell>
              <StyledTableCell>{post.postTitle}</StyledTableCell>
              <StyledTableCell>{post.user.firstName} {post.user.lastName}</StyledTableCell>
              <StyledTableCell>{post.publishDate}</StyledTableCell>
              <StyledTableCell ><EditIcon onClick={()=>handleEditClick(post.postId)} className="icon" /></StyledTableCell>
              <StyledTableCell ><DeleteIcon className="icon" onClick={()=>deletePost(post.postId)}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
