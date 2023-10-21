import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import {
    faTwitter,
    faGithub,
    faLinkedin,
    faInstagram,
    faKaggle
} from "@fortawesome/free-brands-svg-icons";

import {
    faDownload
} from "@fortawesome/free-solid-svg-icons"

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "resume");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Resume | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="resume" />
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="title contact-title">
                            Download my Resume
                        </div>

                        <div className="subtitle contact-subtitle">

                        </div>
                    </div>
                    <div className="socials-container">
                        <div className="socials">

                            <div className="" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                                <div className="social">
                                    <a
                                        href="/resume-en.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        title="Resume"
                                    >
                                        <div className="social-icon">
                                            <FontAwesomeIcon
                                                icon={faDownload}
                                                className="social-icon"
                                            />
                                        </div>
                                        <div className="social-text">English Resume</div>
                                    </a>
                                </div>

                                <div className="social">
                                    <a
                                        href="/resume-es.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        title="Resume"
                                    >
                                        <div className="social-icon">
                                            <FontAwesomeIcon
                                                icon={faDownload}
                                                className="social-icon"
                                            />
                                        </div>
                                        <div className="social-text">Spanish Resume</div>
                                    </a>
                                </div>

                            </div>
                        </div>




                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};

export default Resume;
