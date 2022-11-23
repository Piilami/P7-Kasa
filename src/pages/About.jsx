import React from "react";
import Collapse from "../components/Collapse";
import about from "../data/APropos.json";

const About = () => {
  return (
    <div className="content-container">
      <main>
        <div className="Banner-container-about"></div>
        <div className="container-about-menu">
          {about.map((p, id) => (
            <Collapse key={id} title={p.Titre} content={p.Content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
