import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, link, imgsrc } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}  target="_blank" rel="noopener noreferrer" >
					<div className="project-container">
						<img src={imgsrc} placeholder={title}>
						</img>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
