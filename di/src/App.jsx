import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader/root';

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: di</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

export default hot(App);
