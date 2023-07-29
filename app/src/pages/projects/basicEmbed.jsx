import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function BasicEmbed(props) {
  const [url] = useState(
    'https://public.tableau.com/app/profile/sebastian.tare/viz/PeraTest/Hoja2'
  );
  const ref = useRef(null);

  const initViz = () => {
    new tableau.Viz(ref.current, url);
  };

  useEffect(initViz, []);

  return (
    <div>
      <h1>{'Test'}</h1>
      <div style={setVizStyle} ref={ref} />
    </div>
  );
}

const setVizStyle = {
  width: "800px",
  height: "700px",
};

export default BasicEmbed;