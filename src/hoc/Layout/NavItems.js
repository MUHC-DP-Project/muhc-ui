import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import GroupIcon from '@material-ui/icons/Group';
const navItems = [
    {
        content: "Home",
        path: "/",
        icon: <HomeIcon style={{ color: '#fff',fontSize:"25px" }}  />
    }, {
        content: "Create Project",
        path: "/createProject",
        icon: <AssignmentIcon style={{ color: '#fff',fontSize:"25px" }}/>
    }, {
        content: "Manage",
        path: "/manage",
        icon: <GroupIcon style={{ color: '#fff',fontSize:"25px" }}/>
    }, {
        content: "Edit Profile",
        path: "/createProject",
        icon: <PersonIcon style={{ color: '#fff',fontSize:"25px" }}/>
    }, {
        content: "Change Password",
        path: "/changepassword",
        icon: <VpnKeyIcon style={{ color: '#fff',fontSize:"25px" }}/>
    }, {
        content: "Logout",
        path: "/logout",
        icon: <ExitToAppIcon style={{ color: '#fff',fontSize:"25px" }}/>
    }
];

export default navItems;