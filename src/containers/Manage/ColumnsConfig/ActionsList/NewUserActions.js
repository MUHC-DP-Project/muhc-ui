import React from 'react'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';

function ButtonList(props) {
    const userId=props.userId;

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}>
            <Grid item>
                <IconButton aria-label="Approve" size="small" onClick={()=>{
                    props.approveUser(userId,props.newUserData,props.approvedUserData);
                    }}>
                    <CheckIcon/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="Refuse" size="small" onClick={()=>{
                    props.unapproveUser(userId,props.newUserData);
                    }}>
                    <ClearIcon/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        newUserData: state.manage.newUserData,
        approvedUserData: state.manage.approvedUserData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        approveUser: (userId,newUserData,approvedUserData) => dispatch(actions.approveUser(userId,newUserData,approvedUserData)),
        unapproveUser: (userId,newUserData)=>dispatch(actions.unapproveUser(userId,newUserData))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)
