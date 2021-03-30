import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
//pages
import Home from './containers/Home/Home';
import CreateProfile from './containers/CreateProfile/CreateProfile';
import CreateProject from './containers/CreateProject/CreateProject';
import SignUp from './containers/Auth/SignUp/SignUp';
import SignIn from './containers/Auth/SignIn/SignIn';
import Logout from './containers/Auth/Logout/Logout';
import Page404 from './components/Page404/Page404';
import PostSignIn from './components/PostSignIn/PostSignIn';
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
                <Route component={SignIn}/>
            </Switch>
        )
        if (this.props.isAuthenticated) {

            if (!["undefined","false"].includes(localStorage.getItem('isApproved')) && !["undefined","false"].includes(localStorage.getItem('isEmailVerified'))) {
                routes = (
                    <Layout>
                        <Switch>
                            <Route path="/createprofile" component={CreateProfile}/>
                            <Route path="/createproject" component={CreateProject}/>
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
        return (
            <div>
                {routes}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
