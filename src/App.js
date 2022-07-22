import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/:username" component={Auth} exact />
        <PrivateRoute path="/action/:username" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default App;
