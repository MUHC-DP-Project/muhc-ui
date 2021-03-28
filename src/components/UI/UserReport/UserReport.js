import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { userAxios } from '../../../axios-pbrn';

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



function UserReport() {

    const classes = useStyles();

    const [data, setData] = useState([]);
    useEffect(async () => {
        await userAxios
            .get('http://localhost:8081/users/6044e2d7c4c38bf65e1bc6b3')
            .then(response => {

                setData(response.data);
                console.log(data)

            })
            .catch(error => {
                console.log("Failed to fetch data: ", error.response);
            });
    },
        []);



    const displayUsers = () => {




        return (
            <Paper className={classes.root}>
                <div>
                    <h1>
                        Repost about {data.salutation + " " + data.firstName + " " + data.lastName}
                    </h1>

                </div>

                <div>
                    <ul>
                        <li><b>Role: </b>{data.role}</li>
                        <li><b>Work Status: </b>{data.workStatus}</li>
                        <li><b>Level Of Research: </b>{data.levelOfResearch}</li>

                        <li><b>Principal Clinic: </b>{data.principalClinic}</li>

                        <li><b>Principal University Affiliation: </b>{data.principalUniversityAffiliation}</li>

                        <li><b>Research Interest: </b>

                            <ul>
                                {data.researchInterests != undefined && data.researchInterests.map(item => (
                                    <li key={data._id}>
                                        <a >{item}</a>
                                    </li>
                                ))}
                            </ul>

                        </li>

                        <li><b>Study participants </b></li>

                        {/* {listItems} */}
                    </ul>

                </div>




            </Paper>

        )
    }

    return (
        <>
            {displayUsers()}
        </>
    )



}

export default UserReport
