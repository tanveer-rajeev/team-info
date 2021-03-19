
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import TeamDetails from "./Component/TeamDetails/TeamDetails";

function App() {
  return (
    <div >
        
      <Router>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route  path="/teamDetails/:id">
             <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
