import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card">
			<div className="card-body">
				<p className="card-text">{props.content}</p>
				<a href={props.url} className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	content: PropTypes.string,
	url: PropTypes.string,
	label: PropTypes.string
};
