import React from "react";

//include images into your bundle

import { NavBar } from "./navbar.jsx";
import { Card } from "./card.jsx";
//create your first component

export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Card imageUrl="" cardTitle="this is a test" />
			</div>
		);
	}
}
