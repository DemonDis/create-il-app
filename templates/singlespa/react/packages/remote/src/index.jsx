import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const Remote = () => {
  return (
    <div className="{{CONTAINER}}">
    <div>REMOTE</div>
    <div>CSS: {{ CSS }}</div>
  </div>
  );
};

const remoteLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Remote
});

export const bootstrap = remoteLifecycles.bootstrap;
export const mount = remoteLifecycles.mount;
export const unmount = remoteLifecycles.unmount;
