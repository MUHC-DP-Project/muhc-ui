import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { userAxios } from '../../../axios-pbrn';

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

                </Paper>
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
