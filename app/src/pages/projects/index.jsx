

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";

import SEO from "../../data/seo";

import FruitvegAnalysis from "./FruitvegAnalysis";

const ProjectBase = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Project`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">

					<div className="contact-container">
                        <FruitvegAnalysis/>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const fruitsveg = (<ProjectBase element={FruitvegAnalysis} />)

export {fruitsveg}
