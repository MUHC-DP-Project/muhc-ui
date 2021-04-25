import React, {useState, useEffect} from 'react'
//@Material-UI
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';

//@Axios
import {userAxios} from '../../../axios-pbrn';
import './Avatar.css';

const useStyles = makeStyles({
    avatar: {
        textAlign: 'center',
        color: '#fff',
        '& p': {
            margin: '0px'
        }
    }
});

function UserAvatar() {
    const classes = useStyles();
    const [user,
        setUser] = useState({firstName: '', lastName: '', role: ''});
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        userAxios
            .get(`/users/${userId}`)
            .then(response => {
                setUser({firstName: response.data.firstName, lastName: response.data.lastName, role: response.data.userRole});
            });
    }, [])
    const content = (
        <div className={classes.avatar}>
            <b>{user.firstName} {user.lastName}</b>
            <p>{user.role}</p>
        </div>
    );
    return (

        <ListItem key="user-avatar">

            <ListItemIcon>
                <Avatar>{user
                        .firstName
                        .charAt(0)}{user
                        .lastName
                        .charAt(0)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={content}/>

        </ListItem>

    )
}

export default UserAvatar
