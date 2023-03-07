import React from "react";
import { hot } from 'react-hot-loader/root';
// 
// import "./styles/index.{{CSS_EXTENSION}}";

function App() {
  return (
    <div className="{{CONTAINER}}">
      <div>Name: {{ NAME }}</div>
      <div>Framework: {{ FRAMEWORK }}</div>
      <div>Language: {{ LANGUAGE }}</div>
    </div>
  )
};

export default hot(App);
// export default App;