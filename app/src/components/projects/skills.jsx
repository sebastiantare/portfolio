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
                    I use tools like <strong>Python</strong>, <strong>Pandas</strong>, <strong>PySpark</strong> and <strong>Jupyter Notebook</strong> to analyze large datasets, identifying trends, patterns, and valuable insights to gain a deeper understanding of the data.
                </div>
            </div>
            <div className="skills-project">
                <img src="/model.svg" alt="Model" className="skills-svg" />
                <div className="skills-title">Model</div>
                <div className="skills-description">
                    For building predictive models on the analyzed data I use <strong>Scikit-learn</strong>, <strong>PyTorch</strong>, <strong>XGBoost</strong> and <strong>ARIMA</strong>.
                </div>
            </div>
            <div className="skills-project">
                <img src="/interpret.svg" alt="Interpret" className="skills-svg" />
                <div className="skills-title">Interpret</div>
                <div className="skills-description">
                    Interpreting models and results is a difficult task that can lead to bad decision making, I use <strong>A/B Testing</strong> for experiments, and for model interpretation: <strong>SHAP</strong>, <strong>LIME</strong> and <strong>ELI5</strong> 
                </div>
            </div>
            <div className="skills-project">
                <img src="/visualize.svg" alt="Visualize" className="skills-svg" />
                <div className="skills-title">Visualize</div>
                <div className="skills-description">
                    To communicate the results to different levels within an organization I mainly use <strong>Tableau</strong>. 
                </div>
            </div>
        </div>

    );
};

export default Skills;
