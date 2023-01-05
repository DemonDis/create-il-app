// import { loadRemoteModule } from '@softarc/native-federation';
import React from "react";

import "./styles/index.{{CSS_EXTENSION}}";

export default () => {
	return (
		<div className="{{CONTAINER}}">
			<div>Name: {{ NAME }}</div>
			<div>Tools build: {{ TOOLSBUILD }}</div>
			<div>Type: {{ TYPEWEB }}</div>
			<div>Framework: {{ FRAMEWORK }}</div>
			<div>Language: {{ LANGUAGE }}</div>
			<div>CSS: {{ CSS }}</div>
		</div>
	);
};
