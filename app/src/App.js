import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Resume from "./pages/resume";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import { projectList } from "./data/projects";

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {projectList.map((proj, index) => <Route path={proj.path} element={proj.element} key={index} />)}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
