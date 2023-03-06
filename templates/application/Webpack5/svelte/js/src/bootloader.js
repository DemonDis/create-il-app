import App from "./App.svelte";

import "./styles/index.{{CSS_EXTENSION}}";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
