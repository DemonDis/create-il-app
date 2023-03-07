import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const rootElement = document.getElementById("app");
// const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );