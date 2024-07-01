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
        <div className="skills-title" style={{ height: 90 }}>{title}</div>
        <Link to={link} >
          <div className="project-container">
            <img src={imgsrc} placeholder={title} alt={title} width={300} height={300}>
            </img>
          </div>
        </Link>

      </div>
    </React.Fragment>
  );
};

export default Project;
