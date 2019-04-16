import React from "react";

import { Jumbotron } from "./jumbotron.jsx";
import { NavBar } from "./navbar.jsx";
import { Card } from "./card.jsx";

//create your first component

export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="mx-5 my-5 px-5 py-5">
					<Jumbotron />
					<div className="row">
						<div className="col-sm-3">
							<Card
								content="It is a long established fact that a reader 
							will be distracted by the readable content of a page when 
							looking at its layout."
								url="#"
								label="Find Out More!"
							/>
						</div>
						<div className="col-sm-3">
							<Card
								content="There are many variations of passages of 
							Lorem Ipsum available, but the majority have suffered 
							alteration in some form, "
								url="#"
								label="Find Out More!"
							/>
						</div>
						<div className="col-sm-3">
							<Card
								content="Lorem ipsum dolor sit amet, consectetur 
							adipiscing elit, sed do eiusmod tempor incididunt ut labore 
							et dolore magna aliqua."
								url="#"
								label="Find Out More!"
							/>
						</div>
						<div className="col-sm-3">
							<Card
								content="Sed ut perspiciatis unde omnis iste natus 
							error sit voluptatem accusantium doloremque laudantium, 
							totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
							et quasi architecto beatae vitae dicta sunt explicabo."
								url="#"
								label="Find Out More!"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
