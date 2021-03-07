import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import NavItems from './NavItems';
import styled from "styled-components";
import Avatar from '../../components/UI/Avatar/Avatar';
import { v4 as uuidv4 } from 'uuid';
import WithErrorHandler from '../withErrorHandler/WithErrorHandler';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme
            .transitions
            .create([
                'width', 'margin'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme
            .transitions
            .create([
                'width', 'margin'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    drawerClose: {
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    navItemLink:{
        textDecoration:"none",
        color:"#fff"      
        
    },
    navItemElem:{
        marginTop:"10px",
        '&:hover': {
            backgroundColor: '#1a83ff'
          }
    }

}));

const StyledDrawer = styled(Drawer)`
  & > div {
    background-color: #30475e;
  }
`;
export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open,
        setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>


            <AppBar
                position="fixed"
                style={{
                backgroundColor: "#f05454"
            }}
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open
            })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                        [classes.hide]: open
                    })}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>


            <StyledDrawer
                variant="permanent"
                classes={{ paper: classes.paper }}
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })
            }}>
                <div className={classes.toolbar} >
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl'
                            ? <ChevronRightIcon style={{ color: '#fff' }}/>
                            : <ChevronLeftIcon style={{ color: '#fff' }}/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <Avatar/>
                    <Divider/>
                    {NavItems.map((item) => (
                        <Link key={uuidv4()} to={item.path} className={classes.navItemLink} >
                            <ListItem button key={uuidv4()} className={classes.navItemElem}>

                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.content}/>

                            </ListItem>
                        </Link>
                    ))}
                </List>
            </StyledDrawer>

            <main className={classes.content}>
                <div className={classes.toolbar}/> {props.children}
            </main>
            <WithErrorHandler/>  
        </div>
    );
}
