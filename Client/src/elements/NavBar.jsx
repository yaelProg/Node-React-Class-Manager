import React from 'react';
import './NavBar.css'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MyImage from './finn.png'
import {Link} from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PrivateRoute from '../auth/PrivateRoute';
import CheckToken from '../auth/CheckToken';
export default function Navbar() {
 const {CheckToken} = PrivateRoute()
 CheckToken()
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', marginBottom:"2%", position:"fixed", top:"0", left:"0", zIndex:"1000", opacity:"0.9"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* My Navbar */}
        <div style={{marginTop:"5px"}}> <img src={MyImage} alt="logo"  width="65" height="65" /> </div> 
        </Typography>

        <Link to = {'/teacher_schedule'} className="button">  <span className="lable">צפיה במערכת</span> </Link>

        {/* <Link to = {'/Daily_teacher'} className="button">  <span className="lable">מערכת יומית</span> </Link> */}

        {/* <Link to = {'/Month_teacher'} className="button"> <span className="lable">מערכת חודשית</span> </Link> */}

        <button className='buttonPlus'> <span className="lable" >הוספת שיעור</span> </button>
       
        {/* <button className="button">
  <span className="lable">מערכת חודשית</span>
</button>
     <button className="button">
  <span className="lable">מערכת יומית</span>
</button> */}
      </Toolbar>
    </AppBar>
  );
}