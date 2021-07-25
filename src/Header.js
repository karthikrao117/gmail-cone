import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import './Header.css';

function Header() {
    return (
        <div className="header">
           <div className="header_left">
               <IconButton >
                   <MenuIcon/>
               </IconButton>
               <img src="./images/gmaila.jpg" alt="gmail-icon"></img>
           </div>
           <div className="header_middle">
               <SearchIcon/>
               <input type="text" placeholder="Search mail" />
               <ArrowDropDownIcon className="header_inputCaret" />
           </div>
           <div className="header_right">
           <IconButton >
               <HelpOutlineIcon/>
               </IconButton>
               <IconButton ><SettingsIcon/></IconButton>
               <IconButton ><AppsIcon/></IconButton>
               
               <Avatar/>
                
                
           </div>
        </div>
    )
}

export default Header;
