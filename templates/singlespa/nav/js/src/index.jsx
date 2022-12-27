import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const App = () => {
  return (
    <div className="{{CONTAINER}}">
    <div>Name: {{ NAME }}</div>
    <div>Framework: {{ FRAMEWORK }}</div>
    <div>Language: {{ LANGUAGE }}</div>
    <div>CSS: {{ CSS }}</div>
  </div>
  );
};

const appLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App
});

export const bootstrap = appLifecycles.bootstrap;
export const mount = appLifecycles.mount;
export const unmount = appLifecycles.unmount;
