import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import BasicTable from '../../components/UI/DataGrid/BasicTable';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {withRouter} from 'react-router';
import {userAxios,projectAxios} from '../../axios-pbrn';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PROJECT_COLUMN} from './ColumnsConfig/project';

import './Home.css';
function Home(props) {

    const [myProject,
        setMyProject] = useState(undefined);
    const [userData, setUserData] = useState(undefined);
    const [projectData, setProjectData] = useState(undefined);
    const [displayAllProject, setDisplayAllProject] = useState(true)
    useEffect(() => {
        //will need another axios call for myProject
        projectAxios
            .get('/projects')
            .then(response => {
                setMyProject(response.data);//for now i will display all the project untill we do the dependencies
                setProjectData(response.data);
            })
            .catch(error => {
                console.log("Failed to fetch data: ", error.response);
            });
        userAxios
        .get('/users')
        .then(response=>{
            console.log("userdata ",response.data);
            setUserData(response.data)
        })
        .catch(error => {
            console.log("Failed to fetch data: ", error.response);
        });
    }, [])

    const backDrop = <Backdrop className="backDrop" open={!myProject&&!projectData&&!userData}>
        <CircularProgress color="inherit"/>
    </Backdrop>
    const createProjectButton = <Button
        variant="contained"
        size="large"
        className="button"
        startIcon={< AddCircleOutlineIcon />}
        onClick={() => props.history.push("/createProject")}>
        New Project
    </Button>;
    const groupedButton=<ButtonGroup variant="text" className="groupedButton" aria-label="display all projects/users button group">
    <Button onClick={()=>setDisplayAllProject(false)}>Users</Button>
    <Button onClick={()=>setDisplayAllProject(true)}>Projects</Button>
  </ButtonGroup>
    const homePage=<Grid
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
                MOCK_DATA={myProject}/>
    </Grid>
    <Grid item>
    <BasicTable title={displayAllProject?"All Projects":"All Users"}
    button={groupedButton}
    COLUMNS={PROJECT_COLUMN}
    MOCK_DATA={myProject}/>
    </Grid>
</Grid>
    return (
        <React.Fragment>
        {!myProject&&!projectData&&!userData?backDrop:homePage}
        </React.Fragment>
    )
}

export default withRouter(Home);
