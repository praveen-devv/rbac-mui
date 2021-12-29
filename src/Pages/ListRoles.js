import React, { useEffect, useState } from 'react'
import './ListRoles.css'
import {ImSearch} from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import {BiPlusMedical} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { deleteRole } from '../redux/actions/roleActions'
import {ImCross} from 'react-icons/im'
import {FaEdit, FaUserAlt} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@mui/material/Tooltip';
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
import MTable from '../components/MTable'

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


function ListRoles() {

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

  // const [roles, setRoles] = useState([{}])
  // const roles = useSelector(state => state.role.roles)
  const columns=['Role ID','Role Name','Role Code','Actions']
  const datas = [{'roleid':1,'name':'adminqwsdsd','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'}]
  const dispatch = useDispatch()
  // console.log("roles from store>>>>",roles)
  const toogleState = useSelector(state => state.toogle.toogleState)

 
  const handledeleteRole = (id) =>{
    dispatch(deleteRole(id))
  }

    useEffect(() => {
        let cls=document.getElementsByClassName('listroles')[0];
        if(toogleState){
            cls.style.left="260px";
            cls.style.transition="all 0.4s ease";
            cls.style.width="calc(100% - 260px)";
        }
        if(!toogleState){
            cls.style.left="68px"
            cls.style.width="calc(100% - 68px)";
        }
        
    }, [toogleState])

    return (
        <div className='listroles'>
          <h3>Roles</h3>
          <div className="input-group">
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" placeholder='Search an Role' />
              <button type="button" className="btn btn-primary">
                <ImSearch />
              </button>
            </div>
            <div className='addbutton'>
              <Link to="/roles/create">
                <button type="button" className="btn btn-primary">Add<BiPlusMedical style={{margin:'5px 0px 10px 5px'}}/></button>
              </Link>
            </div>
          </div>
          <Paper className={classes.paper}>
            <TableContainer  className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                      {
                          columns.map((colData)=>(
                            <TableCell className={classes.tableHeaderCell}>{colData}</TableCell>
                          ))
                      }
                  </TableRow>
                </TableHead>
                <TableBody>
                    {
                        datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData)=>(
                            <TableRow key={rowData.roleid}>
                                <TableCell>{rowData.roleid}</TableCell>
                                <TableCell>
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
                                </TableCell>
                            </TableRow>
                        ))
                    }
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
          <MTable columns={[{id:'roleid',label:'Role ID'},{id:'name',label:'Role Name'},{id:'rolecode',label:'Role Code'}]} datas={[{'roleid':1,'name':'adminqwsdsd','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'admin','rolecode':'adm01'},{'roleid':1,'name':'zadmin','rolecode':'adm01'}]} />
   </div>
    )
}

export default ListRoles
