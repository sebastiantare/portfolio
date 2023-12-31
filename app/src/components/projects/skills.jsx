import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const DataSkills = () => {
    return(
        <>
          <div className="skills-title-center">Data Techstack</div>
            <div className="skills-container">
                <div className="skills-project">
                    <img src="/analyze.svg" alt="Analyze" className="skills-svg" />
                    <div className="skills-title">Analyze</div>
                    <div className="skills-description">
                        I utilize tools like <strong>Python</strong>, <strong>Pandas</strong>, <strong>PySpark</strong> and <strong>Jupyter Notebook</strong> to analyze large datasets, identifying trends, patterns, and valuable insights to gain a deeper understanding of the data.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/model.svg" alt="Model" className="skills-svg" />
                    <div className="skills-title">Model</div>
                    <div className="skills-description">
                        For building predictive models and get insights on the data I use <strong>Scikit-learn</strong>, <strong>PyTorch</strong>, <strong>XGBoost</strong> and <strong>ARIMA</strong>.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/interpret.svg" alt="Interpret" className="skills-svg" />
                    <div className="skills-title">Interpret</div>
                    <div className="skills-description">
                        Interpreting models and results is a difficult task that can lead to bad decision making, I use <strong>A/B Testing</strong> for experiments, and for model interpretation <strong>SHAP</strong> and <strong>LIME</strong>.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/visualize.svg" alt="Visualize" className="skills-svg" />
                    <div className="skills-title">Visualize</div>
                    <div className="skills-description">
                        To effectively communicate results across organizational levels, I utilize <strong>Tableau</strong>, and <strong>Streamlit</strong> to create clear and visually compelling representations of data insights.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/cloudservice.svg" alt="Visualize" className="skills-svg" />
                    <div className="skills-title">Deploy</div>
                    <div className="skills-description">
                        For efficient deployment of scalable and cost-efficient solutions, I utilize <strong>Azure ML</strong>, and <strong>Kubernetes</strong>.
                    </div>
                </div>
            </div></>
    );
}

const Skills = () => {
    return (
        <>
            <div className="skills-title-center">Techstack</div>
            <div className="skills-container">
                <div className="skills-project">
                    <img src="/header_logo.svg" alt="Front-End" className="skills-svg" />
                    <div className="skills-title">Front-End</div>
                    <div className="skills-description">
                        I mainly utilize <strong>React.js</strong> for developing websites applications and some libraries like Reactstrap, Material UI, etc. For web design I like to use <strong>Figma</strong>.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/python-original.svg" alt="Back-End" className="skills-svg" />
                    <div className="skills-title">Back-End</div>
                    <div className="skills-description">
                        For building the backend I utilize <strong>Python</strong> with <strong>Flask</strong> or <strong>Django</strong> depending on project size for REST API. I can use as well <strong>Node.js</strong> with <strong>Express.js</strong>.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/postgresql-original.svg" alt="Database" className="skills-svg" />
                    <div className="skills-title">Database</div>
                    <div className="skills-description">
                        My favorite DB manager is <strong>PostgreSQL</strong> for working with relational data, But I've also worked with technologies like <strong>PostGIS</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong> and <strong>Redis</strong>.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/docker-original.svg" alt="DevOps" className="skills-svg" />
                    <div className="skills-title">DevOps</div>
                    <div className="skills-description">
                        For delivering services I employ <strong>Git</strong>, <strong>CI/CD</strong>, <strong>Nginx</strong>, <strong>Docker</strong>, <strong>Azure</strong> and <strong>Kubernetes</strong>.
                    </div>
                </div>
                <div className="skills-project">
                    <img src="/android-original.svg" alt="Mobile" className="skills-svg" />
                    <div className="skills-title">Mobile</div>
                    <div className="skills-description">
                        To develop Mobile Apps I use <strong>React Native</strong>, <strong>Android Studio</strong>, <strong>XCode</strong> and <strong>Firebase</strong>.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
