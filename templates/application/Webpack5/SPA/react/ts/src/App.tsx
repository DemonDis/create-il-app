import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.{{CSS_EXTENSION}}";

const App = () => (
  <div className="{{CONTAINER}}">
    <div>Name: {{ NAME }}</div>
    <div>Tools build: {{ TOOLSBUILD }}</div>
    <div>Type: {{ TYPEWEB }}</div>
    <div>Framework: {{ FRAMEWORK }}</div>
    <div>Language: {{ LANGUAGE }}</div>
    <div>CSS: {{ CSS }}</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
