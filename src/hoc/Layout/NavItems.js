import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
const navItems = [
    {
        content: "Home",
        path: "/",
        icon: <HomeIcon style={{ color: '#fff',fontSize:"25px" }}  />
    }, {
        content: "Create Project",
        path: "/createProject",
        icon: <AssignmentIcon style={{ color: '#fff',fontSize:"25px" }}/>
    }
];

export default navItems;