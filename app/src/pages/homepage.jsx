import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
	faLinkedin,
	faKaggle,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import Skills from "../components/projects/skills";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import { Link } from "react-router-dom";


import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">

					</div>

					<div className="homepage-container">

						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								title="Github"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
									style={{ marginLeft: '8px' }}
								/>
							</a>
							<a
								href={INFO.socials.kaggle}
								target="_blank"
								rel="noreferrer"
								title="Kaggle"
							>
								<FontAwesomeIcon
									icon={faKaggle}
									className="homepage-social-icon"
									style={{ marginLeft: '8px' }}
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
								title="Linkedin"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
									style={{ marginLeft: '8px' }}
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
								title="Email"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
									style={{ marginLeft: '8px' }}
								/>
							</a>
							<a
								href={`/resume-en.pdf`}
								target="_blank"
								rel="noreferrer"
								title="Resume"
							>
								<FontAwesomeIcon
									icon={faUser}
									className="homepage-social-icon"
									style={{ marginLeft: '8px' }}
								/>
							</a>
						</div>

						<div className="homepage-takeaction">
							<Link to="/contact">
								<button className="homepage-take-action-button">
									<div className="description">
										{INFO.homepage.take_action}
									</div>
								</button>
							</Link>
						</div>

						<Skills></Skills>

						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>

						<div className="homepage-projects">
							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="subtitle homepage-subtitle">
										{INFO.homepage.projects}
									</div>
								</div>
							</div>
							<AllProjects />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
