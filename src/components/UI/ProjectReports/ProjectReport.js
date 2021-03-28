import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { projectAxios } from '../../../axios-pbrn';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

        '& > *': {

        },
    },
}));

function ProjectReport() {

    const classes = useStyles();

    const [data, setData] = useState([]);
    useEffect(async () => {
        await projectAxios
            .get('http://localhost:8080/projects/6049e2e56a00e4ba0362560a')
            .then(response => {

                setData(response.data);
                console.log(response.data)

            })
            .catch(error => {
                console.log("Failed to fetch data: ", error.response);
            });
    },
        []);

    const displayProject = () => {
        return (
            <Paper className={classes.root}>
                <ul>

                    <li><b>{data.officialProjectTitle} </b></li>
                    <li><b>Co-Investigator/s:</b>
                        <ul>
                            {data.CoIListOfUsers != undefined && data.CoIListOfUsers.map(item => (
                                <li key={data._id}>
                                    <span >{item}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li> <b>Collaborators:</b>
                        <ul>
                            {data.ColListOfUsers != undefined && data.ColListOfUsers.map(item => (
                                <li key={data._id}>
                                    <span >{item}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li><b>Principal Investigator/s:</b>
                        <ul>
                            {data.PIListOfUsers != undefined && data.PIListOfUsers.map(item => (
                                <li key={data._id}>
                                    <span >{item}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li><b>Participants:</b>
                        <ul>
                            {data.studyParticipants != undefined && data.studyParticipants.map(item => (
                                <li key={data._id}>
                                    <span >{item}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li><b>Size:</b> {data.studySize} </li>
                    <li><b>Project Description:</b> {data.projectDescription} </li>
                    <li><b>Created:</b> {data.createdAt} </li>
                    <li><b>End Of Project Date:</b> {data.endDateProject} </li>


                </ul>
            </Paper>
        )
    }

    return (
        <>
            {displayProject()}
        </>
    )
}

export default ProjectReport