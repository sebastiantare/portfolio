import React, { useEffect } from "react";
import BasicEmbed from "./basicEmbed";

const Project = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
        <BasicEmbed/>
		</React.Fragment>
	);
};

export default Project;
