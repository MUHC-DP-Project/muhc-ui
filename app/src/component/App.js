import '../css/App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from '../component/Home'

function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Route path="/Home" component={Home} />
    </Router>

  );
}

export default App;
