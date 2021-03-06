import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Website from "./Website";
import CV from "./CV";
import $ from "jquery";

function App() {
  $(window).on("load", function() {
    $(".loader-wrapper")
      .delay(1500)
      .fadeOut("slow");
  });
  return (
    <Router>
      <div>
        <h1 class="title" id="title">
          Wellcome to my Feedback App
        </h1>
        <h4 class="subtitle" id="subtitle">
          I build this app for learning React, improving my old projects and
          finding ideas for future projects as well!
        </h4>
        <div class="categoriesLinks">
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/website"}>Website</Link>
          </li>
          <li>
            <Link to={"/cv"}>CV</Link>
          </li>
        </div>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/website" component={Website} />
          <Route path="/cv" component={CV} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
