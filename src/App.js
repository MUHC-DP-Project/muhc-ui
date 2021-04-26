import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';


//@Pages
import Home from './containers/Home/Home';
import Manage from './containers/Manage/Manage';
import Profile from './containers/Profile/Profile';
import Project from './containers/Project/Project';
import SignUp from './containers/Authentication/SignUp/SignUp';
import SignIn from './containers/Authentication/SignIn/SignIn';
import ForgotPassword from './containers/Authentication/ForgotPassword/ForgotPassword';
import ChangePassword from './containers/Authentication/ChangePassword/ChangePassword';
import UserReport from './containers/Report/User/Report';
import ProjectReport from './containers/Report/Project/Report';
import Logout from './containers/Authentication/Logout/Logout';
import Page404 from './components/Page404/Page404';
import PostSignIn from './components/PostSignIn/PostSignIn';

//@UI Components
import Backdrop from './components/UI/BackDrop/Backdrop';
import './App.css'
export class App extends Component {
    componentDidMount() {
        this
            .props
            .onTryAutoSignup();
    }
    render() {
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
                            <Route path="/profile" component={Profile}/>
                            <Route path="/project" component={Project}/>
                            <Route path="/changepassword" component={ChangePassword}/>
                            <Route path="/manage" component={Manage}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/userreport" component={UserReport}/>
                            <Route path="/projectreport" component={ProjectReport}/>
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
        const backDrop = <Backdrop condtion={this.props.isLoading}/>
           
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
