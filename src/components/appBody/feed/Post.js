import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import "./Post.css"
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
// import Img from "./img/main.jpg"
const Post= forwardRef(({name, description, message, photoUrl}, ref) =>{
  return (
    <div ref={ref} className="post">
    {/* ++++++++++++++++++++ Post header +++++++++++++++++++++++ */}
        <div className="post-header">
            <Avatar src={photoUrl}>{name[0]} </Avatar>
            <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        {/* ++++++++++++++++++++ Post body +++++++++++++++++++++++ */}
        <div className="post-body">
            <p>{message}</p>
        </div>
        {/* ++++++++++++++++++++ Post button +++++++++++++++++++++++ */}
        <div className="post-buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share"/>
            <InputOption Icon={SendOutlinedIcon} title="Send"/>
        </div>
    </div>
  )
})

export default Post
