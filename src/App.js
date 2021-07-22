import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import Form from "./components/Form/Form";
import Header from "./components/Form/Header/Header";
import Footer from "./components/Form/Footer/Footer";

import Success from "./components/Success/Success";
import Failure from "./components/Failure/Failure";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/failure" exact component={Failure} />
        <Route path="/success" exact component={Success} />
        <Route
          path="/valorant/form"
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
