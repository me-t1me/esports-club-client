import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Success from "./components/Success";
import Failure from "./components/Failure";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/failure" exact component={Failure} />
        <Route path="/success" exact component={Success} />
        <Route
          path="/"
          exact
          render={() => (
            <div className="main-div">
              <Header />
              <Form />
              <Footer />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
