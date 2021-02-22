import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './Avatar.css';
function UserAvatar() {
    const content = (
        <div className="TextAvatar">
            <b>Ahmed Azzouz</b>
            <p>Administrator</p>
        </div>
    );
    return (

        <ListItem key="user-avatar">

            <ListItemIcon>
                <Avatar>AA</Avatar>
            </ListItemIcon>
            <ListItemText primary={content}/>
            

        </ListItem>

    )
}

export default UserAvatar
