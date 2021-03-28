import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

//pages
import Home from './components/Home/Home';
import SignUp from './containers/SignUp/SignUP';
import CreateProject from './containers/CreateProject/CreateProject';
import ProjectReport from './components/UI/ProjectReports/ProjectReport'
import UserReport from './components/UI/UserReport/UserReport'

export class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/createProject" exact component={CreateProject} />
          {/* for testing */}
          <Route path="/projectReport" exact component={ProjectReport} />
          <Route path="/userReport" exact component={UserReport} />
        </Layout>

      </Switch>

    )
  }
}

export default App
