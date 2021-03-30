import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
        content: "Logout",
        path: "/logout",
        icon: <ExitToAppIcon style={{ color: '#fff',fontSize:"25px" }}/>
    }
];

export default navItems;