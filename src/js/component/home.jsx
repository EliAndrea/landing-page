import React from "react";

import { Jumbotron } from "./jumbotron.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron />
			</div>
		);
	}
}
