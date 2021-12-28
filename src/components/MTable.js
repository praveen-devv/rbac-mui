import faker from 'faker';
import React from 'react';
import {ImCross} from 'react-icons/im'
import {FaEdit, FaUserAlt} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar, InputAdornment } from '@material-ui/core'
import Tooltip from '@mui/material/Tooltip';
import { Search } from "@material-ui/icons";
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
 } from '@material-ui/core';
import SearchInput from './SearchInput';

 const useStyles = makeStyles((theme) => ({
    paper:{
      borderRadius:15
    },
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        maxWidth: '90vw'
    },
    tableHeader:{
      background:'rgba(0, 0, 0, 0) linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232)) repeat scroll 0% 0%;',

    },
    tableHeaderCell: {
        fontWeight: 'bold',
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontSize:'17px'
    },
    avatar: {
        // backgroundColor: theme.palette.primary.light,
        backgroundColor:'rgb(73, 163, 241)',
        color: theme.palette.getContrastText(theme.palette.primary.light),
        marginRight:'10px'
    },
    name: {
        fontWeight: 'bold',
        color: '#000',
        fontSize:'17px'
    }
  }));




function MTable({columns,datas}) {
    console.log("columns:",columns,"datsd",datas)
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = e => {
    let target = e.target;
    // setFilterFn({
    //     fn: items => {
    //         if (target.value == "")
    //             return items;
    //         else
    //             return items.filter(x => x.fullName.toLowerCase().includes(target.value))
    //     }
    // })
  }

  return (
    <Paper className={classes.paper}>
        <Toolbar>
            <SearchInput 
                label="Search Employees"
                className={classes.searchInput}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <Search />
                    </InputAdornment>)
                }}
                onChange={handleSearch}
            />
        </Toolbar>
            <TableContainer  className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                      {
                          columns.map((colData)=>(
                            <TableCell className={classes.tableHeaderCell}>{colData.label}</TableCell>
                          ))
                      }
                      <TableCell className={classes.tableHeaderCell} >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {
                        datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData)=>(
                            <TableRow key={rowData.roleid}>
                                {
                                    columns.map((column)=>{
                                        const value= rowData[column.id];
                                        var avatar=false;
                                        if(column.id==='name')avatar=true
                                        console.log("Value>>>>",value)
                                        return(
                                            avatar ?  <TableCell>
                                                        <Grid container>
                                                          <Grid item lg={2}>
                                                              <Avatar alt={value} src='.' className={classes.avatar}/>
                                                          </Grid>
                                                          <Grid item lg={10} style={{display:'flex',alignItems:'center'}}>
                                                          <Typography className={classes.name} >{value}</Typography>
                                                          </Grid>
                                                        </Grid>
                                                      </TableCell> 
                                                  : <TableCell key={column.id} >{value}</TableCell>
                           
                                            
                                        )
                                    })
                                }
                                <TableCell>
                                    <Tooltip title="View" placement='top' arrow>  
                                      <span><FaUserAlt style={{color:'green',fontSize:'18px',marginRight:'10px',cursor:'pointer'}} /></span>
                                    </Tooltip>
                                    <Tooltip title="Edit" placement='top' arrow> 
                                      <span><FaEdit style={{color:'orange',fontSize:'18px',marginRight:'10px',cursor:'pointer'}} /></span>
                                    </Tooltip>
                                    <Tooltip title="Delete" placement='top' arrow > 
                                      <span><ImCross style={{color:"red",fontSize:'18px',cursor:'pointer'}} /></span>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                                {/* <TableCell>
                                    <Grid container>
                                        <Grid item lg={2}>
                                            <Avatar alt={rowData.name} src='.' className={classes.avatar}/>
                                        </Grid>
                                        <Grid item lg={10} style={{display:'flex',alignItems:'center'}}>
                                        <Typography className={classes.name} >{rowData.name}</Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>{rowData.rolecode}</TableCell>
                                <TableCell>
                                    <Tooltip title="View" placement='top' arrow>  
                                      <span><FaUserAlt style={{color:'green',fontSize:'18px',marginRight:'10px',cursor:'pointer'}} /></span>
                                    </Tooltip>
                                    <Tooltip title="Edit" placement='top' arrow> 
                                      <span><FaEdit style={{color:'orange',fontSize:'18px',marginRight:'10px',cursor:'pointer'}} /></span>
                                    </Tooltip>
                                    <Tooltip title="Delete" placement='top' arrow > 
                                      <span><ImCross style={{color:"red",fontSize:'18px',cursor:'pointer'}} /></span>
                                    </Tooltip>
                                </TableCell> */}
                            
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={datas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
  );
}

export default MTable;