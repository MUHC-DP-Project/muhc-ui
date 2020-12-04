import '../css/App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from '../component/Home'
import CreateProject from '../component/CreateProject'
import Login from '../component/Login'
import Header from './Header'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/home" component={Home} />
      <Route path="/project/create" component={CreateProject} />
      <Route path="/login" component={Login}/>
    </Router>

  );
}

export default App;
