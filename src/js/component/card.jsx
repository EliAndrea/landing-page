import React from "react";
import PropTypes from "prop-types";
//create your first component

export const Card = props => {
	return (
		<div className="card">
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.cardTitle}</h5>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	cardTitle: PropTypes.string
};