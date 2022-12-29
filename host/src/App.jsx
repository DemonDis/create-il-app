import React from "react";
import { hot } from 'react-hot-loader/root';

import "./styles/index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);

export default hot(App);
