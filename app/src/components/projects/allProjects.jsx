import React from "react";

import Project from "./project";

import { projectList } from "../../data/projects";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{projectList.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						title={project.title}
						link={project.path}
						imgsrc={project.imgsrc}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
