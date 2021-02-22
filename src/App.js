import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
export class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>       
            <Route path="/" exact component={Home}/> 
                    
        </Layout>
        </Switch>
      
    )
  }
}

export default App
