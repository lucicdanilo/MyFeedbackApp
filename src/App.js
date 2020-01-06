import React from "react";
import "./App.css";

var categories = ["Projects", "Website", "CV"];

function App() {
  return (
    <div>
      <h1 class="title">Wellcome to my Feedback App</h1>
      <h4 class="subtitle">
        I build this app for learning React, improving my old projects and
        finding ideas for future projects as well!
      </h4>
      <h2>{categories.length}</h2>
    </div>
  );
}

export default App;
