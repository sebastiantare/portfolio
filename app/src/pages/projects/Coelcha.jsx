import React, { useEffect, useRef } from 'react';
import tableau from 'tableau-api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Coelcha = () => {
    const vizUrl = 'https://public.tableau.com/views/CmoelvientoylalluviaafectaelserviciodesuministroelctricodelaprovinciadeubleConcepcinyBo-Bo_/Sheet1?:language=es-ES&:display_count=n&:origin=viz_share_link';
    const containerRef = useRef(null);

    useEffect(() => {
        const checkIfVizExists = (viz) => {
            const allVizs = window.tableau.VizManager.getVizs();
            console.log(allVizs)
            return allVizs.includes(viz);
        };

        const initViz = () => {
            // Check if the Viz is already in the manager
            if (!checkIfVizExists(vizUrl)) {
                try {
                    new window.tableau.Viz(containerRef.current, vizUrl);
                } catch (error) {
                    console.log(error)
                }
            }
        };

        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
        script.async = true;

        if (!checkIfVizExists(vizUrl)) {
            script.onload = initViz;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }


    }, [vizUrl]);

    return <React.Fragment>
        <div className="social">
            <a
                href={"https://github.com/sebastiantare/climateimpactelectricanalysis"}
                target="_blank"
                rel="noreferrer"
            >
                <div className="social-icon">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="social-icon"
                    />
                </div>
                <div className="social-text">Ir al proyecto</div>
            </a>
        </div>

        <div ref={containerRef}></div>

    </React.Fragment>;
};

export default Coelcha;
