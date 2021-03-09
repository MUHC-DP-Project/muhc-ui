import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

//pages
import Home from './components/Home/Home';
import SignUp from './containers/SignUp/SignUP';
//import CreateProject from './containers/Create Project/CreateProject';

export class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>       
            <Route path="/" exact component={Home}/> 
            <Route path="/signup" exact component={SignUp}/> 
            {/* <Route path="/createProject" exact component={CreateProject}/>               */}
        </Layout>
       
        </Switch>
      
    )
  }
}

export default App
