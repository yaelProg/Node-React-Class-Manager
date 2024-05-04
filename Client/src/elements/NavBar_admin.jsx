import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import React from 'react';
import './NavBar.css'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MyImage from './finn.png'
import {Link} from 'react-router-dom'
import Admin_menu from './admin_menu';
export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', marginBottom:"2%", position:"fixed", top:"0", left:"0", zIndex:"1000", opacity:"0.9"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* My Navbar */}
        <div style={{marginTop:"5px"}}> <img src={MyImage} alt="logo"  width="65" height="65" /> </div> 
        </Typography>

        <Link to = {'/Weekly_teacher'} className="button">  <span className="lable">מערכת שבועית</span> </Link>

        <Link to = {'/Daily_teacher'} className="button">  <span className="lable">מערכת יומית</span> </Link>
        <Admin_menu/>
        {/* <Link to = {'/Month_teacher'} className="button-admin"  >  <AdminPanelSettingsIcon color="inherit"/> <span className="lable">ניהול</span> </Link> */}
       
       
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