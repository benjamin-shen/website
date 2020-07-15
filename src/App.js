import React, { Component } from "react";
import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import ContactPage from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import UnderDevelopment from "./components/UnderDevelopment";

class App extends Component {
  componentDidMount() {
    const callback = document.createElement("script");
    callback.innerHTML =
      'function onSubmit(token) {return new Promise(function (resolve, reject) {document.getElementById("contact-form-submit").click();resolve();});}';
    document.body.appendChild(callback);

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    document.body.appendChild(script);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={UnderDevelopment} />
          <Route exact path="/projects" component={UnderDevelopment} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
