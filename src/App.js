import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
//pages
import Home from './containers/Home/Home';
import Manage from './containers/Manage/Manage';
import CreateProfile from './containers/CreateProfile/CreateProfile';
import CreateProject from './containers/CreateProject/CreateProject';
import SignUp from './containers/Auth/SignUp/SignUp';
import SignIn from './containers/Auth/SignIn/SignIn';
import ForgotPassword from './containers/Auth/ForgotPassword/ForgotPassword';
import ChangePassword from './containers/Auth/ChangePassword/ChangePassword';
import Logout from './containers/Auth/Logout/Logout';
import Page404 from './components/Page404/Page404';
import PostSignIn from './components/PostSignIn/PostSignIn';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css'
export class App extends Component {
    componentDidMount() {
        this
            .props
            .onTryAutoSignup();
    }
    render() {
        console.log("is auth", this.props.isAuthenticated);
        let routes = (
            <Switch>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/forgotpassword" component={ForgotPassword}/>
                <Route component={SignIn}/>
            </Switch>
        )
        if (this.props.isAuthenticated) {

            if (!["undefined", "false"].includes(localStorage.getItem('isApproved')) && !["undefined", "false"].includes(localStorage.getItem('isEmailVerified'))) {
                routes = (
                    <Layout>
                        <Switch>
                            <Route path="/createprofile" component={CreateProfile}/>
                            <Route path="/createproject" component={CreateProject}/>
                            <Route path="/changepassword" component={ChangePassword}/>
                            <Route path="/manage" component={Manage}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/" exact component={Home}/>
                            <Route component={Page404}/>
                        </Switch>
                    </Layout>
                )
            } else {
                routes = (
                    <Layout >
                        <Switch>
                            <Route path="/logout" component={Logout}/>
                            <Route component={PostSignIn}/>
                        </Switch>
                    </Layout>
                )
            }
        }
        const backDrop = <Backdrop className="backDrop" open={this.props.isLoading}>
            <CircularProgress color="inherit"/>
        </Backdrop>
        return (
            <div className="main">
                {this.props.isLoading?backDrop:routes}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        isLoading: state.auth.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
