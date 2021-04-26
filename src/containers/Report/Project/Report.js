import React, {useState, useEffect} from 'react';
//@React-Router
import {Link} from 'react-router-dom';

//@Material-UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {format} from 'date-fns';
import Button from '@material-ui/core/Button';
import AlertDialog from '../../../components/UI/Dialogue/Dialogue';
import {makeStyles} from '@material-ui/core/styles';

//@Axios
import {userAxios, projectAxios} from '../../../axios-pbrn';

//@UI components
import Backdrop from '../../../components/UI/BackDrop/Backdrop';


const useStyles = makeStyles({
    paper: {
        width:'1000px'
    },
    container:{
        padding:'40px 50px',
        '& p':{
            wordWrap:'break-word'
        }
    }
});
function Report(props) {
    const classes = useStyles();
    const [projectData,
        setProjectData] = useState(undefined);
    const [isUserProject, setIsUserProject] = useState(false);
    const [principalInvesigators, setPrincipalInvesigators] = useState([]);
    const [collaborators, setCollaborators] = useState([]);
    const [coInvestigators, setCoInvestigators] = useState([]);
    useEffect(() => {
        if (!props.location.state) {
            props
                .history
                .replace('/page404')
        }
        const projectId = props.location.state.Id;
        projectAxios
            .get(`/projects/${projectId}`)
            .then(response => {
                setProjectData(response.data);
                if(response.data.coInvestigators.length>0){
                    userAxios
                    .post('/users/findidsbyemail',{
                        emails:response.data.coInvestigators
                    }).then(response=>{
                        setCoInvestigators(response.data)
                    }).catch(error=>console.log(error.response))
                }
                if(response.data.collaborators.length>0){
                    userAxios
                    .post('/users/findidsbyemail',{
                        emails:response.data.collaborators
                    }).then(response=>{
                        setCollaborators(response.data)
                    }).catch(error=>console.log(error.response))
                }
                if(response.data.principalInvestigators.length>0){
                    userAxios
                    .post('/users/findidsbyemail',{
                        emails:response.data.principalInvestigators
                    }).then(response=>{
                        setPrincipalInvesigators(response.data)
                    }).catch(error=>console.log(error.response))
                }
            })
            .catch(error => {
                props
                    .history
                    .replace('/page404')
            });
        const userId = localStorage.getItem("userId");
        userAxios
            .get(`/users/${userId}`)
            .then(response => {
                const userProjects=response.data.userListOfProjects;
                setIsUserProject(userProjects.includes(projectId));
            });
    }, []);

    const backDrop = <Backdrop className="backDrop" condition={!projectData}/>
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
    function printListLink(arrayName,arrayId) {
        if ((!arrayName || arrayName.length === 0) && (!arrayId || arrayId.length === 0) &&  arrayId.length === arrayName.length) 
            return " N/A";
        return <ul style={{
            margin: 0
        }}>
            {arrayName.map((element, index) => {
                return <li>
                    <Link
                        style={{
                            color:"blue",
                            textDecoration:"none"
                        }}
                        to={{
                        pathname: '/userreport',
                        state: {
                            Id: arrayId[index]
                        }
                    }}>{element}</Link>
                </li>
            })}
        </ul>
    }
    function printMultiTextRadio(array, li1, li2, li3) {
        if (!array || array.length === 0) 
            return " N/A";
        return <ul style={{
            margin: 0
        }}>
            {array.map((element, index) => {
                return <li>
                    <b>{li1 + element.select}</b>
                    <ul>
                        <li>
                            <b>{li2}</b>{element.text}
                        </li>
                        {element.radio &&< li > <b>{li3}</b>
                        {
                            element.radio
                        } </li>}
                    </ul>
                </li>
            })}
        </ul>
    }

    function printAnticipatedMilestone(element, title) {
        if (!element) 
            return " N/A";
        return <div>
            <b>{title}</b>
            <ul>
                <li>
                    <b>Estimated Date:
                    </b>{format(new Date(element.estimatedDate), 'dd/MM/yyyy')}</li>
                <li>
                    <b>Project Stage:
                    </b>{element.projectStage}</li>
            </ul>
        </div >

    }
    function deleteReport(){
        const projectId = props.location.state.Id;
        projectAxios
        .delete('/projects/'+projectId)
        .then(response=>{
            props.history.replace('/');
        })
        .catch(error=>console.log("could not delete the project"))
    }
    function editReport(){
        const projectId = props.location.state.Id;
        props.history.replace({
            pathname:'/project',
            state:{
                Id:projectId
            }
        })
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center">{!projectData
                ? backDrop
                : <Paper elevation={10} className={classes.paper}>
                    <div className={classes.container}>
                        <Typography variant="h3">{!projectData.officialProjectTitle
                                ? "No Title"
                                : projectData
                                    .officialProjectTitle
                                    .toUpperCase()}</Typography>
                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 20,
                            marginBottom: 10,
                            textDecoration: "underline"
                        }}>
                            <b>Project</b>
                        </Typography>
                        <Typography >
                            <b>Brief project title:</b>{!projectData.briefProjectTitle
                                ? " N/A"
                                : " " + projectData.briefProjectTitle}</Typography>
                        <Typography >
                            <b>Project start:</b>{!projectData.startDateProject
                                ? " N/A"
                                : " " + format(new Date(projectData.startDateProject), 'dd/MM/yyyy')}</Typography>
                        <Typography >
                            <b>Project end:</b>{!projectData.endDateProject
                                ? " N/A"
                                : " " + format(new Date(projectData.endDateProject), 'dd/MM/yyyy')}</Typography>
                        <Typography >
                            <b>Project description:</b>{!projectData.projectDescription
                                ? " N/A"
                                : " " + projectData.projectDescription}</Typography>
                        <Typography >
                            <b>Project keywords:</b>{printListText(projectData.keywords)}</Typography>
                        <Typography >
                            <b>Has this project been funded already?:</b>{!projectData.projectFund
                                ? " N/A"
                                : " " + projectData.projectFund}</Typography>
                        <Typography >
                            <b>Has this project been sought already?:</b>{!projectData.projectSought
                                ? " N/A"
                                : " " + projectData.projectSought}</Typography>
                        <Typography >
                            <b>Agency name:</b>{!projectData.agencyName || projectData.agencyName === "Empty"
                                ? " N/A"
                                : " " + projectData.agencyName}</Typography>
                        <Typography >
                            <b>Has this project undergone scientific peer-review?:</b>{!projectData.scientificPeerReviewSelect
                                ? " N/A"
                                : " " + projectData.scientificPeerReviewSelect}</Typography>
                        {projectData.scientificPeerReviewSelect &&< Typography > <b>{projectData.scientificPeerReviewSelect === "Yes"
                                ? "Name of the reviewer: "
                                : "Would you like support from the PBRN? "}</b>
                        {
                            !projectData.scientificPeerReviewText
                                ? " N/A"
                                : " " + projectData.scientificPeerReviewText
                        } </Typography>}
                        <Typography >
                            <b>Has this study received IRB/REB approval?:</b>{!projectData.studyIRBREBSelect
                                ? " N/A"
                                : " " + projectData.studyIRBREBSelect}</Typography>
                       {projectData.studyIRBREBSelect&&projectData.studyIRBREBSelect!=="Exempt" &&<Typography >
                             <b>{projectData.studyIRBREBText==="Yes"?"Name of the approving committee :":"What support, if any would you like from PBRN :"}</b>{!projectData.studyIRBREBSelect
                                ? " N/A"
                                : " " + projectData.studyIRBREBText}</Typography>}
                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 10,
                            marginBottom: 10,
                            textDecoration: "underline"
                        }}>
                            <b>Participants</b>
                        </Typography>
                        <Typography >
                            <b>Study Size:</b>{!projectData.studySize
                                ? " N/A"
                                : " " + projectData.studySize}</Typography>
                        <Typography >

                            <b>Principal Investigator/s:</b>{printListLink(projectData.principalInvestigators,principalInvesigators)}</Typography>
                        <Typography >
                            <b>Co-Investigator/s:</b>{printListLink(projectData.coInvestigators,coInvestigators)}</Typography> 
                        <Typography >
                            <b>Collaborators:</b>{printListLink(projectData.collaborators,collaborators)}</Typography>

                        <Typography >
                            <b>Study participants:</b>{printListText(projectData.studyParticipants)}</Typography>
                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 10,
                            marginBottom: 10,
                            textDecoration: "underline"
                        }}>
                            <b>Research and Methodology</b>
                        </Typography>
                        <Typography >
                            <b>Intended McGill location/s of the study:</b>{printMultiTextRadio(projectData.intendedMcgillLocation, "Study Site Coordinator Of ", "Name: ", "Status of convenace at this institution: ")}</Typography>
                        <Typography >
                            <b>Intended Non-McGill location/s of the study:</b>{printMultiTextRadio(projectData.intendedNonMcgillLocation, "Study Site Coordinator Of ", "Name: ", "Status of convenace at this institution: ")}</Typography>
                        <Typography >
                            <b>Research Methodology:</b>{printMultiTextRadio(projectData.researchAndMethodology, "", "")}</Typography>
                        <Typography
                            variant="h5"
                            style={{
                            marginTop: 10,
                            marginBottom: 10,
                            textDecoration: "underline"
                        }}>
                            <b>Anticipated date for completion of each of the following milestones</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.projectConception, "Project Conception")}</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.projectDesigned, "Project Designed")}</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.fundingSoughtIgnoredConsidered, "Funding sought or ignored/considered")}</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.ethicsApproval, "Ethics Approval")}</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.recruitment, "Recruitment")}</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.dataCollection, "Data Collection")}</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.dataAnalysis, "Data Analysis")}</b>
                        </Typography>
                        <Typography>
                            <b>{printAnticipatedMilestone(projectData.knowledgeTranslationDissemination, "Knowledge translation/dissemination")}</b>
                        </Typography>

                        {isUserProject&&< Grid
                        container
                        direction = "row"
                        justify = "center"
                        alignItems = "center"
                        style = {{
                            marginTop: 10
                        }}
                        spacing={4}
                        >
                         <Grid item>
                            <AlertDialog text="DELETE" message="This Action is ireversible" style={{width:200}}  action={deleteReport}/>
                         </Grid>
                        <Grid item>
                        <Button variant="contained" onClick={()=>editReport()} color="primary" style={{width:200}}>Edit</Button>
                        </Grid>
                          </Grid>}

                    </div>
                </Paper>
}
        </Grid>
    )
}

export default Report;
