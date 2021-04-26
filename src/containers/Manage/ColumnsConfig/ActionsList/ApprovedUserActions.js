import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userAxios} from '../../../../axios-pbrn';
function ApprovedUserButton(props) {
    const [anchorEl,
        setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleAssignPrivilege= (role,id)=>{
        userAxios
        .post('/users/setPrivileges',{
            userRole:role,
            userId:id
        }).then(response=>console.log(response.data))
        .catch(error=>{console.log(error.response)})
    }
    
    return (
        <div>
            <IconButton aria-label="edit" size="small" onClick={handleClick}>
                <EditIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={()=>handleAssignPrivilege("User",props.userId)}>User</MenuItem>
                <MenuItem onClick={()=>handleAssignPrivilege("ClinicManager",props.userId)}>Clinic Manager</MenuItem>
                <MenuItem onClick={()=>handleAssignPrivilege("Admin",props.userId)}>Admin</MenuItem>
            </Menu>
        </div>
    )
}

export default ApprovedUserButton
