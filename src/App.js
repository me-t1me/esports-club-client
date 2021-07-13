import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="main-div">
        <Header />
        <Switch>
          <Route path="/" exact component={Form} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
