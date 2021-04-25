import React, { Component } from 'react';

//@React-Router
import { Redirect } from 'react-router-dom';

//@Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount () {
        this.props.onLogout();
    }

    render () {
        return <Redirect to="/signin"/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);