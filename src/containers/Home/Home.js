import React from 'react';
import Grid from '@material-ui/core/Grid';
import BasicTable from '../../components/UI/DataGrid/BasicTable';
import Button from '@material-ui/core/Button';
import './Home.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { withRouter } from 'react-router'
function Home(props) {

    const createProjectButton = <Button    
    variant="contained"
    size="large"
    className="button"
    startIcon={<AddCircleOutlineIcon />}
    onClick={()=>props.history.push("/createProject")}
    >
        New Project
    </Button>;
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
                <Grid item>
                <BasicTable title="My Projects" button={createProjectButton}/>
                </Grid>
                <Grid item>
                <BasicTable title="All Projects" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withRouter(Home);
