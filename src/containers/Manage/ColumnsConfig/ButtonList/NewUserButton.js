import React from 'react'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import {userAxios} from '../../../../axios-pbrn';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
function approveUser(userId){
    userAxios
    .get('/auth/localApproveUser/'+userId)
    .then(res=>{
    })
    .catch(error=>{
    })
}
function unapproveUser(userId){
    userAxios
    .delete('/users/'+userId)
    .then(res=>{
    })
    .catch(error=>{
    })
}
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
                    approveUser(userId);
                    const tmpNewUserData=[...props.newUserData];
                    const tmpApprovedUserData=[...props.approvedUserData];
                    const userObject=tmpNewUserData.find(element=>element._id===userId)
                    props.loadData(tmpNewUserData.filter(element=>element._id!==userId),tmpApprovedUserData.concat(userObject))
                    }}>
                    <CheckIcon/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="Refuse" size="small" onClick={()=>{
                    unapproveUser(userId);
                    const tmpNewUserData=[...props.newUserData];
                    props.loadData(tmpNewUserData.filter(element=>element._id!==userId),props.approvedUserData);
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
        loadData: (newUserData,approvedUserData) => dispatch(actions.loadData(newUserData,approvedUserData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)
