import { Avatar } from '@mui/material'
import React from 'react'
import { selectUser } from '../../../features/userSlice'
import SidebarImg from "../img/Gradient-HD-Image.jpg"
import "./Sidebar.css"
import Img from "../img/main.jpg"
import { useSelector } from 'react-redux/es/exports'
import RecentItems from './RecentItems'
function Sidebar() {
  const user = useSelector(selectUser)
  return (
    <div className="sidebar">
      {/* ++++++++++++++ Sidebar top ++++++++++++++++ */}
      <div className="sidebar-top">
        <img src={SidebarImg} alt="" />
        <Avatar src={user.photoUrl} className="sidebar-avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      {/* ++++++++++++++ Stats ++++++++++++++++ */}
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2618</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on Post</p>
          <p className="sidebar-statNumber">218</p>
        </div>
      </div>
      {/* ++++++++++++++ Sidebar botton ++++++++++++++++ */}
      <div className="sidebar-bottom">
        <p>Recent</p>
        <RecentItems topic="Web development"/>
        <RecentItems topic="Video Editing"/>
        <RecentItems topic="Gaming"/>
        <RecentItems topic="Vlogging"/>
      </div>
    </div>
  )
}

export default Sidebar