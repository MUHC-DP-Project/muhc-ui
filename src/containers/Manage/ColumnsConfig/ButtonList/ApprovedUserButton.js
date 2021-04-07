import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
function ApprovedUserButton() {
    const [anchorEl,
        setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
                <MenuItem onClick={handleClose}>User</MenuItem>
                <MenuItem onClick={handleClose}>Clinic Manager</MenuItem>
                <MenuItem onClick={handleClose}>Admin</MenuItem>
            </Menu>
        </div>
    )
}

export default ApprovedUserButton
