import React, {useState, useEffect} from 'react';

//@Material-UI
import Grid from '@material-ui/core/Grid';
import BasicTable from '../../components/UI/DataGrid/BasicTable';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {makeStyles} from '@material-ui/core/styles';

//@UI components
import Backdrop from '../../components/UI/BackDrop/Backdrop';

//@React-Router
import {withRouter} from 'react-router';

//@Redux
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

//@ColumnsConfig
import {PROJECT_COLUMN} from './ColumnsConfig/project';
import {USER_COLUMN} from './ColumnsConfig/user';

const useStyles = makeStyles({
    button: {
        marginRight: '15px',
        backgroundColor: '#2193b0',
        color: 'white',
        width: 'auto',
        '&:hover': {
            backgroundColor: '#61b7d1'
        }
    },
    groupedButton: {
        marginRight: '15px',
        '& button': {
            color: 'white'
        }
    }
});

function Home(props) {
    const classes = useStyles();
    const [displayProject,
        setDisplayProject] = useState(true);
    useEffect(() => {
        props.fetchData();
    }, [])

    const backDrop = <Backdrop
        condition={!props.myProjectData || !props.projectData || !props.userData}/>
    const createProjectButton = <Button
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={< AddCircleOutlineIcon />}
        onClick={() => props.history.push("/project")}>
        New Project
    </Button>;
    const groupedButton = <ButtonGroup variant="text" className={classes.groupedButton}>
        <Button
            onClick={() => setDisplayProject(false)}
            style={!displayProject
            ? {
                textDecoration: 'underline'
            }
            : null}>Users</Button>
        <Button
            onClick={() => setDisplayProject(true)}
            style={displayProject
            ? {
                textDecoration: 'underline'
            }
            : null}>Projects</Button>
    </ButtonGroup>

    const homePage = <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={10}>
        <Grid item>
            <BasicTable
                title="My Projects"
                button={createProjectButton}
                COLUMNS={PROJECT_COLUMN}
                MOCK_DATA={props.myProjectData}/>
        </Grid>
        <Grid item>
            <BasicTable
                title={displayProject
                ? "All Projects"
                : "Connect with other researchers"}
                button={groupedButton}
                COLUMNS={displayProject
                ? PROJECT_COLUMN
                : USER_COLUMN}
                MOCK_DATA={displayProject
                ? props.projectData
                : props.userData}/>
        </Grid>
    </Grid>
    return (
        <React.Fragment>
            {!props.myProjectData || !props.projectData || !props.userData
                ? backDrop
                : homePage}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {myProjectData: state.home.myProjectData, projectData: state.home.projectData, userData: state.home.userData}
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(actions.homeFetchData())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
