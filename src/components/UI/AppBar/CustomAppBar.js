
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
export class CustomAppBar extends Component {

    render() {
        
        return (
            <React.Fragment>
            <AppBar className="table-app-bar" position="static">
                <Toolbar>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="h6">
                                test
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link
                                to="/createProjects"
                                style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={< AiIcons.AiOutlinePlusCircle />}>
                                    <b>New Project</b>
                                </Button>
                            </Link>

                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </React.Fragment>
        )
    }
}


export default CustomAppBar;