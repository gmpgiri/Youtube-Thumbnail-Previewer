import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'; 
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import PublishIcon from '@material-ui/icons/Publish';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__leftSide">
                <MenuIcon />
                <img 
                 className="header__logo"
                 src="https://havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new.jpg"
                 alt="youtube logo"
                  />
            </div>
            
            <div className="header__search">
                <TextField className="header__input" placeholder="Search" variant="outlined"/>
                <Button className="header__searchButton" variant="outlined"> <SearchIcon /> </Button>
                
            </div>
            <div className="header__rightSide">
                <PublishIcon />
                <NotificationsIcon />
                <AppsIcon />
            </div>
            
        </div>
    )
}

export default Header;
