import '../css/App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from '../component/Home'
import CreateProject from '../component/CreateProject'

function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Route path="/Home" component={Home} />
      <Route path="/CreateProject" component={CreateProject} />
    </Router>

  );
}

export default App;
