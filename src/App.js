import "./App.css";

import Navbar from "./components/Navbar";
import { Categories } from "./components/Categories";

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Categories />
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
