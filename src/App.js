import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

//pages
import Home from './components/Home/Home';
import SignUp from './containers/SignUp/SignUP';
export class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>       
            <Route path="/" exact component={Home}/> 
            <Route path="/signup" exact component={SignUp}/>      
        </Layout>
        </Switch>
      
    )
  }
}

export default App
