import "./App.css";
import { Welcome } from "./components/Welcome";
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
        <Welcome />
        <Switch>
          <Categories />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
