import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, withRouter} from 'react-router-dom';
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
            routes = (
                <Layout>
                    <Switch>
                        <Route path="/createProfile" component={CreateProfile}/>
                        <Route path="/createProject" component={CreateProject}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/" exact component={Home}/>
                        <Route component={Page404}/>
                    </Switch>
                </Layout>
            )
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
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
