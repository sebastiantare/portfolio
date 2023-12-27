import React, { useEffect } from "react";
import BasicEmbed from "./basicEmbed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPaperPlane
} from "@fortawesome/free-regular-svg-icons";

const ChileanFiresDashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.open("https://incendioschile.online", "_blank");
    }, []);



    return (
        <React.Fragment>
            <div className="social">
                <a
                    href={"https://incendioschile.online"}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">Ir al dashboard</div>
                </a>
            </div>
        </React.Fragment>
    );
};

export default ChileanFiresDashboard;
