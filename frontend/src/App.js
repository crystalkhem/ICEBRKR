import "./App.css";
// import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
// import Header from "./components/Navbar/Header";
import PrivateRoute from "./components/PrivateRoute";
import MatchScreen from "./screens/MatchScreen/MatchScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import EventScreen from "./screens/EventScreen/EventScreen";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>

          <Route exact path="/" component={HomeScreen} />

          <Route path="/matches" component={MatchScreen} />

          <PrivateRoute path="/events" component={EventScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
