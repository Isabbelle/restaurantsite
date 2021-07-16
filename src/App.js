import "./App.css";
import { Welcome } from "./components/Welcome";
import Navbar from "./components/Navbar";
import { Categories } from "./components/Categories";
import { Details } from "./components/Details";

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
          <Route path="/detailspage/:id" component={Details} />
        </Switch>{" "}
        <Categories />
      </div>
    </Router>
  );
}

export default App;
