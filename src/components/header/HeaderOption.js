import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"
import { useSelector } from 'react-redux/es/exports';
import { selectUser } from '../../features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <>
            <div onClick={onClick} className='headerOption'>
                {Icon && <Icon className="headerOption-icons" />}

                {avatar && <Avatar className="headerOption-icons" src={avatar}></Avatar>}

                <h3 className='headerOption-title'>{title}</h3>
            </div>
        </>
    )
}

export default HeaderOption
