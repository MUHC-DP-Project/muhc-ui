import React, {useState, useEffect} from 'react'

//@Material-UI
import {userAxios} from '../../axios-pbrn';
import CircularProgress from '@material-ui/core/CircularProgress';
import BasicTable from '../../components/UI/DataGrid/BasicTable';
import Grid from '@material-ui/core/Grid';

//@UI components
import Backdrop from '../../components/UI/BackDrop/Backdrop';

//@Redux
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

//@ColumnsConfig
import {APPROVED_USER_COLUMN} from './ColumnsConfig/approvedUsers';
import {NEW_USER_COLUMN} from './ColumnsConfig/newUsers';

function Manage(props) {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        props.fetchData();
    }, [])
    const backDrop = <Backdrop className="backDrop" open={!props.newUserData&&!props.approvedUserData}>
        <CircularProgress color="inherit"/>
    </Backdrop>
    const managePage = <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={10}
        style={{
        marginTop: 20
    }}>

        <Grid item>
        <BasicTable
            title="New users"
            COLUMNS={NEW_USER_COLUMN}
            MOCK_DATA={props.newUserData}/>
        </Grid>
        <Grid item>
        <BasicTable
            title="Approved users"
            COLUMNS={APPROVED_USER_COLUMN}
            MOCK_DATA={props.approvedUserData}/>
        </Grid>
    </Grid>

    return (
        <div>
            {!props.newUserData&&!props.approvedUserData
                ? backDrop
                : managePage}
        </div>
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
        fetchData: () => dispatch(actions.manageFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage)
