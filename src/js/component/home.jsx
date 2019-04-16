import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { NavBar } from "./navbar.jsx";
//create your first component

export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
			</div>
		);
	}
}
