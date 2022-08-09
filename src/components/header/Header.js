import React from 'react'
import "./Header.css"
import LinkinLogo from "./img/Linkedin.svg";
import myPic from "./img/main.jpg"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux/es/exports';
import { auth } from '../../firebase';
import { logout} from '../../features/userSlice';
function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () =>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header-left">
                <img className="header-logo" src={LinkinLogo} alt="" />
                <div className="header-search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={myPic} onClick={logoutOfApp} title="Tushar" />
            </div>
        </div>
    )
}

export default Header
