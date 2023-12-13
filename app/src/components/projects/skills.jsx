import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const Skills = () => {
    return (
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
        </div>

    );
};

export default Skills;
