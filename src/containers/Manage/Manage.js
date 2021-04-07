import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import {userAxios} from '../../axios-pbrn';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import BasicTable from '../../components/UI/DataGrid/BasicTable';
import {APPROVED_USER_COLUMN,NEW_USER_COLUMN} from './ColumnsConfig/user';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
function Manage(props) {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //will need another axios call for myProject
        userAxios
            .get('/users')
            .then(response => {
                console.log("userdata ", response.data);
                const userData=response.data;
                const [approvedUserList,  newUserList] = userData.reduce(([ approvedUser,newUser], element) => (element.isApproved ? [[...approvedUser, element], newUser] : [approvedUser, [...newUser, element]]), [[], []]);
                props.loadData(newUserList,approvedUserList);
                setLoading(false);
            })
            .catch(error => {
                console.log("Failed to fetch data: ", error.response);
            });
    }, [])
    // const refreshButton = <Button
    //     variant="contained"
    //     size="large"
    //     className="button"
    //     onClick={() => setRefresh(refresh + 1)}>
    //     Refresh
    // </Button>;
    const backDrop = <Backdrop className="backDrop" open={loading}>
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
            // button={refreshButton}
            COLUMNS={NEW_USER_COLUMN}
            MOCK_DATA={props.newUserData}/>
        </Grid>
        <Grid item>
        <BasicTable
            title="Approved users"
            // button={refreshButton}
            COLUMNS={APPROVED_USER_COLUMN}
            MOCK_DATA={props.approvedUserData}/>
        </Grid>
    </Grid>

    return (
        <div>
            {loading
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
        loadData: (newUserData,approvedUserData) => dispatch(actions.loadData(newUserData,approvedUserData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage)
