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
import {USER_COLUMN} from './ColumnsConfig/user';

import './Home.css';
function Home(props) {

    const [myProject,
        setMyProject] = useState(undefined);
    const [userData, setUserData] = useState(undefined);
    const [projectData, setProjectData] = useState(undefined);
    const [displayAllProject, setDisplayAllProject] = useState(true);

    useEffect(() => {
        //will need another axios call for myProject
        projectAxios
            .get('/projects')
            .then(response => {
                console.log('projectdata ',response.data);
                const listOfPR=response.data;
                setProjectData(response.data);
                const userId=localStorage.getItem('userId');
                console.log(userId);
                userAxios
                .get('/users/'+userId)
                .then(response=>{
                    const user=response.data;
                    let finalList=[];
                    let allInvolvedProjectId=[];
                    allInvolvedProjectId.push(...user.CoIListOfProjects)
                    allInvolvedProjectId.push(...user.ColListOfProjects);
                    allInvolvedProjectId.push(...user.PIListOfProjects);
                    allInvolvedProjectId.push(...user.userListOfProjects);
                    // allInvolvedProjectId=allInvolvedProjectId.flat()
                    listOfPR.forEach(element => {
                        if(allInvolvedProjectId.includes(element._id)){
                            finalList.push(element); 
                        }
                    });
                    setMyProject(finalList);
                    console.log("a user ",user);
        
                })
                .catch(error => {
                    setMyProject([]);
                });
            })
            .catch(error => {
                setProjectData([]);
                setMyProject([]);
            });
        userAxios
        .get('/users')
        .then(response=>{
            console.log("userdata ",response.data);
            setUserData(response.data);
        })
        .catch(error => {
            setUserData([]);
        });

    }, [])

    const backDrop = <Backdrop className="backDrop" open={!myProject || !projectData || !userData}>
        <CircularProgress color="inherit"/>
    </Backdrop>
    const createProjectButton = <Button
        variant="contained"
        size="large"
        className="homeButton"
        startIcon={< AddCircleOutlineIcon />}
        onClick={() => props.history.push("/project")}>
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
    <BasicTable title={displayAllProject?"All Projects":"Connect with other researchers"}
    button={groupedButton}
    COLUMNS={displayAllProject?PROJECT_COLUMN:USER_COLUMN}
    MOCK_DATA={displayAllProject?projectData:userData}/>
    </Grid>
</Grid>
    return (
        <React.Fragment>
        {!myProject || !projectData || !userData?backDrop:homePage}
        </React.Fragment>
    )
}

export default withRouter(Home);
