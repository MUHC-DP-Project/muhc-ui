import React,{useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {userAxios} from '../../../axios-pbrn';
import './Avatar.css';
function UserAvatar() {
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        role:''
    });
    useEffect(() => {
        const userId=localStorage.getItem('userId');
        userAxios
        .get('/users/' + userId)
        .then(response => {
            setUser({
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            role:response.data.userRole
            });
        })
        ;
    }, [])
    const content = (
        <div className="TextAvatar">
            <b>{user.firstName} {user.lastName}</b>
            <p>{user.role}</p>
        </div>
    );
    return (

        <ListItem key="user-avatar">

            <ListItemIcon>
                <Avatar>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={content}/>
            

        </ListItem>

    )
}

export default UserAvatar
