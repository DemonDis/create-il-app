import App from "./App.svelte";

import "./styles/index.{{CSS_EXTENSION}}";

const app = new App({
  target: document.getElementById("app"),
});

window.app = app;

export default app;
