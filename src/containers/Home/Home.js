import React from 'react';
import Grid from '@material-ui/core/Grid';
import BasicTable from '../../components/UI/DataGrid/BasicTable';
function Home() {

   
    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center">
            <h1>home page</h1>
            <BasicTable></BasicTable>
            </Grid>
        </React.Fragment>
    )
}

export default Home;
