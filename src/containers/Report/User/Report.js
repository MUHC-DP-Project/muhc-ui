import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {userAxios} from '../../../axios-pbrn';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {format} from 'date-fns';
import './Report.css'
function Report(props) {
    const [userData,
        setUserData] = useState(undefined)
    useEffect(() => {
        if (!props.location.state) {
            props
                .history
                .replace('/page404')
        }
        const userId = props.location.state.Id;
        console.log(userId);
        userAxios
            .get('/users/' + userId)
            .then(response => {
                console.log("userdata ", response.data);
                setUserData(response.data)
            })
            .catch(error => {
                props
                    .history
                    .replace('/page404')
            });
    }, [])
    const backDrop = <Backdrop className="backDrop" open={!userData}>
        <CircularProgress color="inherit"/>
    </Backdrop>
    function printListText(array) {
        if (!array || array.length === 0) 
        return " N/A";
        return <ul style={{
            margin: 0
        }}>
            {array.map(element => {
                return <li>{element}</li>
            })}
        </ul>
    }
    function printListLink(array) {
        if (!array || array.length === 0) 
            return " N/A";
        return <ul style={{
            margin: 0
        }}>
            {array.map((element, index) => {
                return <li>
                    <Link
                        to={{
                        pathname: '/projectreport',
                        state: {
                            Id: element
                        }
                    }}>Project {index + 1}</Link>
                </li>
            })}
        </ul>
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center">{!userData
                ? backDrop
                : <Paper elevation={10} className="userReportPaper">
                    <div className="userReportContainer">
                        <Typography variant="h3">{`${userData
                                .firstName
                                .toUpperCase()}\u00A0\u00A0${userData
                                .lastName
                                .toUpperCase()}`}</Typography>
                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 20,
                            textDecoration: "underline"
                        }}>
                            <b>About me</b>
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            style={{
                            marginTop: 10
                        }}>
                            <Grid item>
                                <Typography><b>Email:</b>{` ${userData.email}`}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography><b>Prefered Communication Method:</b>{!userData.communicationTextfield?" N/A":` ${userData.communicationTextfield}`}</Typography>
                            </Grid>
                        </Grid>

                        <Typography ><b>Registration Date:</b>{" " + format(new Date(userData.createdAt), 'dd/MM/yyyy')}</Typography>
                        <Typography ><b>Gender:</b>{!userData.gender?" N/A":" " + userData.gender}</Typography>
                        <Typography ><b>Credentials and Qualifications:</b>{!userData.credentialsQualifications?" N/A":" " + userData.credentialsQualifications}</Typography>
                        <Typography ><b>Motivation for joining this network:</b>{printListText(userData.motivationForJoining)}</Typography>
                        <Typography ><b>How did you find about the PBRN database:</b>{printListText(userData.foundAboutUs)}</Typography>
                       
                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 10,
                            marginBottom: 10,
                            textDecoration: "underline"
                        }}>
                            <b>Profession</b>
                        </Typography>

                        <Typography ><b>Principal University Affiliation:</b>{!userData.principalUniversityAffiliation?" N/A":" " + userData.principalUniversityAffiliation}</Typography>
                        <Typography ><b>Principal Clinic:</b>{!userData.principalClinic?" N/A":" " + userData.principalClinic}</Typography>
                        <Typography ><b>Secondary Clinic:</b>{!userData.secondaryClinic?" N/A":" " + userData.secondaryClinic}</Typography>
                        <Typography ><b>Professional Category:</b>{!userData.professionalOccupation?" N/A":" " + userData.professionalOccupation}</Typography>
                        <Typography ><b>Work Status:</b>{!userData.workStatus?" N/A":" " + userData.workStatus}</Typography>
                        <Typography ><b>Current Clinic Role:</b>{!userData.role?" N/A":" " + userData.role}</Typography>
                       
                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 10,
                            marginBottom: 10,
                            textDecoration: "underline"
                        }}>
                            <b>Research and Interest</b>
                        </Typography>

                        <Typography ><b>Self-defined level of research expertise:</b>{!userData.levelOfResearch?" N/A":" " + userData.levelOfResearch}</Typography>
                        <Typography ><b>Research Interests:</b>{printListText(userData.researchInterests)}</Typography>

                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 10,
                            marginBottom: 10,
                            textDecoration: "underline"
                        }}>
                            <b>Projects</b>
                        </Typography>

                        <Typography ><b>My Projects:</b>{printListLink(userData.userListOfProjects)}</Typography>
                        <Typography ><b>Collaborated Projects:</b>{printListLink(userData.ColListOfProjects)}</Typography>
                        <Typography ><b>Co-Investigated Projects:</b>{printListLink(userData.CoIListOfProjects)}</Typography>
                        <Typography ><b>Investigated Projects:</b>{printListLink(userData.PIListOfProjects)}</Typography>
                    </div>
                </Paper>}</Grid>
    )
}

export default Report
