import React from "react";
import { hot } from 'react-hot-loader/root';

import "./index.{{CSS_EXTENSION}}";

const App = () => (
  <div className="{{CONTAINER}}">
    <div>Name: {{ NAME }}</div>
    <div>Framework: {{ FRAMEWORK }}</div>
    <div>Language: {{ LANGUAGE }}</div>
    <div>CSS: {{ CSS }}</div>
  </div>
);

export default hot(App);
