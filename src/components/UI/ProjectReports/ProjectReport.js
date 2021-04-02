import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { userAxios, projectAxios } from '../../../axios-pbrn';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyItem: 'center',
        alignItem: 'center',
        padding: '50px 10px',
        radiusBorder: '10px',
        // background: 'rgb(2,0,36)',
        // background: 'linear-gradient(21deg, rgba(2,0,36,1) 0%, rgba(47,71,94,1) 42%, rgba(240,50,11,0.7590800147492626) 63%)',
        textAlign: 'center',

        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(70),
            backgroundColor: '#f6f6f6',
            padding: '5px'
        },
    },

    rootContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        fontsize: '15px',

    },
    title: {
        backgroundColor: 'unset'
    },
    bigField: {
        // height: '120px'
    },
    buttonContainer: {
        display: 'flex',
        background: 'unset',
        justifyContent: 'space-between'
    }
}));




function ProjectReport() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const deleteProject = (id) => {
        projectAxios.delete('http://localhost:8081/projects/' + id)
            .then(res => {
                console.log("Successfully deleted");
                //Add redirection
            })
            .catch(error => {
                console.log("Failed to delete project");
            })

    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseConfirm = () => {
        setOpen(false);
        deleteProject('60611ed20340ee1c3ee1d129')
    }

    const classes = useStyles();

    const [data, setData] = useState([]);

    useEffect(async () => {
        await projectAxios
            .get('http://localhost:8080/projects/6063224f4161bcbed88c77b4')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("Failed to fetch data: ", error.response);
            });
    },
        []);


    const displayProject = () => {
        return (

            <div className={classes.rootContainer}>
                <Paper className={classes.root}>
                    <h1 className={classes.title}>{data.officialProjectTitle + " " + data.briefProjectTitle}</h1>
                    <Paper elevation={3} > <b>Study Size: </b> {data.studySize} </Paper>
                    <Paper elevation={3} > <b>Description: </b> {data.projectDescription} </Paper>
                    <Paper elevation={3} > <b>Project Fund: </b> {data.projectFund} </Paper>
                    <Paper elevation={3} > <b>Project Sought: </b> {data.projectSought} </Paper>
                    <Paper elevation={3} > <b>Pcientific PeerReview: </b> {data.scientificPeerReviewSelect} </Paper>
                    <Paper elevation={3} > <b>Study IRBREB Select: </b> {data.studyIRBREBSelect} </Paper>
                    <Paper elevation={3} > <b>Start Date Of The Project: </b>{data.startDateProject != undefined && format(new Date(data.startDateProject), 'dd/MM/yyyy')}  </Paper>
                    <Paper elevation={3} > <b>Start Date Of The Project: </b> {data.endDateProject != undefined && format(new Date(data.endDateProject), 'dd/MM/yyyy')} </Paper>
                    <Paper elevation={3} > <b>Scientific Peer-review? </b> {data.scientificPeerReviewSelect} </Paper>
                    <Paper className={classes.bigField}><b>Intended McGill Location: </b>

                        {data.intendedMcgillLocation != undefined && data.intendedMcgillLocation.map(item => (
                            <li key={data._id}>
                                <a >{item.select}</a>
                            </li>
                        ))}

                    </Paper>
                    <Paper className={classes.bigField}><b>Intended Non-McGill Location: </b>

                        {data.intendedNonMcgillLocation != undefined && data.intendedNonMcgillLocation.map(item => (
                            <li key={data._id}>
                                <a >{item.select}</a>
                            </li>
                        ))}

                    </Paper>

                    <Paper className={classes.bigField}><b>Reseach Methodology </b>

                        {data.researchAndMethodology != undefined && data.researchAndMethodology.map(item => (
                            <li key={data._id}>
                                <a >{item.select}</a>
                            </li>
                        ))}

                    </Paper>

                    <Paper className={classes.bigField}><b>Study Participants: </b>

                        {data.studyParticipants != undefined && data.studyParticipants.map(item => (
                            <li key={data._id}>
                                <a >{item}</a>
                            </li>
                        ))}

                    </Paper>


                    <Paper className={classes.bigField}><b>Principal Investigators: </b>

                        {data.principalInvestigators != undefined && data.principalInvestigators.map(item => (
                            <li key={data._id}>
                                <a >{item}</a>
                            </li>
                        ))}

                    </Paper>


                    <Paper className={classes.bigField}><b>Co-Investigators: </b>

                        {data.coInvestigators != undefined && data.coInvestigators.map(item => (
                            <li key={data._id}>
                                <a >{item}</a>
                            </li>
                        ))}

                    </Paper>

                    <Paper className={classes.bigField}><b>Collaborators: </b>

                        {data.collaborators != undefined && data.collaborators.map(item => (
                            <li key={data._id}>
                                <a >{item}</a>
                            </li>
                        ))}

                    </Paper>


                    <div className={classes.buttonContainer}>
                        <div>
                            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                                DELETE PROJECT
                                </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="secondary">
                                MODIFY PROJECT INFO
                                 </Button>
                        </div>
                    </div>


                </Paper>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are You Sure You Want To Delete This PROJECT"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Deleting thE PROJECT is not reversible.Make sure you actually entend to do this
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Disagree
          </Button>
                        <Button onClick={handleCloseConfirm} color="primary" autoFocus>
                            Agree
          </Button>
                    </DialogActions>
                </Dialog>
            </div>

        )
    }

    return (
        <>
            {displayProject()}
        </>
    )



}

export default ProjectReport
