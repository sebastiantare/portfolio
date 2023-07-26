import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						title={project.title}
						link={project.link}
						imgsrc={project.imgsrc}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
