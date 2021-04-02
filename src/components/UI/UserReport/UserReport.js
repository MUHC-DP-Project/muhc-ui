import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { userAxios } from '../../../axios-pbrn';
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
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(21deg, rgba(2,0,36,1) 0%, rgba(47,71,94,1) 42%, rgba(240,50,11,0.7590800147492626) 63%)',
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




function UserReport() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const deleteUser = (id) => {
        userAxios.delete('http://localhost:8081/users/' + id)
            .then(res => {
                console.log("Successfully deleted");
                //Add redirection
            })
            .catch(error => {
                console.log("Failed to delete user");
            })

    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseConfirm = () => {
        setOpen(false);
        deleteUser('60611ed20340ee1c3ee1d129')
    }

    const classes = useStyles();

    const [data, setData] = useState([]);

    useEffect(async () => {
        await userAxios
            .get('http://localhost:8081/users/60622987398c524d0545e465')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("Failed to fetch data: ", error.response);
            });
    },
        []);


    const displayUsers = () => {
        return (

            <div className={classes.rootContainer}>
                <Paper className={classes.root}>
                    <h1 className={classes.title}>{data.firstName + " " + data.lastName}</h1>
                    <Paper elevation={3} > <b>Email: </b> {data.email} </Paper>
                    <Paper elevation={3} ><b>Verification Notes: </b> {data.verificationNotes} </Paper>
                    <Paper elevation={3} > <b>Approval Status: </b>{data.isApproved != undefined && data.isApproved.toString()} </Paper>
                    <Paper elevation={3} > <b>Verification Status: </b> {data.isEmailVerified != undefined && data.isEmailVerified.toString()} </Paper>
                    <Paper elevation={3} > <b>Date of Creation: </b>{data.createdAt != undefined && format(new Date(data.createdAt), 'dd/MM/yyyy')} </Paper>
                    <Paper elevation={3} > <b>Credentials </b>{data.credentialsQualifications} </Paper>
                    <Paper elevation={3} > <b>Gender: </b>{data.gender} </Paper>
                    <Paper elevation={3} > <b>Level Of Research: </b>{data.levelOfResearch} </Paper>
                    <Paper elevation={3} > <b>Principal Clinic: </b>{data.principalClinic} </Paper>
                    <Paper elevation={3} > <b>Principal Occupation: </b>{data.professionalOccupation} </Paper>
                    <Paper elevation={3} > <b>Role: </b>{data.role} </Paper>
                    <Paper elevation={3} > <b>Work Status: </b>{data.workStatus} </Paper>
                    <Paper className={classes.bigField}><b>Research Interest: </b>

                        {data.researchInterests != undefined && data.researchInterests.map(item => (
                            <li key={data._id}>
                                <a >{item}</a>
                            </li>
                        ))}

                    </Paper>
                    <Paper className={classes.bigField}><b>Motivation For Joining: </b>

                        {data.motivationForJoining != undefined && data.motivationForJoining.map(item => (
                            <li key={data._id}>
                                <a >{item}</a>
                            </li>
                        ))}

                    </Paper>
                    <Paper className={classes.bigField}><b>Way They Found About us: </b>

                        {data.foundAboutUs !== undefined && data.foundAboutUs.map(item => (
                            <li key={data._id}>
                                <a >{item}</a>
                            </li>
                        ))}

                    </Paper>

                    <div className={classes.buttonContainer}>
                        <div>
                            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                                DELETE USER
                                </Button>
                        </div>
                        <div>
                            <Button variant="contained" color="secondary">
                                MODIFY USER INFO
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
                    <DialogTitle id="alert-dialog-title">{"Are You Sure You Want To Delete This User"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Deleting the user is not reversible.Make sure you actually entend to do this
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
            {displayUsers()}
        </>
    )



}

export default UserReport
